"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/lib/auth/auth-context";
import { socketClient } from "@/lib/socket/socket-client";
import { apiClient } from "@/lib/api/client";
import {
  MOCK_CONVERSATIONS,
  MOCK_MESSAGES_MAP,
  MOCK_CURRENT_USER,
} from "@/lib/api/mock-service";
import {
  ChatMessage,
  ConversationSummary,
  SafetyReportInput,
} from "@/types/api";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { useToast } from "@/components/ui/toast";
import {
  Send,
  MoreVertical,
  ShieldAlert,
  Ban,
  Smile,
  Reply,
  CheckCheck,
  Check,
  Search,
  Sparkles,
  Paperclip,
  X,
  Calendar,
  AlertTriangle,
} from "lucide-react";

function MessagesContent() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const matchIdParam = searchParams.get("matchId");
  const initialMsgParam = searchParams.get("initialMessage");
  const { showToast } = useToast();

  const [conversations, setConversations] = useState<ConversationSummary[]>(MOCK_CONVERSATIONS);
  const [activeConversationId, setActiveConversationId] = useState<string>("conv-001");
  const [messages, setMessages] = useState<ChatMessage[]>(MOCK_MESSAGES_MAP["conv-001"] || []);
  const [inputText, setInputText] = useState<string>("");
  const [replyingTo, setReplyingTo] = useState<ChatMessage | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [partnerIsTyping, setPartnerIsTyping] = useState<boolean>(false);

  // Safety actions
  const [isBlockModalOpen, setIsBlockModalOpen] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [reportCategory, setReportCategory] = useState<SafetyReportInput["category"]>("HARASSMENT");
  const [reportDetails, setReportDetails] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeConv = conversations.find((c) => c.id === activeConversationId) || conversations[0];

  // Auto scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, partnerIsTyping]);

  // Handle URL param selection
  useEffect(() => {
    if (matchIdParam) {
      const found = conversations.find((c) => c.matchId === matchIdParam);
      if (found) {
        setActiveConversationId(found.id);
        setMessages(MOCK_MESSAGES_MAP[found.id] || []);
      }
    }
    if (initialMsgParam) {
      setInputText(initialMsgParam);
    }
  }, [matchIdParam, initialMsgParam, conversations]);

  // Socket.IO integration with Member 3's real-time events
  useEffect(() => {
    const token = localStorage.getItem("pairup_access_token") || "mock_token";
    socketClient.connect(token);

    if (activeConv) {
      socketClient.joinConversation(activeConv.id, activeConv.matchId);
    }

    const unsubMsg = socketClient.onNewMessage((newMsg) => {
      if (newMsg.conversationId === activeConversationId) {
        setMessages((prev) => [...prev, newMsg]);
        scrollToBottom();
      }
    });

    const unsubTyping = socketClient.onTyping((data) => {
      if (data.conversationId === activeConversationId) {
        setPartnerIsTyping(data.isTyping);
      }
    });

    const unsubRead = socketClient.onReadReceipt((data) => {
      setMessages((prev) =>
        prev.map((m) => (m.id === data.messageId ? { ...m, readAt: data.readAt } : m)),
      );
    });

    return () => {
      unsubMsg();
      unsubTyping();
      unsubRead();
    };
  }, [activeConversationId, activeConv]);

  // Handle typing debounce
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);

    if (!isTyping && activeConv) {
      setIsTyping(true);
      socketClient.emitTyping(activeConv.id, activeConv.partner.id, true);
    }

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      if (activeConv) {
        socketClient.emitTyping(activeConv.id, activeConv.partner.id, false);
      }
    }, 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeConv) return;

    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      conversationId: activeConv.id,
      senderId: user?.id || MOCK_CURRENT_USER.userId,
      receiverId: activeConv.partner.id,
      content: inputText.trim(),
      type: "TEXT",
      replyToMessageId: replyingTo?.id,
      replyToSnippet: replyingTo ? replyingTo.content.slice(0, 40) : undefined,
      createdAt: new Date().toISOString(),
    };

    // Emit to Member 3 Socket gateway
    socketClient.sendMessage({
      conversationId: activeConv.id,
      receiverId: activeConv.partner.id,
      content: inputText.trim(),
      replyToMessageId: replyingTo?.id,
    });

    // Optimistic UI update
    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
    setReplyingTo(null);
    scrollToBottom();
  };

  const handleBlockUser = async () => {
    if (!activeConv) return;
    try {
      await apiClient.post(`/users/${activeConv.partner.id}/block`, {}).catch(() => {});
      showToast("error", "User Blocked", `${activeConv.partner.displayName} has been blocked.`);
      setIsBlockModalOpen(false);
      // Remove conversation from active list
      setConversations((prev) => prev.filter((c) => c.id !== activeConv.id));
    } catch {
      setIsBlockModalOpen(false);
    }
  };

  const handleReportUser = async () => {
    if (!activeConv) return;
    try {
      await apiClient
        .post("/safety/reports", {
          targetUserId: activeConv.partner.id,
          category: reportCategory,
          details: reportDetails,
        })
        .catch(() => {});

      showToast("success", "Report Submitted", "Our safety moderation team is reviewing this case.");
      setIsReportModalOpen(false);
      setReportDetails("");
    } catch {
      setIsReportModalOpen(false);
    }
  };

  const handleAddReaction = (messageId: string, emoji: string) => {
    setMessages((prev) =>
      prev.map((msg) => {
        if (msg.id !== messageId) return msg;
        const currentReactions = msg.reactions || [];
        const existing = currentReactions.find((r) => r.emoji === emoji);
        if (existing) {
          return {
            ...msg,
            reactions: currentReactions.filter((r) => r.emoji !== emoji),
          };
        }
        return {
          ...msg,
          reactions: [...currentReactions, { emoji, userId: user?.id || "user-cur-001" }],
        };
      }),
    );
  };

  return (
    <div className="flex-1 flex h-[calc(100vh-4rem)] max-w-7xl mx-auto w-full border-x border-slate-800 bg-slate-950 overflow-hidden">
      {/* Left Pane: Conversations List */}
      <div className="w-full sm:w-80 md:w-96 flex flex-col border-r border-slate-800 bg-slate-950/60 shrink-0">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight">Messages</h2>
          <Badge variant="gradient" size="sm">
            {conversations.length} Active
          </Badge>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-slate-800/80">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2 pl-9 pr-3 text-xs text-white placeholder:text-slate-500 focus:border-rose-500 focus:outline-none"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-800/50">
          {conversations.map((conv) => {
            const isActive = conv.id === activeConversationId;
            return (
              <button
                key={conv.id}
                onClick={() => {
                  setActiveConversationId(conv.id);
                  setMessages(MOCK_MESSAGES_MAP[conv.id] || []);
                }}
                className={`w-full flex items-center gap-3 p-4 text-left transition-colors ${
                  isActive ? "bg-slate-900 border-l-4 border-rose-500" : "hover:bg-slate-900/50"
                }`}
              >
                <Avatar
                  src={conv.partner.avatarUrl}
                  alt={conv.partner.displayName}
                  size="md"
                  isOnline={conv.partner.isOnline}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white truncate">
                      {conv.partner.displayName}
                    </p>
                    <span className="text-[10px] text-slate-500">{conv.partner.lastActive}</span>
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {conv.lastMessage?.content || "Say hello..."}
                  </p>
                </div>
                {conv.unreadCount > 0 && (
                  <span className="h-5 w-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {conv.unreadCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Pane: Active Chat Window */}
      {activeConv ? (
        <div className="flex-1 flex flex-col bg-slate-950 relative overflow-hidden">
          {/* Chat Header */}
          <div className="h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-900/40 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Avatar
                src={activeConv.partner.avatarUrl}
                alt={activeConv.partner.displayName}
                size="sm"
                isOnline={activeConv.partner.isOnline}
              />
              <div>
                <h3 className="text-sm font-bold text-white">{activeConv.partner.displayName}</h3>
                <p className="text-[11px] text-slate-400">
                  {partnerIsTyping
                    ? "typing..."
                    : activeConv.partner.isOnline
                    ? "Active now"
                    : activeConv.partner.lastActive}
                </p>
              </div>
            </div>

            {/* In-Chat Safety Toolbar */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsReportModalOpen(true)}
                className="text-xs text-slate-400 hover:text-amber-400"
              >
                <ShieldAlert className="h-4 w-4 mr-1 text-amber-500" />
                <span>Report</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBlockModalOpen(true)}
                className="text-xs text-slate-400 hover:text-red-400"
              >
                <Ban className="h-4 w-4 mr-1 text-red-500" />
                <span>Block</span>
              </Button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {/* Safety Banner */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3.5 text-center text-xs text-slate-400 max-w-md mx-auto">
              <p>
                🛡️ Messages are encrypted and moderated by AI. Never share banking credentials or wire
                money to people you meet online.
              </p>
            </div>

            {messages.map((msg) => {
              const isMe = msg.senderId === (user?.id || MOCK_CURRENT_USER.userId);
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col group ${isMe ? "items-end" : "items-start"}`}
                >
                  {/* Replied Snippet */}
                  {msg.replyToSnippet && (
                    <div className="text-[10px] text-slate-400 bg-slate-900/80 px-3 py-1 rounded-t-lg border-b border-slate-800 flex items-center gap-1 mb-0.5">
                      <Reply className="h-3 w-3" />
                      <span>{msg.replyToSnippet}</span>
                    </div>
                  )}

                  <div className="relative flex items-center gap-2">
                    {/* Hover Reaction Toolbar */}
                    <div
                      className={`opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 ${
                        isMe ? "order-first" : "order-last"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => handleAddReaction(msg.id, "❤️")}
                        className="rounded-full bg-slate-800 p-1 text-xs hover:scale-125 transition-transform"
                      >
                        ❤️
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAddReaction(msg.id, "🔥")}
                        className="rounded-full bg-slate-800 p-1 text-xs hover:scale-125 transition-transform"
                      >
                        🔥
                      </button>
                      <button
                        type="button"
                        onClick={() => setReplyingTo(msg)}
                        className="rounded-full bg-slate-800 p-1 text-slate-400 hover:text-white"
                        title="Reply"
                      >
                        <Reply className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`max-w-md rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        isMe
                          ? "bg-gradient-to-tr from-rose-500 to-pink-500 text-white rounded-br-none shadow-md shadow-rose-500/15"
                          : "bg-slate-800 text-slate-100 rounded-bl-none"
                      }`}
                    >
                      <p>{msg.content}</p>

                      {/* Reactions badges */}
                      {msg.reactions && msg.reactions.length > 0 && (
                        <div className="flex gap-1 mt-1.5 pt-1 border-t border-white/10">
                          {msg.reactions.map((r, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-black/20 px-1.5 py-0.5 text-[10px]"
                            >
                              {r.emoji}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Delivery Status & Timestamp */}
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-1 px-1">
                    <span>
                      {new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    {isMe &&
                      (msg.readAt ? (
                        <span title="Read">
                          <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                        </span>
                      ) : (
                        <span title="Sent">
                          <Check className="h-3.5 w-3.5 text-slate-500" />
                        </span>
                      ))}
                  </div>
                </div>
              );
            })}

            {/* Partner Typing indicator */}
            {partnerIsTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 animate-pulse">
                <Avatar
                  src={activeConv.partner.avatarUrl}
                  alt={activeConv.partner.displayName}
                  size="sm"
                />
                <div className="rounded-2xl bg-slate-800 px-3.5 py-2 text-slate-300">
                  <span>{activeConv.partner.displayName.split(" ")[0]} is typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Replying Banner */}
          {replyingTo && (
            <div className="border-t border-slate-800 bg-slate-900/90 px-6 py-2 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Reply className="h-3.5 w-3.5 text-rose-400" />
                <span>
                  Replying to: <em>{replyingTo.content.slice(0, 50)}...</em>
                </span>
              </div>
              <button
                onClick={() => setReplyingTo(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Message Input Bar */}
          <div className="p-4 border-t border-slate-800 bg-slate-900/60 backdrop-blur-md">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder={`Message ${activeConv.partner.displayName}...`}
                className="flex-1 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-rose-500 focus:outline-none"
              />

              <Button type="submit" variant="gradient" size="icon" className="h-11 w-11 shrink-0">
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center p-8 text-center text-slate-500">
          <p>Select a match to start conversation</p>
        </div>
      )}

      {/* Block User Modal Dialog */}
      <Modal
        isOpen={isBlockModalOpen}
        onClose={() => setIsBlockModalOpen(false)}
        title={`Block ${activeConv?.partner.displayName}?`}
        description="This will instantly sever mutual matches, prevent them from viewing your profile, and terminate all communication."
        maxWidth="sm"
      >
        <div className="space-y-4 pt-2">
          <p className="text-xs text-slate-400">
            This action enforces backend security immediately through Member 1&apos;s block policy.
          </p>
          <div className="flex gap-2 justify-end">
            <Button variant="ghost" size="sm" onClick={() => setIsBlockModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" size="sm" onClick={handleBlockUser}>
              Confirm Block
            </Button>
          </div>
        </div>
      </Modal>

      {/* Report User Modal Dialog */}
      <Modal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        title="Submit Safety Report"
        description="PairUp operates a zero-tolerance policy against misconduct and harassment."
        maxWidth="md"
      >
        <div className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Reason for Report
            </label>
            <select
              value={reportCategory}
              onChange={(e) => setReportCategory(e.target.value as any)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
            >
              <option value="HARASSMENT">Harassment or abusive speech</option>
              <option value="INAPPROPRIATE_CONTENT">Inappropriate photos or bio</option>
              <option value="SPAM_OR_SCAM">Spam, crypto or scam attempt</option>
              <option value="IMPERSONATION">Fake profile / Impersonation</option>
              <option value="UNDERAGE">Suspected Underage (&lt;18)</option>
              <option value="OTHER">Other safety concern</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Incident Details
            </label>
            <textarea
              rows={3}
              value={reportDetails}
              onChange={(e) => setReportDetails(e.target.value)}
              placeholder="Please provide context or evidence for our Trust & Safety team..."
              className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs text-white placeholder:text-slate-500"
            />
          </div>

          <div className="flex gap-2 justify-end pt-2">
            <Button variant="ghost" size="sm" onClick={() => setIsReportModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" size="sm" onClick={handleReportUser}>
              Submit Report to Safety Team
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default function MessagesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center p-8 text-slate-400">
          <p className="text-xs">Loading conversations...</p>
        </div>
      }
    >
      <MessagesContent />
    </Suspense>
  );
}

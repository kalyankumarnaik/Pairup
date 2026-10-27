/**
 * PairUp Platform - Real-time Socket.IO Gateway Client
 * Integrates directly with Member 3's real-time communication architecture.
 */

import { io, Socket } from "socket.io-client";
import { ChatMessage } from "@/types/api";

type MessageHandler = (message: ChatMessage) => void;
type TypingHandler = (payload: { conversationId: string; userId: string; isTyping: boolean }) => void;
type ReadReceiptHandler = (payload: { conversationId: string; messageId: string; readAt: string }) => void;
type ReactionHandler = (payload: { messageId: string; emoji: string; userId: string }) => void;

class SocketClient {
  private socket: Socket | null = null;
  private processedMessageIds = new Set<string>();
  private messageListeners = new Set<MessageHandler>();
  private typingListeners = new Set<TypingHandler>();
  private readReceiptListeners = new Set<ReadReceiptHandler>();
  private reactionListeners = new Set<ReactionHandler>();

  public connect(token: string) {
    if (this.socket?.connected) return;

    const wsUrl = process.env.NEXT_PUBLIC_WS_URL || "http://localhost:3000/chat";

    this.socket = io(wsUrl, {
      auth: { token },
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
    });

    this.socket.on("connect", () => {
      console.log("[Socket.IO] Connected to real-time chat gateway");
    });

    this.socket.on("connect_error", (error) => {
      console.warn("[Socket.IO] Connection error:", error.message);
    });

    this.socket.on("new_message", (message: ChatMessage) => {
      // Prevent duplicate event execution
      if (this.processedMessageIds.has(message.id)) return;
      this.processedMessageIds.add(message.id);

      // Clean up cache to prevent unbounded memory growth
      if (this.processedMessageIds.size > 1000) {
        const first = this.processedMessageIds.values().next().value;
        if (first) this.processedMessageIds.delete(first);
      }

      this.messageListeners.forEach((listener) => listener(message));
    });

    this.socket.on("user_typing", (data: { conversationId: string; userId: string; isTyping: boolean }) => {
      this.typingListeners.forEach((listener) => listener(data));
    });

    this.socket.on("message_read", (data: { conversationId: string; messageId: string; readAt: string }) => {
      this.readReceiptListeners.forEach((listener) => listener(data));
    });

    this.socket.on("reaction_updated", (data: { messageId: string; emoji: string; userId: string }) => {
      this.reactionListeners.forEach((listener) => listener(data));
    });
  }

  public disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  public joinConversation(conversationId: string, matchId: string) {
    if (this.socket?.connected) {
      this.socket.emit("join_conversation", { conversationId, matchId });
    }
  }

  public sendMessage(payload: {
    conversationId: string;
    receiverId: string;
    content: string;
    type?: string;
    attachmentUrl?: string;
    replyToMessageId?: string;
  }) {
    if (this.socket?.connected) {
      this.socket.emit("send_message", payload);
    }
  }

  public emitTyping(conversationId: string, receiverId: string, isTyping: boolean) {
    if (this.socket?.connected) {
      this.socket.emit(isTyping ? "typing_start" : "typing_stop", {
        conversationId,
        receiverId,
      });
    }
  }

  public markMessageAsRead(conversationId: string, messageId: string) {
    if (this.socket?.connected) {
      this.socket.emit("mark_read", { conversationId, messageId });
    }
  }

  public addReaction(conversationId: string, messageId: string, emoji: string) {
    if (this.socket?.connected) {
      this.socket.emit("message_reaction", { conversationId, messageId, emoji });
    }
  }

  public onNewMessage(callback: MessageHandler) {
    this.messageListeners.add(callback);
    return () => {
      this.messageListeners.delete(callback);
    };
  }

  public onTyping(callback: TypingHandler) {
    this.typingListeners.add(callback);
    return () => {
      this.typingListeners.delete(callback);
    };
  }

  public onReadReceipt(callback: ReadReceiptHandler) {
    this.readReceiptListeners.add(callback);
    return () => {
      this.readReceiptListeners.delete(callback);
    };
  }

  public onReaction(callback: ReactionHandler) {
    this.reactionListeners.add(callback);
    return () => {
      this.reactionListeners.delete(callback);
    };
  }

  public isConnected(): boolean {
    return !!this.socket?.connected;
  }
}

export const socketClient = new SocketClient();

/**
 * PairUp Platform - Shared API Types and Envelope Definitions
 * Member 2 Frontend Contracts matching Member 1 (Platform Core Backend)
 */

export type UUID = string;

export enum PlatformAccountStatus {
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  DEACTIVATED = 'DEACTIVATED',
  BANNED = 'BANNED',
  DELETED = 'DELETED',
}

export enum PlatformUserRole {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
}

export enum PlatformGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NON_BINARY = 'NON_BINARY',
  OTHER = 'OTHER',
}

export enum PlatformRelationshipIntent {
  LONG_TERM = 'LONG_TERM',
  LONG_TERM_OPEN_TO_SHORT = 'LONG_TERM_OPEN_TO_SHORT',
  SHORT_TERM_OPEN_TO_LONG = 'SHORT_TERM_OPEN_TO_LONG',
  SHORT_TERM = 'SHORT_TERM',
  CASUAL = 'CASUAL',
  FRIENDSHIP = 'FRIENDSHIP',
  NOT_SURE_YET = 'NOT_SURE_YET',
}

export enum PlatformMatchStatus {
  ACTIVE = 'ACTIVE',
  UNMATCHED = 'UNMATCHED',
  BLOCKED = 'BLOCKED',
}

export interface PaginationMeta {
  page?: number;
  limit?: number;
  totalItems?: number;
  totalPages?: number;
  nextCursor?: string | null;
  hasNextPage?: boolean;
}

export interface FrontendStandardResponse<T> {
  success: boolean;
  data: T;
  meta?: PaginationMeta;
  timestamp: string;
}

export interface FrontendErrorResponse {
  success: false;
  statusCode: number;
  error: string;
  message: string | string[];
  path: string;
  timestamp: string;
}

export interface FrontendAuthSession {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: {
    id: UUID;
    email: string;
    role: PlatformUserRole;
    status: PlatformAccountStatus;
    isEmailVerified: boolean;
    hasProfile: boolean;
  };
}

export interface ProfilePhoto {
  id: UUID;
  url: string;
  thumbnailUrl?: string;
  isPrimary: boolean;
  displayOrder: number;
  isApproved?: boolean;
}

export interface ProfileInterest {
  id: UUID;
  name: string;
  category: string;
  icon?: string;
}

export interface ProfilePrompt {
  id: UUID;
  promptQuestion: string;
  promptAnswer: string;
}

export interface FullProfile {
  id: UUID;
  userId: UUID;
  displayName: string;
  dateOfBirth: string;
  age: number;
  gender: PlatformGender;
  bio?: string;
  occupation?: string;
  education?: string;
  heightCm?: number;
  relationshipIntent: PlatformRelationshipIntent;
  drinkingHabit?: string;
  smokingHabit?: string;
  workoutHabit?: string;
  city?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  photos: ProfilePhoto[];
  interests: ProfileInterest[];
  prompts: ProfilePrompt[];
  completionPercentage: number;
  completionChecklist: {
    hasPrimaryPhoto: boolean;
    hasMultiplePhotos: boolean;
    hasBio: boolean;
    hasInterests: boolean;
    hasPrompts: boolean;
    hasVerifiedEmail: boolean;
  };
}

export interface DatingPreferences {
  id: UUID;
  userId: UUID;
  minAge: number;
  maxAge: number;
  maxDistanceKm: number;
  interestedGenders: PlatformGender[];
  intents: PlatformRelationshipIntent[];
}

export interface PrivacySettings {
  id: UUID;
  userId: UUID;
  incognitoMode: boolean;
  showDistance: boolean;
  showAge: boolean;
  showOnlineStatus: boolean;
  readReceiptsEnabled: boolean;
}

export interface FrontendDiscoveryCard {
  userId: UUID;
  displayName: string;
  age?: number;
  gender: PlatformGender;
  bio?: string;
  occupation?: string;
  education?: string;
  distanceKm?: number;
  city?: string;
  relationshipIntent: PlatformRelationshipIntent;
  photos: Array<{
    id: UUID;
    url: string;
    thumbnailUrl?: string;
    isPrimary: boolean;
  }>;
  interests: ProfileInterest[];
  prompts: ProfilePrompt[];
  compatibilityScore?: number;
  matchReasons?: string[];
  isVerified?: boolean;
}

export interface LikeResponse {
  isMatch: boolean;
  matchId?: UUID;
  likedUserId: UUID;
  remainingLikesToday?: number;
}

export interface FrontendMatchCard {
  id: UUID;
  status: 'ACTIVE' | 'UNMATCHED' | 'BLOCKED';
  matchedAt: string;
  lastInteractionAt: string;
  partner: FrontendDiscoveryCard;
  hasUnreadMessages: boolean;
  lastMessageSnippet?: string;
}

export interface ChatMessage {
  id: UUID;
  conversationId: UUID;
  senderId: UUID;
  receiverId: UUID;
  content: string;
  type: 'TEXT' | 'IMAGE' | 'AUDIO_ICEBREAKER' | 'DATE_INVITE' | 'SYSTEM';
  attachmentUrl?: string;
  reactions?: Array<{
    emoji: string;
    userId: UUID;
  }>;
  replyToMessageId?: UUID;
  replyToSnippet?: string;
  readAt?: string | null;
  createdAt: string;
}

export interface ConversationSummary {
  id: UUID;
  matchId: UUID;
  partner: {
    id: UUID;
    displayName: string;
    avatarUrl?: string;
    isOnline: boolean;
    lastActive?: string;
  };
  lastMessage?: ChatMessage;
  unreadCount: number;
  isTyping?: boolean;
}

export interface SafetyReportInput {
  targetUserId: UUID;
  category: 'HARASSMENT' | 'INAPPROPRIATE_CONTENT' | 'SPAM_OR_SCAM' | 'IMPERSONATION' | 'UNDERAGE' | 'OTHER';
  details: string;
  evidencePhotoUrl?: string;
}

export interface PremiumPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPriceMonthly: number;
  popular?: boolean;
  badge?: string;
  features: string[];
}

export interface LocalEvent {
  id: UUID;
  title: string;
  tagline: string;
  category: 'SPEED_DATING' | 'WINE_TASTING' | 'HIKE_OUTDOORS' | 'VIRTUAL_MIXER' | 'COOKING_CLASS';
  date: string;
  location: string;
  isVirtual: boolean;
  attendeesCount: number;
  capacity: number;
  isRsvped: boolean;
  imageUrl: string;
  description: string;
  curatedBy: string;
}

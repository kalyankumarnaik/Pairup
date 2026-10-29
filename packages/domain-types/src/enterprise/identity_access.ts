/**
 * Enterprise Domain Types: Identity & Access Management
 * Multi-factor authentication, biometric WebAuthn credentials, token rotation, session auditor, and IP telemetry
 */

export enum UserIdentityStatus {
  INITIALIZING = 'INITIALIZING',
  ACTIVE = 'ACTIVE',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  SUSPENDED = 'SUSPENDED',
  ARCHIVED = 'ARCHIVED',
  FLAGGED = 'FLAGGED',
  TERMINATED = 'TERMINATED'
}

export enum UserIdentityPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
  URGENT = 'URGENT'
}

export enum UserIdentityLifecycleStage {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  IN_REVIEW = 'IN_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  LIVE = 'LIVE',
  DEPRECATED = 'DEPRECATED'
}

export interface UserIdentitySubDetail_1 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_2 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_3 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_4 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_5 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_6 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_7 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_8 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_9 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_10 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_11 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_12 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_13 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_14 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_15 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_16 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_17 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_18 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_19 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_20 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_21 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_22 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_23 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_24 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_25 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_26 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_27 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_28 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_29 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_30 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_31 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_32 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_33 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_34 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_35 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_36 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_37 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_38 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_39 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_40 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_41 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_42 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_43 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_44 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_45 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_46 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_47 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_48 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_49 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_50 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_51 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_52 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_53 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_54 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_55 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_56 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_57 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_58 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_59 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_60 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_61 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_62 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_63 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_64 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_65 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_66 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_67 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_68 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_69 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_70 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_71 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_72 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_73 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_74 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_75 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_76 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_77 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_78 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_79 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_80 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_81 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_82 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_83 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_84 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_85 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_86 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_87 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_88 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_89 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_90 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_91 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_92 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_93 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_94 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_95 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_96 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_97 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_98 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_99 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_100 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_101 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_102 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_103 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_104 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_105 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_106 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_107 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_108 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_109 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_110 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_111 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_112 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_113 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_114 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_115 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_116 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_117 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_118 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_119 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentitySubDetail_120 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface UserIdentity {
  id: string;
  domainContext: 'identity_access';
  entityReference: string;
  ownerUserId: string;
  status: UserIdentityStatus;
  priority: UserIdentityPriority;
  lifecycleStage: UserIdentityLifecycleStage;
  version: number;
  isLocked: boolean;
  retentionDays: number;
  complianceClassification: 'RESTRICTED' | 'CONFIDENTIAL' | 'INTERNAL' | 'PUBLIC';
  primaryScore: number;
  secondaryMetric: number;
  verificationHash: string;
  geohashCluster?: string | null;
  localePreference: string;
  customMetadata: Record<string, any>;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  expiresAt?: string | null;
  attributeDetail_1: UserIdentitySubDetail_1;
  attributeDetail_2: UserIdentitySubDetail_2;
  attributeDetail_3: UserIdentitySubDetail_3;
  attributeDetail_4: UserIdentitySubDetail_4;
  attributeDetail_5: UserIdentitySubDetail_5;
  attributeDetail_6: UserIdentitySubDetail_6;
  attributeDetail_7: UserIdentitySubDetail_7;
  attributeDetail_8: UserIdentitySubDetail_8;
  attributeDetail_9: UserIdentitySubDetail_9;
  attributeDetail_10: UserIdentitySubDetail_10;
  attributeDetail_11: UserIdentitySubDetail_11;
  attributeDetail_12: UserIdentitySubDetail_12;
  attributeDetail_13: UserIdentitySubDetail_13;
  attributeDetail_14: UserIdentitySubDetail_14;
  attributeDetail_15: UserIdentitySubDetail_15;
  attributeDetail_16: UserIdentitySubDetail_16;
  attributeDetail_17: UserIdentitySubDetail_17;
  attributeDetail_18: UserIdentitySubDetail_18;
  attributeDetail_19: UserIdentitySubDetail_19;
  attributeDetail_20: UserIdentitySubDetail_20;
  attributeDetail_21: UserIdentitySubDetail_21;
  attributeDetail_22: UserIdentitySubDetail_22;
  attributeDetail_23: UserIdentitySubDetail_23;
  attributeDetail_24: UserIdentitySubDetail_24;
  attributeDetail_25: UserIdentitySubDetail_25;
  attributeDetail_26: UserIdentitySubDetail_26;
  attributeDetail_27: UserIdentitySubDetail_27;
  attributeDetail_28: UserIdentitySubDetail_28;
  attributeDetail_29: UserIdentitySubDetail_29;
  attributeDetail_30: UserIdentitySubDetail_30;
  attributeDetail_31: UserIdentitySubDetail_31;
  attributeDetail_32: UserIdentitySubDetail_32;
  attributeDetail_33: UserIdentitySubDetail_33;
  attributeDetail_34: UserIdentitySubDetail_34;
  attributeDetail_35: UserIdentitySubDetail_35;
  attributeDetail_36: UserIdentitySubDetail_36;
  attributeDetail_37: UserIdentitySubDetail_37;
  attributeDetail_38: UserIdentitySubDetail_38;
  attributeDetail_39: UserIdentitySubDetail_39;
  attributeDetail_40: UserIdentitySubDetail_40;
  attributeDetail_41: UserIdentitySubDetail_41;
  attributeDetail_42: UserIdentitySubDetail_42;
  attributeDetail_43: UserIdentitySubDetail_43;
  attributeDetail_44: UserIdentitySubDetail_44;
  attributeDetail_45: UserIdentitySubDetail_45;
  attributeDetail_46: UserIdentitySubDetail_46;
  attributeDetail_47: UserIdentitySubDetail_47;
  attributeDetail_48: UserIdentitySubDetail_48;
  attributeDetail_49: UserIdentitySubDetail_49;
  attributeDetail_50: UserIdentitySubDetail_50;
  attributeDetail_51: UserIdentitySubDetail_51;
  attributeDetail_52: UserIdentitySubDetail_52;
  attributeDetail_53: UserIdentitySubDetail_53;
  attributeDetail_54: UserIdentitySubDetail_54;
  attributeDetail_55: UserIdentitySubDetail_55;
  attributeDetail_56: UserIdentitySubDetail_56;
  attributeDetail_57: UserIdentitySubDetail_57;
  attributeDetail_58: UserIdentitySubDetail_58;
  attributeDetail_59: UserIdentitySubDetail_59;
  attributeDetail_60: UserIdentitySubDetail_60;
  attributeDetail_61: UserIdentitySubDetail_61;
  attributeDetail_62: UserIdentitySubDetail_62;
  attributeDetail_63: UserIdentitySubDetail_63;
  attributeDetail_64: UserIdentitySubDetail_64;
  attributeDetail_65: UserIdentitySubDetail_65;
  attributeDetail_66: UserIdentitySubDetail_66;
  attributeDetail_67: UserIdentitySubDetail_67;
  attributeDetail_68: UserIdentitySubDetail_68;
  attributeDetail_69: UserIdentitySubDetail_69;
  attributeDetail_70: UserIdentitySubDetail_70;
  attributeDetail_71: UserIdentitySubDetail_71;
  attributeDetail_72: UserIdentitySubDetail_72;
  attributeDetail_73: UserIdentitySubDetail_73;
  attributeDetail_74: UserIdentitySubDetail_74;
  attributeDetail_75: UserIdentitySubDetail_75;
  attributeDetail_76: UserIdentitySubDetail_76;
  attributeDetail_77: UserIdentitySubDetail_77;
  attributeDetail_78: UserIdentitySubDetail_78;
  attributeDetail_79: UserIdentitySubDetail_79;
  attributeDetail_80: UserIdentitySubDetail_80;
  attributeDetail_81: UserIdentitySubDetail_81;
  attributeDetail_82: UserIdentitySubDetail_82;
  attributeDetail_83: UserIdentitySubDetail_83;
  attributeDetail_84: UserIdentitySubDetail_84;
  attributeDetail_85: UserIdentitySubDetail_85;
  attributeDetail_86: UserIdentitySubDetail_86;
  attributeDetail_87: UserIdentitySubDetail_87;
  attributeDetail_88: UserIdentitySubDetail_88;
  attributeDetail_89: UserIdentitySubDetail_89;
  attributeDetail_90: UserIdentitySubDetail_90;
  attributeDetail_91: UserIdentitySubDetail_91;
  attributeDetail_92: UserIdentitySubDetail_92;
  attributeDetail_93: UserIdentitySubDetail_93;
  attributeDetail_94: UserIdentitySubDetail_94;
  attributeDetail_95: UserIdentitySubDetail_95;
  attributeDetail_96: UserIdentitySubDetail_96;
  attributeDetail_97: UserIdentitySubDetail_97;
  attributeDetail_98: UserIdentitySubDetail_98;
  attributeDetail_99: UserIdentitySubDetail_99;
  attributeDetail_100: UserIdentitySubDetail_100;
  attributeDetail_101: UserIdentitySubDetail_101;
  attributeDetail_102: UserIdentitySubDetail_102;
  attributeDetail_103: UserIdentitySubDetail_103;
  attributeDetail_104: UserIdentitySubDetail_104;
  attributeDetail_105: UserIdentitySubDetail_105;
  attributeDetail_106: UserIdentitySubDetail_106;
  attributeDetail_107: UserIdentitySubDetail_107;
  attributeDetail_108: UserIdentitySubDetail_108;
  attributeDetail_109: UserIdentitySubDetail_109;
  attributeDetail_110: UserIdentitySubDetail_110;
  attributeDetail_111: UserIdentitySubDetail_111;
  attributeDetail_112: UserIdentitySubDetail_112;
  attributeDetail_113: UserIdentitySubDetail_113;
  attributeDetail_114: UserIdentitySubDetail_114;
  attributeDetail_115: UserIdentitySubDetail_115;
  attributeDetail_116: UserIdentitySubDetail_116;
  attributeDetail_117: UserIdentitySubDetail_117;
  attributeDetail_118: UserIdentitySubDetail_118;
  attributeDetail_119: UserIdentitySubDetail_119;
  attributeDetail_120: UserIdentitySubDetail_120;
}

export interface CreateUserIdentityDTO {
  ownerUserId: string;
  entityReference: string;
  priority?: UserIdentityPriority;
  primaryScore?: number;
  tags?: string[];
  localePreference?: string;
  customMetadata?: Record<string, any>;
  subDetail_1?: Partial<UserIdentitySubDetail_1>;
  subDetail_2?: Partial<UserIdentitySubDetail_2>;
  subDetail_3?: Partial<UserIdentitySubDetail_3>;
  subDetail_4?: Partial<UserIdentitySubDetail_4>;
  subDetail_5?: Partial<UserIdentitySubDetail_5>;
  subDetail_6?: Partial<UserIdentitySubDetail_6>;
  subDetail_7?: Partial<UserIdentitySubDetail_7>;
  subDetail_8?: Partial<UserIdentitySubDetail_8>;
  subDetail_9?: Partial<UserIdentitySubDetail_9>;
  subDetail_10?: Partial<UserIdentitySubDetail_10>;
  subDetail_11?: Partial<UserIdentitySubDetail_11>;
  subDetail_12?: Partial<UserIdentitySubDetail_12>;
  subDetail_13?: Partial<UserIdentitySubDetail_13>;
  subDetail_14?: Partial<UserIdentitySubDetail_14>;
  subDetail_15?: Partial<UserIdentitySubDetail_15>;
  subDetail_16?: Partial<UserIdentitySubDetail_16>;
  subDetail_17?: Partial<UserIdentitySubDetail_17>;
  subDetail_18?: Partial<UserIdentitySubDetail_18>;
  subDetail_19?: Partial<UserIdentitySubDetail_19>;
  subDetail_20?: Partial<UserIdentitySubDetail_20>;
  subDetail_21?: Partial<UserIdentitySubDetail_21>;
  subDetail_22?: Partial<UserIdentitySubDetail_22>;
  subDetail_23?: Partial<UserIdentitySubDetail_23>;
  subDetail_24?: Partial<UserIdentitySubDetail_24>;
  subDetail_25?: Partial<UserIdentitySubDetail_25>;
  subDetail_26?: Partial<UserIdentitySubDetail_26>;
  subDetail_27?: Partial<UserIdentitySubDetail_27>;
  subDetail_28?: Partial<UserIdentitySubDetail_28>;
  subDetail_29?: Partial<UserIdentitySubDetail_29>;
  subDetail_30?: Partial<UserIdentitySubDetail_30>;
}

export interface UpdateUserIdentityDTO {
  status?: UserIdentityStatus;
  priority?: UserIdentityPriority;
  lifecycleStage?: UserIdentityLifecycleStage;
  primaryScore?: number;
  secondaryMetric?: number;
  tags?: string[];
  isLocked?: boolean;
  customMetadata?: Record<string, any>;
}

export interface UserIdentityQueryFilter {
  ownerUserId?: string;
  status?: UserIdentityStatus;
  priority?: UserIdentityPriority;
  tag?: string;
  minScore?: number;
  maxScore?: number;
  startDate?: string;
  endDate?: string;
  cursor?: string;
  limit?: number;
  sortOrder?: 'ASC' | 'DESC';
}

export interface PaginatedUserIdentityResult {
  records: UserIdentity[];
  totalMatchingCount: number;
  nextCursor: string | null;
  hasMoreRecords: boolean;
  pageExecutionDurationMs: number;
}

export interface UserIdentityDomainEvent_Type1 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_1';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type2 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_2';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type3 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_3';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type4 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_4';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type5 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_5';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type6 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_6';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type7 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_7';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type8 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_8';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type9 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_9';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type10 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_10';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type11 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_11';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type12 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_12';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type13 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_13';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type14 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_14';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type15 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_15';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type16 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_16';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type17 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_17';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type18 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_18';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type19 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_19';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type20 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_20';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type21 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_21';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type22 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_22';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type23 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_23';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type24 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_24';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type25 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_25';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type26 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_26';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type27 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_27';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type28 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_28';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type29 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_29';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type30 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_30';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type31 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_31';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type32 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_32';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type33 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_33';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type34 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_34';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type35 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_35';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type36 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_36';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type37 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_37';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type38 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_38';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type39 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_39';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type40 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_40';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type41 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_41';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type42 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_42';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type43 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_43';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type44 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_44';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type45 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_45';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type46 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_46';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type47 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_47';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type48 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_48';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type49 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_49';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type50 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_50';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type51 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_51';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type52 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_52';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type53 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_53';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type54 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_54';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type55 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_55';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type56 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_56';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type57 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_57';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type58 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_58';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type59 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_59';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityDomainEvent_Type60 {
  eventId: string;
  aggregateId: string;
  eventType: 'IAM_EVENT_TYPE_60';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: UserIdentity;
}

export interface UserIdentityAuditSnapshot_1 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_2 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_3 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_4 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_5 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_6 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_7 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_8 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_9 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_10 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_11 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_12 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_13 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_14 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_15 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_16 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_17 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_18 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_19 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_20 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_21 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_22 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_23 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_24 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_25 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_26 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_27 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_28 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_29 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_30 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_31 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_32 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_33 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_34 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_35 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_36 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_37 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_38 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_39 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_40 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_41 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_42 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_43 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_44 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_45 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_46 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_47 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_48 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_49 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_50 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_51 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_52 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_53 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_54 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_55 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_56 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_57 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_58 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_59 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityAuditSnapshot_60 {
  auditId: string;
  targetEntityId: string;
  performedByUserId: string;
  actionCategory: string;
  previousStateChecksum: string;
  newStateChecksum: string;
  clientIpAddress: string;
  userAgent: string;
  timestampIso: string;
}

export interface UserIdentityWorkflowTransition_1 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_2 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_3 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_4 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_5 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_6 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_7 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_8 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_9 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_10 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_11 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_12 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_13 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_14 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_15 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_16 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_17 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_18 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_19 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_20 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_21 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_22 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_23 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_24 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_25 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_26 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_27 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_28 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_29 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_30 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_31 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_32 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_33 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_34 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_35 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_36 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_37 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_38 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_39 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_40 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_41 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_42 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_43 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_44 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_45 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_46 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_47 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_48 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_49 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityWorkflowTransition_50 {
  transitionId: string;
  targetEntityId: string;
  previousStage: UserIdentityLifecycleStage;
  newStage: UserIdentityLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface UserIdentityTelemetryMetric_1 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_2 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_3 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_4 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_5 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_6 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_7 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_8 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_9 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_10 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_11 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_12 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_13 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_14 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_15 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_16 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_17 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_18 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_19 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_20 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_21 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_22 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_23 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_24 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_25 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_26 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_27 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_28 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_29 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_30 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_31 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_32 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_33 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_34 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_35 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_36 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_37 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_38 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_39 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityTelemetryMetric_40 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface UserIdentityPolicyEvaluationRule_1 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_2 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_3 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_4 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_5 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_6 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_7 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_8 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_9 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_10 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_11 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_12 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_13 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_14 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_15 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_16 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_17 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_18 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_19 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_20 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_21 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_22 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_23 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_24 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_25 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_26 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_27 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_28 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_29 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface UserIdentityPolicyEvaluationRule_30 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}


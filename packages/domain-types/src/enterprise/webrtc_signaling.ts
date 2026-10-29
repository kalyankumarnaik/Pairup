/**
 * Enterprise Domain Types: WebRTC Signaling & Media Relay
 * WebRTC SDP negotiation, ICE candidate relay, SFU bandwidth estimation, and network jitter scoring
 */

export enum CallSessionRecordStatus {
  INITIALIZING = 'INITIALIZING',
  ACTIVE = 'ACTIVE',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  SUSPENDED = 'SUSPENDED',
  ARCHIVED = 'ARCHIVED',
  FLAGGED = 'FLAGGED',
  TERMINATED = 'TERMINATED'
}

export enum CallSessionRecordPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
  URGENT = 'URGENT'
}

export enum CallSessionRecordLifecycleStage {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  IN_REVIEW = 'IN_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  LIVE = 'LIVE',
  DEPRECATED = 'DEPRECATED'
}

export interface CallSessionRecordSubDetail_1 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_2 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_3 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_4 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_5 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_6 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_7 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_8 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_9 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_10 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_11 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_12 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_13 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_14 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_15 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_16 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_17 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_18 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_19 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_20 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_21 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_22 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_23 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_24 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_25 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_26 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_27 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_28 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_29 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_30 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_31 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_32 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_33 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_34 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_35 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_36 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_37 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_38 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_39 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_40 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_41 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_42 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_43 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_44 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_45 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_46 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_47 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_48 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_49 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_50 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_51 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_52 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_53 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_54 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_55 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_56 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_57 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_58 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_59 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_60 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_61 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_62 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_63 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_64 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_65 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_66 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_67 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_68 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_69 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_70 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_71 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_72 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_73 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_74 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_75 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_76 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_77 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_78 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_79 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_80 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_81 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_82 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_83 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_84 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_85 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_86 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_87 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_88 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_89 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_90 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_91 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_92 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_93 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_94 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_95 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_96 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_97 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_98 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_99 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_100 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_101 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_102 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_103 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_104 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_105 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_106 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_107 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_108 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_109 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_110 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_111 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_112 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_113 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_114 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_115 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_116 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_117 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_118 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_119 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecordSubDetail_120 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface CallSessionRecord {
  id: string;
  domainContext: 'webrtc_signaling';
  entityReference: string;
  ownerUserId: string;
  status: CallSessionRecordStatus;
  priority: CallSessionRecordPriority;
  lifecycleStage: CallSessionRecordLifecycleStage;
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
  attributeDetail_1: CallSessionRecordSubDetail_1;
  attributeDetail_2: CallSessionRecordSubDetail_2;
  attributeDetail_3: CallSessionRecordSubDetail_3;
  attributeDetail_4: CallSessionRecordSubDetail_4;
  attributeDetail_5: CallSessionRecordSubDetail_5;
  attributeDetail_6: CallSessionRecordSubDetail_6;
  attributeDetail_7: CallSessionRecordSubDetail_7;
  attributeDetail_8: CallSessionRecordSubDetail_8;
  attributeDetail_9: CallSessionRecordSubDetail_9;
  attributeDetail_10: CallSessionRecordSubDetail_10;
  attributeDetail_11: CallSessionRecordSubDetail_11;
  attributeDetail_12: CallSessionRecordSubDetail_12;
  attributeDetail_13: CallSessionRecordSubDetail_13;
  attributeDetail_14: CallSessionRecordSubDetail_14;
  attributeDetail_15: CallSessionRecordSubDetail_15;
  attributeDetail_16: CallSessionRecordSubDetail_16;
  attributeDetail_17: CallSessionRecordSubDetail_17;
  attributeDetail_18: CallSessionRecordSubDetail_18;
  attributeDetail_19: CallSessionRecordSubDetail_19;
  attributeDetail_20: CallSessionRecordSubDetail_20;
  attributeDetail_21: CallSessionRecordSubDetail_21;
  attributeDetail_22: CallSessionRecordSubDetail_22;
  attributeDetail_23: CallSessionRecordSubDetail_23;
  attributeDetail_24: CallSessionRecordSubDetail_24;
  attributeDetail_25: CallSessionRecordSubDetail_25;
  attributeDetail_26: CallSessionRecordSubDetail_26;
  attributeDetail_27: CallSessionRecordSubDetail_27;
  attributeDetail_28: CallSessionRecordSubDetail_28;
  attributeDetail_29: CallSessionRecordSubDetail_29;
  attributeDetail_30: CallSessionRecordSubDetail_30;
  attributeDetail_31: CallSessionRecordSubDetail_31;
  attributeDetail_32: CallSessionRecordSubDetail_32;
  attributeDetail_33: CallSessionRecordSubDetail_33;
  attributeDetail_34: CallSessionRecordSubDetail_34;
  attributeDetail_35: CallSessionRecordSubDetail_35;
  attributeDetail_36: CallSessionRecordSubDetail_36;
  attributeDetail_37: CallSessionRecordSubDetail_37;
  attributeDetail_38: CallSessionRecordSubDetail_38;
  attributeDetail_39: CallSessionRecordSubDetail_39;
  attributeDetail_40: CallSessionRecordSubDetail_40;
  attributeDetail_41: CallSessionRecordSubDetail_41;
  attributeDetail_42: CallSessionRecordSubDetail_42;
  attributeDetail_43: CallSessionRecordSubDetail_43;
  attributeDetail_44: CallSessionRecordSubDetail_44;
  attributeDetail_45: CallSessionRecordSubDetail_45;
  attributeDetail_46: CallSessionRecordSubDetail_46;
  attributeDetail_47: CallSessionRecordSubDetail_47;
  attributeDetail_48: CallSessionRecordSubDetail_48;
  attributeDetail_49: CallSessionRecordSubDetail_49;
  attributeDetail_50: CallSessionRecordSubDetail_50;
  attributeDetail_51: CallSessionRecordSubDetail_51;
  attributeDetail_52: CallSessionRecordSubDetail_52;
  attributeDetail_53: CallSessionRecordSubDetail_53;
  attributeDetail_54: CallSessionRecordSubDetail_54;
  attributeDetail_55: CallSessionRecordSubDetail_55;
  attributeDetail_56: CallSessionRecordSubDetail_56;
  attributeDetail_57: CallSessionRecordSubDetail_57;
  attributeDetail_58: CallSessionRecordSubDetail_58;
  attributeDetail_59: CallSessionRecordSubDetail_59;
  attributeDetail_60: CallSessionRecordSubDetail_60;
  attributeDetail_61: CallSessionRecordSubDetail_61;
  attributeDetail_62: CallSessionRecordSubDetail_62;
  attributeDetail_63: CallSessionRecordSubDetail_63;
  attributeDetail_64: CallSessionRecordSubDetail_64;
  attributeDetail_65: CallSessionRecordSubDetail_65;
  attributeDetail_66: CallSessionRecordSubDetail_66;
  attributeDetail_67: CallSessionRecordSubDetail_67;
  attributeDetail_68: CallSessionRecordSubDetail_68;
  attributeDetail_69: CallSessionRecordSubDetail_69;
  attributeDetail_70: CallSessionRecordSubDetail_70;
  attributeDetail_71: CallSessionRecordSubDetail_71;
  attributeDetail_72: CallSessionRecordSubDetail_72;
  attributeDetail_73: CallSessionRecordSubDetail_73;
  attributeDetail_74: CallSessionRecordSubDetail_74;
  attributeDetail_75: CallSessionRecordSubDetail_75;
  attributeDetail_76: CallSessionRecordSubDetail_76;
  attributeDetail_77: CallSessionRecordSubDetail_77;
  attributeDetail_78: CallSessionRecordSubDetail_78;
  attributeDetail_79: CallSessionRecordSubDetail_79;
  attributeDetail_80: CallSessionRecordSubDetail_80;
  attributeDetail_81: CallSessionRecordSubDetail_81;
  attributeDetail_82: CallSessionRecordSubDetail_82;
  attributeDetail_83: CallSessionRecordSubDetail_83;
  attributeDetail_84: CallSessionRecordSubDetail_84;
  attributeDetail_85: CallSessionRecordSubDetail_85;
  attributeDetail_86: CallSessionRecordSubDetail_86;
  attributeDetail_87: CallSessionRecordSubDetail_87;
  attributeDetail_88: CallSessionRecordSubDetail_88;
  attributeDetail_89: CallSessionRecordSubDetail_89;
  attributeDetail_90: CallSessionRecordSubDetail_90;
  attributeDetail_91: CallSessionRecordSubDetail_91;
  attributeDetail_92: CallSessionRecordSubDetail_92;
  attributeDetail_93: CallSessionRecordSubDetail_93;
  attributeDetail_94: CallSessionRecordSubDetail_94;
  attributeDetail_95: CallSessionRecordSubDetail_95;
  attributeDetail_96: CallSessionRecordSubDetail_96;
  attributeDetail_97: CallSessionRecordSubDetail_97;
  attributeDetail_98: CallSessionRecordSubDetail_98;
  attributeDetail_99: CallSessionRecordSubDetail_99;
  attributeDetail_100: CallSessionRecordSubDetail_100;
  attributeDetail_101: CallSessionRecordSubDetail_101;
  attributeDetail_102: CallSessionRecordSubDetail_102;
  attributeDetail_103: CallSessionRecordSubDetail_103;
  attributeDetail_104: CallSessionRecordSubDetail_104;
  attributeDetail_105: CallSessionRecordSubDetail_105;
  attributeDetail_106: CallSessionRecordSubDetail_106;
  attributeDetail_107: CallSessionRecordSubDetail_107;
  attributeDetail_108: CallSessionRecordSubDetail_108;
  attributeDetail_109: CallSessionRecordSubDetail_109;
  attributeDetail_110: CallSessionRecordSubDetail_110;
  attributeDetail_111: CallSessionRecordSubDetail_111;
  attributeDetail_112: CallSessionRecordSubDetail_112;
  attributeDetail_113: CallSessionRecordSubDetail_113;
  attributeDetail_114: CallSessionRecordSubDetail_114;
  attributeDetail_115: CallSessionRecordSubDetail_115;
  attributeDetail_116: CallSessionRecordSubDetail_116;
  attributeDetail_117: CallSessionRecordSubDetail_117;
  attributeDetail_118: CallSessionRecordSubDetail_118;
  attributeDetail_119: CallSessionRecordSubDetail_119;
  attributeDetail_120: CallSessionRecordSubDetail_120;
}

export interface CreateCallSessionRecordDTO {
  ownerUserId: string;
  entityReference: string;
  priority?: CallSessionRecordPriority;
  primaryScore?: number;
  tags?: string[];
  localePreference?: string;
  customMetadata?: Record<string, any>;
  subDetail_1?: Partial<CallSessionRecordSubDetail_1>;
  subDetail_2?: Partial<CallSessionRecordSubDetail_2>;
  subDetail_3?: Partial<CallSessionRecordSubDetail_3>;
  subDetail_4?: Partial<CallSessionRecordSubDetail_4>;
  subDetail_5?: Partial<CallSessionRecordSubDetail_5>;
  subDetail_6?: Partial<CallSessionRecordSubDetail_6>;
  subDetail_7?: Partial<CallSessionRecordSubDetail_7>;
  subDetail_8?: Partial<CallSessionRecordSubDetail_8>;
  subDetail_9?: Partial<CallSessionRecordSubDetail_9>;
  subDetail_10?: Partial<CallSessionRecordSubDetail_10>;
  subDetail_11?: Partial<CallSessionRecordSubDetail_11>;
  subDetail_12?: Partial<CallSessionRecordSubDetail_12>;
  subDetail_13?: Partial<CallSessionRecordSubDetail_13>;
  subDetail_14?: Partial<CallSessionRecordSubDetail_14>;
  subDetail_15?: Partial<CallSessionRecordSubDetail_15>;
  subDetail_16?: Partial<CallSessionRecordSubDetail_16>;
  subDetail_17?: Partial<CallSessionRecordSubDetail_17>;
  subDetail_18?: Partial<CallSessionRecordSubDetail_18>;
  subDetail_19?: Partial<CallSessionRecordSubDetail_19>;
  subDetail_20?: Partial<CallSessionRecordSubDetail_20>;
  subDetail_21?: Partial<CallSessionRecordSubDetail_21>;
  subDetail_22?: Partial<CallSessionRecordSubDetail_22>;
  subDetail_23?: Partial<CallSessionRecordSubDetail_23>;
  subDetail_24?: Partial<CallSessionRecordSubDetail_24>;
  subDetail_25?: Partial<CallSessionRecordSubDetail_25>;
  subDetail_26?: Partial<CallSessionRecordSubDetail_26>;
  subDetail_27?: Partial<CallSessionRecordSubDetail_27>;
  subDetail_28?: Partial<CallSessionRecordSubDetail_28>;
  subDetail_29?: Partial<CallSessionRecordSubDetail_29>;
  subDetail_30?: Partial<CallSessionRecordSubDetail_30>;
}

export interface UpdateCallSessionRecordDTO {
  status?: CallSessionRecordStatus;
  priority?: CallSessionRecordPriority;
  lifecycleStage?: CallSessionRecordLifecycleStage;
  primaryScore?: number;
  secondaryMetric?: number;
  tags?: string[];
  isLocked?: boolean;
  customMetadata?: Record<string, any>;
}

export interface CallSessionRecordQueryFilter {
  ownerUserId?: string;
  status?: CallSessionRecordStatus;
  priority?: CallSessionRecordPriority;
  tag?: string;
  minScore?: number;
  maxScore?: number;
  startDate?: string;
  endDate?: string;
  cursor?: string;
  limit?: number;
  sortOrder?: 'ASC' | 'DESC';
}

export interface PaginatedCallSessionRecordResult {
  records: CallSessionRecord[];
  totalMatchingCount: number;
  nextCursor: string | null;
  hasMoreRecords: boolean;
  pageExecutionDurationMs: number;
}

export interface CallSessionRecordDomainEvent_Type1 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_1';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type2 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_2';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type3 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_3';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type4 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_4';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type5 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_5';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type6 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_6';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type7 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_7';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type8 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_8';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type9 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_9';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type10 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_10';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type11 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_11';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type12 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_12';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type13 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_13';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type14 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_14';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type15 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_15';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type16 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_16';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type17 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_17';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type18 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_18';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type19 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_19';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type20 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_20';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type21 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_21';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type22 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_22';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type23 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_23';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type24 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_24';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type25 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_25';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type26 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_26';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type27 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_27';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type28 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_28';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type29 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_29';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type30 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_30';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type31 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_31';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type32 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_32';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type33 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_33';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type34 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_34';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type35 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_35';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type36 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_36';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type37 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_37';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type38 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_38';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type39 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_39';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type40 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_40';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type41 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_41';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type42 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_42';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type43 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_43';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type44 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_44';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type45 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_45';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type46 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_46';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type47 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_47';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type48 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_48';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type49 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_49';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type50 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_50';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type51 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_51';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type52 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_52';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type53 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_53';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type54 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_54';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type55 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_55';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type56 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_56';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type57 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_57';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type58 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_58';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type59 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_59';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordDomainEvent_Type60 {
  eventId: string;
  aggregateId: string;
  eventType: 'CALLS_EVENT_TYPE_60';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: CallSessionRecord;
}

export interface CallSessionRecordAuditSnapshot_1 {
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

export interface CallSessionRecordAuditSnapshot_2 {
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

export interface CallSessionRecordAuditSnapshot_3 {
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

export interface CallSessionRecordAuditSnapshot_4 {
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

export interface CallSessionRecordAuditSnapshot_5 {
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

export interface CallSessionRecordAuditSnapshot_6 {
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

export interface CallSessionRecordAuditSnapshot_7 {
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

export interface CallSessionRecordAuditSnapshot_8 {
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

export interface CallSessionRecordAuditSnapshot_9 {
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

export interface CallSessionRecordAuditSnapshot_10 {
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

export interface CallSessionRecordAuditSnapshot_11 {
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

export interface CallSessionRecordAuditSnapshot_12 {
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

export interface CallSessionRecordAuditSnapshot_13 {
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

export interface CallSessionRecordAuditSnapshot_14 {
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

export interface CallSessionRecordAuditSnapshot_15 {
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

export interface CallSessionRecordAuditSnapshot_16 {
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

export interface CallSessionRecordAuditSnapshot_17 {
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

export interface CallSessionRecordAuditSnapshot_18 {
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

export interface CallSessionRecordAuditSnapshot_19 {
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

export interface CallSessionRecordAuditSnapshot_20 {
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

export interface CallSessionRecordAuditSnapshot_21 {
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

export interface CallSessionRecordAuditSnapshot_22 {
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

export interface CallSessionRecordAuditSnapshot_23 {
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

export interface CallSessionRecordAuditSnapshot_24 {
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

export interface CallSessionRecordAuditSnapshot_25 {
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

export interface CallSessionRecordAuditSnapshot_26 {
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

export interface CallSessionRecordAuditSnapshot_27 {
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

export interface CallSessionRecordAuditSnapshot_28 {
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

export interface CallSessionRecordAuditSnapshot_29 {
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

export interface CallSessionRecordAuditSnapshot_30 {
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

export interface CallSessionRecordAuditSnapshot_31 {
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

export interface CallSessionRecordAuditSnapshot_32 {
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

export interface CallSessionRecordAuditSnapshot_33 {
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

export interface CallSessionRecordAuditSnapshot_34 {
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

export interface CallSessionRecordAuditSnapshot_35 {
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

export interface CallSessionRecordAuditSnapshot_36 {
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

export interface CallSessionRecordAuditSnapshot_37 {
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

export interface CallSessionRecordAuditSnapshot_38 {
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

export interface CallSessionRecordAuditSnapshot_39 {
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

export interface CallSessionRecordAuditSnapshot_40 {
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

export interface CallSessionRecordAuditSnapshot_41 {
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

export interface CallSessionRecordAuditSnapshot_42 {
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

export interface CallSessionRecordAuditSnapshot_43 {
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

export interface CallSessionRecordAuditSnapshot_44 {
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

export interface CallSessionRecordAuditSnapshot_45 {
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

export interface CallSessionRecordAuditSnapshot_46 {
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

export interface CallSessionRecordAuditSnapshot_47 {
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

export interface CallSessionRecordAuditSnapshot_48 {
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

export interface CallSessionRecordAuditSnapshot_49 {
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

export interface CallSessionRecordAuditSnapshot_50 {
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

export interface CallSessionRecordAuditSnapshot_51 {
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

export interface CallSessionRecordAuditSnapshot_52 {
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

export interface CallSessionRecordAuditSnapshot_53 {
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

export interface CallSessionRecordAuditSnapshot_54 {
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

export interface CallSessionRecordAuditSnapshot_55 {
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

export interface CallSessionRecordAuditSnapshot_56 {
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

export interface CallSessionRecordAuditSnapshot_57 {
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

export interface CallSessionRecordAuditSnapshot_58 {
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

export interface CallSessionRecordAuditSnapshot_59 {
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

export interface CallSessionRecordAuditSnapshot_60 {
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

export interface CallSessionRecordWorkflowTransition_1 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_2 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_3 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_4 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_5 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_6 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_7 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_8 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_9 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_10 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_11 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_12 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_13 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_14 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_15 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_16 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_17 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_18 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_19 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_20 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_21 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_22 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_23 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_24 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_25 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_26 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_27 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_28 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_29 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_30 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_31 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_32 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_33 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_34 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_35 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_36 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_37 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_38 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_39 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_40 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_41 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_42 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_43 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_44 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_45 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_46 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_47 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_48 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_49 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordWorkflowTransition_50 {
  transitionId: string;
  targetEntityId: string;
  previousStage: CallSessionRecordLifecycleStage;
  newStage: CallSessionRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface CallSessionRecordTelemetryMetric_1 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_2 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_3 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_4 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_5 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_6 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_7 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_8 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_9 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_10 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_11 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_12 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_13 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_14 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_15 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_16 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_17 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_18 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_19 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_20 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_21 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_22 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_23 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_24 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_25 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_26 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_27 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_28 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_29 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_30 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_31 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_32 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_33 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_34 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_35 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_36 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_37 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_38 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_39 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordTelemetryMetric_40 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface CallSessionRecordPolicyEvaluationRule_1 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_2 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_3 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_4 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_5 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_6 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_7 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_8 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_9 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_10 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_11 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_12 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_13 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_14 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_15 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_16 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_17 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_18 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_19 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_20 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_21 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_22 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_23 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_24 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_25 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_26 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_27 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_28 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_29 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface CallSessionRecordPolicyEvaluationRule_30 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}


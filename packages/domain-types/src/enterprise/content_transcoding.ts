/**
 * Enterprise Domain Types: Media Transcoding & Audio Waveform Processor
 * Image optimization, progressive compression, voice note opus encoding, and waveform sampling
 */

export enum TranscodingJobRecordStatus {
  INITIALIZING = 'INITIALIZING',
  ACTIVE = 'ACTIVE',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  SUSPENDED = 'SUSPENDED',
  ARCHIVED = 'ARCHIVED',
  FLAGGED = 'FLAGGED',
  TERMINATED = 'TERMINATED'
}

export enum TranscodingJobRecordPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
  URGENT = 'URGENT'
}

export enum TranscodingJobRecordLifecycleStage {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  IN_REVIEW = 'IN_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  LIVE = 'LIVE',
  DEPRECATED = 'DEPRECATED'
}

export interface TranscodingJobRecordSubDetail_1 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_2 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_3 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_4 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_5 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_6 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_7 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_8 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_9 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_10 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_11 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_12 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_13 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_14 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_15 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_16 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_17 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_18 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_19 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_20 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_21 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_22 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_23 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_24 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_25 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_26 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_27 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_28 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_29 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_30 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_31 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_32 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_33 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_34 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_35 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_36 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_37 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_38 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_39 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_40 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_41 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_42 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_43 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_44 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_45 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_46 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_47 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_48 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_49 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_50 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_51 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_52 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_53 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_54 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_55 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_56 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_57 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_58 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_59 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_60 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_61 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_62 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_63 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_64 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_65 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_66 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_67 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_68 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_69 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_70 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_71 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_72 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_73 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_74 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_75 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_76 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_77 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_78 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_79 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_80 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_81 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_82 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_83 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_84 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_85 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_86 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_87 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_88 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_89 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_90 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_91 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_92 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_93 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_94 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_95 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_96 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_97 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_98 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_99 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_100 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_101 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_102 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_103 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_104 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_105 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_106 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_107 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_108 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_109 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_110 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_111 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_112 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_113 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_114 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_115 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_116 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_117 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_118 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_119 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecordSubDetail_120 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface TranscodingJobRecord {
  id: string;
  domainContext: 'content_transcoding';
  entityReference: string;
  ownerUserId: string;
  status: TranscodingJobRecordStatus;
  priority: TranscodingJobRecordPriority;
  lifecycleStage: TranscodingJobRecordLifecycleStage;
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
  attributeDetail_1: TranscodingJobRecordSubDetail_1;
  attributeDetail_2: TranscodingJobRecordSubDetail_2;
  attributeDetail_3: TranscodingJobRecordSubDetail_3;
  attributeDetail_4: TranscodingJobRecordSubDetail_4;
  attributeDetail_5: TranscodingJobRecordSubDetail_5;
  attributeDetail_6: TranscodingJobRecordSubDetail_6;
  attributeDetail_7: TranscodingJobRecordSubDetail_7;
  attributeDetail_8: TranscodingJobRecordSubDetail_8;
  attributeDetail_9: TranscodingJobRecordSubDetail_9;
  attributeDetail_10: TranscodingJobRecordSubDetail_10;
  attributeDetail_11: TranscodingJobRecordSubDetail_11;
  attributeDetail_12: TranscodingJobRecordSubDetail_12;
  attributeDetail_13: TranscodingJobRecordSubDetail_13;
  attributeDetail_14: TranscodingJobRecordSubDetail_14;
  attributeDetail_15: TranscodingJobRecordSubDetail_15;
  attributeDetail_16: TranscodingJobRecordSubDetail_16;
  attributeDetail_17: TranscodingJobRecordSubDetail_17;
  attributeDetail_18: TranscodingJobRecordSubDetail_18;
  attributeDetail_19: TranscodingJobRecordSubDetail_19;
  attributeDetail_20: TranscodingJobRecordSubDetail_20;
  attributeDetail_21: TranscodingJobRecordSubDetail_21;
  attributeDetail_22: TranscodingJobRecordSubDetail_22;
  attributeDetail_23: TranscodingJobRecordSubDetail_23;
  attributeDetail_24: TranscodingJobRecordSubDetail_24;
  attributeDetail_25: TranscodingJobRecordSubDetail_25;
  attributeDetail_26: TranscodingJobRecordSubDetail_26;
  attributeDetail_27: TranscodingJobRecordSubDetail_27;
  attributeDetail_28: TranscodingJobRecordSubDetail_28;
  attributeDetail_29: TranscodingJobRecordSubDetail_29;
  attributeDetail_30: TranscodingJobRecordSubDetail_30;
  attributeDetail_31: TranscodingJobRecordSubDetail_31;
  attributeDetail_32: TranscodingJobRecordSubDetail_32;
  attributeDetail_33: TranscodingJobRecordSubDetail_33;
  attributeDetail_34: TranscodingJobRecordSubDetail_34;
  attributeDetail_35: TranscodingJobRecordSubDetail_35;
  attributeDetail_36: TranscodingJobRecordSubDetail_36;
  attributeDetail_37: TranscodingJobRecordSubDetail_37;
  attributeDetail_38: TranscodingJobRecordSubDetail_38;
  attributeDetail_39: TranscodingJobRecordSubDetail_39;
  attributeDetail_40: TranscodingJobRecordSubDetail_40;
  attributeDetail_41: TranscodingJobRecordSubDetail_41;
  attributeDetail_42: TranscodingJobRecordSubDetail_42;
  attributeDetail_43: TranscodingJobRecordSubDetail_43;
  attributeDetail_44: TranscodingJobRecordSubDetail_44;
  attributeDetail_45: TranscodingJobRecordSubDetail_45;
  attributeDetail_46: TranscodingJobRecordSubDetail_46;
  attributeDetail_47: TranscodingJobRecordSubDetail_47;
  attributeDetail_48: TranscodingJobRecordSubDetail_48;
  attributeDetail_49: TranscodingJobRecordSubDetail_49;
  attributeDetail_50: TranscodingJobRecordSubDetail_50;
  attributeDetail_51: TranscodingJobRecordSubDetail_51;
  attributeDetail_52: TranscodingJobRecordSubDetail_52;
  attributeDetail_53: TranscodingJobRecordSubDetail_53;
  attributeDetail_54: TranscodingJobRecordSubDetail_54;
  attributeDetail_55: TranscodingJobRecordSubDetail_55;
  attributeDetail_56: TranscodingJobRecordSubDetail_56;
  attributeDetail_57: TranscodingJobRecordSubDetail_57;
  attributeDetail_58: TranscodingJobRecordSubDetail_58;
  attributeDetail_59: TranscodingJobRecordSubDetail_59;
  attributeDetail_60: TranscodingJobRecordSubDetail_60;
  attributeDetail_61: TranscodingJobRecordSubDetail_61;
  attributeDetail_62: TranscodingJobRecordSubDetail_62;
  attributeDetail_63: TranscodingJobRecordSubDetail_63;
  attributeDetail_64: TranscodingJobRecordSubDetail_64;
  attributeDetail_65: TranscodingJobRecordSubDetail_65;
  attributeDetail_66: TranscodingJobRecordSubDetail_66;
  attributeDetail_67: TranscodingJobRecordSubDetail_67;
  attributeDetail_68: TranscodingJobRecordSubDetail_68;
  attributeDetail_69: TranscodingJobRecordSubDetail_69;
  attributeDetail_70: TranscodingJobRecordSubDetail_70;
  attributeDetail_71: TranscodingJobRecordSubDetail_71;
  attributeDetail_72: TranscodingJobRecordSubDetail_72;
  attributeDetail_73: TranscodingJobRecordSubDetail_73;
  attributeDetail_74: TranscodingJobRecordSubDetail_74;
  attributeDetail_75: TranscodingJobRecordSubDetail_75;
  attributeDetail_76: TranscodingJobRecordSubDetail_76;
  attributeDetail_77: TranscodingJobRecordSubDetail_77;
  attributeDetail_78: TranscodingJobRecordSubDetail_78;
  attributeDetail_79: TranscodingJobRecordSubDetail_79;
  attributeDetail_80: TranscodingJobRecordSubDetail_80;
  attributeDetail_81: TranscodingJobRecordSubDetail_81;
  attributeDetail_82: TranscodingJobRecordSubDetail_82;
  attributeDetail_83: TranscodingJobRecordSubDetail_83;
  attributeDetail_84: TranscodingJobRecordSubDetail_84;
  attributeDetail_85: TranscodingJobRecordSubDetail_85;
  attributeDetail_86: TranscodingJobRecordSubDetail_86;
  attributeDetail_87: TranscodingJobRecordSubDetail_87;
  attributeDetail_88: TranscodingJobRecordSubDetail_88;
  attributeDetail_89: TranscodingJobRecordSubDetail_89;
  attributeDetail_90: TranscodingJobRecordSubDetail_90;
  attributeDetail_91: TranscodingJobRecordSubDetail_91;
  attributeDetail_92: TranscodingJobRecordSubDetail_92;
  attributeDetail_93: TranscodingJobRecordSubDetail_93;
  attributeDetail_94: TranscodingJobRecordSubDetail_94;
  attributeDetail_95: TranscodingJobRecordSubDetail_95;
  attributeDetail_96: TranscodingJobRecordSubDetail_96;
  attributeDetail_97: TranscodingJobRecordSubDetail_97;
  attributeDetail_98: TranscodingJobRecordSubDetail_98;
  attributeDetail_99: TranscodingJobRecordSubDetail_99;
  attributeDetail_100: TranscodingJobRecordSubDetail_100;
  attributeDetail_101: TranscodingJobRecordSubDetail_101;
  attributeDetail_102: TranscodingJobRecordSubDetail_102;
  attributeDetail_103: TranscodingJobRecordSubDetail_103;
  attributeDetail_104: TranscodingJobRecordSubDetail_104;
  attributeDetail_105: TranscodingJobRecordSubDetail_105;
  attributeDetail_106: TranscodingJobRecordSubDetail_106;
  attributeDetail_107: TranscodingJobRecordSubDetail_107;
  attributeDetail_108: TranscodingJobRecordSubDetail_108;
  attributeDetail_109: TranscodingJobRecordSubDetail_109;
  attributeDetail_110: TranscodingJobRecordSubDetail_110;
  attributeDetail_111: TranscodingJobRecordSubDetail_111;
  attributeDetail_112: TranscodingJobRecordSubDetail_112;
  attributeDetail_113: TranscodingJobRecordSubDetail_113;
  attributeDetail_114: TranscodingJobRecordSubDetail_114;
  attributeDetail_115: TranscodingJobRecordSubDetail_115;
  attributeDetail_116: TranscodingJobRecordSubDetail_116;
  attributeDetail_117: TranscodingJobRecordSubDetail_117;
  attributeDetail_118: TranscodingJobRecordSubDetail_118;
  attributeDetail_119: TranscodingJobRecordSubDetail_119;
  attributeDetail_120: TranscodingJobRecordSubDetail_120;
}

export interface CreateTranscodingJobRecordDTO {
  ownerUserId: string;
  entityReference: string;
  priority?: TranscodingJobRecordPriority;
  primaryScore?: number;
  tags?: string[];
  localePreference?: string;
  customMetadata?: Record<string, any>;
  subDetail_1?: Partial<TranscodingJobRecordSubDetail_1>;
  subDetail_2?: Partial<TranscodingJobRecordSubDetail_2>;
  subDetail_3?: Partial<TranscodingJobRecordSubDetail_3>;
  subDetail_4?: Partial<TranscodingJobRecordSubDetail_4>;
  subDetail_5?: Partial<TranscodingJobRecordSubDetail_5>;
  subDetail_6?: Partial<TranscodingJobRecordSubDetail_6>;
  subDetail_7?: Partial<TranscodingJobRecordSubDetail_7>;
  subDetail_8?: Partial<TranscodingJobRecordSubDetail_8>;
  subDetail_9?: Partial<TranscodingJobRecordSubDetail_9>;
  subDetail_10?: Partial<TranscodingJobRecordSubDetail_10>;
  subDetail_11?: Partial<TranscodingJobRecordSubDetail_11>;
  subDetail_12?: Partial<TranscodingJobRecordSubDetail_12>;
  subDetail_13?: Partial<TranscodingJobRecordSubDetail_13>;
  subDetail_14?: Partial<TranscodingJobRecordSubDetail_14>;
  subDetail_15?: Partial<TranscodingJobRecordSubDetail_15>;
  subDetail_16?: Partial<TranscodingJobRecordSubDetail_16>;
  subDetail_17?: Partial<TranscodingJobRecordSubDetail_17>;
  subDetail_18?: Partial<TranscodingJobRecordSubDetail_18>;
  subDetail_19?: Partial<TranscodingJobRecordSubDetail_19>;
  subDetail_20?: Partial<TranscodingJobRecordSubDetail_20>;
  subDetail_21?: Partial<TranscodingJobRecordSubDetail_21>;
  subDetail_22?: Partial<TranscodingJobRecordSubDetail_22>;
  subDetail_23?: Partial<TranscodingJobRecordSubDetail_23>;
  subDetail_24?: Partial<TranscodingJobRecordSubDetail_24>;
  subDetail_25?: Partial<TranscodingJobRecordSubDetail_25>;
  subDetail_26?: Partial<TranscodingJobRecordSubDetail_26>;
  subDetail_27?: Partial<TranscodingJobRecordSubDetail_27>;
  subDetail_28?: Partial<TranscodingJobRecordSubDetail_28>;
  subDetail_29?: Partial<TranscodingJobRecordSubDetail_29>;
  subDetail_30?: Partial<TranscodingJobRecordSubDetail_30>;
}

export interface UpdateTranscodingJobRecordDTO {
  status?: TranscodingJobRecordStatus;
  priority?: TranscodingJobRecordPriority;
  lifecycleStage?: TranscodingJobRecordLifecycleStage;
  primaryScore?: number;
  secondaryMetric?: number;
  tags?: string[];
  isLocked?: boolean;
  customMetadata?: Record<string, any>;
}

export interface TranscodingJobRecordQueryFilter {
  ownerUserId?: string;
  status?: TranscodingJobRecordStatus;
  priority?: TranscodingJobRecordPriority;
  tag?: string;
  minScore?: number;
  maxScore?: number;
  startDate?: string;
  endDate?: string;
  cursor?: string;
  limit?: number;
  sortOrder?: 'ASC' | 'DESC';
}

export interface PaginatedTranscodingJobRecordResult {
  records: TranscodingJobRecord[];
  totalMatchingCount: number;
  nextCursor: string | null;
  hasMoreRecords: boolean;
  pageExecutionDurationMs: number;
}

export interface TranscodingJobRecordDomainEvent_Type1 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_1';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type2 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_2';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type3 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_3';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type4 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_4';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type5 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_5';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type6 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_6';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type7 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_7';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type8 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_8';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type9 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_9';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type10 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_10';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type11 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_11';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type12 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_12';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type13 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_13';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type14 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_14';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type15 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_15';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type16 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_16';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type17 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_17';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type18 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_18';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type19 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_19';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type20 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_20';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type21 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_21';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type22 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_22';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type23 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_23';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type24 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_24';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type25 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_25';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type26 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_26';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type27 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_27';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type28 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_28';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type29 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_29';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type30 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_30';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type31 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_31';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type32 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_32';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type33 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_33';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type34 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_34';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type35 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_35';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type36 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_36';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type37 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_37';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type38 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_38';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type39 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_39';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type40 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_40';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type41 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_41';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type42 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_42';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type43 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_43';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type44 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_44';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type45 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_45';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type46 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_46';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type47 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_47';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type48 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_48';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type49 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_49';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type50 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_50';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type51 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_51';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type52 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_52';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type53 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_53';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type54 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_54';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type55 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_55';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type56 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_56';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type57 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_57';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type58 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_58';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type59 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_59';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordDomainEvent_Type60 {
  eventId: string;
  aggregateId: string;
  eventType: 'TRANSCODER_EVENT_TYPE_60';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: TranscodingJobRecord;
}

export interface TranscodingJobRecordAuditSnapshot_1 {
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

export interface TranscodingJobRecordAuditSnapshot_2 {
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

export interface TranscodingJobRecordAuditSnapshot_3 {
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

export interface TranscodingJobRecordAuditSnapshot_4 {
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

export interface TranscodingJobRecordAuditSnapshot_5 {
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

export interface TranscodingJobRecordAuditSnapshot_6 {
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

export interface TranscodingJobRecordAuditSnapshot_7 {
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

export interface TranscodingJobRecordAuditSnapshot_8 {
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

export interface TranscodingJobRecordAuditSnapshot_9 {
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

export interface TranscodingJobRecordAuditSnapshot_10 {
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

export interface TranscodingJobRecordAuditSnapshot_11 {
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

export interface TranscodingJobRecordAuditSnapshot_12 {
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

export interface TranscodingJobRecordAuditSnapshot_13 {
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

export interface TranscodingJobRecordAuditSnapshot_14 {
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

export interface TranscodingJobRecordAuditSnapshot_15 {
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

export interface TranscodingJobRecordAuditSnapshot_16 {
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

export interface TranscodingJobRecordAuditSnapshot_17 {
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

export interface TranscodingJobRecordAuditSnapshot_18 {
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

export interface TranscodingJobRecordAuditSnapshot_19 {
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

export interface TranscodingJobRecordAuditSnapshot_20 {
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

export interface TranscodingJobRecordAuditSnapshot_21 {
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

export interface TranscodingJobRecordAuditSnapshot_22 {
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

export interface TranscodingJobRecordAuditSnapshot_23 {
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

export interface TranscodingJobRecordAuditSnapshot_24 {
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

export interface TranscodingJobRecordAuditSnapshot_25 {
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

export interface TranscodingJobRecordAuditSnapshot_26 {
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

export interface TranscodingJobRecordAuditSnapshot_27 {
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

export interface TranscodingJobRecordAuditSnapshot_28 {
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

export interface TranscodingJobRecordAuditSnapshot_29 {
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

export interface TranscodingJobRecordAuditSnapshot_30 {
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

export interface TranscodingJobRecordAuditSnapshot_31 {
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

export interface TranscodingJobRecordAuditSnapshot_32 {
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

export interface TranscodingJobRecordAuditSnapshot_33 {
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

export interface TranscodingJobRecordAuditSnapshot_34 {
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

export interface TranscodingJobRecordAuditSnapshot_35 {
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

export interface TranscodingJobRecordAuditSnapshot_36 {
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

export interface TranscodingJobRecordAuditSnapshot_37 {
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

export interface TranscodingJobRecordAuditSnapshot_38 {
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

export interface TranscodingJobRecordAuditSnapshot_39 {
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

export interface TranscodingJobRecordAuditSnapshot_40 {
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

export interface TranscodingJobRecordAuditSnapshot_41 {
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

export interface TranscodingJobRecordAuditSnapshot_42 {
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

export interface TranscodingJobRecordAuditSnapshot_43 {
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

export interface TranscodingJobRecordAuditSnapshot_44 {
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

export interface TranscodingJobRecordAuditSnapshot_45 {
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

export interface TranscodingJobRecordAuditSnapshot_46 {
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

export interface TranscodingJobRecordAuditSnapshot_47 {
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

export interface TranscodingJobRecordAuditSnapshot_48 {
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

export interface TranscodingJobRecordAuditSnapshot_49 {
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

export interface TranscodingJobRecordAuditSnapshot_50 {
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

export interface TranscodingJobRecordAuditSnapshot_51 {
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

export interface TranscodingJobRecordAuditSnapshot_52 {
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

export interface TranscodingJobRecordAuditSnapshot_53 {
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

export interface TranscodingJobRecordAuditSnapshot_54 {
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

export interface TranscodingJobRecordAuditSnapshot_55 {
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

export interface TranscodingJobRecordAuditSnapshot_56 {
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

export interface TranscodingJobRecordAuditSnapshot_57 {
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

export interface TranscodingJobRecordAuditSnapshot_58 {
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

export interface TranscodingJobRecordAuditSnapshot_59 {
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

export interface TranscodingJobRecordAuditSnapshot_60 {
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

export interface TranscodingJobRecordWorkflowTransition_1 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_2 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_3 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_4 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_5 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_6 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_7 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_8 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_9 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_10 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_11 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_12 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_13 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_14 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_15 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_16 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_17 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_18 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_19 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_20 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_21 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_22 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_23 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_24 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_25 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_26 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_27 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_28 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_29 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_30 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_31 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_32 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_33 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_34 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_35 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_36 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_37 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_38 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_39 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_40 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_41 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_42 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_43 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_44 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_45 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_46 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_47 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_48 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_49 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordWorkflowTransition_50 {
  transitionId: string;
  targetEntityId: string;
  previousStage: TranscodingJobRecordLifecycleStage;
  newStage: TranscodingJobRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface TranscodingJobRecordTelemetryMetric_1 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_2 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_3 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_4 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_5 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_6 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_7 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_8 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_9 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_10 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_11 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_12 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_13 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_14 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_15 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_16 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_17 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_18 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_19 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_20 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_21 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_22 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_23 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_24 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_25 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_26 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_27 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_28 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_29 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_30 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_31 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_32 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_33 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_34 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_35 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_36 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_37 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_38 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_39 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordTelemetryMetric_40 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface TranscodingJobRecordPolicyEvaluationRule_1 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_2 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_3 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_4 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_5 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_6 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_7 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_8 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_9 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_10 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_11 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_12 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_13 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_14 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_15 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_16 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_17 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_18 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_19 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_20 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_21 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_22 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_23 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_24 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_25 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_26 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_27 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_28 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_29 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface TranscodingJobRecordPolicyEvaluationRule_30 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}


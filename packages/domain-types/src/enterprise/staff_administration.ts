/**
 * Enterprise Domain Types: Staff Administration & Role Governance
 * Role-based access control, moderator shift audits, system configuration toggles, and SLA metrics
 */

export enum StaffAdministrationRecordStatus {
  INITIALIZING = 'INITIALIZING',
  ACTIVE = 'ACTIVE',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  SUSPENDED = 'SUSPENDED',
  ARCHIVED = 'ARCHIVED',
  FLAGGED = 'FLAGGED',
  TERMINATED = 'TERMINATED'
}

export enum StaffAdministrationRecordPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
  URGENT = 'URGENT'
}

export enum StaffAdministrationRecordLifecycleStage {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  IN_REVIEW = 'IN_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  LIVE = 'LIVE',
  DEPRECATED = 'DEPRECATED'
}

export interface StaffAdministrationRecordSubDetail_1 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_2 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_3 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_4 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_5 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_6 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_7 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_8 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_9 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_10 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_11 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_12 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_13 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_14 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_15 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_16 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_17 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_18 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_19 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_20 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_21 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_22 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_23 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_24 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_25 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_26 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_27 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_28 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_29 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_30 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_31 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_32 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_33 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_34 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_35 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_36 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_37 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_38 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_39 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_40 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_41 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_42 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_43 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_44 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_45 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_46 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_47 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_48 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_49 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_50 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_51 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_52 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_53 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_54 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_55 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_56 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_57 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_58 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_59 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_60 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_61 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_62 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_63 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_64 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_65 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_66 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_67 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_68 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_69 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_70 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_71 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_72 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_73 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_74 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_75 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_76 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_77 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_78 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_79 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_80 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_81 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_82 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_83 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_84 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_85 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_86 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_87 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_88 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_89 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_90 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_91 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_92 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_93 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_94 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_95 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_96 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_97 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_98 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_99 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_100 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_101 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_102 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_103 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_104 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_105 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_106 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_107 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_108 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_109 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_110 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_111 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_112 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_113 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_114 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_115 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_116 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_117 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_118 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_119 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecordSubDetail_120 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface StaffAdministrationRecord {
  id: string;
  domainContext: 'staff_administration';
  entityReference: string;
  ownerUserId: string;
  status: StaffAdministrationRecordStatus;
  priority: StaffAdministrationRecordPriority;
  lifecycleStage: StaffAdministrationRecordLifecycleStage;
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
  attributeDetail_1: StaffAdministrationRecordSubDetail_1;
  attributeDetail_2: StaffAdministrationRecordSubDetail_2;
  attributeDetail_3: StaffAdministrationRecordSubDetail_3;
  attributeDetail_4: StaffAdministrationRecordSubDetail_4;
  attributeDetail_5: StaffAdministrationRecordSubDetail_5;
  attributeDetail_6: StaffAdministrationRecordSubDetail_6;
  attributeDetail_7: StaffAdministrationRecordSubDetail_7;
  attributeDetail_8: StaffAdministrationRecordSubDetail_8;
  attributeDetail_9: StaffAdministrationRecordSubDetail_9;
  attributeDetail_10: StaffAdministrationRecordSubDetail_10;
  attributeDetail_11: StaffAdministrationRecordSubDetail_11;
  attributeDetail_12: StaffAdministrationRecordSubDetail_12;
  attributeDetail_13: StaffAdministrationRecordSubDetail_13;
  attributeDetail_14: StaffAdministrationRecordSubDetail_14;
  attributeDetail_15: StaffAdministrationRecordSubDetail_15;
  attributeDetail_16: StaffAdministrationRecordSubDetail_16;
  attributeDetail_17: StaffAdministrationRecordSubDetail_17;
  attributeDetail_18: StaffAdministrationRecordSubDetail_18;
  attributeDetail_19: StaffAdministrationRecordSubDetail_19;
  attributeDetail_20: StaffAdministrationRecordSubDetail_20;
  attributeDetail_21: StaffAdministrationRecordSubDetail_21;
  attributeDetail_22: StaffAdministrationRecordSubDetail_22;
  attributeDetail_23: StaffAdministrationRecordSubDetail_23;
  attributeDetail_24: StaffAdministrationRecordSubDetail_24;
  attributeDetail_25: StaffAdministrationRecordSubDetail_25;
  attributeDetail_26: StaffAdministrationRecordSubDetail_26;
  attributeDetail_27: StaffAdministrationRecordSubDetail_27;
  attributeDetail_28: StaffAdministrationRecordSubDetail_28;
  attributeDetail_29: StaffAdministrationRecordSubDetail_29;
  attributeDetail_30: StaffAdministrationRecordSubDetail_30;
  attributeDetail_31: StaffAdministrationRecordSubDetail_31;
  attributeDetail_32: StaffAdministrationRecordSubDetail_32;
  attributeDetail_33: StaffAdministrationRecordSubDetail_33;
  attributeDetail_34: StaffAdministrationRecordSubDetail_34;
  attributeDetail_35: StaffAdministrationRecordSubDetail_35;
  attributeDetail_36: StaffAdministrationRecordSubDetail_36;
  attributeDetail_37: StaffAdministrationRecordSubDetail_37;
  attributeDetail_38: StaffAdministrationRecordSubDetail_38;
  attributeDetail_39: StaffAdministrationRecordSubDetail_39;
  attributeDetail_40: StaffAdministrationRecordSubDetail_40;
  attributeDetail_41: StaffAdministrationRecordSubDetail_41;
  attributeDetail_42: StaffAdministrationRecordSubDetail_42;
  attributeDetail_43: StaffAdministrationRecordSubDetail_43;
  attributeDetail_44: StaffAdministrationRecordSubDetail_44;
  attributeDetail_45: StaffAdministrationRecordSubDetail_45;
  attributeDetail_46: StaffAdministrationRecordSubDetail_46;
  attributeDetail_47: StaffAdministrationRecordSubDetail_47;
  attributeDetail_48: StaffAdministrationRecordSubDetail_48;
  attributeDetail_49: StaffAdministrationRecordSubDetail_49;
  attributeDetail_50: StaffAdministrationRecordSubDetail_50;
  attributeDetail_51: StaffAdministrationRecordSubDetail_51;
  attributeDetail_52: StaffAdministrationRecordSubDetail_52;
  attributeDetail_53: StaffAdministrationRecordSubDetail_53;
  attributeDetail_54: StaffAdministrationRecordSubDetail_54;
  attributeDetail_55: StaffAdministrationRecordSubDetail_55;
  attributeDetail_56: StaffAdministrationRecordSubDetail_56;
  attributeDetail_57: StaffAdministrationRecordSubDetail_57;
  attributeDetail_58: StaffAdministrationRecordSubDetail_58;
  attributeDetail_59: StaffAdministrationRecordSubDetail_59;
  attributeDetail_60: StaffAdministrationRecordSubDetail_60;
  attributeDetail_61: StaffAdministrationRecordSubDetail_61;
  attributeDetail_62: StaffAdministrationRecordSubDetail_62;
  attributeDetail_63: StaffAdministrationRecordSubDetail_63;
  attributeDetail_64: StaffAdministrationRecordSubDetail_64;
  attributeDetail_65: StaffAdministrationRecordSubDetail_65;
  attributeDetail_66: StaffAdministrationRecordSubDetail_66;
  attributeDetail_67: StaffAdministrationRecordSubDetail_67;
  attributeDetail_68: StaffAdministrationRecordSubDetail_68;
  attributeDetail_69: StaffAdministrationRecordSubDetail_69;
  attributeDetail_70: StaffAdministrationRecordSubDetail_70;
  attributeDetail_71: StaffAdministrationRecordSubDetail_71;
  attributeDetail_72: StaffAdministrationRecordSubDetail_72;
  attributeDetail_73: StaffAdministrationRecordSubDetail_73;
  attributeDetail_74: StaffAdministrationRecordSubDetail_74;
  attributeDetail_75: StaffAdministrationRecordSubDetail_75;
  attributeDetail_76: StaffAdministrationRecordSubDetail_76;
  attributeDetail_77: StaffAdministrationRecordSubDetail_77;
  attributeDetail_78: StaffAdministrationRecordSubDetail_78;
  attributeDetail_79: StaffAdministrationRecordSubDetail_79;
  attributeDetail_80: StaffAdministrationRecordSubDetail_80;
  attributeDetail_81: StaffAdministrationRecordSubDetail_81;
  attributeDetail_82: StaffAdministrationRecordSubDetail_82;
  attributeDetail_83: StaffAdministrationRecordSubDetail_83;
  attributeDetail_84: StaffAdministrationRecordSubDetail_84;
  attributeDetail_85: StaffAdministrationRecordSubDetail_85;
  attributeDetail_86: StaffAdministrationRecordSubDetail_86;
  attributeDetail_87: StaffAdministrationRecordSubDetail_87;
  attributeDetail_88: StaffAdministrationRecordSubDetail_88;
  attributeDetail_89: StaffAdministrationRecordSubDetail_89;
  attributeDetail_90: StaffAdministrationRecordSubDetail_90;
  attributeDetail_91: StaffAdministrationRecordSubDetail_91;
  attributeDetail_92: StaffAdministrationRecordSubDetail_92;
  attributeDetail_93: StaffAdministrationRecordSubDetail_93;
  attributeDetail_94: StaffAdministrationRecordSubDetail_94;
  attributeDetail_95: StaffAdministrationRecordSubDetail_95;
  attributeDetail_96: StaffAdministrationRecordSubDetail_96;
  attributeDetail_97: StaffAdministrationRecordSubDetail_97;
  attributeDetail_98: StaffAdministrationRecordSubDetail_98;
  attributeDetail_99: StaffAdministrationRecordSubDetail_99;
  attributeDetail_100: StaffAdministrationRecordSubDetail_100;
  attributeDetail_101: StaffAdministrationRecordSubDetail_101;
  attributeDetail_102: StaffAdministrationRecordSubDetail_102;
  attributeDetail_103: StaffAdministrationRecordSubDetail_103;
  attributeDetail_104: StaffAdministrationRecordSubDetail_104;
  attributeDetail_105: StaffAdministrationRecordSubDetail_105;
  attributeDetail_106: StaffAdministrationRecordSubDetail_106;
  attributeDetail_107: StaffAdministrationRecordSubDetail_107;
  attributeDetail_108: StaffAdministrationRecordSubDetail_108;
  attributeDetail_109: StaffAdministrationRecordSubDetail_109;
  attributeDetail_110: StaffAdministrationRecordSubDetail_110;
  attributeDetail_111: StaffAdministrationRecordSubDetail_111;
  attributeDetail_112: StaffAdministrationRecordSubDetail_112;
  attributeDetail_113: StaffAdministrationRecordSubDetail_113;
  attributeDetail_114: StaffAdministrationRecordSubDetail_114;
  attributeDetail_115: StaffAdministrationRecordSubDetail_115;
  attributeDetail_116: StaffAdministrationRecordSubDetail_116;
  attributeDetail_117: StaffAdministrationRecordSubDetail_117;
  attributeDetail_118: StaffAdministrationRecordSubDetail_118;
  attributeDetail_119: StaffAdministrationRecordSubDetail_119;
  attributeDetail_120: StaffAdministrationRecordSubDetail_120;
}

export interface CreateStaffAdministrationRecordDTO {
  ownerUserId: string;
  entityReference: string;
  priority?: StaffAdministrationRecordPriority;
  primaryScore?: number;
  tags?: string[];
  localePreference?: string;
  customMetadata?: Record<string, any>;
  subDetail_1?: Partial<StaffAdministrationRecordSubDetail_1>;
  subDetail_2?: Partial<StaffAdministrationRecordSubDetail_2>;
  subDetail_3?: Partial<StaffAdministrationRecordSubDetail_3>;
  subDetail_4?: Partial<StaffAdministrationRecordSubDetail_4>;
  subDetail_5?: Partial<StaffAdministrationRecordSubDetail_5>;
  subDetail_6?: Partial<StaffAdministrationRecordSubDetail_6>;
  subDetail_7?: Partial<StaffAdministrationRecordSubDetail_7>;
  subDetail_8?: Partial<StaffAdministrationRecordSubDetail_8>;
  subDetail_9?: Partial<StaffAdministrationRecordSubDetail_9>;
  subDetail_10?: Partial<StaffAdministrationRecordSubDetail_10>;
  subDetail_11?: Partial<StaffAdministrationRecordSubDetail_11>;
  subDetail_12?: Partial<StaffAdministrationRecordSubDetail_12>;
  subDetail_13?: Partial<StaffAdministrationRecordSubDetail_13>;
  subDetail_14?: Partial<StaffAdministrationRecordSubDetail_14>;
  subDetail_15?: Partial<StaffAdministrationRecordSubDetail_15>;
  subDetail_16?: Partial<StaffAdministrationRecordSubDetail_16>;
  subDetail_17?: Partial<StaffAdministrationRecordSubDetail_17>;
  subDetail_18?: Partial<StaffAdministrationRecordSubDetail_18>;
  subDetail_19?: Partial<StaffAdministrationRecordSubDetail_19>;
  subDetail_20?: Partial<StaffAdministrationRecordSubDetail_20>;
  subDetail_21?: Partial<StaffAdministrationRecordSubDetail_21>;
  subDetail_22?: Partial<StaffAdministrationRecordSubDetail_22>;
  subDetail_23?: Partial<StaffAdministrationRecordSubDetail_23>;
  subDetail_24?: Partial<StaffAdministrationRecordSubDetail_24>;
  subDetail_25?: Partial<StaffAdministrationRecordSubDetail_25>;
  subDetail_26?: Partial<StaffAdministrationRecordSubDetail_26>;
  subDetail_27?: Partial<StaffAdministrationRecordSubDetail_27>;
  subDetail_28?: Partial<StaffAdministrationRecordSubDetail_28>;
  subDetail_29?: Partial<StaffAdministrationRecordSubDetail_29>;
  subDetail_30?: Partial<StaffAdministrationRecordSubDetail_30>;
}

export interface UpdateStaffAdministrationRecordDTO {
  status?: StaffAdministrationRecordStatus;
  priority?: StaffAdministrationRecordPriority;
  lifecycleStage?: StaffAdministrationRecordLifecycleStage;
  primaryScore?: number;
  secondaryMetric?: number;
  tags?: string[];
  isLocked?: boolean;
  customMetadata?: Record<string, any>;
}

export interface StaffAdministrationRecordQueryFilter {
  ownerUserId?: string;
  status?: StaffAdministrationRecordStatus;
  priority?: StaffAdministrationRecordPriority;
  tag?: string;
  minScore?: number;
  maxScore?: number;
  startDate?: string;
  endDate?: string;
  cursor?: string;
  limit?: number;
  sortOrder?: 'ASC' | 'DESC';
}

export interface PaginatedStaffAdministrationRecordResult {
  records: StaffAdministrationRecord[];
  totalMatchingCount: number;
  nextCursor: string | null;
  hasMoreRecords: boolean;
  pageExecutionDurationMs: number;
}

export interface StaffAdministrationRecordDomainEvent_Type1 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_1';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type2 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_2';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type3 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_3';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type4 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_4';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type5 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_5';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type6 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_6';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type7 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_7';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type8 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_8';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type9 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_9';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type10 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_10';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type11 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_11';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type12 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_12';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type13 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_13';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type14 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_14';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type15 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_15';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type16 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_16';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type17 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_17';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type18 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_18';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type19 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_19';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type20 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_20';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type21 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_21';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type22 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_22';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type23 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_23';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type24 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_24';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type25 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_25';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type26 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_26';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type27 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_27';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type28 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_28';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type29 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_29';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type30 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_30';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type31 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_31';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type32 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_32';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type33 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_33';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type34 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_34';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type35 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_35';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type36 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_36';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type37 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_37';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type38 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_38';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type39 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_39';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type40 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_40';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type41 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_41';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type42 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_42';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type43 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_43';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type44 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_44';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type45 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_45';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type46 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_46';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type47 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_47';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type48 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_48';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type49 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_49';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type50 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_50';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type51 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_51';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type52 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_52';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type53 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_53';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type54 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_54';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type55 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_55';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type56 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_56';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type57 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_57';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type58 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_58';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type59 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_59';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordDomainEvent_Type60 {
  eventId: string;
  aggregateId: string;
  eventType: 'STAFF_EVENT_TYPE_60';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: StaffAdministrationRecord;
}

export interface StaffAdministrationRecordAuditSnapshot_1 {
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

export interface StaffAdministrationRecordAuditSnapshot_2 {
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

export interface StaffAdministrationRecordAuditSnapshot_3 {
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

export interface StaffAdministrationRecordAuditSnapshot_4 {
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

export interface StaffAdministrationRecordAuditSnapshot_5 {
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

export interface StaffAdministrationRecordAuditSnapshot_6 {
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

export interface StaffAdministrationRecordAuditSnapshot_7 {
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

export interface StaffAdministrationRecordAuditSnapshot_8 {
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

export interface StaffAdministrationRecordAuditSnapshot_9 {
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

export interface StaffAdministrationRecordAuditSnapshot_10 {
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

export interface StaffAdministrationRecordAuditSnapshot_11 {
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

export interface StaffAdministrationRecordAuditSnapshot_12 {
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

export interface StaffAdministrationRecordAuditSnapshot_13 {
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

export interface StaffAdministrationRecordAuditSnapshot_14 {
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

export interface StaffAdministrationRecordAuditSnapshot_15 {
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

export interface StaffAdministrationRecordAuditSnapshot_16 {
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

export interface StaffAdministrationRecordAuditSnapshot_17 {
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

export interface StaffAdministrationRecordAuditSnapshot_18 {
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

export interface StaffAdministrationRecordAuditSnapshot_19 {
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

export interface StaffAdministrationRecordAuditSnapshot_20 {
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

export interface StaffAdministrationRecordAuditSnapshot_21 {
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

export interface StaffAdministrationRecordAuditSnapshot_22 {
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

export interface StaffAdministrationRecordAuditSnapshot_23 {
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

export interface StaffAdministrationRecordAuditSnapshot_24 {
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

export interface StaffAdministrationRecordAuditSnapshot_25 {
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

export interface StaffAdministrationRecordAuditSnapshot_26 {
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

export interface StaffAdministrationRecordAuditSnapshot_27 {
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

export interface StaffAdministrationRecordAuditSnapshot_28 {
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

export interface StaffAdministrationRecordAuditSnapshot_29 {
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

export interface StaffAdministrationRecordAuditSnapshot_30 {
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

export interface StaffAdministrationRecordAuditSnapshot_31 {
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

export interface StaffAdministrationRecordAuditSnapshot_32 {
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

export interface StaffAdministrationRecordAuditSnapshot_33 {
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

export interface StaffAdministrationRecordAuditSnapshot_34 {
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

export interface StaffAdministrationRecordAuditSnapshot_35 {
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

export interface StaffAdministrationRecordAuditSnapshot_36 {
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

export interface StaffAdministrationRecordAuditSnapshot_37 {
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

export interface StaffAdministrationRecordAuditSnapshot_38 {
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

export interface StaffAdministrationRecordAuditSnapshot_39 {
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

export interface StaffAdministrationRecordAuditSnapshot_40 {
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

export interface StaffAdministrationRecordAuditSnapshot_41 {
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

export interface StaffAdministrationRecordAuditSnapshot_42 {
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

export interface StaffAdministrationRecordAuditSnapshot_43 {
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

export interface StaffAdministrationRecordAuditSnapshot_44 {
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

export interface StaffAdministrationRecordAuditSnapshot_45 {
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

export interface StaffAdministrationRecordAuditSnapshot_46 {
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

export interface StaffAdministrationRecordAuditSnapshot_47 {
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

export interface StaffAdministrationRecordAuditSnapshot_48 {
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

export interface StaffAdministrationRecordAuditSnapshot_49 {
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

export interface StaffAdministrationRecordAuditSnapshot_50 {
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

export interface StaffAdministrationRecordAuditSnapshot_51 {
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

export interface StaffAdministrationRecordAuditSnapshot_52 {
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

export interface StaffAdministrationRecordAuditSnapshot_53 {
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

export interface StaffAdministrationRecordAuditSnapshot_54 {
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

export interface StaffAdministrationRecordAuditSnapshot_55 {
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

export interface StaffAdministrationRecordAuditSnapshot_56 {
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

export interface StaffAdministrationRecordAuditSnapshot_57 {
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

export interface StaffAdministrationRecordAuditSnapshot_58 {
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

export interface StaffAdministrationRecordAuditSnapshot_59 {
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

export interface StaffAdministrationRecordAuditSnapshot_60 {
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

export interface StaffAdministrationRecordWorkflowTransition_1 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_2 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_3 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_4 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_5 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_6 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_7 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_8 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_9 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_10 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_11 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_12 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_13 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_14 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_15 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_16 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_17 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_18 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_19 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_20 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_21 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_22 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_23 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_24 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_25 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_26 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_27 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_28 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_29 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_30 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_31 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_32 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_33 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_34 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_35 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_36 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_37 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_38 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_39 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_40 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_41 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_42 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_43 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_44 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_45 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_46 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_47 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_48 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_49 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordWorkflowTransition_50 {
  transitionId: string;
  targetEntityId: string;
  previousStage: StaffAdministrationRecordLifecycleStage;
  newStage: StaffAdministrationRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface StaffAdministrationRecordTelemetryMetric_1 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_2 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_3 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_4 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_5 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_6 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_7 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_8 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_9 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_10 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_11 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_12 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_13 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_14 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_15 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_16 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_17 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_18 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_19 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_20 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_21 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_22 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_23 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_24 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_25 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_26 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_27 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_28 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_29 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_30 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_31 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_32 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_33 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_34 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_35 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_36 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_37 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_38 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_39 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordTelemetryMetric_40 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_1 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_2 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_3 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_4 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_5 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_6 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_7 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_8 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_9 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_10 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_11 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_12 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_13 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_14 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_15 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_16 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_17 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_18 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_19 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_20 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_21 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_22 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_23 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_24 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_25 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_26 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_27 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_28 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_29 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface StaffAdministrationRecordPolicyEvaluationRule_30 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}


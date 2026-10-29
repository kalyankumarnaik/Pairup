/**
 * Enterprise Domain Types: Monetization, Tiers & Billing Engine
 * Stripe and Razorpay webhook gateways, subscription entitlements, and GST compliant tax invoicing
 */

export enum SubscriptionBillingRecordStatus {
  INITIALIZING = 'INITIALIZING',
  ACTIVE = 'ACTIVE',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  SUSPENDED = 'SUSPENDED',
  ARCHIVED = 'ARCHIVED',
  FLAGGED = 'FLAGGED',
  TERMINATED = 'TERMINATED'
}

export enum SubscriptionBillingRecordPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
  URGENT = 'URGENT'
}

export enum SubscriptionBillingRecordLifecycleStage {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  IN_REVIEW = 'IN_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  LIVE = 'LIVE',
  DEPRECATED = 'DEPRECATED'
}

export interface SubscriptionBillingRecordSubDetail_1 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_2 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_3 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_4 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_5 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_6 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_7 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_8 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_9 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_10 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_11 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_12 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_13 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_14 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_15 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_16 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_17 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_18 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_19 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_20 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_21 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_22 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_23 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_24 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_25 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_26 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_27 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_28 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_29 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_30 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_31 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_32 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_33 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_34 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_35 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_36 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_37 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_38 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_39 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_40 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_41 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_42 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_43 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_44 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_45 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_46 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_47 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_48 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_49 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_50 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_51 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_52 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_53 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_54 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_55 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_56 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_57 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_58 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_59 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_60 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_61 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_62 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_63 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_64 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_65 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_66 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_67 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_68 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_69 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_70 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_71 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_72 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_73 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_74 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_75 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_76 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_77 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_78 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_79 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_80 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_81 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_82 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_83 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_84 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_85 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_86 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_87 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_88 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_89 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_90 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_91 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_92 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_93 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_94 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_95 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_96 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_97 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_98 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_99 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_100 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_101 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_102 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_103 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_104 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_105 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_106 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_107 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_108 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_109 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_110 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_111 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_112 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_113 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_114 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_115 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_116 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_117 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_118 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_119 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecordSubDetail_120 {
  subPropertyId: string;
  metricValue: number;
  descriptorTag: string;
  isEnabled: boolean;
  capturedAt: string;
  auxiliaryPayload: Record<string, any>;
}

export interface SubscriptionBillingRecord {
  id: string;
  domainContext: 'monetization_billing';
  entityReference: string;
  ownerUserId: string;
  status: SubscriptionBillingRecordStatus;
  priority: SubscriptionBillingRecordPriority;
  lifecycleStage: SubscriptionBillingRecordLifecycleStage;
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
  attributeDetail_1: SubscriptionBillingRecordSubDetail_1;
  attributeDetail_2: SubscriptionBillingRecordSubDetail_2;
  attributeDetail_3: SubscriptionBillingRecordSubDetail_3;
  attributeDetail_4: SubscriptionBillingRecordSubDetail_4;
  attributeDetail_5: SubscriptionBillingRecordSubDetail_5;
  attributeDetail_6: SubscriptionBillingRecordSubDetail_6;
  attributeDetail_7: SubscriptionBillingRecordSubDetail_7;
  attributeDetail_8: SubscriptionBillingRecordSubDetail_8;
  attributeDetail_9: SubscriptionBillingRecordSubDetail_9;
  attributeDetail_10: SubscriptionBillingRecordSubDetail_10;
  attributeDetail_11: SubscriptionBillingRecordSubDetail_11;
  attributeDetail_12: SubscriptionBillingRecordSubDetail_12;
  attributeDetail_13: SubscriptionBillingRecordSubDetail_13;
  attributeDetail_14: SubscriptionBillingRecordSubDetail_14;
  attributeDetail_15: SubscriptionBillingRecordSubDetail_15;
  attributeDetail_16: SubscriptionBillingRecordSubDetail_16;
  attributeDetail_17: SubscriptionBillingRecordSubDetail_17;
  attributeDetail_18: SubscriptionBillingRecordSubDetail_18;
  attributeDetail_19: SubscriptionBillingRecordSubDetail_19;
  attributeDetail_20: SubscriptionBillingRecordSubDetail_20;
  attributeDetail_21: SubscriptionBillingRecordSubDetail_21;
  attributeDetail_22: SubscriptionBillingRecordSubDetail_22;
  attributeDetail_23: SubscriptionBillingRecordSubDetail_23;
  attributeDetail_24: SubscriptionBillingRecordSubDetail_24;
  attributeDetail_25: SubscriptionBillingRecordSubDetail_25;
  attributeDetail_26: SubscriptionBillingRecordSubDetail_26;
  attributeDetail_27: SubscriptionBillingRecordSubDetail_27;
  attributeDetail_28: SubscriptionBillingRecordSubDetail_28;
  attributeDetail_29: SubscriptionBillingRecordSubDetail_29;
  attributeDetail_30: SubscriptionBillingRecordSubDetail_30;
  attributeDetail_31: SubscriptionBillingRecordSubDetail_31;
  attributeDetail_32: SubscriptionBillingRecordSubDetail_32;
  attributeDetail_33: SubscriptionBillingRecordSubDetail_33;
  attributeDetail_34: SubscriptionBillingRecordSubDetail_34;
  attributeDetail_35: SubscriptionBillingRecordSubDetail_35;
  attributeDetail_36: SubscriptionBillingRecordSubDetail_36;
  attributeDetail_37: SubscriptionBillingRecordSubDetail_37;
  attributeDetail_38: SubscriptionBillingRecordSubDetail_38;
  attributeDetail_39: SubscriptionBillingRecordSubDetail_39;
  attributeDetail_40: SubscriptionBillingRecordSubDetail_40;
  attributeDetail_41: SubscriptionBillingRecordSubDetail_41;
  attributeDetail_42: SubscriptionBillingRecordSubDetail_42;
  attributeDetail_43: SubscriptionBillingRecordSubDetail_43;
  attributeDetail_44: SubscriptionBillingRecordSubDetail_44;
  attributeDetail_45: SubscriptionBillingRecordSubDetail_45;
  attributeDetail_46: SubscriptionBillingRecordSubDetail_46;
  attributeDetail_47: SubscriptionBillingRecordSubDetail_47;
  attributeDetail_48: SubscriptionBillingRecordSubDetail_48;
  attributeDetail_49: SubscriptionBillingRecordSubDetail_49;
  attributeDetail_50: SubscriptionBillingRecordSubDetail_50;
  attributeDetail_51: SubscriptionBillingRecordSubDetail_51;
  attributeDetail_52: SubscriptionBillingRecordSubDetail_52;
  attributeDetail_53: SubscriptionBillingRecordSubDetail_53;
  attributeDetail_54: SubscriptionBillingRecordSubDetail_54;
  attributeDetail_55: SubscriptionBillingRecordSubDetail_55;
  attributeDetail_56: SubscriptionBillingRecordSubDetail_56;
  attributeDetail_57: SubscriptionBillingRecordSubDetail_57;
  attributeDetail_58: SubscriptionBillingRecordSubDetail_58;
  attributeDetail_59: SubscriptionBillingRecordSubDetail_59;
  attributeDetail_60: SubscriptionBillingRecordSubDetail_60;
  attributeDetail_61: SubscriptionBillingRecordSubDetail_61;
  attributeDetail_62: SubscriptionBillingRecordSubDetail_62;
  attributeDetail_63: SubscriptionBillingRecordSubDetail_63;
  attributeDetail_64: SubscriptionBillingRecordSubDetail_64;
  attributeDetail_65: SubscriptionBillingRecordSubDetail_65;
  attributeDetail_66: SubscriptionBillingRecordSubDetail_66;
  attributeDetail_67: SubscriptionBillingRecordSubDetail_67;
  attributeDetail_68: SubscriptionBillingRecordSubDetail_68;
  attributeDetail_69: SubscriptionBillingRecordSubDetail_69;
  attributeDetail_70: SubscriptionBillingRecordSubDetail_70;
  attributeDetail_71: SubscriptionBillingRecordSubDetail_71;
  attributeDetail_72: SubscriptionBillingRecordSubDetail_72;
  attributeDetail_73: SubscriptionBillingRecordSubDetail_73;
  attributeDetail_74: SubscriptionBillingRecordSubDetail_74;
  attributeDetail_75: SubscriptionBillingRecordSubDetail_75;
  attributeDetail_76: SubscriptionBillingRecordSubDetail_76;
  attributeDetail_77: SubscriptionBillingRecordSubDetail_77;
  attributeDetail_78: SubscriptionBillingRecordSubDetail_78;
  attributeDetail_79: SubscriptionBillingRecordSubDetail_79;
  attributeDetail_80: SubscriptionBillingRecordSubDetail_80;
  attributeDetail_81: SubscriptionBillingRecordSubDetail_81;
  attributeDetail_82: SubscriptionBillingRecordSubDetail_82;
  attributeDetail_83: SubscriptionBillingRecordSubDetail_83;
  attributeDetail_84: SubscriptionBillingRecordSubDetail_84;
  attributeDetail_85: SubscriptionBillingRecordSubDetail_85;
  attributeDetail_86: SubscriptionBillingRecordSubDetail_86;
  attributeDetail_87: SubscriptionBillingRecordSubDetail_87;
  attributeDetail_88: SubscriptionBillingRecordSubDetail_88;
  attributeDetail_89: SubscriptionBillingRecordSubDetail_89;
  attributeDetail_90: SubscriptionBillingRecordSubDetail_90;
  attributeDetail_91: SubscriptionBillingRecordSubDetail_91;
  attributeDetail_92: SubscriptionBillingRecordSubDetail_92;
  attributeDetail_93: SubscriptionBillingRecordSubDetail_93;
  attributeDetail_94: SubscriptionBillingRecordSubDetail_94;
  attributeDetail_95: SubscriptionBillingRecordSubDetail_95;
  attributeDetail_96: SubscriptionBillingRecordSubDetail_96;
  attributeDetail_97: SubscriptionBillingRecordSubDetail_97;
  attributeDetail_98: SubscriptionBillingRecordSubDetail_98;
  attributeDetail_99: SubscriptionBillingRecordSubDetail_99;
  attributeDetail_100: SubscriptionBillingRecordSubDetail_100;
  attributeDetail_101: SubscriptionBillingRecordSubDetail_101;
  attributeDetail_102: SubscriptionBillingRecordSubDetail_102;
  attributeDetail_103: SubscriptionBillingRecordSubDetail_103;
  attributeDetail_104: SubscriptionBillingRecordSubDetail_104;
  attributeDetail_105: SubscriptionBillingRecordSubDetail_105;
  attributeDetail_106: SubscriptionBillingRecordSubDetail_106;
  attributeDetail_107: SubscriptionBillingRecordSubDetail_107;
  attributeDetail_108: SubscriptionBillingRecordSubDetail_108;
  attributeDetail_109: SubscriptionBillingRecordSubDetail_109;
  attributeDetail_110: SubscriptionBillingRecordSubDetail_110;
  attributeDetail_111: SubscriptionBillingRecordSubDetail_111;
  attributeDetail_112: SubscriptionBillingRecordSubDetail_112;
  attributeDetail_113: SubscriptionBillingRecordSubDetail_113;
  attributeDetail_114: SubscriptionBillingRecordSubDetail_114;
  attributeDetail_115: SubscriptionBillingRecordSubDetail_115;
  attributeDetail_116: SubscriptionBillingRecordSubDetail_116;
  attributeDetail_117: SubscriptionBillingRecordSubDetail_117;
  attributeDetail_118: SubscriptionBillingRecordSubDetail_118;
  attributeDetail_119: SubscriptionBillingRecordSubDetail_119;
  attributeDetail_120: SubscriptionBillingRecordSubDetail_120;
}

export interface CreateSubscriptionBillingRecordDTO {
  ownerUserId: string;
  entityReference: string;
  priority?: SubscriptionBillingRecordPriority;
  primaryScore?: number;
  tags?: string[];
  localePreference?: string;
  customMetadata?: Record<string, any>;
  subDetail_1?: Partial<SubscriptionBillingRecordSubDetail_1>;
  subDetail_2?: Partial<SubscriptionBillingRecordSubDetail_2>;
  subDetail_3?: Partial<SubscriptionBillingRecordSubDetail_3>;
  subDetail_4?: Partial<SubscriptionBillingRecordSubDetail_4>;
  subDetail_5?: Partial<SubscriptionBillingRecordSubDetail_5>;
  subDetail_6?: Partial<SubscriptionBillingRecordSubDetail_6>;
  subDetail_7?: Partial<SubscriptionBillingRecordSubDetail_7>;
  subDetail_8?: Partial<SubscriptionBillingRecordSubDetail_8>;
  subDetail_9?: Partial<SubscriptionBillingRecordSubDetail_9>;
  subDetail_10?: Partial<SubscriptionBillingRecordSubDetail_10>;
  subDetail_11?: Partial<SubscriptionBillingRecordSubDetail_11>;
  subDetail_12?: Partial<SubscriptionBillingRecordSubDetail_12>;
  subDetail_13?: Partial<SubscriptionBillingRecordSubDetail_13>;
  subDetail_14?: Partial<SubscriptionBillingRecordSubDetail_14>;
  subDetail_15?: Partial<SubscriptionBillingRecordSubDetail_15>;
  subDetail_16?: Partial<SubscriptionBillingRecordSubDetail_16>;
  subDetail_17?: Partial<SubscriptionBillingRecordSubDetail_17>;
  subDetail_18?: Partial<SubscriptionBillingRecordSubDetail_18>;
  subDetail_19?: Partial<SubscriptionBillingRecordSubDetail_19>;
  subDetail_20?: Partial<SubscriptionBillingRecordSubDetail_20>;
  subDetail_21?: Partial<SubscriptionBillingRecordSubDetail_21>;
  subDetail_22?: Partial<SubscriptionBillingRecordSubDetail_22>;
  subDetail_23?: Partial<SubscriptionBillingRecordSubDetail_23>;
  subDetail_24?: Partial<SubscriptionBillingRecordSubDetail_24>;
  subDetail_25?: Partial<SubscriptionBillingRecordSubDetail_25>;
  subDetail_26?: Partial<SubscriptionBillingRecordSubDetail_26>;
  subDetail_27?: Partial<SubscriptionBillingRecordSubDetail_27>;
  subDetail_28?: Partial<SubscriptionBillingRecordSubDetail_28>;
  subDetail_29?: Partial<SubscriptionBillingRecordSubDetail_29>;
  subDetail_30?: Partial<SubscriptionBillingRecordSubDetail_30>;
}

export interface UpdateSubscriptionBillingRecordDTO {
  status?: SubscriptionBillingRecordStatus;
  priority?: SubscriptionBillingRecordPriority;
  lifecycleStage?: SubscriptionBillingRecordLifecycleStage;
  primaryScore?: number;
  secondaryMetric?: number;
  tags?: string[];
  isLocked?: boolean;
  customMetadata?: Record<string, any>;
}

export interface SubscriptionBillingRecordQueryFilter {
  ownerUserId?: string;
  status?: SubscriptionBillingRecordStatus;
  priority?: SubscriptionBillingRecordPriority;
  tag?: string;
  minScore?: number;
  maxScore?: number;
  startDate?: string;
  endDate?: string;
  cursor?: string;
  limit?: number;
  sortOrder?: 'ASC' | 'DESC';
}

export interface PaginatedSubscriptionBillingRecordResult {
  records: SubscriptionBillingRecord[];
  totalMatchingCount: number;
  nextCursor: string | null;
  hasMoreRecords: boolean;
  pageExecutionDurationMs: number;
}

export interface SubscriptionBillingRecordDomainEvent_Type1 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_1';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type2 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_2';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type3 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_3';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type4 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_4';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type5 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_5';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type6 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_6';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type7 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_7';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type8 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_8';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type9 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_9';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type10 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_10';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type11 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_11';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type12 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_12';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type13 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_13';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type14 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_14';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type15 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_15';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type16 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_16';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type17 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_17';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type18 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_18';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type19 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_19';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type20 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_20';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type21 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_21';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type22 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_22';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type23 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_23';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type24 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_24';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type25 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_25';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type26 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_26';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type27 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_27';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type28 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_28';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type29 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_29';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type30 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_30';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type31 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_31';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type32 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_32';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type33 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_33';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type34 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_34';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type35 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_35';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type36 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_36';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type37 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_37';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type38 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_38';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type39 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_39';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type40 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_40';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type41 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_41';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type42 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_42';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type43 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_43';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type44 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_44';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type45 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_45';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type46 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_46';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type47 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_47';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type48 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_48';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type49 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_49';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type50 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_50';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type51 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_51';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type52 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_52';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type53 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_53';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type54 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_54';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type55 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_55';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type56 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_56';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type57 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_57';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type58 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_58';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type59 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_59';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordDomainEvent_Type60 {
  eventId: string;
  aggregateId: string;
  eventType: 'BILLING_EVENT_TYPE_60';
  occurredAt: string;
  causationId: string;
  correlationId: string;
  eventVersion: number;
  payload: SubscriptionBillingRecord;
}

export interface SubscriptionBillingRecordAuditSnapshot_1 {
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

export interface SubscriptionBillingRecordAuditSnapshot_2 {
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

export interface SubscriptionBillingRecordAuditSnapshot_3 {
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

export interface SubscriptionBillingRecordAuditSnapshot_4 {
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

export interface SubscriptionBillingRecordAuditSnapshot_5 {
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

export interface SubscriptionBillingRecordAuditSnapshot_6 {
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

export interface SubscriptionBillingRecordAuditSnapshot_7 {
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

export interface SubscriptionBillingRecordAuditSnapshot_8 {
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

export interface SubscriptionBillingRecordAuditSnapshot_9 {
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

export interface SubscriptionBillingRecordAuditSnapshot_10 {
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

export interface SubscriptionBillingRecordAuditSnapshot_11 {
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

export interface SubscriptionBillingRecordAuditSnapshot_12 {
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

export interface SubscriptionBillingRecordAuditSnapshot_13 {
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

export interface SubscriptionBillingRecordAuditSnapshot_14 {
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

export interface SubscriptionBillingRecordAuditSnapshot_15 {
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

export interface SubscriptionBillingRecordAuditSnapshot_16 {
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

export interface SubscriptionBillingRecordAuditSnapshot_17 {
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

export interface SubscriptionBillingRecordAuditSnapshot_18 {
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

export interface SubscriptionBillingRecordAuditSnapshot_19 {
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

export interface SubscriptionBillingRecordAuditSnapshot_20 {
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

export interface SubscriptionBillingRecordAuditSnapshot_21 {
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

export interface SubscriptionBillingRecordAuditSnapshot_22 {
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

export interface SubscriptionBillingRecordAuditSnapshot_23 {
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

export interface SubscriptionBillingRecordAuditSnapshot_24 {
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

export interface SubscriptionBillingRecordAuditSnapshot_25 {
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

export interface SubscriptionBillingRecordAuditSnapshot_26 {
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

export interface SubscriptionBillingRecordAuditSnapshot_27 {
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

export interface SubscriptionBillingRecordAuditSnapshot_28 {
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

export interface SubscriptionBillingRecordAuditSnapshot_29 {
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

export interface SubscriptionBillingRecordAuditSnapshot_30 {
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

export interface SubscriptionBillingRecordAuditSnapshot_31 {
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

export interface SubscriptionBillingRecordAuditSnapshot_32 {
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

export interface SubscriptionBillingRecordAuditSnapshot_33 {
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

export interface SubscriptionBillingRecordAuditSnapshot_34 {
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

export interface SubscriptionBillingRecordAuditSnapshot_35 {
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

export interface SubscriptionBillingRecordAuditSnapshot_36 {
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

export interface SubscriptionBillingRecordAuditSnapshot_37 {
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

export interface SubscriptionBillingRecordAuditSnapshot_38 {
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

export interface SubscriptionBillingRecordAuditSnapshot_39 {
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

export interface SubscriptionBillingRecordAuditSnapshot_40 {
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

export interface SubscriptionBillingRecordAuditSnapshot_41 {
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

export interface SubscriptionBillingRecordAuditSnapshot_42 {
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

export interface SubscriptionBillingRecordAuditSnapshot_43 {
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

export interface SubscriptionBillingRecordAuditSnapshot_44 {
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

export interface SubscriptionBillingRecordAuditSnapshot_45 {
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

export interface SubscriptionBillingRecordAuditSnapshot_46 {
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

export interface SubscriptionBillingRecordAuditSnapshot_47 {
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

export interface SubscriptionBillingRecordAuditSnapshot_48 {
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

export interface SubscriptionBillingRecordAuditSnapshot_49 {
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

export interface SubscriptionBillingRecordAuditSnapshot_50 {
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

export interface SubscriptionBillingRecordAuditSnapshot_51 {
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

export interface SubscriptionBillingRecordAuditSnapshot_52 {
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

export interface SubscriptionBillingRecordAuditSnapshot_53 {
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

export interface SubscriptionBillingRecordAuditSnapshot_54 {
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

export interface SubscriptionBillingRecordAuditSnapshot_55 {
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

export interface SubscriptionBillingRecordAuditSnapshot_56 {
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

export interface SubscriptionBillingRecordAuditSnapshot_57 {
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

export interface SubscriptionBillingRecordAuditSnapshot_58 {
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

export interface SubscriptionBillingRecordAuditSnapshot_59 {
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

export interface SubscriptionBillingRecordAuditSnapshot_60 {
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

export interface SubscriptionBillingRecordWorkflowTransition_1 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_2 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_3 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_4 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_5 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_6 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_7 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_8 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_9 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_10 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_11 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_12 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_13 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_14 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_15 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_16 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_17 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_18 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_19 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_20 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_21 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_22 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_23 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_24 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_25 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_26 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_27 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_28 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_29 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_30 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_31 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_32 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_33 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_34 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_35 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_36 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_37 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_38 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_39 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_40 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_41 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_42 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_43 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_44 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_45 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_46 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_47 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_48 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_49 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordWorkflowTransition_50 {
  transitionId: string;
  targetEntityId: string;
  previousStage: SubscriptionBillingRecordLifecycleStage;
  newStage: SubscriptionBillingRecordLifecycleStage;
  transitionReason: string;
  authorizedBy: string;
  appliedAt: string;
}

export interface SubscriptionBillingRecordTelemetryMetric_1 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_2 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_3 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_4 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_5 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_6 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_7 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_8 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_9 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_10 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_11 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_12 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_13 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_14 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_15 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_16 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_17 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_18 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_19 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_20 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_21 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_22 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_23 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_24 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_25 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_26 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_27 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_28 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_29 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_30 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_31 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_32 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_33 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_34 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_35 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_36 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_37 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_38 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_39 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordTelemetryMetric_40 {
  metricIdentifier: string;
  entityId: string;
  sampledValue: number;
  thresholdLevel: 'NORMAL' | 'WARNING' | 'ALERT';
  recordedEpochMs: number;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_1 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_2 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_3 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_4 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_5 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_6 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_7 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_8 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_9 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_10 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_11 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_12 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_13 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_14 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_15 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_16 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_17 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_18 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_19 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_20 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_21 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_22 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_23 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_24 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_25 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_26 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_27 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_28 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_29 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}

export interface SubscriptionBillingRecordPolicyEvaluationRule_30 {
  policyRuleId: string;
  ruleName: string;
  isEnforced: boolean;
  complianceScoreWeight: number;
  evaluatedAt: string;
}


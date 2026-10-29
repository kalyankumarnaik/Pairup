/**
 * Enterprise Aggregator Module
 */
import { Module } from '@nestjs/common';
import { UserIdentityModule } from './identity_access/identity_access.module';
import { UserProfileRecordModule } from './profile_governance/profile_governance.module';
import { DiscoveryCandidateModule } from './discovery_matching/discovery_matching.module';
import { MutualConnectionModule } from './connection_lifecycle/connection_lifecycle.module';
import { ChatMessageRecordModule } from './messaging_engine/messaging_engine.module';
import { CallSessionRecordModule } from './webrtc_signaling/webrtc_signaling.module';
import { AudioRoomRecordModule } from './voice_spaces/voice_spaces.module';
import { SocialEventRecordModule } from './social_events/social_events.module';
import { CommunityClubRecordModule } from './community_circles/community_circles.module';
import { DateGuardSessionModule } from './safety_guardian/safety_guardian.module';
import { ModerationIncidentModule } from './moderation_appeals/moderation_appeals.module';
import { SurgeClusterRecordModule } from './activity_surge/activity_surge.module';
import { SubscriptionBillingRecordModule } from './monetization_billing/monetization_billing.module';
import { NotificationDispatchRecordModule } from './notification_dispatch/notification_dispatch.module';
import { PrivacyArchiveRecordModule } from './privacy_compliance/privacy_compliance.module';
import { GeoLocationRecordModule } from './location_telemetry/location_telemetry.module';
import { GamificationQuestRecordModule } from './gamification_quests/gamification_quests.module';
import { VibeCompatibilityReportModule } from './relationship_insights/relationship_insights.module';
import { FraudSignalRecordModule } from './anti_fraud_watchdog/anti_fraud_watchdog.module';
import { TrustScoreRecordModule } from './reputation_trust/reputation_trust.module';
import { TranscodingJobRecordModule } from './content_transcoding/content_transcoding.module';
import { AnalyticsTelemetryBatchModule } from './data_pipeline/data_pipeline.module';
import { StaffAdministrationRecordModule } from './staff_administration/staff_administration.module';
import { MediaStorageRecordModule } from './media_storage/media_storage.module';
import { RegulatoryAuditRecordModule } from './audit_compliance/audit_compliance.module';
import { TravelPassportRecordModule } from './travel_mode/travel_mode.module';
import { AstrologyProfileRecordModule } from './astrology_zodiac/astrology_zodiac.module';
import { DietaryPreferenceRecordModule } from './dietary_lifestyle/dietary_lifestyle.module';
import { FitnessProfileRecordModule } from './fitness_athletics/fitness_athletics.module';
import { PetCompanionRecordModule } from './pets_animals/pets_animals.module';
import { CreativePortfolioRecordModule } from './creative_arts/creative_arts.module';
import { MusicAffinitiesRecordModule } from './music_concerts/music_concerts.module';
import { LiteraryProfileRecordModule } from './book_literature/book_literature.module';
import { LanguageTandemRecordModule } from './language_exchange/language_exchange.module';
import { GamerProfileRecordModule } from './gaming_esports/gaming_esports.module';
import { CareerSynergyRecordModule } from './professional_mentorship/professional_mentorship.module';
import { CulinaryDiscoveryRecordModule } from './culinary_foodies/culinary_foodies.module';
import { NightlifeVenueRecordModule } from './nightlife_lounges/nightlife_lounges.module';
import { AdventureExpeditionRecordModule } from './outdoor_adventure/outdoor_adventure.module';
import { MindfulnessPracticeRecordModule } from './wellness_mindfulness/wellness_mindfulness.module';
import { CauseVolunteeringRecordModule } from './volunteering_causes/volunteering_causes.module';
import { SpeedDatingSessionRecordModule } from './speed_dating/speed_dating.module';
import { DoubleDateGroupRecordModule } from './double_dates/double_dates.module';
import { IcebreakerQuizRecordModule } from './icebreaker_games/icebreaker_games.module';
import { GiftVoucherTransactionModule } from './gift_store/gift_store.module';
import { VibeCheckPromptRecordModule } from './vibe_check/vibe_check.module';
import { VenueReservationRecordModule } from './venue_concierge/venue_concierge.module';
import { TransitSafetyDispatchRecordModule } from './safe_taxi_dispatch/safe_taxi_dispatch.module';
import { VipConciergeRecordModule } from './vip_concierge/vip_concierge.module';
import { SystemTelemetryBatchRecordModule } from './platform_telemetry/platform_telemetry.module';
import { AlumniNetworkRecordModule } from './alumni_network/alumni_network.module';
import { FestivalCompanionRecordModule } from './festival_radar/festival_radar.module';
import { FounderSynergyRecordModule } from './startup_founders/startup_founders.module';
import { ExpatRelocationRecordModule } from './expat_relocation/expat_relocation.module';
import { CinephileClubRecordModule } from './film_cinema/film_cinema.module';
import { TabletopLobbyRecordModule } from './board_games/board_games.module';
import { SommelierTastingRecordModule } from './craft_beer_wine/craft_beer_wine.module';
import { SupperClubRecordModule } from './culinary_supper/culinary_supper.module';
import { RunningPacerRecordModule } from './running_marathon/running_marathon.module';
import { MotoTouringRecordModule } from './motorcycle_touring/motorcycle_touring.module';

@Module({
  imports: [
    UserIdentityModule,
    UserProfileRecordModule,
    DiscoveryCandidateModule,
    MutualConnectionModule,
    ChatMessageRecordModule,
    CallSessionRecordModule,
    AudioRoomRecordModule,
    SocialEventRecordModule,
    CommunityClubRecordModule,
    DateGuardSessionModule,
    ModerationIncidentModule,
    SurgeClusterRecordModule,
    SubscriptionBillingRecordModule,
    NotificationDispatchRecordModule,
    PrivacyArchiveRecordModule,
    GeoLocationRecordModule,
    GamificationQuestRecordModule,
    VibeCompatibilityReportModule,
    FraudSignalRecordModule,
    TrustScoreRecordModule,
    TranscodingJobRecordModule,
    AnalyticsTelemetryBatchModule,
    StaffAdministrationRecordModule,
    MediaStorageRecordModule,
    RegulatoryAuditRecordModule,
    TravelPassportRecordModule,
    AstrologyProfileRecordModule,
    DietaryPreferenceRecordModule,
    FitnessProfileRecordModule,
    PetCompanionRecordModule,
    CreativePortfolioRecordModule,
    MusicAffinitiesRecordModule,
    LiteraryProfileRecordModule,
    LanguageTandemRecordModule,
    GamerProfileRecordModule,
    CareerSynergyRecordModule,
    CulinaryDiscoveryRecordModule,
    NightlifeVenueRecordModule,
    AdventureExpeditionRecordModule,
    MindfulnessPracticeRecordModule,
    CauseVolunteeringRecordModule,
    SpeedDatingSessionRecordModule,
    DoubleDateGroupRecordModule,
    IcebreakerQuizRecordModule,
    GiftVoucherTransactionModule,
    VibeCheckPromptRecordModule,
    VenueReservationRecordModule,
    TransitSafetyDispatchRecordModule,
    VipConciergeRecordModule,
    SystemTelemetryBatchRecordModule,
    AlumniNetworkRecordModule,
    FestivalCompanionRecordModule,
    FounderSynergyRecordModule,
    ExpatRelocationRecordModule,
    CinephileClubRecordModule,
    TabletopLobbyRecordModule,
    SommelierTastingRecordModule,
    SupperClubRecordModule,
    RunningPacerRecordModule,
    MotoTouringRecordModule,
  ],
  exports: [
    UserIdentityModule,
    UserProfileRecordModule,
    DiscoveryCandidateModule,
    MutualConnectionModule,
    ChatMessageRecordModule,
    CallSessionRecordModule,
    AudioRoomRecordModule,
    SocialEventRecordModule,
    CommunityClubRecordModule,
    DateGuardSessionModule,
    ModerationIncidentModule,
    SurgeClusterRecordModule,
    SubscriptionBillingRecordModule,
    NotificationDispatchRecordModule,
    PrivacyArchiveRecordModule,
    GeoLocationRecordModule,
    GamificationQuestRecordModule,
    VibeCompatibilityReportModule,
    FraudSignalRecordModule,
    TrustScoreRecordModule,
    TranscodingJobRecordModule,
    AnalyticsTelemetryBatchModule,
    StaffAdministrationRecordModule,
    MediaStorageRecordModule,
    RegulatoryAuditRecordModule,
    TravelPassportRecordModule,
    AstrologyProfileRecordModule,
    DietaryPreferenceRecordModule,
    FitnessProfileRecordModule,
    PetCompanionRecordModule,
    CreativePortfolioRecordModule,
    MusicAffinitiesRecordModule,
    LiteraryProfileRecordModule,
    LanguageTandemRecordModule,
    GamerProfileRecordModule,
    CareerSynergyRecordModule,
    CulinaryDiscoveryRecordModule,
    NightlifeVenueRecordModule,
    AdventureExpeditionRecordModule,
    MindfulnessPracticeRecordModule,
    CauseVolunteeringRecordModule,
    SpeedDatingSessionRecordModule,
    DoubleDateGroupRecordModule,
    IcebreakerQuizRecordModule,
    GiftVoucherTransactionModule,
    VibeCheckPromptRecordModule,
    VenueReservationRecordModule,
    TransitSafetyDispatchRecordModule,
    VipConciergeRecordModule,
    SystemTelemetryBatchRecordModule,
    AlumniNetworkRecordModule,
    FestivalCompanionRecordModule,
    FounderSynergyRecordModule,
    ExpatRelocationRecordModule,
    CinephileClubRecordModule,
    TabletopLobbyRecordModule,
    SommelierTastingRecordModule,
    SupperClubRecordModule,
    RunningPacerRecordModule,
    MotoTouringRecordModule,
  ]
})
export class EnterprisePlatformModule {}

import { describe, expect, it, beforeEach } from 'vitest';
import { SafetyService } from '../src/modules/safety/safety.service';
import { MemoryStoreService } from '../src/common/database/memory-store.service';
import { ReportCategory } from '@pairup/domain-types';

describe('SafetyService - Date Guard, SOS & Reports', () => {
  let safetyService: SafetyService;
  let store: MemoryStoreService;

  beforeEach(() => {
    store = new MemoryStoreService();
    store.onModuleInit();
    safetyService = new SafetyService(store);
  });

  it('initializes a Date Guard safety timer with emergency contact', () => {
    const session = safetyService.createDateCheckInGuard('usr_demo_1', {
      partnerName: 'Aarav Sharma',
      venue: 'Subko Cafe, Bandra West',
      emergencyContact: '+919876500000',
      durationMinutes: 120
    });

    expect(session.id).toBeDefined();
    expect(session.status).toBe('ACTIVE');
    expect(session.partnerName).toBe('Aarav Sharma');
    expect(session.emergencyContact).toBe('+919876500000');
  });

  it('allows safe check-in and extends date duration', () => {
    const session = safetyService.createDateCheckInGuard('usr_demo_1', {
      partnerName: 'Aarav Sharma',
      venue: 'Subko Cafe, Bandra West',
      emergencyContact: '+919876500000',
      durationMinutes: 60
    });

    const checkedIn = safetyService.confirmDateCheckIn('usr_demo_1', session.id, 45);
    expect(checkedIn.status).toBe('EXTENDED');
    expect(checkedIn.durationMinutes).toBe(105);
  });

  it('triggers emergency SOS and records dispatch', () => {
    const session = safetyService.createDateCheckInGuard('usr_demo_1', {
      partnerName: 'Aarav Sharma',
      venue: 'Subko Cafe, Bandra West',
      emergencyContact: '+919876500000',
      durationMinutes: 60
    });

    const sosResult = safetyService.triggerEmergencySos('usr_demo_1', session.id, {
      latitude: 19.0596,
      longitude: 72.8295
    });

    expect(sosResult.sosDispatched).toBe(true);
    expect(sosResult.emergencySmsSentTo).toBe('+919876500000');
    expect(sosResult.helplinesContacted.length).toBeGreaterThan(0);
  });

  it('submits a safety report against a misbehaving profile', () => {
    const report = safetyService.reportUser(
      'usr_demo_1',
      'usr_demo_2',
      ReportCategory.HARASSMENT,
      'Inappropriate messages sent after requesting to stop.',
      ['https://pairup.internal/evidence/scr_1.png']
    );

    expect(report.id).toBeDefined();
    expect(report.status).toBe('PENDING');
    expect(report.reportedUserId).toBe('usr_demo_2');
  });

  it('manages safety and location privacy preferences', () => {
    const updated = safetyService.updateSafetyPreferences('usr_demo_1', {
      locationMasking: true,
      incognitoBrowsing: true,
      mediaBlur: true
    });

    expect(updated.locationMasking).toBe(true);
    expect(updated.incognitoBrowsing).toBe(true);
    expect(updated.mediaBlur).toBe(true);
  });

  it('blocks and unblocks a user correctly', () => {
    const blockRes = safetyService.blockUser('usr_demo_1', 'usr_demo_2');
    expect(blockRes.blocked).toBe(true);

    const blockedList = safetyService.getBlockedUsers('usr_demo_1');
    expect(blockedList).toContain('usr_demo_2');

    const unblockRes = safetyService.unblockUser('usr_demo_1', 'usr_demo_2');
    expect(unblockRes.unblocked).toBe(true);
  });

  it('submits and resolves an appeal against a report', () => {
    const appeal = safetyService.submitAppeal(
      'usr_demo_3',
      'rep_test_1',
      'This report was filed in bad faith due to disagreement on meetup timing.',
      true
    );

    expect(appeal.id).toBeDefined();
    expect(appeal.status).toBe('PENDING');

    const pendingList = safetyService.getAppeals('PENDING');
    expect(pendingList.some((a) => a.id === appeal.id)).toBe(true);

    const resolved = safetyService.resolveAppeal(
      appeal.id,
      'usr_admin_1',
      'OVERTURNED',
      'Verified chat logs show no harassment. Warning lifted.'
    );

    expect(resolved.status).toBe('OVERTURNED');
    expect(resolved.moderatorId).toBe('usr_admin_1');
    expect(resolved.moderatorNotes).toContain('Warning lifted');
  });

  it('detects and escalates overdue Date Guard sessions in watchdog pass', () => {
    // Create an expired date guard session by setting scheduled check-in in the past
    const session = safetyService.createDateCheckInGuard('usr_demo_1', {
      partnerName: 'Past Meetup',
      venue: 'Coffee House',
      emergencyContact: '+919999999999',
      durationMinutes: -5 // Expired 5 mins ago
    });

    expect(session.status).toBe('ACTIVE');

    const watchdogResult = safetyService.escalateOverdueGuards();
    expect(watchdogResult.escalatedCount).toBeGreaterThan(0);
    const overdueSession = watchdogResult.overdueGuards.find((g) => g.id === session.id);
    expect(overdueSession).toBeDefined();
    expect(overdueSession?.status).toBe('OVERDUE');
  });
});


      {/* ================================================================= */}
      {/* 3. LIGHTBOX IMAGE ZOOM MODAL */}
      {/* ================================================================= */}
      {lightboxUrl && (
        <div
          onClick={() => setLightboxUrl(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnightInk/90 backdrop-blur-md cursor-zoom-out animate-in fade-in"
        >
          <div className="relative max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <img src={lightboxUrl} alt="" className="w-full h-full object-contain" />
            <button
              onClick={() => setLightboxUrl(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-midnightInk/80 text-white hover:bg-midnightInk"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* 4. REPORT USER SAFETY MODAL */}
      {/* ================================================================= */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnightInk/70 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-borderSoft">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-dangerRed" />
                <h3 className="text-base font-display font-bold text-ink">
                  Report {otherMember?.displayName}
                </h3>
              </div>
              <button
                onClick={() => setShowReportModal(false)}
                className="p-1 rounded-full hover:bg-cloud text-ink-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-ink-muted mb-4">
              Your report is completely confidential. PairUp human moderators review reports within 15 minutes.
            </p>

            <form onSubmit={handleFileReport} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1">
                  Reason for Report
                </label>
                <select
                  value={reportCategory}
                  onChange={(e) => setReportCategory(e.target.value as ReportCategory)}
                  className="w-full px-4 py-2.5 rounded-xl bg-cloud border border-borderSoft text-xs font-medium"
                >
                  <option value="HARASSMENT">Harassment or Abusive Language</option>
                  <option value="INAPPROPRIATE_CONTENT">Inappropriate or Explicit Photos</option>
                  <option value="FAKE_PROFILE">Fake Profile or Impersonation</option>
                  <option value="UNDERAGE">Suspected Underage Account (Under 18)</option>
                  <option value="SPAM">Commercial Spam or Advertising</option>
                  <option value="SCAM">Financial Solicitation or Scam</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1">
                  Details / Evidence
                </label>
                <textarea
                  rows={3}
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  placeholder="Tell us what occurred during this chat..."
                  className="w-full px-4 py-2 rounded-xl bg-cloud border border-borderSoft text-xs font-medium"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReportModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-cloud text-ink text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-dangerRed text-white text-xs font-bold shadow-md hover:bg-dangerRed/90"
                >
                  Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* 5. BLOCK USER CONFIRMATION MODAL */}
      {/* ================================================================= */}
      {showBlockModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnightInk/70 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-borderSoft text-center">
            <div className="w-12 h-12 rounded-full bg-dangerRedLight text-dangerRed flex items-center justify-center mx-auto mb-3">
              <UserX className="w-6 h-6" />
            </div>
            <h3 className="text-base font-display font-bold text-ink">
              Block {otherMember?.displayName}?
            </h3>
            <p className="text-xs text-ink-muted mt-1 leading-relaxed">
              They will no longer be able to message you, see your profile on the radar, or encounter you in voice rooms.
            </p>

            <div className="flex items-center gap-2 mt-5">
              <button
                onClick={() => setShowBlockModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-cloud text-ink text-xs font-bold"
                Cancel
              </button>
              <button
                onClick={handleBlockUser}
                className="flex-1 py-2.5 rounded-xl bg-dangerRed text-white text-xs font-bold shadow-md hover:bg-dangerRed/90"
              >
                Yes, Block User
              </button>
            </div>
          </div>
        </div>
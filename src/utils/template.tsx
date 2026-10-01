import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  MessageSquareText,
  UserRound,
} from "lucide-react";
import { Button } from "@mui/material";

function SubmissionDetails() {
  return (
    <div className="w-full bg-slate-50">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <ArrowLeft size={15} />
          </button>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Weekly Submission
            </h2>

            <p className="text-[10px] text-slate-500">
              Review staff deliverables and provide feedback
            </p>
          </div>
        </div>

        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-medium text-amber-700">
          UNDER REVIEW
        </span>
      </div>

      <div className="space-y-3 p-3">
        {/* Staff Information */}
        <section className="rounded-lg border border-slate-200 bg-white">
          <div className="border-b border-slate-100 px-4 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Staff Information
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 px-4 py-3 sm:grid-cols-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-blue-900">
                <UserRound size={15} />
              </div>

              <div>
                <p className="text-[10px] text-slate-400">Staff</p>
                <p className="text-xs font-semibold text-slate-900">
                  John Mensah
                </p>
              </div>
            </div>

            <div>
              <p className="text-[10px] text-slate-400">Position</p>
              <p className="mt-0.5 text-xs font-medium text-slate-700">
                Software Developer
              </p>
            </div>

            <div>
              <p className="text-[10px] text-slate-400">Unit</p>
              <p className="mt-0.5 text-xs font-medium text-slate-700">
                Application Development
              </p>
            </div>
          </div>
        </section>

        {/* Submission Information */}
        <section className="rounded-lg border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-blue-900" />

              <p className="text-xs font-semibold text-slate-900">
                Weekly Deliverables
              </p>
            </div>

            <span className="text-[10px] text-slate-400">
              3 Deliverables
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {/* Deliverable */}
            <div className="px-4 py-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[10px] font-semibold text-slate-500">
                    01
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-900">
                      Configure office network
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Verification: Network connectivity test
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
                      <CalendarDays size={12} />
                      Due 16 Sep 2026
                    </div>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
                  COMPLETED
                </span>
              </div>
            </div>

            {/* Deliverable */}
            <div className="px-4 py-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[10px] font-semibold text-slate-500">
                    02
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-900">
                      Update internal application
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Verification: Deployment verification
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
                      <CalendarDays size={12} />
                      Due 17 Sep 2026
                    </div>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700">
                  IN PROGRESS
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Support Needed */}
        <section className="rounded-lg border border-slate-200 bg-white">
          <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5">
            <MessageSquareText size={14} className="text-slate-500" />

            <p className="text-xs font-semibold text-slate-900">
              Support Needed
            </p>
          </div>

          <div className="px-4 py-3">
            <p className="text-[11px] leading-5 text-slate-600">
              Requires access to the production server to complete the
              deployment.
            </p>
          </div>
        </section>

        {/* Manager Review */}
        <section className="rounded-lg border border-slate-200 bg-white">
          <div className="border-b border-slate-100 px-4 py-2.5">
            <p className="text-xs font-semibold text-slate-900">
              Manager Review
            </p>
          </div>

          <div className="space-y-4 px-4 py-3">
            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-slate-600">
                Rating
              </label>

              <select className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-100 sm:w-64">
                <option value="">Select rating</option>
                <option value="EXCEEDS">Exceeds</option>
                <option value="MEETS">Meets</option>
                <option value="PARTIAL">Partial</option>
                <option value="BELOW_STANDARD">
                  Below Standard
                </option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-slate-600">
                Manager Comment
              </label>

              <textarea
                rows={3}
                placeholder="Add feedback for this staff member..."
                className="w-full resize-none rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-800 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 border-t border-slate-100 px-4 py-3">
            <Button
              variant="outlined"
              sx={{
                minHeight: "30px",
                borderRadius: "6px",
                textTransform: "none",
                fontSize: "11px",
                borderColor: "#cbd5e1",
                color: "#475569",
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              startIcon={<CheckCircle2 size={14} />}
              sx={{
                minHeight: "30px",
                borderRadius: "6px",
                textTransform: "none",
                fontSize: "11px",
                backgroundColor: "#172554",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#1e3a8a",
                  boxShadow: "none",
                },
              }}
            >
              Complete Review
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SubmissionDetails;
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Users,
  AlertTriangle,
  CalendarClock,
  Activity,
  ClipboardList,
} from "lucide-react";

import MotionSection from "../../utils/MotionSections";

function ManagerDashboard() {
  return (
    <div className="min-h-full bg-slate-50 p-3 md:p-4">

      {/* Page Header */}
      <MotionSection>
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-blue-900">
              Manager Overview
            </p>

            <h1 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
              Team Dashboard
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              Monitor your team's deliverables, reviews, deadlines and activity.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">
              <span className="font-medium text-slate-800">
                This Week
              </span>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* KPI Cards */}
      <MotionSection delay={0.05}>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">

          {/* Staff */}
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-medium text-slate-500">
                  My Staff
                </p>

                <p className="mt-1 text-2xl font-semibold text-slate-900">
                  —
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-blue-900">
                <Users size={16} />
              </div>
            </div>

            <p className="mt-2 text-[10px] text-slate-400">
              Staff assigned to you
            </p>
          </div>

          {/* Pending Reviews */}
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-medium text-slate-500">
                  Pending Reviews
                </p>

                <p className="mt-1 text-2xl font-semibold text-slate-900">
                  —
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-50 text-amber-700">
                <FileCheck2 size={16} />
              </div>
            </div>

            <p className="mt-2 text-[10px] text-slate-400">
              Deliverables awaiting review
            </p>
          </div>

          {/* Due Today */}
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-medium text-slate-500">
                  Due Today
                </p>

                <p className="mt-1 text-2xl font-semibold text-slate-900">
                  —
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                <CalendarClock size={16} />
              </div>
            </div>

            <p className="mt-2 text-[10px] text-slate-400">
              Deliverables due today
            </p>
          </div>

          {/* Overdue */}
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-medium text-slate-500">
                  Overdue
                </p>

                <p className="mt-1 text-2xl font-semibold text-slate-900">
                  —
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-red-50 text-red-600">
                <AlertTriangle size={16} />
              </div>
            </div>

            <p className="mt-2 text-[10px] text-slate-400">
              Deliverables past their due date
            </p>
          </div>

        </div>
      </MotionSection>

      {/* Main Content */}
      <MotionSection delay={0.1}>
        <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-3">

          {/* Pending Reviews */}
          <div className="rounded-lg border border-slate-200 bg-white xl:col-span-2">

            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">

              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-50 text-amber-700">
                  <FileCheck2 size={15} />
                </div>

                <div>
                  <h2 className="text-xs font-semibold text-slate-900">
                    Pending Reviews
                  </h2>

                  <p className="text-[10px] text-slate-500">
                    Deliverables waiting for your attention
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="flex items-center gap-1 text-[11px] font-medium text-blue-900 hover:text-blue-700"
              >
                View all
                <ArrowRight size={13} />
              </button>

            </div>

            <div className="flex min-h-[210px] items-center justify-center px-4 py-8">

              <div className="text-center">

                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                  <CheckCircle2 size={19} />
                </div>

                <h3 className="mt-3 text-xs font-semibold text-slate-800">
                  No pending reviews
                </h3>

                <p className="mt-1 max-w-xs text-[11px] leading-5 text-slate-500">
                  When staff submit deliverables for review, they will appear
                  here.
                </p>

              </div>

            </div>
          </div>

          {/* Team Progress */}
          <div className="rounded-lg border border-slate-200 bg-white">

            <div className="border-b border-slate-200 px-4 py-3">

              <div className="flex items-center gap-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-blue-900">
                  <ClipboardList size={15} />
                </div>

                <div>
                  <h2 className="text-xs font-semibold text-slate-900">
                    Team Progress
                  </h2>

                  <p className="text-[10px] text-slate-500">
                    Current deliverable status
                  </p>
                </div>

              </div>

            </div>

            <div className="space-y-4 p-4">

              {/* Completed */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-600">
                    Completed
                  </span>

                  <span className="text-[11px] font-semibold text-slate-800">
                    —
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-0 rounded-full bg-emerald-500" />
                </div>
              </div>

              {/* In Progress */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-600">
                    In Progress
                  </span>

                  <span className="text-[11px] font-semibold text-slate-800">
                    —
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-0 rounded-full bg-blue-500" />
                </div>
              </div>

              {/* Pending Review */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-600">
                    Pending Review
                  </span>

                  <span className="text-[11px] font-semibold text-slate-800">
                    —
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-0 rounded-full bg-amber-500" />
                </div>
              </div>

              {/* Delayed */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-600">
                    Delayed
                  </span>

                  <span className="text-[11px] font-semibold text-slate-800">
                    —
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-0 rounded-full bg-red-500" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </MotionSection>

      {/* Bottom Section */}
      <MotionSection delay={0.15}>
        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">

          {/* Upcoming Deliverables */}
          <div className="rounded-lg border border-slate-200 bg-white">

            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">

              <div className="flex items-center gap-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                  <Clock3 size={15} />
                </div>

                <div>
                  <h2 className="text-xs font-semibold text-slate-900">
                    Upcoming Deliverables
                  </h2>

                  <p className="text-[10px] text-slate-500">
                    What your team needs to complete next
                  </p>
                </div>

              </div>

              <button
                type="button"
                className="flex items-center gap-1 text-[11px] font-medium text-blue-900 hover:text-blue-700"
              >
                View all
                <ArrowRight size={13} />
              </button>

            </div>

            <div className="p-4">

              <div className="flex min-h-[150px] items-center justify-center text-center">

                <div>

                  <CalendarClock
                    size={20}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-2 text-xs font-medium text-slate-700">
                    No upcoming deliverables
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Upcoming staff deadlines will appear here.
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-lg border border-slate-200 bg-white">

            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">

              <div className="flex items-center gap-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                  <Activity size={15} />
                </div>

                <div>
                  <h2 className="text-xs font-semibold text-slate-900">
                    Recent Activity
                  </h2>

                  <p className="text-[10px] text-slate-500">
                    Recent actions from your team
                  </p>
                </div>

              </div>

              <button
                type="button"
                className="flex items-center gap-1 text-[11px] font-medium text-blue-900 hover:text-blue-700"
              >
                View all
                <ArrowRight size={13} />
              </button>

            </div>

            <div className="p-4">

              <div className="flex min-h-[150px] items-center justify-center text-center">

                <div>

                  <Activity
                    size={20}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-2 text-xs font-medium text-slate-700">
                    No recent activity
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Staff submissions and updates will appear here.sss
                  </p>

                </div>

              </div>

            </div>
          </div>

        </div>
      </MotionSection>

    </div>
  );
}

export default ManagerDashboard;
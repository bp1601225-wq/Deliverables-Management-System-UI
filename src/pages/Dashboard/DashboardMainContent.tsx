import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
} from "lucide-react";

const ProgressItem = ({
  label,
  color,
}: {
  label: string;
  color: string;
}) => {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[11px] text-slate-600">
          {label}
        </span>

        <span className="text-[11px] font-semibold text-slate-800">
          —
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full w-0 rounded-full ${color}`} />
      </div>
    </div>
  );
};

export const DashboardWorkSection = () => {
  return (
    <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-3">

      {/* My Deliverables */}
      <div className="rounded-lg border border-slate-200 bg-white xl:col-span-2">

        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">

          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-blue-900">
              <ClipboardList size={15} />
            </div>

            <div>
              <h2 className="text-xs font-semibold text-slate-900">
                My Deliverables
              </h2>

              <p className="text-[10px] text-slate-500">
                Your current work and progress
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
              No deliverables yet
            </h3>

            <p className="mt-1 max-w-xs text-[11px] leading-5 text-slate-500">
              Your assigned and created deliverables will appear here.
            </p>

          </div>
        </div>

      </div>

      {/* My Progress */}
      <div className="rounded-lg border border-slate-200 bg-white">

        <div className="border-b border-slate-200 px-4 py-3">

          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-blue-900">
              <ClipboardList size={15} />
            </div>

            <div>
              <h2 className="text-xs font-semibold text-slate-900">
                My Progress
              </h2>

              <p className="text-[10px] text-slate-500">
                Current deliverable status
              </p>
            </div>
          </div>

        </div>

        <div className="space-y-4 p-4">

          <ProgressItem
            label="Completed"
            color="bg-emerald-500"
          />

          <ProgressItem
            label="In Progress"
            color="bg-blue-500"
          />

          <ProgressItem
            label="Pending Review"
            color="bg-amber-500"
          />

          <ProgressItem
            label="Delayed"
            color="bg-red-500"
          />

        </div>

      </div>

    </div>
  );
};
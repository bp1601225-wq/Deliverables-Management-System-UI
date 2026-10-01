import {
  X,
  UserRound,
  CalendarDays,
  ClipboardCheck,
  FileCheck2,
} from "lucide-react";

interface DeliverableDetailsProps {
  deliverable: any;
  onClose: () => void;
}

function DeliverableDetails({
  deliverable,
  onClose,
}: DeliverableDetailsProps) {
  if (!deliverable) return null;

  const statusStyles: Record<string, string> = {
    COMPLETED: "bg-emerald-50 text-emerald-700",
    IN_PROGRESS: "bg-blue-50 text-blue-700",
    DELAYED: "bg-red-50 text-red-700",
    NOT_STARTED: "bg-slate-100 text-slate-600",
  };

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
            Deliverable Details
          </p>

          <h2 className="mt-0.5 text-sm font-semibold text-slate-900">
            {deliverable.title}
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
          <X size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {/* Status */}
        <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2.5">
          <span className="text-[10px] font-medium text-slate-500">
            Status
          </span>

          <span
            className={`rounded-full px-2 py-1 text-[10px] font-medium ${
              statusStyles[deliverable.status] ??
              "bg-slate-100 text-slate-600"
            }`}
          >
            {deliverable.status?.replace("_", " ")}
          </span>
        </div>

        {/* Staff */}
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Staff
          </p>

          <div className="flex items-center gap-3 rounded-md border border-slate-200 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-900">
              <UserRound size={15} />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-900">
                {deliverable.staff}
              </p>

              <p className="text-[10px] text-slate-500">
                {deliverable.unit}
              </p>
            </div>
          </div>
        </div>

        {/* Deliverable */}
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Deliverable
          </p>

          <div className="rounded-md border border-slate-200 p-3">
            <div className="flex gap-2">
              <ClipboardCheck
                size={15}
                className="mt-0.5 shrink-0 text-blue-900"
              />

              <p className="text-xs leading-5 text-slate-700">
                {deliverable.title}
              </p>
            </div>
          </div>
        </div>

        {/* Verification */}
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            How it will be verified
          </p>

          <div className="flex gap-2 rounded-md border border-slate-200 p-3">
            <FileCheck2
              size={15}
              className="mt-0.5 shrink-0 text-slate-500"
            />

            <p className="text-xs leading-5 text-slate-600">
              {deliverable.verificationMethod}
            </p>
          </div>
        </div>

        {/* Due Date */}
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Due Date
          </p>

          <div className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2.5">
            <CalendarDays size={15} className="text-slate-500" />

            <span className="text-xs text-slate-700">
              {deliverable.dueDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliverableDetails;
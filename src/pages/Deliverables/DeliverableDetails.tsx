import {
  CalendarDays,
  CircleCheck,
  ClipboardCheck,
  Clock,
  FileEdit,
  MessageCircle,
  Send,
  User,
} from "lucide-react";

function DeliverableDetails({ data }: any) {
  const statusConfig: any = {
    COMPLETED: {
      label: "Completed",
      icon: CircleCheck,
      className: "bg-emerald-50 text-emerald-600",
    },
    IN_PROGRESS: {
      label: "In Progress",
      icon: Send,
      className: "bg-blue-50 text-blue-600",
    },
    DELAYED: {
      label: "Delayed",
      icon: FileEdit,
      className: "bg-red-50 text-red-600",
    },
    NOT_STARTED: {
      label: "Not Started",
      icon: Clock,
      className: "bg-slate-100 text-slate-500",
    },
    SUBMITTED: {
      label: "Submitted",
      icon: Send,
      className: "bg-blue-50 text-blue-600",
    },
    REVIEWED: {
      label: "Reviewed",
      icon: CircleCheck,
      className: "bg-emerald-50 text-emerald-600",
    },
  };

  const config =
    statusConfig[data.status] || statusConfig.NOT_STARTED;

  const StatusIcon = config.icon;

  return (
    <div className="space-y-4">

      {/* STAFF */}
      <div className="rounded-xl bg-blue-50/50 p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
            <User size={17} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Staff
            </p>

            <p className="truncate text-sm font-semibold text-slate-800">
              {data.staff}
            </p>
          </div>
        </div>
      </div>

      {/* DELIVERABLE */}
      <div className="rounded-xl bg-white p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileEdit size={15} className="text-blue-600" />

            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Deliverable
            </p>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-semibold ${config.className}`}
          >
            <StatusIcon size={11} />
            {config.label}
          </span>
        </div>

        <p className="text-sm font-semibold leading-5 text-slate-800">
          {data.deliverable}
        </p>
      </div>

      {/* VERIFICATION */}
      <div className="rounded-xl bg-amber-50/40 p-3">
        <div className="mb-2 flex items-center gap-2">
          <ClipboardCheck size={15} className="text-amber-500" />

          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            How It Will Be Verified
          </p>
        </div>

        <p className="text-sm leading-5 text-slate-600">
          {data.verificationMethod}
        </p>
      </div>

      {/* META */}
      <div className="grid grid-cols-2 gap-3">

        {/* DUE DATE */}
        <div className="rounded-xl bg-white p-3">
          <div className="mb-2 flex items-center gap-2">
            <CalendarDays size={15} className="text-blue-600" />

            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Due Date
            </p>
          </div>

          <p className="text-sm font-semibold text-slate-800">
            {data.dueDate}
          </p>
        </div>

        {/* STATUS */}
        <div className="rounded-xl bg-white p-3">
          <div className="mb-2 flex items-center gap-2">
            <CircleCheck size={15} className="text-emerald-500" />

            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Status
            </p>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${config.className}`}
          >
            <StatusIcon size={12} />
            {config.label}
          </span>
        </div>

      </div>

      {/* COMMENTS — KEEP BORDER */}
      <div className="rounded-xl border border-slate-200 bg-white">

        <div className="flex items-center justify-between border-b border-slate-100 px-3 py-3">
          <div className="flex items-center gap-2">
            <MessageCircle size={15} className="text-blue-600" />

            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Comments from your unit head
            </p>
          </div>

          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
            {data.comments?.length || 0}
          </span>
        </div>

        <div className="space-y-2 p-3">
          {data.comments?.length > 0 ? (
            data.comments.map((item: any, index: number) => (
              <div
                key={index}
                className="rounded-lg bg-slate-50 px-3 py-2.5"
              >
                <p className="text-xs leading-relaxed text-slate-700">
                  {item.comment}
                </p>

                <div className="mt-2 flex items-center gap-1.5">
                  <Clock size={11} className="text-slate-400" />

                  <p className="text-[10px] text-slate-400">
                    {new Date(item.createdAt).toLocaleString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="py-6 text-center">
              <MessageCircle
                size={20}
                className="mx-auto mb-2 text-slate-300"
              />

              <p className="text-xs font-medium text-slate-500">
                No comments yet
              </p>

              <p className="mt-1 text-[10px] text-slate-400">
                Comments from reviewers will appear here.
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default DeliverableDetails;
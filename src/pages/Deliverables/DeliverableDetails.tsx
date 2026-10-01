import {
  CalendarDays,
  CircleCheck,
  ClipboardCheck,
  FileEdit,
  Send,
  User,
} from "lucide-react";

function DeliverableDetails({ data }: any) {
  return (
    <div className="space-y-5">

      {/* Staff */}
      <div className="flex items-center gap-3 rounded-xl bg-blue-50/60 p-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
          <User size={17} />
        </div>

        <div>
          <p className="text-[10px] font-semibold tracking-wide text-slate-400">
            STAFF
          </p>
          <p className="text-sm font-semibold text-slate-800">
            {data.staff}
          </p>
        </div>
      </div>

      {/* Deliverable */}
      <div className="rounded-xl border border-slate-100 bg-white p-3">
        <div className="mb-2 flex items-center gap-2">
          <FileEdit size={15} className="text-blue-600" />
          <p className="text-[10px] font-semibold tracking-wide text-slate-400">
            DELIVERABLE
          </p>
        </div>

        <p className="text-sm font-semibold leading-5 text-slate-800">
          {data.deliverable}
        </p>
      </div>

      {/* Verification */}
      <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
        <div className="mb-2 flex items-center gap-2">
          <ClipboardCheck size={15} className="text-amber-500" />
          <p className="text-[10px] font-semibold tracking-wide text-slate-400">
            HOW IT WILL BE VERIFIED
          </p>
        </div>

        <p className="text-sm leading-5 text-slate-600">
          {data.verificationMethod}
        </p>
      </div>

      {/* Due Date + Status */}
      <div className="grid grid-cols-2 gap-3">

        <div className="rounded-xl border border-slate-100 bg-white p-3">
          <div className="mb-2 flex items-center gap-2">
            <CalendarDays size={15} className="text-blue-600" />
            <p className="text-[10px] font-semibold tracking-wide text-slate-400">
              DUE DATE
            </p>
          </div>

          <p className="text-sm font-semibold text-slate-800">
            {data.dueDate}
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-white p-3">
          <div className="mb-2 flex items-center gap-2">
            <CircleCheck size={15} className="text-emerald-500" />
            <p className="text-[10px] font-semibold tracking-wide text-slate-400">
              STATUS
            </p>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              data.status === "COMPLETED"
                ? "bg-emerald-50 text-emerald-600"
                : data.status === "IN_PROGRESS"
                ? "bg-blue-50 text-blue-600"
                : data.status === "DELAYED"
                ? "bg-red-50 text-red-600"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {data.status === "COMPLETED" && <CircleCheck size={12} />}
            {data.status === "IN_PROGRESS" && <Send size={12} />}
            {data.status === "DELAYED" && <FileEdit size={12} />}
            {data.status}
          </span>
        </div>

      </div>

    </div>
  );
}

export default DeliverableDetails;
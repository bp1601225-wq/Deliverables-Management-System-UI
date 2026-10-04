import {
  ListTodo,
  FileCheck2,
  CalendarClock,
  AlertTriangle,
} from "lucide-react";

const KPICard = ({
  title,
  description,
  icon,
  iconStyle,
  value,
}: any) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition-all duration-200 hover:border-amber-200 hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-medium tracking-wide text-slate-500">
            {title}
          </p>

          <p className="mt-1.5 text-[20px] font-semibold leading-none tracking-tight text-slate-900 p-2">
            {value}
          </p>
        </div>

        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${iconStyle}`}
        >
          {icon}
        </div>
      </div>

      <p className="mt-3 text-[10px] leading-4 text-slate-400">
        {description}
      </p>
    </div>
  );
};

export const DashboardKPI = ({ D }: any) => {
  // Safely handle failed / missing API response
  const dashboard = D ?? {};

  return (
    <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">

      <KPICard
        title="Total Deliverables"
        description="Your current deliverables"
        value={dashboard.totalDeliverables ?? 0}
        icon={<ListTodo size={16} strokeWidth={1.8} />}
        iconStyle="border-amber-100 bg-white text-amber-600"
      />

      <KPICard
        title="Pending Reviews"
        description="Deliverables awaiting review"
        value={dashboard.pendingReviews ?? 0}
        icon={<FileCheck2 size={16} strokeWidth={1.8} />}
        iconStyle="border-amber-100 bg-white text-amber-600"
      />

      <KPICard
        title="Due Today"
        description="Deliverables reaching their due date"
        value={dashboard.haveReachedDueDate ?? 0}
        icon={<CalendarClock size={16} strokeWidth={1.8} />}
        iconStyle="border-amber-100 bg-white text-amber-600"
      />

      <KPICard
        title="Overdue"
        description="Deliverables past their due date"
        value={dashboard.havePassedDueDate ?? 0}
        icon={<AlertTriangle size={16} strokeWidth={1.8} />}
        iconStyle="border-red-100 bg-white text-red-500"
      />

    </div>
  );
};
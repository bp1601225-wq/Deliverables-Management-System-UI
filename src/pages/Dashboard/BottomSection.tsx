import {
  Activity,
  ArrowRight,
  CalendarClock,
  Clock3,
} from "lucide-react";

type DashboardPanelProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  emptyIcon: React.ReactNode;
  emptyTitle: string;
  emptyDescription: string;
};

const DashboardPanel = ({
  title,
  description,
  icon,
  emptyIcon,
  emptyTitle,
  emptyDescription,
}: DashboardPanelProps) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white">

      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">

        <div className="flex items-center gap-2">

          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-slate-700">
            {icon}
          </div>

          <div>
            <h2 className="text-xs font-semibold text-slate-900">
              {title}
            </h2>

            <p className="text-[10px] text-slate-500">
              {description}
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

            <div className="flex justify-center text-slate-300">
              {emptyIcon}
            </div>

            <p className="mt-2 text-xs font-medium text-slate-700">
              {emptyTitle}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              {emptyDescription}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export const DashboardBottomSection = () => {
  return (
    <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">

      <DashboardPanel
        title="Upcoming Deliverables"
        description="What you need to complete next"
        icon={<Clock3 size={15} />}
        emptyIcon={<CalendarClock size={20} />}
        emptyTitle="No upcoming deliverables"
        emptyDescription="Your upcoming deadlines will appear here."
      />

      <DashboardPanel
        title="Recent Activity"
        description="Recent updates and actions"
        icon={<Activity size={15} />}
        emptyIcon={<Activity size={20} />}
        emptyTitle="No recent activity"
        emptyDescription="Your recent submissions and updates will appear here."
      />

    </div>
  );
};
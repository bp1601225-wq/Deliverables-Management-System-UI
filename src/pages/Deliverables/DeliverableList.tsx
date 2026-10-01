import { type GridColDef } from "@mui/x-data-grid";
import DataTable from "../../utils/DataGridTable";
import {
  Search,
  FileEdit,
  Send,
  CircleCheck,
  CalendarDays,
  User,
  ClipboardCheck,
} from "lucide-react";
import { useSubmissionStore } from "../../components/ZustandShare/DeliverablesZuts";
import { useEffect, useState } from "react";
import RightPanel from "../../components/Panel/RightPanel";
import DeliverableDetails from "./DeliverableDetails";

function DeliverableList() {
  const { Submissions, GetSubmissions } = useSubmissionStore();

  useEffect(() => {
    GetSubmissions();
  }, []);

  const [isOpenRightPanel, setIsOpenRightPanel] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  const columns: GridColDef[] = [
    {
      field: "staff",
      headerName: "Staff",
      flex: 1,
    },
    {
      field: "deliverable",
      headerName: "Deliverable",
      flex: 1.5,
    },
    {
      field: "verificationMethod",
      headerName: "How It Will Be Verified",
      flex: 1.5,
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        const status = params.value as
          | "DRAFT"
          | "SUBMITTED"
          | "REVIEWED";

        const statusConfig = {
          DRAFT: {
            label: "Draft",
            icon: FileEdit,
            className:
              "bg-gray-100 text-gray-600 border-gray-200",
          },
          SUBMITTED: {
            label: "Submitted",
            icon: Send,
            className:
              "bg-blue-50 text-blue-600 border-blue-200",
          },
          REVIEWED: {
            label: "Reviewed",
            icon: CircleCheck,
            className:
              "bg-green-50 text-green-600 border-green-200",
          },
        };

        const config = statusConfig[status];
        const Icon = config.icon;

        return (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${config.className}`}
          >
            <Icon size={13} strokeWidth={2} />
            {config.label}
          </span>
        );
      },
    },
  ];

  // Convert API data into DataGrid rows
  const rows = Submissions.flatMap((submission) =>
    submission.deliverables.map(
      (deliverable: any, index: number) => ({
        id: `${submission.user.id}-${index}`,
        staff: submission.user.name,
        deliverable: deliverable.title,
        verificationMethod: deliverable.verificationMethod,
        dueDate: new Date(
          deliverable.dueDate
        ).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        status: deliverable.status,
      })
    )
  );

  return (
    <>
      <div className="rounded-lg border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-4 py-3">
          <h2 className="text-xs font-semibold text-slate-900">
            Deliverables
          </h2>

          <p className="text-[11px] text-slate-500">
            Track staff weekly deliverables and their current status.
          </p>
        </div>

        <div className="p-3">
          <fieldset className="rounded-md border border-slate-200 bg-white px-3 pb-3 pt-1">
            <legend className="px-1 text-[11px] font-medium text-slate-600">
              Filters
            </legend>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
              {/* Search */}
              <div className="relative">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search staff or deliverable..."
                  className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                />
              </div>

              {/* Status */}
              <select
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                defaultValue=""
              >
                <option value="">All Status</option>
                <option value="NOT_STARTED">
                  Not Started
                </option>
                <option value="IN_PROGRESS">
                  In Progress
                </option>
                <option value="COMPLETED">
                  Completed
                </option>
                <option value="DELAYED">
                  Delayed
                </option>
              </select>

              {/* From Date */}
              <input
                type="date"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              />

              {/* To Date */}
              <input
                type="date"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              />
            </div>
          </fieldset>

          <br />

          <DataTable
            rows={rows}
            columns={columns}
            onRowClick={(params: any) => {
              setData(params.row);
              setIsOpenRightPanel(true);

              // Set deliverable list to be true
            }}
          />
        </div>
      </div>

      {/* RIGHT PANEL */}
  <RightPanel
  open={isOpenRightPanel}
  title="Deliverable Details"
  onClose={() => setIsOpenRightPanel(false)}
>
  {data && <DeliverableDetails data={data} />}
</RightPanel>
 
    </>
  );
}

export default DeliverableList;
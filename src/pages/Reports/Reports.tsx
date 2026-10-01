import { useState } from "react";
import { Download, FileText, Search } from "lucide-react";
import { type GridColDef } from "@mui/x-data-grid";
import DataTable from "../../utils/DataGridTable";

type ReportType = "DELIVERABLES" | "PERFORMANCE" | "REVIEWS";
type ReportPeriod = "WEEKLY" | "MONTHLY" | "CUSTOM";

function Reports() {
  const [reportType, setReportType] =
    useState<ReportType>("DELIVERABLES");

  const [period, setPeriod] =
    useState<ReportPeriod>("WEEKLY");

  const [staff, setStaff] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [hasGenerated, setHasGenerated] = useState(false);

  /*
   * These columns will later change depending
   * on the selected report type.
   */

  const deliverableColumns: GridColDef[] = [
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
      field: "dueDate",
      headerName: "Due Date",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "reviewStatus",
      headerName: "Review",
      flex: 1,
    },
  ];

  const performanceColumns: GridColDef[] = [
    {
      field: "staff",
      headerName: "Staff",
      flex: 1.2,
    },
    {
      field: "total",
      headerName: "Total",
      flex: 0.7,
    },
    {
      field: "completed",
      headerName: "Completed",
      flex: 1,
    },
    {
      field: "inProgress",
      headerName: "In Progress",
      flex: 1,
    },
    {
      field: "delayed",
      headerName: "Delayed",
      flex: 0.8,
    },
    {
      field: "completionRate",
      headerName: "Completion Rate",
      flex: 1.2,
    },
  ];

  const reviewColumns: GridColDef[] = [
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
      field: "reviewStatus",
      headerName: "Review Status",
      flex: 1.2,
    },
    {
      field: "reviewedDate",
      headerName: "Reviewed Date",
      flex: 1,
    },
  ];

  /*
   * No real data yet.
   * We will replace this with API data.
   */
  const rows: any[] = [];

  const handleGenerateReport = () => {
    /*
     * Later:
     *
     * const params = {
     *   reportType,
     *   period,
     *   staff,
     *   status,
     *   search,
     *   fromDate,
     *   toDate,
     * };
     *
     * API CALL WILL GO HERE.
     */

    setHasGenerated(true);
  };

  const handleClear = () => {
    setReportType("DELIVERABLES");
    setPeriod("WEEKLY");
    setStaff("");
    setStatus("");
    setSearch("");
    setFromDate("");
    setToDate("");
    setHasGenerated(false);
  };

  const getColumns = () => {
    if (reportType === "PERFORMANCE") {
      return performanceColumns;
    }

    if (reportType === "REVIEWS") {
      return reviewColumns;
    }

    return deliverableColumns;
  };

  const getReportTitle = () => {
    if (reportType === "PERFORMANCE") {
      return "Staff Performance Report";
    }

    if (reportType === "REVIEWS") {
      return "Review Report";
    }

    return "Deliverables Report";
  };

  return (
    <div className="space-y-3">

      {/* Header */}
      <div className="rounded-lg border border-slate-200 bg-white">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">

          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-blue-900">
                <FileText size={15} />
              </div>

              <h2 className="text-sm font-semibold text-slate-900">
                Reports
              </h2>
            </div>

            <p className="mt-1 text-[11px] text-slate-500">
              Review staff deliverables, performance and review activity.
            </p>
          </div>

          {hasGenerated && (
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              <Download size={14} />
              Export
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="p-3">

          <fieldset className="rounded-md border border-slate-200 bg-white px-3 pb-3 pt-1">
            <legend className="px-1 text-[11px] font-medium text-slate-600">
              Report Filters
            </legend>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-4">

              {/* Report Type */}
              <div>
                <label className="mb-1 block text-[11px] font-medium text-slate-600">
                  Report
                </label>

                <select
                  value={reportType}
                  onChange={(e) =>
                    setReportType(e.target.value as ReportType)
                  }
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                >
                  <option value="DELIVERABLES">
                    Deliverables
                  </option>

                  <option value="PERFORMANCE">
                    Staff Performance
                  </option>

                  <option value="REVIEWS">
                    Reviews
                  </option>
                </select>
              </div>

              {/* Period */}
              <div>
                <label className="mb-1 block text-[11px] font-medium text-slate-600">
                  Period
                </label>

                <select
                  value={period}
                  onChange={(e) =>
                    setPeriod(e.target.value as ReportPeriod)
                  }
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                >
                  <option value="WEEKLY">
                    This Week
                  </option>

                  <option value="MONTHLY">
                    This Month
                  </option>

                  <option value="CUSTOM">
                    Custom Range
                  </option>
                </select>
              </div>

              {/* Staff */}
              <div>
                <label className="mb-1 block text-[11px] font-medium text-slate-600">
                  Staff
                </label>

                <select
                  value={staff}
                  onChange={(e) => setStaff(e.target.value)}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                >
                  <option value="">
                    All Staff
                  </option>

                  <option value="john">
                    John Mensah
                  </option>

                  <option value="mary">
                    Mary Owusu
                  </option>

                  <option value="daniel">
                    Daniel Asare
                  </option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="mb-1 block text-[11px] font-medium text-slate-600">
                  Status
                </label>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                >
                  <option value="">
                    All Status
                  </option>

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

                  <option value="PENDING_REVIEW">
                    Pending Review
                  </option>

                  <option value="CHANGES_REQUESTED">
                    Changes Requested
                  </option>
                </select>
              </div>
            </div>

            {/* Custom dates */}
            {period === "CUSTOM" && (
              <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-4">

                <div>
                  <label className="mb-1 block text-[11px] font-medium text-slate-600">
                    From Date
                  </label>

                  <input
                    type="date"
                    value={fromDate}
                    onChange={(e) =>
                      setFromDate(e.target.value)
                    }
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-medium text-slate-600">
                    To Date
                  </label>

                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) =>
                      setToDate(e.target.value)
                    }
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>
              </div>
            )}

            {/* Search */}
            <div className="mt-2">
              <label className="mb-1 block text-[11px] font-medium text-slate-600">
                Search
              </label>

              <div className="relative max-w-md">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search staff or deliverable..."
                  className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-3 flex items-center gap-2">

              <button
                type="button"
                onClick={handleGenerateReport}
                className="rounded-md bg-blue-900 px-4 py-2 text-xs font-medium text-white hover:bg-blue-800"
              >
                Generate Report
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50"
              >
                Clear
              </button>
            </div>
          </fieldset>
        </div>
      </div>

      {/* Report Result */}
      {hasGenerated && (
        <div className="rounded-lg border border-slate-200 bg-white">

          {/* Report Header */}
          <div className="border-b border-slate-200 px-4 py-3">
            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {getReportTitle()}
                </h3>

                <p className="mt-0.5 text-[11px] text-slate-500">
                  {period === "WEEKLY"
                    ? "Showing results for the current week."
                    : period === "MONTHLY"
                    ? "Showing results for the current month."
                    : "Showing results for the selected date range."}
                </p>
              </div>

              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-600">
                Manager Report
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-2 gap-2 p-3 md:grid-cols-5">

            <div className="rounded-md border border-slate-200 p-3">
              <p className="text-[11px] text-slate-500">
                Total
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                —
              </p>
            </div>

            <div className="rounded-md border border-slate-200 p-3">
              <p className="text-[11px] text-slate-500">
                Completed
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                —
              </p>
            </div>

            <div className="rounded-md border border-slate-200 p-3">
              <p className="text-[11px] text-slate-500">
                In Progress
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                —
              </p>
            </div>

            <div className="rounded-md border border-slate-200 p-3">
              <p className="text-[11px] text-slate-500">
                Delayed
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                —
              </p>
            </div>

            <div className="rounded-md border border-slate-200 p-3">
              <p className="text-[11px] text-slate-500">
                Completion Rate
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                —
              </p>
            </div>

          </div>

          {/* Report Table */}
          <div className="px-3 pb-3">
            <DataTable
              rows={rows}
              columns={getColumns()}
            />
          </div>
        </div>
      )}

      {/* Empty State */}
      {!hasGenerated && (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-12 text-center">

          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
            <FileText size={18} />
          </div>

          <h3 className="mt-3 text-sm font-semibold text-slate-800">
            Generate a Report
          </h3>

          <p className="mx-auto mt-1 max-w-md text-xs text-slate-500">
            Select a report type and period above to view your
            team's deliverables and performance.
          </p>
        </div>
      )}
    </div>
  );
}

export default Reports;
import {
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Loader2,
  MessageSquareText,
  Search,
  Users,
} from "lucide-react";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSubmissionStore } from "../../components/ZustandShare/DeliverablesZuts";

function PendingModal() {
  const { GetSubmissions, Submissions } = useSubmissionStore();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      setLoading(true);

      try {
        await GetSubmissions(debouncedSearch);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [debouncedSearch]);

  useEffect(() => {
    if (Submissions.length > 0) {
      setSelectedSubmission(Submissions[0]);
    } else {
      setSelectedSubmission(null);
    }
  }, [Submissions]);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="flex h-[85vh] max-h-[850px] min-h-0 w-full flex-col overflow-hidden rounded-xl bg-white">
      {/* HEADER */}
      <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
        <div>
          <h2 className="text-sm font-semibold text-slate-800">
            Pending Reviews
          </h2>

       <p className="mt-1 text-[11px] text-slate-400">
            Review weekly staff deliverables and provide feedback.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-semibold text-amber-600">
            {Submissions.length} Submission
            {Submissions.length !== 1 ? "s" : ""}
          </span>


   <Button
  variant="outlined"
  size="small"
  startIcon={<CalendarDays size={14} />}
  sx={{
    textTransform: "none",
    fontSize: "11px",
    borderRadius: "8px",
    borderColor: "#2563eb",
    color: "#2563eb",
    "&:hover": {
      borderColor: "#1d4ed8",
      backgroundColor: "#eff6ff",
    },
  }}
>
  Load This Week's Tasks
</Button>
          
        </div>
      </div>

     

      {/* BODY */}
      <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden md:grid-cols-[300px_minmax(0,1fr)]">
        {/* LEFT SIDE */}
        <div className="flex min-h-0 flex-col overflow-hidden border-b border-slate-200 bg-slate-50/50 md:border-b-0 md:border-r">
          {/* SEARCH */}
          <div className="shrink-0 border-b border-slate-200 bg-white p-4">
            <div className="relative">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search staff..."
                className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs outline-none transition focus:border-blue-400"
              />
            </div>
          </div>

          {/* LEFT SCROLL AREA */}
          <div className="min-h-0 flex-1 overflow-y-auto">
            {loading ? (
              <div className="flex h-full items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Loader2
                    size={20}
                    className="animate-spin text-blue-500"
                  />

                  <p className="text-[11px] text-slate-400">
                    Loading staff...
                  </p>
                </div>
              </div>
            ) : Submissions.length > 0 ? (
              <div>
                {Submissions.map((submission) => (
                  <button
                    key={submission.user.id}
                    onClick={() => setSelectedSubmission(submission)}
                    className={`w-full border-b border-slate-100 px-4 py-3 text-left transition ${
                      selectedSubmission?.user?.id === submission.user.id
                        ? "bg-blue-50"
                        : "bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* AVATAR */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                        {submission.user.name?.charAt(0)}
                      </div>

                      {/* STAFF INFO */}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-slate-800">
                          {submission.user.name}
                        </p>

                        <p className="mt-0.5 truncate text-[11px] text-slate-500">
                          {submission.user.unit?.name || "No unit"}
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-[10px] text-slate-400">
                            {submission.deliverables?.length || 0} deliverables
                          </span>

                          <span className="text-[10px] font-medium text-blue-600">
                            {submission.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <Users size={28} className="mb-3 text-slate-300" />

                <p className="text-xs font-medium text-slate-600">
                  No Staff Found
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  No staff members match your search.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-white">
          {/* RIGHT SCROLL AREA */}
          <div className="min-h-0 flex-1 overflow-y-auto">
            {selectedSubmission ? (
              <div className="p-6">
                {/* STAFF HEADER */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                      {selectedSubmission.user.name?.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <h2 className="truncate text-sm font-semibold text-slate-800">
                        {selectedSubmission.user.name}
                      </h2>

                      <p className="truncate text-xs text-slate-500">
                        {selectedSubmission.user.unit?.name || "No unit"}
                      </p>

                      <p className="truncate text-[11px] text-slate-400">
                        {selectedSubmission.user.email}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-[10px] font-semibold text-amber-600">
                    {selectedSubmission.status}
                  </span>
                </div>

                {/* WEEK INFORMATION */}
                <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-slate-200 p-3">
                    <div className="mb-1 flex items-center gap-2 text-slate-400">
                      <CalendarDays size={14} />

                      <span className="text-[10px]">
                        Week
                      </span>
                    </div>

                    <p className="text-xs font-medium text-slate-700">
                      {formatDate(selectedSubmission.weekStart)}
                    </p>

                    <p className="text-[10px] text-slate-400">
                      to {formatDate(selectedSubmission.weekEnd)}
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-3">
                    <div className="mb-1 flex items-center gap-2 text-slate-400">
                      <FileText size={14} />

                      <span className="text-[10px]">
                        Deliverables
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-slate-700">
                      {selectedSubmission.deliverables?.length || 0}
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-3">
                    <div className="mb-1 flex items-center gap-2 text-slate-400">
                      <ClipboardCheck size={14} />

                      <span className="text-[10px]">
                        Rating
                      </span>
                    </div>

                    <p className="text-xs font-medium text-slate-700">
                      {selectedSubmission.rating || "Not rated"}
                    </p>
                  </div>
                </div>

                {/* DELIVERABLES */}
                <div className="mb-6">
                  <div className="mb-3 flex items-center gap-2">
                    <ClipboardCheck
                      size={16}
                      className="text-blue-500"
                    />

                    <h3 className="text-sm font-semibold text-slate-800">
                      Weekly Deliverables
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {selectedSubmission.deliverables?.map(
                      (deliverable: any, index: number) => (
                        <div
                          key={index}
                          className="rounded-lg border border-slate-200 p-4"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex min-w-0 gap-3">
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 text-[11px] font-semibold text-blue-600">
                                {index + 1}
                              </div>

                              <div className="min-w-0">
                                <p className="text-xs font-semibold text-slate-800">
                                  {deliverable.title}
                                </p>

                                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                                  {deliverable.verificationMethod}
                                </p>
                              </div>
                            </div>

                            <span className="shrink-0 rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-600">
                              {deliverable.status}
                            </span>
                          </div>

                          <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-400">
                            <CalendarDays size={12} />

                            Due: {formatDate(deliverable.dueDate)}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* SUPPORT NEEDED */}
                <div className="mb-6 rounded-lg border border-slate-200 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <MessageSquareText
                      size={15}
                      className="text-amber-500"
                    />

                    <h3 className="text-xs font-semibold text-slate-800">
                      Support Needed
                    </h3>
                  </div>

                  <p className="text-xs leading-5 text-slate-600">
                    {selectedSubmission.supportNeeded ||
                      "No support requested."}
                  </p>
                </div>

                {/* MANAGER COMMENT */}
                <div className="pb-6">
                  <div className="mb-2 flex items-center gap-2">
                    <MessageSquareText
                      size={15}
                      className="text-blue-500"
                    />

                    <h3 className="text-xs font-semibold text-slate-800">
                      Manager Comment
                    </h3>
                  </div>

                  <textarea
                    defaultValue={
                      selectedSubmission.managerComment || ""
                    }
                    placeholder="Write your feedback..."
                    rows={5}
                    className="w-full resize-none rounded-lg border border-slate-200 p-3 text-xs outline-none transition focus:border-blue-400"
                  />
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center p-6">
                <div className="max-w-sm text-center">
                  <ClipboardCheck
                    size={32}
                    className="mx-auto mb-3 text-slate-300"
                  />

                  <h3 className="text-sm font-semibold text-slate-700">
                    Select a Staff Member
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Choose a staff member from the left to view
                    their weekly deliverables, review their work,
                    and leave manager feedback.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex shrink-0 items-center justify-end gap-2 border-t border-slate-200 bg-white px-6 py-3">
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: "none",
            fontSize: "11px",
            borderRadius: "8px",
          }}
        >
          Close
        </Button>

        <Button
          variant="contained"
          size="small"
          startIcon={<CheckCircle2 size={14} />}
          sx={{
            textTransform: "none",
            fontSize: "11px",
            borderRadius: "8px",
            boxShadow: "none",
          }}
        >
          Mark as Reviewed
        </Button>
      </div>
    </div>
  );
}

export default PendingModal;

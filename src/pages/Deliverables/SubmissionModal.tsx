import {
ClipboardList,

} from "lucide-react";

import { Button } from "@mui/material";
import { useSubmissionStore } from "../../components/ZustandShare/DeliverablesZuts";
import { useAuthStore } from "../../components/ZustandShare/AuthZuts";

export function SubmissionModal({deliverables,supportNeeded, setIsOpenModal,


}:any){


  const {AddSubmission} = useSubmissionStore()

  const {currentUser} = useAuthStore()

  function ConfirmSubmission() {


    if (!currentUser) return null

    const userId = currentUser.id


    // console.log(
    //   {
    //   deliverables,
    //   supportNeeded,
    //   UserId 

    //   }
    // )


    
  AddSubmission(   {
      deliverables,
      supportNeeded,
      userId 

      })
  }



return (
  <>
    <div className="w-full">
      {/* Modal Header */}
      <div className="flex items-start gap-3 border-b border-slate-200 pb-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100">
          <ClipboardList
            size={17}
            className="text-amber-600"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Review Weekly Submission
          </h2>

          <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
            Review the information you entered before submitting.
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-4 rounded-md border border-blue-100 bg-blue-50 px-3 py-3">
        <div className="flex gap-2">
          <ClipboardList
            size={15}
            className="mt-0.5 shrink-0 text-blue-800"
          />

          <div>
            <p className="text-xs font-medium text-blue-900">
              Submission Review
            </p>

            <p className="mt-1 text-[10px] leading-relaxed text-blue-700">
              Below is exactly what you entered in the form.
            </p>
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className="mt-4">
        <h3 className="mb-2 text-xs font-semibold text-slate-800">
          Weekly Deliverables
        </h3>

        <div className="max-h-64 space-y-2 overflow-y-auto pr-1">
          {deliverables.map((item:any, index:number) => {
            const hasData =
              item?.title?.trim() ||
              item?.verificationMethod?.trim() ||
              item?.dueDate;

            if (!hasData) {
              return null;
            }

            return (
              <div
                key={index}
                className="rounded-md border border-slate-200 bg-slate-50 p-3"
              >
                <div className="flex gap-2">
                  {/* Number */}
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-900 text-[9px] font-semibold text-white">
                    {index + 1}
                  </span>

                  {/* Details */}
                  <div className="min-w-0 flex-1">
                    {/* Title */}
                    <p className="text-xs font-semibold text-slate-900">
                      {item?.title || "No deliverable entered"}
                    </p>

                    {/* Details Grid */}
                    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {/* Verification */}
                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400">
                          Verification
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-600">
                          {item?.verificationMethod ||
                            "Not provided"}
                        </p>
                      </div>

                      {/* Due Date */}
                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400">
                          Due Date
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-600">
                          {item?.dueDate || "Not provided"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* No Deliverables */}
          {!deliverables.some(
            (item:any) =>
              item?.title?.trim() ||
              item?.verificationMethod?.trim() ||
              item?.dueDate
          ) && (
            <div className="rounded-md border border-dashed border-slate-300 px-4 py-6 text-center">
              <ClipboardList
                size={20}
                className="mx-auto text-slate-300"
              />

              <p className="mt-2 text-xs text-slate-500">
                No deliverables entered yet.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Support Needed */}
      <div className="mt-3 rounded-md border border-slate-200 bg-white px-3 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Support Needed
        </p>

        <p className="mt-1 whitespace-pre-wrap text-xs text-slate-700">
          {supportNeeded?.trim()
            ? supportNeeded
            : "No support requested."}
        </p>
      </div>

      {/* Notice */}
      <div className="mt-3 rounded-md border border-amber-100 bg-amber-50 px-3 py-2.5">
        <p className="text-[10px] leading-relaxed text-amber-800">
          This is only a review. Your submission has not been sent yet.
        </p>
      </div>

      {/* Modal Actions */}
      <div className="mt-5 flex justify-end gap-2">
        <Button
          type="button"
          variant="outlined"
          onClick={() => setIsOpenModal(false)}
          sx={{
            textTransform: "none",
            fontSize: "12px",
            borderColor: "#cbd5e1",
            color: "#475569",
          }}
        >
          Go Back & Edit
        </Button>

        <Button
          type="button"
          variant="contained"
          // onClick={() => setIsOpenModal(false)}
          onClick={ConfirmSubmission}
          sx={{
            textTransform: "none",
            fontSize: "12px",
            backgroundColor: "#230171",
            "&:hover": {
              backgroundColor: "#1e3a8a",
            },
          }}
        >
          Confirm Submission
        </Button>
      </div>
    </div>
  </> 
)
}
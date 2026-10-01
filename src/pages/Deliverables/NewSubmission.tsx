import {
  ClipboardList,
  FileText,
  Send,
  Save,
  CheckCircleIcon,
  AlertCircle,
} from "lucide-react";
import { InputText } from "../../utils/utils";
import { useForm } from "react-hook-form";
import { type SubmissionForm } from "../../GlobalTypes";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import ModalOpen from "../../components/Modal/Modal";
import { SubmissionModal } from "./SubmissionModal";
import { useStaffStore } from "../../components/ZustandShare/StaffZuts";
import { useAuthStore } from "../../components/ZustandShare/AuthZuts";

function NewSubmission() {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useForm<SubmissionForm>();




  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");



  // Watch form values
  const deliverables = watch("deliverables") || [];
  const supportNeeded = watch("supportNeeded");

  // Check whether all 5 deliverables are completely filled
  const allFiveFilled =
    deliverables.length === 5 &&
    deliverables.every(
      (item) =>
        item?.title?.trim() &&
        item?.verificationMethod?.trim() &&
        item?.dueDate
    );

  // Open review modal
  const openReviewModal = async () => {
    setFormError("");

    const valid = await trigger("deliverables");

    if (!valid) {
      setFormError(
        "Please complete all required fields in the highlighted deliverable rows."
      );

      return;
    }

    if (!allFiveFilled) {
      setFormError(
        "Please complete all five deliverables before reviewing your submission."
      );

      return;
    }

    setIsOpenModal(true);
  };

  return (
    <div className="w-full bg-white">
      <form className="space-y-4">
        {/* =========================
            HEADER
        ========================= */}
    <div className="relative overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-r from-blue-50 via-indigo-100  px-5 py-4">
  {/* Small decorative gradient */}
  <div className="pointer-events-none absolute right-0 top-0 h-24 w-48 bg-gradient-to-bl from-amber-100/60 via-blue-100/30 to-transparent" />

  <div className="relative flex items-start justify-between gap-4">
    <div>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/80 shadow-sm ring-1 ring-blue-100">
          <CheckCircleIcon
            size={17}
            className="text-blue-900"
          />
        </div>

        <div>
          <h1 className="text-sm font-semibold text-slate-900">
            New Weekly Submission
          </h1>

          <p className="mt-0.5 text-[11px] text-slate-600">
            Plan your deliverables and indicate any support required
            for the week.
          </p>
        </div>
      </div>
    </div>

    <div className="hidden shrink-0 rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm ring-1 ring-slate-100 sm:block">
      Weekly Review
    </div>
  </div>
</div>

        {/* =========================
            DELIVERABLES SECTION
        ========================= */}
        <div className="overflow-hidden rounded-xl border border-slate-100 bg-white">
          {/* Section Header */}
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-gradient-to-r from-white to-slate-50/60 px-4 py-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50">
                <ClipboardList
                  size={15}
                  className="text-blue-900"
                />
              </div>

              <div className="min-w-0">
                <h2 className="text-xs font-semibold text-slate-900">
                  Weekly Deliverables
                </h2>

                <p className="mt-0.5 text-[10px] text-slate-500">
                  Enter the five deliverables you intend to complete this
                  week.
                </p>
              </div>
            </div>

            <div className="shrink-0 rounded-md bg-white px-2.5 py-1 text-[10px] font-medium text-slate-500 ring-1 ring-slate-100">
              5 required
            </div>
          </div>

          {/* Error Message */}
          {formError && (
            <div className="mx-4 mt-3 flex items-start gap-2 rounded-lg border border-red-100 bg-red-50 px-3 py-2.5">
              <AlertCircle
                size={16}
                className="mt-0.5 shrink-0 text-red-500"
              />

              <div>
                <p className="text-[11px] font-semibold text-red-700">
                  Submission cannot be reviewed
                </p>

                <p className="mt-0.5 text-[10px] leading-4 text-red-600">
                  {formError}
                </p>
              </div>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto px-2 pb-2 pt-3">
            <table className="w-full min-w-[850px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="w-10 rounded-l-md bg-slate-50 px-3 py-2 text-left text-[10px] font-semibold text-slate-500">
                    #
                  </th>

                  <th className="bg-slate-50 px-3 py-2 text-left text-[10px] font-semibold text-slate-500">
                    Deliverable
                  </th>

                  <th className="bg-slate-50 px-3 py-2 text-left text-[10px] font-semibold text-slate-500">
                    Verification Method
                  </th>

                  <th className="w-40 rounded-r-md bg-slate-50 px-3 py-2 text-left text-[10px] font-semibold text-slate-500">
                    Due Date
                  </th>
                </tr>
              </thead>

            <tbody>
  {[1, 2, 3, 4, 5].map((number) => {
    const index = number - 1;

    return (
      <tr key={number}>
        {/* Number */}
        <td className="border-b border-slate-50 px-3 py-3 align-top">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-50 text-[10px] font-semibold text-slate-500">
            {number}
          </div>
        </td>

        {/* Deliverable */}
        <td className="border-b border-slate-50 px-3 py-2.5 align-top">
          <InputText
            register={register(`deliverables.${index}.title`, {
              validate: (value) => {
                const item = deliverables[index];

                if (
                  !value &&
                  !item?.verificationMethod &&
                  !item?.dueDate
                ) {
                  return true;
                }

                return value?.trim()
                  ? true
                  : "Deliverable is required";
              },
            })}
          />

          {errors.deliverables?.[index]?.title && (
            <p className="mt-1 text-[10px] font-medium text-red-500">
              {errors.deliverables[index]?.title?.message}
            </p>
          )}
        </td>

        {/* Verification */}
        <td className="border-b border-slate-50 px-3 py-2.5 align-top">
          <input
            {...register(
              `deliverables.${index}.verificationMethod`,
              {
                validate: (value) => {
                  const item = deliverables[index];

                  if (
                    !item?.title &&
                    !value &&
                    !item?.dueDate
                  ) {
                    return true;
                  }

                  return value?.trim()
                    ? true
                    : "Verification method is required";
                },
              }
            )}
            type="text"
            placeholder="How will this be verified?"
            className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-blue-700"
          />

          {errors.deliverables?.[index]?.verificationMethod && (
            <p className="mt-1 text-[10px] font-medium text-red-500">
              {
                errors.deliverables[index]?.verificationMethod
                  ?.message
              }
            </p>
          )}
        </td>

        {/* Due Date */}
    <input
  {...register(`deliverables.${index}.dueDate`, {
    required: "Due date is required",
  })}
  type="date"
  className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none focus:border-blue-700"
/>

{errors.deliverables?.[index]?.dueDate && (
  <p className="mt-1 text-[10px] font-medium text-red-500">
    {errors.deliverables[index]?.dueDate?.message}
  </p>
)}
      </tr>
    );
  })}
</tbody>
            </table>
          </div>

          {/* Completion Indicator */}
          <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2.5">
            <p className="text-[10px] text-slate-400">
              All five deliverables must be completed before review.
            </p>

            <div
              className={`flex items-center gap-1.5 text-[10px] font-medium ${
                allFiveFilled
                  ? "text-emerald-600"
                  : "text-slate-400"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  allFiveFilled
                    ? "bg-emerald-500"
                    : "bg-slate-300"
                }`}
              />

              {allFiveFilled
                ? "Ready for review"
                : "5 of 5 required"}
            </div>
          </div>
        </div>

        {/* =========================
            SUPPORT NEEDED
        ========================= */}
        <div className="overflow-hidden rounded-xl border border-slate-100 bg-white">
          <div className="flex items-center gap-2.5 border-b border-slate-100 bg-gradient-to-r from-white to-amber-50/30 px-4 py-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-50">
              <FileText
                size={15}
                className="text-amber-600"
              />
            </div>

            <div>
              <h2 className="text-xs font-semibold text-slate-900">
                Support Needed
              </h2>

              <p className="mt-0.5 text-[10px] text-slate-500">
                Tell your manager about any support required.
              </p>
            </div>
          </div>

          <div className="p-3">
            <textarea
              {...register("supportNeeded")}
              rows={4}
              placeholder="Enter any training, access, tools, information or other support needed..."
              className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-blue-700"
            />
          </div>
        </div>

        {/* =========================
            ACTIONS
        ========================= */}
        <div className="flex flex-col-reverse justify-end gap-2 border-t border-slate-100 pt-3 sm:flex-row">
          {/* Save Draft */}
          <button
            type="button"
            className="flex h-9 items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-4 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <Save size={14} />
            Save Draft
          </button>

          {/* Review */}
          <Button
            onClick={openReviewModal}
            variant="contained"
            type="button"
            disabled={!allFiveFilled}
            sx={{
              height: "36px",
              minWidth: "150px",
              borderRadius: "6px",
              textTransform: "none",
              fontSize: "12px",
              fontWeight: 600,
              boxShadow: "none",
              background:
                "linear-gradient(135deg, #172554 0%, #1e3a8a 100%)",
              "&:hover": {
                boxShadow: "none",
                background:
                  "linear-gradient(135deg, #1e3a8a 0%, #172554 100%)",
              },
              "&.Mui-disabled": {
                background: "#e2e8f0",
                color: "#94a3b8",
              },
            }}
            startIcon={<Send size={14} />}
          >
            Review Submission
          </Button>
        </div>
      </form>

      {/* =========================
          REVIEW MODAL
      ========================= */}
      {isOpenModal && (
        <ModalOpen
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          modalClassName="w-[95vw] max-w-4xl p-4"
        >
          <SubmissionModal
            deliverables={deliverables}
            supportNeeded={supportNeeded}
            setIsOpenModal={setIsOpenModal}
          />
        </ModalOpen>
      )}
    </div>
  );
}

export default NewSubmission;
import {
  ClipboardCheck,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@mui/material";
import { useState } from "react";
import ModalOpen from "../../components/Modal/Modal";
import PendingModal from "./PendingModalReviews";

function PendingReview() {
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  return (
    <div className="min-h-full bg-slate-50 p-4">

      {/* =========================
          PAGE HEADER
      ========================= */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50">
            <ClipboardCheck
              size={20}
              className="text-amber-500"
            />
          </div>

          <div>
            <h1 className="text-base font-semibold text-slate-900">
              Pending Reviews
            </h1>

            <p className="text-xs text-slate-500">
              Review weekly deliverables submitted by your staff.
            </p>
          </div>
        </div>
      </div>

      {/* =========================
          MAIN REVIEW CARD
      ========================= */}
      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-50" />

        <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-amber-50" />

        <div className="relative flex flex-col items-center px-6 py-14 text-center">

          {/* Icon */}
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
            <Users
              size={30}
              className="text-blue-900"
            />

            <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400">
              <CheckCircle2
                size={13}
                className="text-white"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-sm font-semibold text-slate-900">
            Review Your Staff
          </h2>

          <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-500">
            Select a staff member to view their weekly deliverables,
            review their work, and provide feedback.
          </p>

          {/* Review Action */}
          <Button
            type="button"
            variant="contained"
            onClick={() => setIsStaffModalOpen(true)}
            endIcon={<ArrowRight size={16} />}
            sx={{
              mt: 4,
              px: 2.5,
              py: 1,
              borderRadius: "7px",
              textTransform: "none",
              fontSize: "12px",
              fontWeight: 600,
              backgroundColor: "#172554",
              boxShadow: "0 3px 10px rgba(23, 37, 84, 0.15)",
              "&:hover": {
                backgroundColor: "#1e3a8a",
                boxShadow: "0 5px 14px rgba(23, 37, 84, 0.20)",
              },
            }}
          >
            Start Staff Review
          </Button>

          {/* Small supporting text */}
          <div className="mt-4 flex items-center gap-1.5 text-[10px] text-slate-400">
            <ClipboardCheck size={12} />
            <span>Review pending weekly submissions</span>
          </div>
        </div>
      </div>

      {/* =========================
          REVIEW MODAL
      ========================= */}
      <ModalOpen
        isOpen={isStaffModalOpen}
        onClose={() => setIsStaffModalOpen(false)}
        modalClassName="w-[95vw] max-w-5xl"
      >
        {/* <PendingModal
          selectedStaff={selectedStaff}
          setSelectedStaff={setSelectedStaff}
          comment={comment}
          setComment={setComment}
          onClose={() => {
            setIsStaffModalOpen(false);
            setSelectedStaff(null);
          }}
        /> */}


        <PendingModal />
      </ModalOpen>
    </div>
  );
}

export default PendingReview;

import React from "react";
import ReactModal from "react-modal";
import { X } from "lucide-react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  modalClassName?: string;
  showHeader?: boolean;
}

ReactModal.setAppElement("#root");

function ModalOpen({
  isOpen,
  onClose,
  title,
  children,
  modalClassName = "w-[700px] max-w-[90vw]",
  showHeader = false,
}: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="relative z-[99999] outline-none"
      overlayClassName="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 p-4"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className={`relative z-[100000] flex max-h-[90vh] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl ${modalClassName}`}
      >
        {/* HEADER */}
        {showHeader && (
          <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3">
            <h2 className="text-sm font-semibold text-black">
              {title}
            </h2>

            <Button
              onClick={onClose}
              className="min-w-0 text-gray-500 hover:text-black"
            >
              <X size={16} />
            </Button>
          </div>
        )}

        {/* CONTENT */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          {showHeader ? (
            <div className="p-4">
              {children}
            </div>
          ) : (
            children
          )}
        </div>
      </motion.div>
    </ReactModal>
  );
}

export default ModalOpen;
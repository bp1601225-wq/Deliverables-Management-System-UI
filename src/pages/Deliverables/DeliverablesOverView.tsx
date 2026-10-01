import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  List,
  Plus,
  Clock3,
} from "lucide-react";
import IsLoadingShow from "../../utils/utils";
import NewSubmission from "./NewSubmission";
import DeliverableList from "./DeliverableList";

function DeliverablesManagement() {
  const [activeTab, setActiveTab] = useState<
    "list" | "add" | "pending"
  >("add");

  const [loading, setLoading] = useState(false);

  const changeTab = (tab: "list" | "add" | "pending") => {
    if (tab === activeTab) return;

    setLoading(true);

    setTimeout(() => {
      setActiveTab(tab);
      setLoading(false);
    }, 300);
  };

  if (loading) {
    return <IsLoadingShow />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl bg-white"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 rounded-lg bg-gradient-to-br from-blue-50 via-white to-white px-4 py-3"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-900 text-white"
        >
          <ClipboardList size={16} />
        </motion.div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Deliverables Management
          </h2>

          <p className="text-[11px] text-slate-500">
            Create, track and review weekly staff deliverables.
          </p>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="mt-3 flex items-center">
        {/* New Submission */}
        <button
          type="button"
          onClick={() => changeTab("add")}
          className={`relative flex items-center gap-1.5 px-3 py-2 text-xs transition ${
            activeTab === "add"
              ? "font-medium text-slate-900"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          <Plus size={13} />

          New Submission

          {activeTab === "add" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
        </button>

        {/* My Deliverables */}
        <button
          type="button"
          onClick={() => changeTab("list")}
          className={`relative flex items-center gap-1.5 px-3 py-2 text-xs transition ${
            activeTab === "list"
              ? "font-medium text-slate-900"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          <List size={13} />

          My Deliverables

          {activeTab === "list" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
        </button>

        {/* Pending Review */}
        <button
          type="button"
          onClick={() => changeTab("pending")}
          className={`relative flex items-center gap-1.5 px-3 py-2 text-xs transition ${
            activeTab === "pending"
              ? "font-medium text-amber-600"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          <Clock3 size={13} />

          Pending Review

          {activeTab === "pending" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="pt-3">
        <AnimatePresence mode="wait">
          {/* My Deliverables */}
          {activeTab === "list" && (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <DeliverableList />
            </motion.div>
          )}

          {/* New Submission */}
          {activeTab === "add" && (
            <motion.div
              key="add"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <NewSubmission />
            </motion.div>
          )}

          {/* Pending Review */}
          {activeTab === "pending" && (
            <motion.div
              key="pending"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4 text-xs text-slate-500">
                Pending Review
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default DeliverablesManagement;
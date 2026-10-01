import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Outlet } from "react-router-dom";
import SidebarComponent from "../SideBar/Sidebar";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen ">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <SidebarComponent
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="min-h-screen md:ml-64">

        {/* Header */}
        <header className="sticky top-0 z-30 h-14 border-b border-slate-200 bg-white">
          <div className="flex h-full items-center justify-between px-3 md:px-6">

            <div className="flex min-w-0 items-center gap-2">

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 md:hidden"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>

              <h2 className="truncate text-xs font-semibold text-slate-900 md:text-sm">
                Staff Deliverables Management System
              </h2>

            </div>

            <span className="ml-3 shrink-0 text-[10px] text-slate-500 md:text-sm">
              Welcome back
            </span>

          </div>
        </header>

        {/* Page Content */}
        <main className="p-2 md:p-3">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default AppLayout;
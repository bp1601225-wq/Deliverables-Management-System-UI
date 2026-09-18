import { Outlet } from "react-router-dom";
import SidebarComponent from "../SideBar/Sidebar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SidebarComponent />

      <div className="ml-64 min-h-screen">
        <header className="h-16 border-b border-slate-200 bg-white">
          <div className="flex h-full items-center justify-between px-6">
            <h2 className="text-sm font-semibold text-slate-900">
              Staff Deliverables Management System
            </h2>

            <span className="text-sm text-slate-500">
              Welcome back
            </span>
          </div>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
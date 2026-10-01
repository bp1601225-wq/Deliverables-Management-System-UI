import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navigation = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
  },

  // {
  //   label: "Staff Information",
  //   to: "/staff-information",
  //   icon: LayoutDashboard,
  // },

    {
    label: "Staff Information",

    icon: LayoutDashboard,
    children: [
      {
        label: "Create Staff",
    to: "/staff-information",

      },
      {
        label: "Staff List",
        to: "/staff-list",
      },
    ],
  },

  {
    label: "Deliverables",
    icon: ClipboardList,
    children: [
      {
        label: "My Deliverables",
        to: "/my-deliverables",
      },
      {
        label: "Pending Review",
        to: "/pending-review",
      },
    ],
  },

  {
    label: "Reports",
    icon: BarChart3,
    children: [
      {
        label: "Review Reports",
        to: "/reports",
      },
      {
        label: "Performance",
        to: "/reports/performance",
      },
    ],
  },

  {
    label: "Settings",
    to: "/settings",
    icon: Settings,
  },
];

function SidebarComponent({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuToggle = (label: string) => {
    setOpenMenu((current) =>
      current === label ? null : label
    );
  };

  const closeMobileSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <aside
      className={`
        fixed
        left-0
        top-0
        z-50
        h-screen
        w-56
        bg-white
        border-r
        border-slate-200
        transition-transform
        duration-300
        ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      {/* Sidebar Header */}
      <div className="flex h-16 items-center justify-between border-b border-slate-100 px-5">
        <div>
          <h1 className="text-base font-bold text-slate-900">
            SDMS
          </h1>

          <p className="text-[11px] text-slate-500">
            Staff Deliverables
          </p>
        </div>

        {/* Mobile Close Button */}
        <button
          type="button"
          onClick={closeMobileSidebar}
          className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900 md:hidden"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 p-3">
        {navigation.map((item) => {
          const Icon = item.icon;

          const hasChildren =
            item.children && item.children.length > 0;

          const isOpen = openMenu === item.label;

          return (
            <div key={item.label}>
              {/* Parent With Children */}
              {hasChildren ? (
                <button
                  type="button"
                  onClick={() => handleMenuToggle(item.label)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={17} />

                    <span>{item.label}</span>
                  </span>

                  {isOpen ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronRight size={14} />
                  )}
                </button>
              ) : (
                /* Normal Link */
                <NavLink
                  to={item.to!}
                  onClick={closeMobileSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-md px-3 py-2 text-xs font-medium transition ${
                      isActive
                        ? "border-l-4 border-blue-900 bg-blue-50/50 text-slate-900"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`
                  }
                >
                  <Icon size={17} />

                  <span>{item.label}</span>
                </NavLink>
              )}

              {/* Children */}
              {hasChildren && isOpen && (
                <div className="ml-8 mt-1 space-y-1 border-l border-slate-200 pl-3">
                  {item.children?.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      onClick={closeMobileSidebar}
                      className={({ isActive }) =>
                        `block rounded-md px-3 py-1.5 text-xs transition ${
                          isActive
                            ? "font-medium text-slate-900"
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export default SidebarComponent;
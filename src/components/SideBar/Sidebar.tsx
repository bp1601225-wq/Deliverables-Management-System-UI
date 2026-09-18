import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

// Sidebar navigation structure
// A parent can have children, while a normal item can have no children.
const navigation = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Deliverables",
    icon: ClipboardList,
    children: [
      {
        label: "My Deliverables",
        to: "/deliverables/my",
      },
      {
        label: "All Deliverables",
        to: "/deliverables",
      },
      {
        label: "Pending Review",
        to: "/deliverables/pending",
      },
    ],
  },
  {
    label: "Staff",
    icon: Users,
    children: [
      {
        label: "All Staff",
        to: "/staff",
      },
      {
        label: "Units",
        to: "/staff/units",
      },
    ],
  },
  {
    label: "Reports",
    icon: BarChart3,
    children: [
      {
        label: "Weekly Reports",
        to: "/reports/weekly",
      },
      {
        label: "Monthly Reports",
        to: "/reports/monthly",
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

function SidebarComponent() {
  // Stores which parent menu is currently open
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // Opens a menu if closed and closes it if already open
  const handleMenuToggle = (label: string) => {
    setOpenMenu((current) =>
      current === label ? null : label
    );
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-white">
      
      {/* Sidebar Header / Logo */}
      <div className="flex h-16 items-center border-b border-slate-200 px-5">
        <div>
          <h1 className="text-lg font-bold text-slate-900">
            SDMS
          </h1>

          <p className="text-xs text-slate-500">
            Staff Deliverables
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-1 p-3">

        {navigation.map((item) => {
          const Icon = item.icon;

          // Check whether this navigation item has children
          const hasChildren =
            item.children && item.children.length > 0;

          // Check whether this parent menu is currently open
          const isOpen = openMenu === item.label;

          return (
            <div key={item.label}>

              {/* Parent navigation item */}
              {hasChildren ? (
                <button
                  type="button"
                  onClick={() => handleMenuToggle(item.label)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} />

                    <span>{item.label}</span>
                  </span>

                  {/* Change arrow depending on open/closed state */}
                  {isOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
              ) : (
                /* Normal navigation item without children */
                <NavLink
                  to={item.to!}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`
                  }
                >
                  <Icon size={18} />

                  <span>{item.label}</span>
                </NavLink>
              )}

              {/* Child navigation items */}
              {hasChildren && isOpen && (
                <div className="ml-9 mt-1 space-y-1 border-l border-slate-200 pl-3">
                  {item.children?.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `block rounded-md px-3 py-2 text-sm transition ${
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
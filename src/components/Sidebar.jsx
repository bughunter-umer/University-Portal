import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Profile", path: "/profile", icon: "👤" },
    { name: "Enrollment", path: "/enrollment", icon: "📝" },
    { name: "Attendance", path: "/attendance", icon: "📅" },
    { name: "Result", path: "/result", icon: "🏆" },
    { name: "Accounts", path: "/accounts", icon: "💳" },
    { name: "Change Password", path: "/change-password", icon: "🔒" },
    { name: "Logout", path: "/logout", icon: "🚪" },
  ];

  return (
    <aside className="bg-slate-900 text-white w-64 min-h-screen border-r border-slate-800 flex flex-col p-5">
      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center py-3 px-3 rounded-lg text-[15px] font-medium transition-all duration-300 group ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-700/40 hover:text-white"
                  }`
                }
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Student Info */}
      <div className="mt-auto border-t border-slate-700 pt-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="font-bold text-sm">UA</span>
          </div>
          <div>
            <p className="font-semibold text-sm">Umer Awan</p>
            <p className="text-slate-400 text-xs">BSCS — 7th Semester</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

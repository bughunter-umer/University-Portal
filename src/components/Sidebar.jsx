import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Profile", path: "/profile", icon: "👤" },
    { name: "Enrollment", path: "/enrollment", icon: "📝" },
    { name: "Attendance", path: "/attendance", icon: "📊" },
    { name: "Result", path: "/result", icon: "🏆" },
    { name: "Accounts", path: "/accounts", icon: "💳" },
    { name: "Change Password", path: "/change-password", icon: "🔒" },
    { name: "Logout", path: "/logout", icon: "🚪" },
  ];

  return (
    <aside className="bg-gradient-to-b from-slate-800 to-slate-900 text-white w-72 min-h-screen shadow-xl p-6 border-r border-slate-700 flex flex-col">
      {/* Logo Section */}
      <div className="text-center mb-10 pt-4">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="text-2xl font-bold text-white">AU</span>
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          University Portal
        </h1>
        <p className="text-slate-400 text-sm mt-2">Student Dashboard</p>
      </div>

      {/* Navigation Menu - This will grow to take available space */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 group ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-300 hover:bg-slate-700/50 hover:text-white hover:translate-x-2"
                  }`
                }
              >
                <span className="text-lg mr-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Info at Bottom - Now properly positioned */}
      <div className="mt-auto pt-6">
        <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">UD</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Umer Daud</p>
              <p className="text-slate-400 text-xs">Student</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
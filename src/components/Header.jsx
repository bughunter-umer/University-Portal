import React from "react";
import { Menu } from "lucide-react";

const Header = ({ studentName, toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between bg-slate-900 text-white px-6 py-4 shadow-md border-b border-slate-800">
      {/* Left Section: University Name + Toggle Button */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-slate-800 rounded hover:bg-slate-700 transition"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-bold tracking-wide">
          ABBOTTABAD UNIVERSITY OF SCIENCE & TECHNOLOGY
        </h1>
      </div>

      {/* Right Section: Student Name */}
      <div className="text-sm font-semibold uppercase">{studentName}</div>
    </div>
  );
};

export default Header;

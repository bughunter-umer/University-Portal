import React from "react";

const Header = ({ studentName = "Umer Daud" }) => {
  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-5 shadow-lg border-b border-slate-700">
      {/* University Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
          <span className="text-white font-bold text-lg">AUST</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Abbottabad University Of Science And Technology
          </h2>
          <p className="text-slate-400 text-sm mt-1">Excellence in Education & Innovation</p>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="text-white font-semibold text-lg">{studentName}</p>
          <p className="text-slate-400 text-sm">Computer Science</p>
        </div>
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
            <span className="text-white font-bold">UD</span>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
        </div>
        
        {/* Notification Bell */}
        <div className="relative p-3 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors cursor-pointer">
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.24 8.56a5.97 5.97 0 01-4.66-6.24M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
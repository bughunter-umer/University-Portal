import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Result from "../components/Result";

const ResultPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="bg-slate-950 text-white min-h-screen flex flex-col overflow-hidden">
      {/* ✅ Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-30">
        <Header
          studentName="Umer Daud"
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
      </header>

      {/* ✅ Main Layout */}
      <div className="flex flex-1 pt-16">
        {/* ✅ Fixed Sidebar */}
        {sidebarOpen && (
          <div className="fixed left-0 top-16 bottom-0 w-64 bg-slate-900 border-r border-slate-800 z-20">
            <Sidebar />
          </div>
        )}

        {/* ✅ Scrollable Main Content */}
        <main
          className="flex-1 transition-all duration-300 p-6 overflow-y-auto"
          style={{ marginLeft: sidebarOpen ? "16rem" : "0" }} // 16rem = w-64
        >
          <Result />
        </main>
      </div>
    </div>
  );
};

export default ResultPage;

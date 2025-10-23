import React, { useState } from "react";
import { Download } from "lucide-react";

const Result = () => {
  const [criteria, setCriteria] = useState("Transcript");
  const [session, setSession] = useState("Fall 2025");

  const sessions = [
    "Fall 2015",
    "Spring 2016",
    "Fall 2016",
    "Spring 2017",
    "Fall 2017",
    "Spring 2018",
    "Fall 2018",
    "Spring 2019",
    "Fall 2019",
    "Spring 2020",
    "Fall 2020",
    "Spring 2021",
    "Fall 2021",
    "Spring 2022",
    "Fall 2022",
    "Spring 2023",
    "Fall 2023",
    "Spring 2024",
    "Fall 2024",
    "Spring 2025",
    "Fall 2025",
  ];

  const handleDownload = () => {
    alert(`Downloading ${criteria} for ${session}...`);
  };

  return (
    <div className="bg-slate-900 text-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
        Student Result Portal
      </h2>

      {/* Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Criteria Selector */}
        <div>
          <label className="block text-slate-400 text-sm mb-2">
            Criteria
          </label>
          <select
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none"
          >
            <option>Transcript</option>
            <option>Semester Result</option>
          </select>
        </div>

        {/* Session Selector */}
        <div>
          <label className="block text-slate-400 text-sm mb-2">Session</label>
          <select
            value={session}
            onChange={(e) => setSession(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-500/30 outline-none"
          >
            {sessions.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </select>
        </div>

        {/* Download Button */}
        <div className="flex items-end justify-center md:justify-start">
          <button
            onClick={handleDownload}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all py-3 px-5 rounded-lg font-semibold shadow-md"
          >
            <Download size={18} />
            Download
          </button>
        </div>
      </div>

      {/* Result Display */}
      <div className="border border-slate-700 rounded-lg p-5 bg-slate-800/60">
        <h3 className="text-xl font-semibold text-blue-300 mb-3">
          {criteria === "Transcript" ? "Full Transcript" : "Semester Result"}
        </h3>

        {criteria === "Transcript" ? (
          <p className="text-slate-400 text-sm">
            The complete transcript for <span className="text-indigo-400">{session}</span> is ready for download.
          </p>
        ) : (
          <div className="text-slate-300 text-sm space-y-2">
            <p>• GPA: <span className="text-blue-400">3.65</span></p>
            <p>• Credit Hours: <span className="text-blue-400">18</span></p>
            <p>• Status: <span className="text-green-400">Passed</span></p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-slate-400 text-xs text-center mt-6">
        © 2025 AUST. All Rights Reserved.
      </div>
    </div>
  );
};

export default Result;

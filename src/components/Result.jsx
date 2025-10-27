import React, { useState } from "react";
import { Download, FileText, Award, Calendar, ChevronDown, Star, BookOpen, GraduationCap } from "lucide-react";

const Result = () => {
  const [criteria, setCriteria] = useState("Transcript");
  const [session, setSession] = useState("Fall 2025");

  const sessions = [
    "Fall 2015", "Spring 2016", "Fall 2016", "Spring 2017", "Fall 2017",
    "Spring 2018", "Fall 2018", "Spring 2019", "Fall 2019", "Spring 2020",
    "Fall 2020", "Spring 2021", "Fall 2021", "Spring 2022", "Fall 2022",
    "Spring 2023", "Fall 2023", "Spring 2024", "Fall 2024", "Spring 2025",
    "Fall 2025",
  ];

  const handleDownload = () => {
    alert(`Downloading ${criteria} for ${session}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Main Card */}
        <div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 border-b border-slate-700/50 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Student Result Portal
                  </h1>
                  <p className="text-slate-400 text-sm mt-1">
                    Access your academic records and transcripts
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-2 bg-slate-700/50 rounded-full px-4 py-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-slate-300">Official Portal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Selectors Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Criteria Selector */}
              <div className="group">
                <label className="flex items-center text-slate-400 text-sm mb-3 font-medium">
                  <FileText className="w-4 h-4 mr-2" />
                  Document Type
                </label>
                <div className="relative">
                  <select
                    value={criteria}
                    onChange={(e) => setCriteria(e.target.value)}
                    className="w-full bg-slate-700/50 text-white p-4 rounded-2xl border border-slate-600/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 appearance-none cursor-pointer group-hover:border-slate-500"
                  >
                    <option>Transcript</option>
                    <option>Semester Result</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Session Selector */}
              <div className="group">
                <label className="flex items-center text-slate-400 text-sm mb-3 font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  Academic Session
                </label>
                <div className="relative">
                  <select
                    value={session}
                    onChange={(e) => setSession(e.target.value)}
                    className="w-full bg-slate-700/50 text-white p-4 rounded-2xl border border-slate-600/50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 appearance-none cursor-pointer group-hover:border-slate-500"
                  >
                    {sessions.map((s, i) => (
                      <option key={i}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Download Button */}
              <div className="flex items-end">
                <button
                  onClick={handleDownload}
                  className="w-full group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Download Document</span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>

            {/* Result Display */}
            <div className="border border-slate-700/50 rounded-2xl p-6 bg-slate-800/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  {criteria === "Transcript" ? "Academic Transcript" : "Semester Performance"}
                </h3>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {session}
                </div>
              </div>

              {criteria === "Transcript" ? (
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Your complete academic transcript for <span className="text-indigo-400 font-semibold">{session}</span> is now available. 
                    This document includes all courses, grades, and cumulative GPA.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-slate-700/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400">3.78</div>
                      <div className="text-slate-400 text-sm">CGPA</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-400">142</div>
                      <div className="text-slate-400 text-sm">Credits Completed</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400">A</div>
                      <div className="text-slate-400 text-sm">Current Grade</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-xl">
                        <span className="text-slate-400">GPA</span>
                        <span className="text-blue-400 font-semibold text-lg">3.65</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-xl">
                        <span className="text-slate-400">Credit Hours</span>
                        <span className="text-green-400 font-semibold text-lg">18</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-xl">
                        <span className="text-slate-400">Status</span>
                        <span className="text-emerald-400 font-semibold text-lg flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          Passed
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl p-4 border border-blue-500/20">
                      <h4 className="text-slate-300 font-semibold mb-2">Performance Summary</h4>
                      <p className="text-slate-400 text-sm">
                        Excellent performance this semester with consistent grades across all courses.
                        Maintained above 3.5 GPA for consecutive semesters.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-slate-700/20 rounded-xl">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-slate-300 font-medium text-sm">PDF Format</div>
                  <div className="text-slate-500 text-xs">Official document</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-slate-700/20 rounded-xl">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Award className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-slate-300 font-medium text-sm">Verified</div>
                  <div className="text-slate-500 text-xs">University seal</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-slate-700/20 rounded-xl">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Download className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-slate-300 font-medium text-sm">Instant</div>
                  <div className="text-slate-500 text-xs">Quick download</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-700/50 px-8 py-6 bg-slate-800/40">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-500 text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                System Status: Operational
              </div>
              <div className="text-slate-500 text-sm">
                © 2025 AUST. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
import React from "react";

const Attendance = () => {
  const attendanceData = [
    {
      className:
        "F25 - BSCS - 7B - Parallel and Distributed Computing (Shift# 1)",
      percentage: "0%",
    },
    {
      className:
        "F25 - BSCS - 7B - Software Project Management (Shift# 1)",
      percentage: "100%",
    },
    {
      className:
        "F25 - BSCS - 7B - Digital Image Processing (Shift# 1)",
      percentage: "N/A",
    },
    {
      className:
        "F25 - BSCS - 7B - Final Year Project (FYP) - I (Shift# 1)",
      percentage: "N/A",
    },
    {
      className:
        "F25 - BSCS - 7B - Network Security (Shift# 1)",
      percentage: "40%",
    },
  ];

  return (
    <div className="bg-slate-900 text-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
        Attendance List for Enrolled Courses
      </h2>

      {/* Attendance Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-slate-800/70 text-slate-300 uppercase text-[13px]">
            <tr>
              <th className="px-4 py-3 text-left">Class</th>
              <th className="px-4 py-3 text-left">Attendance Percentage</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((item, index) => {
              let textColor = "text-slate-300";
              let progressColor = "bg-slate-700";

              if (item.percentage === "100%") {
                textColor = "text-green-400";
                progressColor = "bg-green-500";
              } else if (item.percentage === "0%") {
                textColor = "text-red-400";
                progressColor = "bg-red-500";
              } else if (item.percentage === "40%") {
                textColor = "text-yellow-400";
                progressColor = "bg-yellow-500";
              }

              return (
                <tr
                  key={index}
                  className="border-t border-slate-700 hover:bg-slate-800/60 transition-colors"
                >
                  <td className="px-4 py-3 text-slate-200">{item.className}</td>
                  <td className={`px-4 py-3 font-semibold ${textColor}`}>
                    {item.percentage !== "N/A" ? (
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-slate-800 rounded-full h-2">
                          <div
                            className={`${progressColor} h-2 rounded-full`}
                            style={{
                              width:
                                item.percentage === "N/A"
                                  ? "0%"
                                  : item.percentage,
                            }}
                          ></div>
                        </div>
                        <span>{item.percentage}</span>
                      </div>
                    ) : (
                      <span className="italic text-slate-400">N/A</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-slate-400 text-sm mt-6 text-center">
        © 2025 AUST. All rights reserved.
      </div>
    </div>
  );
};

export default Attendance;

import React from "react";

const Enrollment = () => {
  const courses = [
    {
      course: "Digital Image Processing",
      program: "BSCS",
      session: "F25",
      shift: "Morning",
      rollNo: "12254",
      name: "UMER DAUD",
      section: "B",
      credits: 3,
      status: "Active",
      taken: "F25",
    },
    {
      course: "Final Year Project (FYP) - I",
      program: "BSCS",
      session: "F25",
      shift: "Morning",
      rollNo: "12254",
      name: "UMER DAUD",
      section: "B",
      credits: 3,
      status: "Active",
      taken: "F25",
    },
    {
      course: "Network Security",
      program: "BSCS",
      session: "F25",
      shift: "Morning",
      rollNo: "12254",
      name: "UMER DAUD",
      section: "B",
      credits: 3,
      status: "Active",
      taken: "F25",
    },
    {
      course: "Parallel and Distributed Computing",
      program: "BSCS",
      session: "F25",
      shift: "Morning",
      rollNo: "12254",
      name: "UMER DAUD",
      section: "B",
      credits: 3,
      status: "Active",
      taken: "F25",
    },
    {
      course: "Software Project Management",
      program: "BSCS",
      session: "F25",
      shift: "Morning",
      rollNo: "12254",
      name: "UMER DAUD",
      section: "B",
      credits: 3,
      status: "Active",
      taken: "F25",
    },
  ];

  return (
    <div className="bg-slate-900 text-white rounded-xl shadow-lg p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Enrolled Courses
        </h2>

        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-2.5 text-slate-400">🔍</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-slate-800/70 text-slate-300 uppercase text-[13px]">
            <tr>
              <th className="px-4 py-3 text-left">Course</th>
              <th className="px-4 py-3 text-left">Program</th>
              <th className="px-4 py-3 text-left">Session</th>
              <th className="px-4 py-3 text-left">Shift</th>
              <th className="px-4 py-3 text-left">Roll No</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Section</th>
              <th className="px-4 py-3 text-left">Credits</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Taken</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((item, index) => (
              <tr
                key={index}
                className="border-t border-slate-700 hover:bg-slate-800/60 transition-colors"
              >
                <td className="px-4 py-3 font-medium text-slate-200">
                  {item.course}
                </td>
                <td className="px-4 py-3">{item.program}</td>
                <td className="px-4 py-3">{item.session}</td>
                <td className="px-4 py-3">{item.shift}</td>
                <td className="px-4 py-3">{item.rollNo}</td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.section}</td>
                <td className="px-4 py-3">{item.credits}</td>
                <td className="px-4 py-3">
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-md text-xs font-semibold">
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">{item.taken}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 text-slate-400 text-sm">
        <p>Showing 1 to 5 of 5 entries</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 transition">
            ← Previous
          </button>
          <button className="px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-700 transition">
            1
          </button>
          <button className="px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 transition">
            Next →
          </button>
        </div>
      </div>

      {/* Enrollment Form Button */}
      <div className="text-right mt-8">
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300">
          Open Enrollment Form
        </button>
      </div>
    </div>
  );
};

export default Enrollment;

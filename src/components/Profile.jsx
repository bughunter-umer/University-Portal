import React from "react";

const Profile = () => {
  const student = {
    name: "Umer Daud",
    rollNo: "12254",
    fatherName: "Muhammad Daud",
    semester: "7",
    section: "B",
    shift: "Morning",
    cnic: "13101-7987531-9",
    domicileDistrict: "Abbottabad",
    dob: "09/09/2004",
    domicileProvince: "KPK",
    gender: "Male",
    email: "au4705005@gmail.com",
    address: "Village Talhar Post Office Panduthana District Abbottabad",
    city: "District Abbottabad",
    mobile: "03145724596",
    emergency: "03486158436",
    nationality: "Pakistani",
    passportNo: "—",
    admissionDate: "15/09/2022",
    previousDegree: "ICS",
  };

  const qualifications = [
    {
      id: 1,
      type: "SSC/Matric/O-Level/IBCC Equivalence",
      name: "Matric",
      year: "2020",
      board: "Abbottabad",
      obtained: "993",
      total: "1100",
      grade: "A+ Grade",
    },
    {
      id: 2,
      type: "HSSC/FA/FSc/DAE/ICOM/ICS/A-Level/IBCC Equivalence",
      name: "FSc",
      year: "2022",
      board: "Abbottabad",
      obtained: "964",
      total: "1100",
      grade: "A+ Grade",
    },
  ];

  return (
    <div className="p-8 bg-slate-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto bg-slate-900/60 rounded-2xl shadow-xl border border-slate-800 p-8 backdrop-blur">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Student Profile
        </h1>

        {/* Basic Info Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {Object.entries(student).map(([key, value]) => (
            <div key={key} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </p>
              <p className="text-white font-semibold mt-1">{value}</p>
            </div>
          ))}
        </div>

        {/* Qualifications Table */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-indigo-400">
          Previous Qualifications
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-700 rounded-xl overflow-hidden">
            <thead className="bg-slate-800/70 text-slate-300 text-sm uppercase">
              <tr>
                <th className="py-3 px-4 text-left border-b border-slate-700">#</th>
                <th className="py-3 px-4 text-left border-b border-slate-700">Degree Type</th>
                <th className="py-3 px-4 text-left border-b border-slate-700">Degree Name</th>
                <th className="py-3 px-4 text-left border-b border-slate-700">Passing Year</th>
                <th className="py-3 px-4 text-left border-b border-slate-700">Board / University</th>
                <th className="py-3 px-4 text-left border-b border-slate-700">Obtained Marks</th>
                <th className="py-3 px-4 text-left border-b border-slate-700">Total Marks</th>
                <th className="py-3 px-4 text-left border-b border-slate-700">Division / Grade</th>
              </tr>
            </thead>
            <tbody>
              {qualifications.map((q) => (
                <tr
                  key={q.id}
                  className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors"
                >
                  <td className="py-3 px-4">{q.id}</td>
                  <td className="py-3 px-4">{q.type}</td>
                  <td className="py-3 px-4">{q.name}</td>
                  <td className="py-3 px-4">{q.year}</td>
                  <td className="py-3 px-4">{q.board}</td>
                  <td className="py-3 px-4">{q.obtained}</td>
                  <td className="py-3 px-4">{q.total}</td>
                  <td className="py-3 px-4">{q.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Profile Footer */}
        <div className="text-center mt-10 pt-6 border-t border-slate-800">
          <p className="text-slate-400">Profile Locked</p>
          <p className="text-slate-500 text-sm mt-2">© 2025 AUST. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

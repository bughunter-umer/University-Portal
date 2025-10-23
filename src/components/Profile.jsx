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
    program: "Bachelor of Computer Science",
    department: "Computer Science",
    faculty: "Computing & Information Technology",
    cgpa: "3.75",
    status: "Active",
    batch: "2022-2026",
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
      percentage: "90.3%",
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
      percentage: "87.6%",
    },
  ];

  const currentSemesterCourses = [
    { code: "CS-301", name: "Data Structures", credits: 3, type: "Core" },
    { code: "CS-302", name: "Database Systems", credits: 3, type: "Core" },
    { code: "MTH-301", name: "Discrete Mathematics", credits: 3, type: "Core" },
    { code: "SS-301", name: "Technical Writing", credits: 2, type: "General" },
    { code: "CS-303", name: "Object Oriented Programming", credits: 3, type: "Core" },
  ];

  const academicProgress = [
    { semester: "1st", sgpa: "3.45", status: "Completed" },
    { semester: "2nd", sgpa: "3.62", status: "Completed" },
    { semester: "3rd", sgpa: "3.58", status: "Completed" },
    { semester: "4th", sgpa: "3.71", status: "Completed" },
    { semester: "5th", sgpa: "3.80", status: "Completed" },
    { semester: "6th", sgpa: "3.85", status: "Completed" },
    { semester: "7th", sgpa: "In Progress", status: "Current" },
  ];

  // Group student info into logical sections
  const personalInfo = {
    "Personal Information": [
      { key: "name", label: "Full Name", icon: "👤" },
      { key: "fatherName", label: "Father's Name", icon: "👨" },
      { key: "dob", label: "Date of Birth", icon: "🎂" },
      { key: "gender", label: "Gender", icon: "⚧" },
      { key: "cnic", label: "CNIC", icon: "🆔" },
      { key: "nationality", label: "Nationality", icon: "🌍" },
    ],
    "Academic Information": [
      { key: "program", label: "Program", icon: "🎓" },
      { key: "department", label: "Department", icon: "🏛️" },
      { key: "faculty", label: "Faculty", icon: "📚" },
      { key: "rollNo", label: "Roll Number", icon: "🔢" },
      { key: "batch", label: "Batch", icon: "📅" },
      { key: "cgpa", label: "CGPA", icon: "📊" },
    ],
    "Contact Details": [
      { key: "email", label: "Email Address", icon: "📧" },
      { key: "mobile", label: "Mobile Number", icon: "📱" },
      { key: "emergency", label: "Emergency Contact", icon: "🚨" },
      { key: "address", label: "Address", icon: "🏠" },
      { key: "city", label: "City", icon: "🏙️" },
    ],
    "University Details": [
      { key: "semester", label: "Current Semester", icon: "📖" },
      { key: "section", label: "Section", icon: "👥" },
      { key: "shift", label: "Shift", icon: "⏰" },
      { key: "admissionDate", label: "Admission Date", icon: "🎯" },
      { key: "previousDegree", label: "Previous Degree", icon: "📜" },
      { key: "status", label: "Status", icon: "✅" },
    ],
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Active': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Completed': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Current': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    };
    return statusConfig[status] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* University Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-yellow-300 rounded-full flex items-center justify-center shadow-lg mr-4">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">AUST University</h1>
              <p className="text-slate-300 text-sm">Excellence in Education Since 1995</p>
            </div>
          </div>
          
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mb-4 shadow-xl border-4 border-white/10">
            <span className="text-3xl font-bold text-white">UD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Student Academic Profile
          </h2>
          <p className="text-slate-300 text-lg">Official University Record</p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Profile Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden mb-8">
          {/* Profile Header with University Banner */}
          <div className="bg-gradient-to-r from-blue-700/30 via-indigo-600/30 to-purple-600/30 border-b border-white/10 p-6 sm:p-8 relative">
            <div className="absolute top-4 right-4 flex space-x-2">
              <div className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full">
                <span className="text-green-300 font-semibold text-sm">✓ Verified</span>
              </div>
              <div className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full">
                <span className="text-blue-300 font-semibold text-sm">{student.status}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">
                  {student.name}
                </h2>
                <p className="text-blue-200 font-medium text-lg">
                  {student.program}
                </p>
                <p className="text-slate-300 mt-1">
                  Roll No: {student.rollNo} • {student.department} • Semester {student.semester}
                </p>
              </div>
              <div className="mt-4 sm:mt-0 text-right">
                <div className="text-3xl font-bold text-white mb-1">{student.cgpa}</div>
                <div className="text-slate-300 text-sm">Current CGPA</div>
              </div>
            </div>
          </div>

          {/* Information Sections */}
          <div className="p-6 sm:p-8">
            {/* Academic Progress Chart */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">Academic Progress</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
                {academicProgress.map((sem, index) => (
                  <div key={sem.semester} className="text-center">
                    <div className={`bg-white/5 rounded-xl p-4 border ${
                      sem.status === 'Current' ? 'border-indigo-500/50' : 'border-white/10'
                    }`}>
                      <div className="text-sm text-slate-400 mb-2">{sem.semester}</div>
                      <div className={`text-lg font-bold ${
                        sem.sgpa === 'In Progress' ? 'text-indigo-300' : 'text-white'
                      }`}>
                        {sem.sgpa}
                      </div>
                      <div className={`text-xs mt-1 px-2 py-1 rounded-full ${
                        sem.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                        sem.status === 'Current' ? 'bg-indigo-500/20 text-indigo-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {sem.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Layout for Info Sections */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
              {Object.entries(personalInfo).map(([section, fields]) => (
                <div
                  key={section}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-indigo-300 mb-4 pb-2 border-b border-white/10 flex items-center">
                    <span className="mr-2">{fields[0].icon}</span>
                    {section}
                  </h3>
                  <div className="space-y-4">
                    {fields.map(({ key, label, icon }) => (
                      <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between group">
                        <div className="flex items-center">
                          <span className="text-lg mr-2 opacity-60">{icon}</span>
                          <span className="text-slate-400 text-sm font-medium mb-1 sm:mb-0">
                            {label}
                          </span>
                        </div>
                        <span className="text-white font-semibold text-right break-words max-w-[200px] sm:max-w-none group-hover:text-blue-200 transition-colors">
                          {student[key]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Semester Courses */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">Current Semester Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentSemesterCourses.map((course, index) => (
                  <div key={course.code} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-white font-bold text-lg">{course.code}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        course.type === 'Core' ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'
                      }`}>
                        {course.type}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">{course.name}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-xs">Credits</span>
                      <span className="text-white font-semibold">{course.credits}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications Section */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-indigo-300">Academic Qualifications</h2>
                <div className="hidden sm:block w-48 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-white/10 border-b border-white/10">
                        <th className="py-4 px-4 text-left text-sm font-semibold text-indigo-300 uppercase tracking-wider">
                          Degree
                        </th>
                        <th className="py-4 px-4 text-left text-sm font-semibold text-indigo-300 uppercase tracking-wider hidden lg:table-cell">
                          Type
                        </th>
                        <th className="py-4 px-4 text-left text-sm font-semibold text-indigo-300 uppercase tracking-wider">
                          Year
                        </th>
                        <th className="py-4 px-4 text-left text-sm font-semibold text-indigo-300 uppercase tracking-wider hidden md:table-cell">
                          Board
                        </th>
                        <th className="py-4 px-4 text-left text-sm font-semibold text-indigo-300 uppercase tracking-wider">
                          Marks
                        </th>
                        <th className="py-4 px-4 text-left text-sm font-semibold text-indigo-300 uppercase tracking-wider">
                          Percentage
                        </th>
                        <th className="py-4 px-4 text-left text-sm font-semibold text-indigo-300 uppercase tracking-wider">
                          Grade
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {qualifications.map((q) => (
                        <tr
                          key={q.id}
                          className="hover:bg-white/5 transition-colors duration-200 group"
                        >
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-semibold text-white">{q.name}</p>
                              <p className="text-sm text-slate-400 lg:hidden mt-1">{q.type}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-slate-300 hidden lg:table-cell">
                            {q.type}
                          </td>
                          <td className="py-4 px-4 text-white font-medium">
                            {q.year}
                          </td>
                          <td className="py-4 px-4 text-slate-300 hidden md:table-cell">
                            {q.board}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex flex-col">
                              <span className="text-white font-semibold">
                                {q.obtained}/{q.total}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-blue-300 font-semibold">
                              {q.percentage}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                              {q.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white/5 border-t border-white/10 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
              <div className="mb-4 sm:mb-0">
                <p className="text-slate-400 text-sm">
                  Student ID: AUST-{student.rollNo} • Last Updated: {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 text-sm font-medium">Profile Verified</span>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <span className="text-slate-400 text-sm">Confidential</span>
              </div>
            </div>
            <div className="text-center mt-4 pt-4 border-t border-white/10">
              <p className="text-slate-500 text-sm">
                © 2025 AUST University. All rights reserved. | This is an official academic record. Unauthorized duplication is prohibited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Academic Profile", path: "/profile", icon: "👤" },
    { name: "Course Enrollment", path: "/enrollment", icon: "📝" },
    { name: "Class Schedule", path: "/schedule", icon: "📅" },
    { name: "Attendance", path: "/attendance", icon: "✅" },
    { name: "Grades & Results", path: "/results", icon: "🏆" },
    { name: "Fee Statement", path: "/accounts", icon: "💳" },
    { name: "Academic Calendar", path: "/calendar", icon: "📆" },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-6 flex flex-col">
      {/* University Logo */}
      <div className="text-center mb-8 pt-4">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
          <span className="text-white font-bold text-lg">AU</span>
        </div>
        <h1 className="text-xl font-bold text-white">University Portal</h1>
        <p className="text-gray-400 text-sm mt-1">Student System</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                <span className="text-base mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Info */}
      <div className="pt-4 border-t border-gray-700">
        <div className="flex items-center p-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xs">UD</span>
          </div>
          <div>
            <p className="text-white font-medium text-sm">Umer Daud</p>
            <p className="text-gray-400 text-xs">CS-2021-001</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        {/* University Info */}
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Abbottabad University of Science & Technology
          </h1>
          <p className="text-gray-600 text-sm">Student Academic Portal</p>
        </div>

        {/* User & Quick Info */}
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-gray-800 font-semibold">Umer Daud</p>
            <p className="text-gray-600 text-sm">Bachelor of Computer Science</p>
          </div>
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border border-blue-200">
            <span className="text-blue-600 font-bold text-sm">UD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const Dashboard = () => {
  const [academicInfo] = useState({
    semester: "Fall 2024",
    cgpa: "3.75",
    creditsCompleted: "102",
    attendance: "94%"
  });

  const quickActions = [
    { name: "Enroll Courses", path: "/enrollment", icon: "➕" },
    { name: "View Schedule", path: "/schedule", icon: "📅" },
    { name: "Check Results", path: "/results", icon: "📈" },
    { name: "Fee Payment", path: "/accounts", icon: "💳" }
  ];

  const upcomingEvents = [
    { title: "Midterm Exams", date: "Nov 15, 2024", course: "All Courses" },
    { title: "Project Submission", date: "Nov 20, 2024", course: "CS-401" },
    { title: "Last Date for Drop", date: "Nov 25, 2024", course: "Semester" }
  ];

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      <Header />
      
      <main className="p-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome back, Umer!
          </h2>
          <p className="text-gray-600">
            Here's your academic overview for {academicInfo.semester}
          </p>
        </div>

        {/* Academic Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">{academicInfo.cgpa}</div>
            <div className="text-gray-600 text-sm">Current CGPA</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-green-600">{academicInfo.creditsCompleted}</div>
            <div className="text-gray-600 text-sm">Credits Completed</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-orange-600">{academicInfo.attendance}</div>
            <div className="text-gray-600 text-sm">Overall Attendance</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">6th</div>
            <div className="text-gray-600 text-sm">Current Semester</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <NavLink
                  key={action.name}
                  to={action.path}
                  className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors"
                >
                  <span className="text-2xl mb-2">{action.icon}</span>
                  <span className="text-sm text-gray-700 text-center">{action.name}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{event.title}</div>
                    <div className="text-sm text-gray-600">{event.course}</div>
                  </div>
                  <div className="text-sm text-gray-500">{event.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Courses */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Courses</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Course Code</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Course Name</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Instructor</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Schedule</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 text-sm">CS-401</td>
                  <td className="py-3 text-sm">Software Engineering</td>
                  <td className="py-3 text-sm">Dr. Ahmed Khan</td>
                  <td className="py-3 text-sm">Mon, Wed 10:00-11:30</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 text-sm">CS-402</td>
                  <td className="py-3 text-sm">Database Systems</td>
                  <td className="py-3 text-sm">Dr. Sara Ali</td>
                  <td className="py-3 text-sm">Tue, Thu 09:00-10:30</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm">MTH-301</td>
                  <td className="py-3 text-sm">Numerical Methods</td>
                  <td className="py-3 text-sm">Dr. Rizwan Ahmed</td>
                  <td className="py-3 text-sm">Mon, Wed 14:00-15:30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

// Main App Component
const StudentPortal = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default StudentPortal;
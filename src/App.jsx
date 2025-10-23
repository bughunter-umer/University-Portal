import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import EnrollmentPage from "./pages/EnrollmentPage";
import AttendancePage from "./pages/AttendancePage";
import AccountPage from "./pages/AccountPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <>
      <Routes>
        {/* Default redirect to Profile */}
        <Route path="/" element={<Navigate to="/profile" />} />

        {/* All Dashboard Pages */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/enrollment" element={<EnrollmentPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/accounts" element={<AccountPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/result" element={<ResultPage />} />

        {/* Optional fallback for invalid routes */}
        <Route
          path="*"
          element={
            <div className="text-center text-white bg-slate-950 min-h-screen flex items-center justify-center text-2xl">
              404 | Page Not Found
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;

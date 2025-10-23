import React, { useState } from "react";
import { Eye, EyeOff, Lock, ShieldCheck } from "lucide-react";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage("⚠️ Please fill all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("❌ New passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setMessage("⚠️ Password must be at least 6 characters.");
      return;
    }

    // Simulate success
    setMessage("✅ Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="bg-slate-900 text-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 flex items-center gap-2">
        <ShieldCheck size={28} className="text-cyan-400" />
        Change Password
      </h2>

      {/* Form */}
      <form onSubmit={handleChangePassword} className="space-y-6">
        {/* Current Password */}
        <div>
          <label className="block text-slate-400 text-sm mb-2">
            Current Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-slate-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
              className="w-full bg-slate-800 text-white p-3 pl-10 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none"
            />
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="block text-slate-400 text-sm mb-2">
            New Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-slate-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full bg-slate-800 text-white p-3 pl-10 rounded-lg border border-slate-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500/30 outline-none"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-slate-400 text-sm mb-2">
            Confirm New Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-slate-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full bg-slate-800 text-white p-3 pl-10 rounded-lg border border-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-500/30 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-slate-400 hover:text-cyan-400 transition"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 rounded-lg font-semibold shadow-md transition-all flex items-center justify-center gap-2"
        >
          <Lock size={18} /> Update Password
        </button>
      </form>

      {/* Message */}
      {message && (
        <div className="mt-6 text-center text-sm text-slate-300 animate-fadeIn">
          {message}
        </div>
      )}
    </div>
  );
};

export default ChangePassword;

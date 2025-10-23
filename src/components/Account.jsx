import React, { useState } from "react";
import { Trash2, Save } from "lucide-react";

const Account = () => {
  const [type, setType] = useState("Retake");
  const [session, setSession] = useState("Fall 2025");
  const [bank, setBank] = useState("");
  const [challanNo, setChallanNo] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [challanList, setChallanList] = useState([]);

  const handleSave = () => {
    if (!bank || !challanNo || !date || !amount) {
      alert("Please fill all fields before saving.");
      return;
    }

    const newChallan = {
      id: Date.now(),
      type,
      session,
      bank,
      challanNo,
      date,
      amount,
    };

    setChallanList([newChallan, ...challanList]);
    setBank("");
    setChallanNo("");
    setDate("");
    setAmount("");
  };

  const handleDelete = (id) => {
    setChallanList(challanList.filter((c) => c.id !== id));
  };

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

  return (
    <div className="bg-slate-900 text-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
        Student Account / Challan Portal
      </h2>

      {/* Challan Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Type */}
        <div>
          <label className="block text-slate-400 text-sm mb-2">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none"
          >
            <option>Retake</option>
            <option>Regular</option>
            <option>Improvement</option>
          </select>
        </div>

        {/* Session */}
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

        {/* Bank */}
        <div>
          <label className="block text-slate-400 text-sm mb-2">Bank</label>
          <input
            type="text"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            placeholder="Enter Bank Name"
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500/30 outline-none"
          />
        </div>

        {/* Challan No */}
        <div>
          <label className="block text-slate-400 text-sm mb-2">Challan #</label>
          <input
            type="text"
            value={challanNo}
            onChange={(e) => setChallanNo(e.target.value)}
            placeholder="Enter Challan No"
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-slate-400 text-sm mb-2">
            Date (DD/MM/YYYY)
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-500/30 outline-none"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-slate-400 text-sm mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500/30 outline-none"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center mb-10">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all py-3 px-6 rounded-lg font-semibold shadow-md"
        >
          <Save size={18} /> Save
        </button>
      </div>

      {/* Challan List Table */}
      <div className="overflow-x-auto border border-slate-700 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-800 text-slate-300 uppercase text-xs">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Session</th>
              <th className="p-3 text-left">Bank</th>
              <th className="p-3 text-left">Challan No</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {challanList.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-slate-500 italic"
                >
                  No data available in table
                </td>
              </tr>
            ) : (
              challanList.map((c) => (
                <tr
                  key={c.id}
                  className="border-t border-slate-700 hover:bg-slate-800/60 transition"
                >
                  <td className="p-3">{c.date}</td>
                  <td className="p-3">{c.session}</td>
                  <td className="p-3">{c.bank}</td>
                  <td className="p-3">{c.challanNo}</td>
                  <td className="p-3 text-cyan-400 font-semibold">
                    Rs. {c.amount}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="text-red-400 hover:text-red-600 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-slate-400 text-xs text-center mt-6">
        © 2025 AUST. All Rights Reserved.
      </div>
    </div>
  );
};

export default Account;

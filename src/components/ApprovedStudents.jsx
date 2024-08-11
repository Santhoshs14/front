import React from "react";
import { FiPrinter } from "react-icons/fi";

const approvedStudents = [
  {
    id: 1,
    name: "Cathy Green",
    department: "IT",
    section: "C",
    year: 4,
    reason: "Project work",
  },
  {
    id: 2,
    name: "David Lee",
    department: "CSE",
    section: "A",
    year: 3,
    reason: "Sports event",
  },
];

const ApprovedStudents = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
          Approved Students
        </h1>
        <button
          onClick={handlePrint}
          className="flex items-center bg-blue-400 text-white px-2 py-2 left rounded hover:bg-blue-500 transition duration-200"
        >
          <FiPrinter size={20} />
        </button>
      </div>
      <div className="mb-4 max-h-[50vh] overflow-y-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="sticky top-0 bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">Section</th>
              <th className="px-4 py-2 border">Year</th>
              <th className="px-4 py-2 border">Reason</th>
            </tr>
          </thead>
          <tbody>
            {approvedStudents.map((student) => (
              <tr key={student.id}>
                <td className="px-4 py-2 border">{student.name}</td>
                <td className="px-4 py-2 border">{student.department}</td>
                <td className="px-4 py-2 border">{student.section}</td>
                <td className="px-4 py-2 border">{student.year}</td>
                <td className="px-4 py-2 border">{student.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedStudents;

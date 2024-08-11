import React from "react";

const rejectedStudents = [
  {
    id: 1,
    name: "Eve Adams",
    department: "EEE",
    section: "B",
    year: 2,
    reason: "Insufficient attendance",
  },
  {
    id: 2,
    name: "Frank White",
    department: "MECH",
    section: "D",
    year: 3,
    reason: "Unauthorized leave",
  },
];

const RejectedStudents = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-700">
        Rejected Students
      </h1>
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
            {rejectedStudents.map((student) => (
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

export default RejectedStudents;

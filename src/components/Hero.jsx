import React, { useState } from "react";

const studentData = [
  { id: 1, name: "zero", department: "CSE", section: "A", year: 3 },
  { id: 2, name: "one", department: "CSE", section: "B", year: 2 },
  { id: 3, name: "two", department: "CSE", section: "A", year: 1 },
  { id: 4, name: "three", department: "CSE", section: "C", year: 4 },
  // Add more student objects as needed
];

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [reason, setReason] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const filteredStudents = studentData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStudentSelect = (studentId) => {
    setSelectedStudents((prevSelected) => {
      if (prevSelected.includes(studentId)) {
        return prevSelected.filter((id) => id !== studentId);
      } else {
        return [...prevSelected, studentId];
      }
    });
  };

  const handleRequest = () => {
    if (selectedStudents.length === 0) {
      alert("Please select at least one student.");
    } else if (!reason.trim()) {
      alert("Please provide a reason for the request.");
    } else if (!fromTime || !toTime) {
      alert("Please specify both 'From Time' and 'To Time' fields.");
    } else {
      alert(
        `Request sent for students: ${selectedStudents.join(
          ", "
        )} with reason: ${reason}, from ${fromTime} to ${toTime}`
      );
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-700">
        SEND ON DUTY REQUEST
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border-b-2 border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm font-normal text-blue-gray-700 focus:border-gray-500 outline-none"
        />
      </div>
      <div className="mb-4 max-h-[50vh] overflow-y-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="sticky top-0 bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">Section</th>
              <th className="px-4 py-2 border">Year</th>
              <th className="px-4 py-2 border">Select</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="px-4 py-2 border">{student.name}</td>
                <td className="px-4 py-2 border">{student.department}</td>
                <td className="px-4 py-2 border">{student.section}</td>
                <td className="px-4 py-2 border">{student.year}</td>
                <td className="px-4 py-2 border text-center">
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student.id)}
                    onChange={() => handleStudentSelect(student.id)}
                    className="form-checkbox"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedStudents.length > 0 && (
        <div className="mb-4 max-h-[50vh] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-2">Selected Students:</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="sticky top-0 bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Department</th>
                <th className="px-4 py-2 border">Section</th>
                <th className="px-4 py-2 border">Year</th>
              </tr>
            </thead>
            <tbody>
              {selectedStudents.map((id) => {
                const student = studentData.find((s) => s.id === id);
                return (
                  <tr key={id}>
                    <td className="px-4 py-2 border">{student?.name}</td>
                    <td className="px-4 py-2 border">{student?.department}</td>
                    <td className="px-4 py-2 border">{student?.section}</td>
                    <td className="px-4 py-2 border">{student?.year}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="mb-4">
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter the reason for the request..."
          className="w-full p-2 border border-gray-300 rounded"
          rows="1"
        />
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From Time
          </label>
          <input
            type="time"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To Time
          </label>
          <input
            type="time"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <button
        onClick={handleRequest}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 w-full"
      >
        Request OD
      </button>
    </div>
  );
};

export default Hero;

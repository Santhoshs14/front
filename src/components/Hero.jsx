import React, { useState } from "react";

const studentData = [
  {
    id: 1,
    name: "John Doe",
    department: "Computer Science",
    section: "A",
    year: 3,
  },
  { id: 2, name: "Jane Doe", department: "Mathematics", section: "B", year: 2 },
  { id: 3, name: "Alice Smith", department: "Physics", section: "A", year: 1 },
  { id: 4, name: "Bob Johnson", department: "Biology", section: "C", year: 4 },
];

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [reason, setReason] = useState("");

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
    } else {
      alert(
        `Request sent for students: ${selectedStudents.join(
          ", "
        )} with reason: ${reason}`
      );
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Student Dashboard</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
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
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Selected Students:</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
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
          rows="4"
        />
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

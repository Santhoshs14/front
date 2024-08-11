import React, { useState } from "react";

const requests = [
  {
    id: 1,
    name: "John Doe",
    department: "CSE",
    section: "A",
    year: 3,
    reason: "Attending a conference",
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "ECE",
    section: "B",
    year: 2,
    reason: "Participating in a workshop",
  },
  {
    id: 3,
    name: "Samuel Brown",
    department: "IT",
    section: "C",
    year: 4,
    reason: "Project presentation",
  },
];

const HodHero = () => {
  const [selectedRequests, setSelectedRequests] = useState([]);
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const handleSelectRequest = (id) => {
    setSelectedRequests((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((requestId) => requestId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleApprove = () => {
    console.log(`Approved requests: ${selectedRequests.join(", ")}`);
    console.log(`From Time: ${fromTime}, To Time: ${toTime}`);
  };

  const handleReject = () => {
    console.log(`Rejected requests: ${selectedRequests.join(", ")}`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-700">
        APPROVE OR REJECT ON DUTY REQUESTS
      </h1>
      <div className="mb-4 max-h-[50vh] overflow-y-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="sticky top-0 bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Select</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">Section</th>
              <th className="px-4 py-2 border">Year</th>
              <th className="px-4 py-2 border">Reason</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="px-4 py-2 border text-center">
                  <input
                    type="checkbox"
                    checked={selectedRequests.includes(request.id)}
                    onChange={() => handleSelectRequest(request.id)}
                    className="form-checkbox"
                  />
                </td>
                <td className="px-4 py-2 border">{request.name}</td>
                <td className="px-4 py-2 border">{request.department}</td>
                <td className="px-4 py-2 border">{request.section}</td>
                <td className="px-4 py-2 border">{request.year}</td>
                <td className="px-4 py-2 border">{request.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedRequests.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Selected Students:</h2>
          <div className="max-h-[30vh] overflow-y-auto">
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
                {selectedRequests.map((id) => {
                  const request = requests.find((req) => req.id === id);
                  return (
                    <tr key={id}>
                      <td className="px-4 py-2 border">{request?.name}</td>
                      <td className="px-4 py-2 border">
                        {request?.department}
                      </td>
                      <td className="px-4 py-2 border">{request?.section}</td>
                      <td className="px-4 py-2 border">{request?.year}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                From Time
              </label>
              <input
                type="time"
                value={fromTime}
                onChange={(e) => setFromTime(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
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
          <div className="flex justify-between">
            <button
              onClick={handleApprove}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
            >
              Approve OD
            </button>
            <button
              onClick={handleReject}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
            >
              Reject OD
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HodHero;

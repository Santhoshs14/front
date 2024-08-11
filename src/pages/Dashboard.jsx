import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ApprovedStudents from "../components/ApprovedStudents";
import PendingStudents from "../components/PendingStudents";
import RejectedStudents from "../components/RejectedStudents";

const Dashboard = () => {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/send-request" />} />
            <Route path="/send-request" element={<Hero />} />
            <Route path="/approved-students" element={<ApprovedStudents />} />
            <Route path="/pending-students" element={<PendingStudents />} />
            <Route path="/rejected-students" element={<RejectedStudents />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;

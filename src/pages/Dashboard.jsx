import React from "react";
import Navbar from "../components/Navbar";
import ApprovedStudents from "../components/ApprovedStudents";
import PendingStudents from "../components/PendingStudents";
import RejectedStudents from "../components/RejectedStudents";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Hero from "../components/Hero";
import logo from "../assets/logo.png";

const Hod = () => {
  return (
    <Router>
      <div className="relative flex">
        <Navbar />
        <div className="flex-grow p-6">
          <div className="absolute top-0 right-8 z-10">
            <img src={logo} alt="Logo" className="h-[200px] w-[200px]" />
          </div>
          <div className="pt-[100px]">
            <Routes>
              <Route path="/" element={<Navigate to="/send-requestt" />} />
              <Route path="/send-request" element={<Hero />} />
              <Route path="/approved-students" element={<ApprovedStudents />} />
              <Route path="/pending-students" element={<PendingStudents />} />
              <Route path="/rejected-students" element={<RejectedStudents />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Hod;

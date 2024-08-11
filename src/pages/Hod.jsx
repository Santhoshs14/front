import React from "react";
import HodNavbar from "../components/HodNavbar";
import ApprovedStudents from "../components/ApprovedStudents";
import PendingStudents from "../components/PendingStudents";
import RejectedStudents from "../components/RejectedStudents";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HodHero from "../components/HodHero";

const Hod = () => {
  return (
    <Router>
      <div className="flex">
        <HodNavbar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/approve-request" />} />
            <Route path="/approve-request" element={<HodHero />} />
            <Route path="/approved-students" element={<ApprovedStudents />} />
            <Route path="/pending-students" element={<PendingStudents />} />
            <Route path="/rejected-students" element={<RejectedStudents />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Hod;

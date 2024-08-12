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
import logo from "../assets/logo.png"; // Adjust the path to your logo

const Hod = () => {
  return (
    <Router>
      <div className="relative flex">
        <HodNavbar />
        <div className="flex-grow p-6">
          {/* Image positioned outside the container */}
          <div className="absolute top-0 right-8 z-10">
            <img src={logo} alt="Logo" className="h-[200px] w-[200px]" />
          </div>
          <div className="pt-40">
            {" "}
            {/* Adjust padding to move content down */}
            <Routes>
              <Route path="/" element={<Navigate to="/approve-request" />} />
              <Route path="/approve-request" element={<HodHero />} />
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

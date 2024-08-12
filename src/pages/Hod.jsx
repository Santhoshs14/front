import React from "react";
import HodNavbar from "../components/HodNavbar";
import ApprovedStudents from "../components/ApprovedStudents";
import PendingStudents from "../components/PendingStudents";
import RejectedStudents from "../components/RejectedStudents";
import HodHero from "../components/HodHero";
import Footer from "../components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const Hod = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex">
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
        <Footer />
      </div>
    </Router>
  );
};

export default Hod;

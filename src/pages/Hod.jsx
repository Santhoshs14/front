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
import logo from "../assets/logo.png";
import Footer from "../components/Footer";

const Hod = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <div className="absolute top-0 right-8 z-50">
          <img src={logo} alt="Logo" className="h-[100px] w-[100px]" />
        </div>
        <div className="flex flex-grow">
          <HodNavbar />
          <div className="flex-grow p-6 mt-28">
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

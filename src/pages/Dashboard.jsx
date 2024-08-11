import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Dashboard = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 p-8">
        <Hero />
      </div>
    </div>
  );
};

export default Dashboard;

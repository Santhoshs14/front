import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const HodNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`h-screen ${
        isOpen ? "w-64" : "w-16"
      } bg-gray-700 text-white fixed flex flex-col transition-width duration-300 z-50`}
    >
      <div className="flex items-center justify-between h-20 border-b border-gray-700 px-4">
        <h1
          className={`text-2xl font-semibold transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          } overflow-hidden`}
        >
          Dashboard
        </h1>
        <button
          onClick={toggleNavbar}
          className="text-white focus:outline-none pr-4"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <nav className="flex-grow">
        <ul className="mt-4 space-y-2">
          <li>
            <Link
              to="/approve-request"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Approve Request
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/approved-students"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Approved Students
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/pending-students"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Pending Students
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/rejected-students"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Rejected Students
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HodNavbar;

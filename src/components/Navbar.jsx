import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
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
            <a
              href="#send-request"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Send Request
              </span>
            </a>
          </li>
          <li>
            <a
              href="#approved-students"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Approved Students
              </span>
            </a>
          </li>
          <li>
            <a
              href="#pending-students"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Pending Students
              </span>
            </a>
          </li>
          <li>
            <a
              href="#pending-students"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Rejected Students
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

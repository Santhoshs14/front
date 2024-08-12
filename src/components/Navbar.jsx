import React, { useState } from "react";
import { FiMenu, FiX, FiLogOut, FiUser } from "react-icons/fi";
import {
  AiOutlineSend,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

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
      <div className="flex items-center justify-between h-20 border-b border-gray-600 px-4">
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
              to="/send-request"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-600"
            >
              <AiOutlineSend size={24} />
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Send Request
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/approved-students"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-600"
            >
              <AiOutlineCheckCircle size={24} />
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Approved Students
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/pending-students"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-600"
            >
              <AiOutlineClockCircle size={24} />
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Pending Students
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/rejected-students"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-600"
            >
              <AiOutlineCloseCircle size={24} />
              <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                Rejected Students
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        {isOpen ? (
          <button
            onClick={() => console.log("Logout")}
            className="flex items-center py-2.5 px-4 rounded hover:bg-red-700 w-full"
          >
            <FiLogOut size={20} />
            <span className="ml-2">Logout</span>
          </button>
        ) : (
          <div className="flex items-center justify-center py-4">
            <FiUser
              size={24}
              className="cursor-pointer"
              onClick={() => console.log("Logout")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

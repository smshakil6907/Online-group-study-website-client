import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import image from "../assets/1144760.png";
import image2 from "../assets/assignment.png";
import { AuthContext } from "../provider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/assignment">Assignment</NavLink>
            </li>
            <li>
              <NavLink to="/pendingAssignment">Pending Assignments</NavLink>
            </li>
          </ul>
        </div>
        <img className="w-28" src={image2} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/assignment">Assignment</NavLink>
          </li>
          <li>
            <NavLink to="/pendingAssignment">Pending Assignments</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end relative">
        <div>
          {user?.email ? (
            <div>
              <img
                src={user?.photoURL && user?.photoURL}
                className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                onClick={toggleDropdown}
                alt="User Profile"
              />
              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-10"
                  onMouseLeave={closeDropdown}
                >
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link to="/createAssignment">Create Assignment</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link to="mySubmitted">My Submitted</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full">
              <img src={image} alt="Default Profile" />
            </div>
          )}
        </div>
        <div className="mr-4"></div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-secondary text-white">
            Log-out
          </button>
        ) : (
          <Link to="/login" className="btn btn-secondary text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

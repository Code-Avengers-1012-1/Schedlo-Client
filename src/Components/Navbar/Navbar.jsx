import { Link, useNavigate } from "react-router";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import SideNavbar from "../SideNavbar/SideNavbar";

const Navbar = ({ onMenuClick }) => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut().then(() => {
      console.log("Successfully Logged Out...");
      navigate("/signin");
    });
  };

  return (
    <header className="relative dark:bg-gray-100 dark:text-gray-800">
      <div className="container px-4 py-1 flex justify-between  mx-auto">
        <Button title={"Add Task"} />

        <div className="items-center flex-shrink-0 hidden md:block lg:flex gap-2">
          {user ? (
            <button className="btn" onClick={handleSignOut}>
              <Button title={"Sign Out"} />
            </button>
          ) : (
            <Link to={"signin"}>
              <Button title={"Sign In"} />
            </Link>
          )}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="p-4 md:hidden">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="w-6 h-6 dark:text-gray-800"
              viewBox="0 0 50 50"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>

        {/* Title */}
        <button className="btn btn-ghost text-lg md:text-3xl font-semibold">
          Time Scheduler
        </button>

        {/* Add Task Button */}
        <Button title={"Add Task"} />

        {/* Sign In/Sign Out Button */}
        <div className="items-center flex-shrink-0 hidden lg:flex gap-2">
          {user ? (
            <button onClick={handleSignOut}>
              <Button title="Sign Out" />
            </button>
          ) : (
            <Link to="/signin">
              <Button title="Sign In" />
            </Link>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute md:hidden left-0 top-0 bg-gray-100">
          <SideNavbar />
        </div>
      )}
    </header>
  );
};

export default Navbar;

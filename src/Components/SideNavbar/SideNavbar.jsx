import React from "react";
import { Link } from "react-router";

const SideNavbar = () => {
  return (
    <div>
      <Link
        rel="noopener noreferrer"
        to="/"
        aria-label="Back to homepage"
        className="flex items-center p-2 text-[1.4rem] font-semibold"
      >
        <h2 className="text-center p-4 ">Time Scheduler</h2>
      </Link>

      {/* all menu Link */}
      <div className="p-4">
        <nav className="space-y-4">
          <Link
            to="boards"
            className="block border p-3 text-center rounded-md hover:bg-gray-200"
          >
            Boards
          </Link>
          <Link
            to="members"
            className="block border p-3 text-center rounded-md hover:bg-gray-200"
          >
            Members
          </Link>
          <Link
            to="workspace"
            className="block border p-3 text-center rounded-md hover:bg-gray-200"
          >
            WorkSpace Create
          </Link>
          <Link
            to="dashboard"
            className="block border p-3 text-center rounded-md hover:bg-gray-200"
          >
            Dashboard
          </Link>
          <Link
            to="profile"
            className="block border p-3 text-center rounded-md hover:bg-gray-200"
          >
            Profile
          </Link>
        </nav>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-center font-semibold mb-2">Your Board list</h3>
          <Link
            to="/board/1"
            className="block border p-3 text-center bg-violet-300 rounded-md hover:bg-violet-400"
          >
            Board name 1
          </Link>
          <Link
            to="/board/2"
            className="block border p-3 text-center rounded-md hover:bg-gray-200 mt-2"
          >
            Board name 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;

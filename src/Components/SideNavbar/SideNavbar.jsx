import React from "react";
import { Link } from "react-router";

const SideNavbar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-50 p-4 z-10">
      <Link to="/" className="flex items-center text-[1.4rem] font-semibold">
        <h2 className="text-center p-4">Time Scheduler</h2>
      </Link>

      {/* Navigation Links */}
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

      {/* Board List */}
      <div className="border-t mt-4 pt-4">
        <h3 className="text-center font-semibold mb-2">Your Board List</h3>
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
    </aside>
  );
};

export default SideNavbar;

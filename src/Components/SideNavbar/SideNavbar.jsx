import { Link, NavLink } from "react-router-dom";

const SideNavbar = ({ onClose }) => {
  return (
    <nav className="h-full flex flex-col p-5 bg-white shadow-lg">
      {/* Title */}
      <Link
        to="/"
        className="text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg shadow-md hover:shadow-lg transition-all"
      >
        ⏳ Schedlo
      </Link>

      {/* Close Button (Only visible on mobile) */}
      <button
        onClick={onClose}
        className="self-end p-2 text-gray-700 dark:text-gray-200 md:hidden"
      />

      {/* Navigation Links */}
      <ul className="mt-5 space-y-3">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? "bg-gray-200 text-black"
                  : "text-gray-800 hover:bg-gray-300"
              }`
            }
            onClick={onClose}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/boards"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? "bg-gray-200 text-black"
                  : "text-gray-800 hover:bg-gray-300"
              }`
            }
            onClick={onClose}
          >
            Boards
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/schedules"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? "bg-gray-200 text-black"
                  : "text-gray-800 hover:bg-gray-300"
              }`
            }
            onClick={onClose}
          >
            Schedules
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/members"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? "bg-gray-200 text-black"
                  : "text-gray-800 hover:bg-gray-300"
              }`
            }
            onClick={onClose}
          >
            Members
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? "bg-gray-200 text-black"
                  : "text-gray-800 hover:bg-gray-300"
              }`
            }
            onClick={onClose}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;

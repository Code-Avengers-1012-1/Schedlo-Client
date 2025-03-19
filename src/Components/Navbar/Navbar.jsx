import { Link, useNavigate } from "react-router";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";

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
    <header className="px-4 py-2 shadow-xl bg-white dark:bg-gray-100 dark:text-gray-800 fixed w-full left-0 right-0 z-20">
      <div className="w-full flex justify-between items-center">
        {/* Mobile Sidebar Toggle Button */}
        <button className="lg:hidden p-2" onClick={onMenuClick}>
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
    </header>
  );
};

export default Navbar;

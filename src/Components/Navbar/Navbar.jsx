import { Link, useNavigate } from "react-router";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate()

  const handleSignOut = () => {
    logOut().then(() => {
      console.log("Successfully Logged Out...");
      navigate("/signin")
    });
  };

  return (
    <header className="px-4 py-1 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between  mx-auto">
        <Button title={"Add Task"} />

        <div className="items-center flex-shrink-0 hidden lg:flex gap-2">
          {user ? (
            <button className="btn" onClick={handleSignOut}><Button title={"Sign Out"} /></button>
          ) : (
            <Link to={"signin"}>
              <Button title={"Sign In"} />
            </Link>
          )}
        </div>

        <button className="p-4 lg:hidden">
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
      </div>
    </header>
  );
};

export default Navbar;

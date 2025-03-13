import { Link } from "react-router";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <header className="px-4 py-1 border dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between  mx-auto">
        <Button title={"Add Task"} />

        <div className="items-center flex-shrink-0 hidden lg:flex gap-2">
          <Link to={"signin"}>
            <Button title={"Sign In"} />
          </Link>
          <Link to={"signup"}>
            <Button style={"bg-violet-400"} title={"Sign up"} />
          </Link>
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

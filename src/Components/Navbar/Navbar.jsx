import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import SideNavbar from "../SideNavbar/SideNavbar";
import { MdOutlineTimer } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation(); // Detect route changes

  // Close sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]); // Re-run when pathname changes

  return (

    <header className="relative bg-[#3B3B58]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left - Logo or Brand Name */}
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
        <MdOutlineTimer />
        </Link>

        {/* Middle - Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <Link to="/profile" className="flex items-center space-x-2">
              <img 
                src={user?.photoURL || "/default-avatar.png"} 
                alt="User" 
                className="w-10 h-10 rounded-full border-2 border-gray-300"
              />
              <span className="text-gray-700 dark:text-white">{user.displayName || "User"}</span>
            </Link>
          ) : (
            <Link to="/signin" className="bg-white rounded-md">
              <Button title="Sign In" />
            </Link>
          )}
        </div>

        {/* Right - Mobile Sidebar Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="p-3 md:hidden text-gray-800 dark:text-white">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 50 50">
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Collapsible Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 dark:bg-gray-800 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <SideNavbar onClose={() => setIsOpen(false)} />
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    </header>
  );
};

export default Navbar;

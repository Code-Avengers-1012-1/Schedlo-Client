import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import SideNavbar from "../Components/SideNavbar/SideNavbar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* ✅ Sidebar - Hidden on mobile, toggled with button */}
      <aside
        className={`fixed left-0 top-0 w-64 h-screen bg-violet-50 shadow-lg overflow-y-auto transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <SideNavbar />
      </aside>

      {/* ✅ Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* ✅ Main Content Area */}
      <div className="flex-1 md:ml-64">
        {/* ✅ Navbar with Sidebar Toggle Button */}
        <header className="fixed w-full md:w-[83%] z-20 bg-white shadow-md">
          <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        </header>

        {/* ✅ Page Content (Avoids navbar overlap) */}
        <main className="pt-16 min-h-screen p-4 bg-white">
          <Outlet />
        </main>

        {/* ✅ Footer */}
        <footer className="bg-gray-100 p-4">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;

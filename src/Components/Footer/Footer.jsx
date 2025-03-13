import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Left Side - Logo, Description, Social */}
          <div className="mb-8 md:mb-0 w-full md:w-1/2 pr-0 md:pr-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-purple-500 flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z" fill="currentColor" />
                </svg>
                Time Scheduler
              </h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Streamline your workflow with our intuitive task management platform. 
              Create, manage, and track your tasks efficiently to boost productivity.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Side - Quick Links and Contact Info */}
          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-500">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Tasks</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Calendar</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Reports</a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-500">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MdPhone className="w-5 h-5 mr-3 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">+1 (800) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <MdEmail className="w-5 h-5 mr-3 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">support@timescheduler.com</span>
                </li>
                <li className="flex items-start">
                  <MdLocationOn className="w-5 h-5 mr-3 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">123 Productivity Street, Suite 101<br/>San Francisco, CA 94103</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Time Scheduler. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { MdSchedule, MdArrowForward } from 'react-icons/md';


const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-purple-500 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text, input and button */}
          <div className="w-full md:w-1/2 text-white mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Manage Your Time, <br />
              Boost Your Productivity
            </h1>
            
            <p className="text-lg mb-8 text-purple-100">
              Streamline your workflow with Time Scheduler. Create, organize, and 
              track tasks efficiently to accomplish more in less time.
            </p>
            
            <div className="flex flex-col sm:flex-row w-full">
              <div className="relative flex-grow mb-4 sm:mb-0 sm:mr-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 border border-gray-300 placeholder:text-gray-300 pl-12"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <MdSchedule className="text-white h-5 w-5 " />
                </div>
              </div>
              
              <button className="bg-white text-purple-600 hover:bg-purple-200 transition-colors px-6 py-4 rounded-lg font-semibold flex items-center justify-center shadow-md hover:shadow-lg">
                Get Started
                <MdArrowForward className="ml-2" />
              </button>
            </div>
            
            <p className="text-sm mt-4 text-purple-200">
              Join over 10,000 teams already managing their schedules effectively.
            </p>
          </div>
          
          {/* Right side - Illustration */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Main illustration */}
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
                      <MdSchedule />
                    </div>
                    <span className="ml-2 font-bold text-gray-800">Time Scheduler</span>
                  </div>
                  <div className="text-xs font-medium bg-purple-100 text-purple-600 px-2 py-1 rounded">
                    Dashboard
                  </div>
                </div>
                
                {/* Task list preview */}
                <div className="space-y-3 mb-4">
                  {[
                    { title: "Product meeting", time: "9:00 AM", completed: true },
                    { title: "Design review", time: "11:30 AM", completed: false },
                    { title: "Client presentation", time: "2:00 PM", completed: false },
                    { title: "Team check-in", time: "4:30 PM", completed: false }
                  ].map((task, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded">
                      <div className={`h-5 w-5 rounded-full border ${task.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'} mr-3`}></div>
                      <div className="flex-grow">
                        <p className={`font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{task.title}</p>
                      </div>
                      <div className="text-xs text-gray-500">{task.time}</div>
                    </div>
                  ))}
                </div>
                
                {/* Progress indicator */}
                <div className="mb-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-gray-800">Today's Progress</span>
                    <span className="text-gray-600">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-yellow-400 rounded-lg -z-10 transform rotate-12"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-purple-300 rounded-lg -z-10 transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
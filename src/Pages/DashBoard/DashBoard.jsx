/* eslint-disable no-unused-vars */
import React from "react";
import { FiUsers, FiClipboard, FiCalendar, FiLayers } from "react-icons/fi";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const axiosPublic = useAxios()

  const {data: boardsData} = useQuery({
    queryKey: ["boards"],
    queryFn: async () => {
      const res = await axiosPublic.get("boards")
      return res?.data
    }
  })
  
  // Dummy data for user activities
  const stats = [
    { title: "Boards", value: 4, icon: <FiLayers size={28} />, color: "bg-blue-500" },
    { title: "Tasks Created", value: 12, icon: <FiClipboard size={28} />, color: "bg-green-500" },
    { title: "Schedules", value: 5, icon: <FiCalendar size={28} />, color: "bg-yellow-500" },
    { title: "Members", value: 8, icon: <FiUsers size={28} />, color: "bg-purple-500" },
  ];

  return (
    <div className="p-6 w-full min-h-screen bg-gray-100">
      {/* Dashboard Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center p-5 ${stat.color} text-white rounded-lg shadow-lg`}
          >
            <div className="mr-4">{stat.icon}</div>
            <div>
              <h2 className="text-xl font-semibold">{stat.value}</h2>
              <p className="text-sm">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Sections */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Recent Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Tasks</h2>
          <ul className="space-y-3">
            <li className="p-3 bg-gray-100 rounded-md">✔ Task 1 - Completed</li>
            <li className="p-3 bg-gray-100 rounded-md">🔄 Task 2 - In Progress</li>
            <li className="p-3 bg-gray-100 rounded-md">⏳ Task 3 - Pending</li>
          </ul>
        </div>

        {/* Members List */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Active Members</h2>
          <ul className="space-y-3">
            <li className="p-3 bg-gray-100 rounded-md">👤 John Doe</li>
            <li className="p-3 bg-gray-100 rounded-md">👤 Jane Smith</li>
            <li className="p-3 bg-gray-100 rounded-md">👤 Emily Johnson</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

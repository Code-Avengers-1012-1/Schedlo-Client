 
import React from "react";
import { FiUsers, FiClipboard, FiCalendar, FiLayers } from "react-icons/fi";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const Dashboard = () => {
  const axiosPublic = useAxios();
  const { user } = useAuth();

  const { data: boardsData = [] } = useQuery({
    queryKey: ["boards"],
    queryFn: async () => {
      const res = await axiosPublic.get(`boards?email=${user?.email}`);
      return res?.data;
    },
  });

  const { data: scheduleData = [] } = useQuery({
    queryKey: ["schedules"],
    queryFn: async () => {
      const res = await axiosPublic.get(`schedules?email=${user?.email}`);
      return res?.data;
    },
  });

  const { data: taskData = [] } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const res = await axiosPublic.get(`cards?email=${user?.email}`);
      return res?.data;
    },
  });

  return (
    <div className="p-6 w-full min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link to="/boards" className="flex items-center p-5 bg-white text-gray-800 rounded-lg shadow-md">
          <div className="text-blue-600 text-3xl mr-4"><FiLayers /></div>
          <div>
            <h2 className="text-2xl font-semibold">{boardsData.length}</h2>
            <p className="text-sm text-gray-500">Total Boards</p>
          </div>
        </Link>
        <Link to="/schedules" className="flex items-center p-5 bg-white text-gray-800 rounded-lg shadow-md">
          <div className="text-blue-600 text-3xl mr-4"><FiCalendar /></div>
          <div>
            <h2 className="text-2xl font-semibold">{scheduleData.length}</h2>
            <p className="text-sm text-gray-500">Total Schedules</p>
          </div>
        </Link>
        <Link className="flex items-center p-5 bg-white text-gray-800 rounded-lg shadow-md">
          <div className="text-blue-600 text-3xl mr-4"><FiClipboard /></div>
          <div>
            <h2 className="text-2xl font-semibold">{taskData?.length}</h2>
            <p className="text-sm text-gray-500">Total Tasks</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

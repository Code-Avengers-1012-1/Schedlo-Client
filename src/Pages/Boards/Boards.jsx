import React from "react";

const Boards = () => {
  // Dummy board data
  const boards = [
    { id: 1, name: "Project Management", description: "Track project progress" },
    { id: 2, name: "Marketing Campaign", description: "Plan marketing strategies" },
    { id: 3, name: "Development Sprint", description: "Manage development tasks" },
    { id: 4, name: "Personal Goals", description: "Set and achieve personal goals" },
  ];

  return (
    <div className="p-6 w-full min-h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Your Boards</h1>
        <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition">
          + Add Board
        </button>
      </div>

      {/* Boards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {boards.map((board) => (
          <div key={board.id} className="bg-white p-5 shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-lg font-semibold text-gray-700">{board.name}</h2>
            <p className="text-sm text-gray-500">{board.description}</p>
            <button className="mt-3 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition">
              Open Board
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boards;

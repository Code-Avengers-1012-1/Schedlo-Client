import React from "react";

const Schedules = () => {
  // Dummy schedule data
  const schedules = [
    { id: 1, title: "Team Meeting", time: "10:00 AM", date: "March 21, 2025" },
    { id: 2, title: "Project Deadline", time: "5:00 PM", date: "March 22, 2025" },
    { id: 3, title: "Client Call", time: "3:00 PM", date: "March 23, 2025" },
  ];

  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Schedules & Calendar</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {schedules.map((schedule) => (
          <div key={schedule.id} className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">{schedule.title}</h2>
            <p className="text-sm text-gray-500">{schedule.date}</p>
            <p className="text-sm text-gray-600 font-medium">{schedule.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedules;

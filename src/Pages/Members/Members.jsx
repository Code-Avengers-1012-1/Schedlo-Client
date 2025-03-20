import React from "react";

const Members = () => {
  // Dummy members data
  const members = [
    { id: 1, name: "John Doe", email: "john@example.com", tasks: 5 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", tasks: 8 },
    { id: 3, name: "Michael Brown", email: "michael@example.com", tasks: 3 },
    { id: 4, name: "Emily Johnson", email: "emily@example.com", tasks: 10 },
  ];

  return (
    <div className="p-6 w-full min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Team Members</h1>

      {/* Members Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div
            key={member.id}
            className="relative bg-white p-5 shadow-lg rounded-lg border border-gray-200 flex items-center space-x-4 hover:shadow-xl transition"
          >
            {/* Profile Image Placeholder */}
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">
              {member.name.charAt(0)}
            </div>

            {/* Member Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">{member.name}</h2>
              <p className="text-sm text-gray-500">{member.email}</p>
            </div>

            {/* Task Badge */}
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {member.tasks} Tasks
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;

import React from "react";

const Profile = () => {
  // Dummy user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    tasksCreated: 12,
    schedulesCreated: 5,
    profilePicture: "", // Add image URL here if available
  };

  return (
    <div className="p-6 w-full min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          {/* Profile Image */}
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold text-2xl">
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              user.name.charAt(0)
            )}
          </div>

          {/* User Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            <span className="text-xs font-semibold text-white bg-purple-600 px-3 py-1 rounded-full">
              {user.role}
            </span>
          </div>
        </div>

        {/* User Activities */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center">
            <h3 className="text-lg font-semibold text-blue-700">{user.tasksCreated}</h3>
            <p className="text-sm text-blue-500">Tasks Created</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg flex flex-col items-center">
            <h3 className="text-lg font-semibold text-green-700">{user.schedulesCreated}</h3>
            <p className="text-sm text-green-500">Schedules Created</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg shadow hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

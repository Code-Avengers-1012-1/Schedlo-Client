import { useState } from "react";

export default function CreateListModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition"
      >
        Create List
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold">Create a New List</h2>
            <p className="text-gray-600 mb-4">
              Enter details for your new list below.
            </p>
            <input
              type="text"
              placeholder="List Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

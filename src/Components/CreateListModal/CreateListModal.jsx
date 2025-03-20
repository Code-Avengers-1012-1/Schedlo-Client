import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

export default function CreateListModal({ refetch }) {
  const [open, setOpen] = useState(false);
  const [listName, setListName] = useState("");
  const [error, setError] = useState("");
  const axiosPublic = useAxios();

  const handleSubmit = async (event) => {
    event.preventDefault();
    listName ? setError(" ") : setError("Input vlaue not found");
    try {
      await axiosPublic.post("createlist", { listName });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Board Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } catch {
      console.error("Get error", error.code);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition"
      >
        Create List
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold">Create a New List</h2>
            <p className="text-gray-600 mb-4">
              Enter details for your new list below.
            </p>
            <p className="text-xs text-red-500">{error}</p>
            <input
              type="text"
              placeholder="List Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setListName(e.target.value)}
            />
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

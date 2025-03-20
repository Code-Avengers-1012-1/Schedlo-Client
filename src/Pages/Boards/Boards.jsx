import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { RiDeleteBin2Line } from "react-icons/ri";
import { HiArrowsPointingOut } from "react-icons/hi2";

const Boards = () => {
  const axiosPublic = useAxios();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { data: boardsData, refetch: boardsRefetch } = useQuery({
    queryKey: ["boards"],
    queryFn: async () => {
      const res = await axiosPublic.get("boards");
      return res?.data;
    },
  });

  const handleAddBoard = async (e) => {
    e.preventDefault();
    const newBoard = { title, description };

    try {
      await axiosPublic.post("boards", newBoard);
      setIsModalOpen(false);
      setTitle("");
      setDescription("");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Board Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      boardsRefetch();
    } catch (error) {
      console.error("Error adding board:", error);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then( async (result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`boards/${id}`);
        boardsRefetch();
      }
    });
    
  };

  const handleOpenBoard = () => {
    console.log("opened");
  };

  console.log("Boards data --> ", boardsData);

  return (
    <div className="p-6 w-full min-h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Your Boards</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition"
        >
          + Add Board
        </button>
      </div>

      {/* Boards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {boardsData?.map((board) => (
          <div
            key={board.id}
            className="bg-white p-5 shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition"
          >
            <h2 className="text-lg font-semibold text-gray-700">
              {board.title}
            </h2>
            <p className="text-sm text-gray-500">{board.description}</p>
            <div className="flex gap-2 items-center mt-2 justify-end">
              <HiArrowsPointingOut
                className="text-xl text-blue-500 hover:text-gray-400"
                onClick={handleOpenBoard}
              />
              <RiDeleteBin2Line
                className="text-xl text-red-500 hover:text-gray-400"
                onClick={() => handleDelete(board?._id)}
              />
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Board</h2>
            <form>
              <label className="block mb-2 text-sm font-medium">
                Project Title:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded-md mb-4"
                required
              />
              <label className="block mb-2 text-sm font-medium">
                Project Short Description:
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded-md mb-4"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddBoard}
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Add Board
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Boards;

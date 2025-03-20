import React from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import CreateListModal from "./CreateListModal/CreateListModal";

const Board = () => {
  const { id } = useParams();
  const axiosPublic = useAxios();

  console.log("Params id: ", id);

  const { data: boardData } = useQuery({
    queryKey: ["board"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/board/${id}`);
      return res?.data;
    },
  });

  console.log("Board data: ", boardData);

  return (
    <div className="p-6 w-full min-h-screen bg-gray-100">
      {/* Board Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Board Title</h1>
        <CreateListModal />
      </div>

      {/* Lists Container */}
      <div className="flex gap-6 overflow-x-auto">
        {/* Sample List */}
        <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 w-64 min-w-[250px]">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            List Title
          </h2>

          {/* Cards inside the list */}
          <div className="bg-gray-100 p-3 rounded mb-2 shadow-sm">Task 1</div>
          <div className="bg-gray-100 p-3 rounded mb-2 shadow-sm">Task 2</div>

          {/* Add Card Button */}
          <button className="mt-3 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition w-full">
            + Add Card
          </button>
        </div>

        {/* Another List Example */}
        <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 w-64 min-w-[250px]">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Another List
          </h2>

          {/* Cards inside the list */}
          <div className="bg-gray-100 p-3 rounded mb-2 shadow-sm">Task A</div>
          <div className="bg-gray-100 p-3 rounded mb-2 shadow-sm">Task B</div>

          {/* Add Card Button */}
          <button className="mt-3 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition w-full">
            + Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;

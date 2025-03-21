import React from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import CreateListModal from "./CreateListModal/CreateListModal";
import Swal from "sweetalert2";

const Board = () => {
  const { id } = useParams();
  const axiosPublic = useAxios();

  const { data: boardData } = useQuery({
    queryKey: ["board", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/board/${id}`);
      return res?.data;
    },
  });

  // get createlist form database
  const { data: listData, refetch: listRefetch } = useQuery({
    queryKey: ["listData", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`createList/${id}`);
      return res?.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`list/${id}`);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        listRefetch();
      }
    });
  };

  return (
    <div className="p-6 w-full min-h-screen bg-gray-100">
      {/* Board Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          {boardData?.title}
        </h1>
        <CreateListModal refetch={listRefetch} boardId={id} />
      </div>

      {/* Lists Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {listData?.map((list) => (
          <div
            key={list._id}
            className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 w-64 min-w-[250px]"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              {list?.listName}
            </h2>

            {/* Cards inside the list */}
            <div className="bg-gray-100 p-3 rounded mb-2 shadow-sm">Task 1</div>
            <div className="bg-gray-100 p-3 rounded mb-2 shadow-sm">Task 2</div>

            {/* Buttons */}
            <button
              onClick={() => handleDelete(list?._id)}
              className="mt-3 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition w-full"
            >
              Delete
            </button>

            <button className="mt-3 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition w-full">
              + Add Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;

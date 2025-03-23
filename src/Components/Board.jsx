import React, { useState } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import CreateListModal from "./CreateListModal/CreateListModal";
import Swal from "sweetalert2";
import AddCardModal from "./AddCardModal";
import { MdDelete } from "react-icons/md";

const Board = () => {
  const { id } = useParams();
  const axiosPublic = useAxios();
  const [openCardModal, setOpenCardModal] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);

  const { data: boardData } = useQuery({
    queryKey: ["board", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/board/${id}`);
      return res?.data;
    },
  });

  const { data: listData, refetch: listRefetch } = useQuery({
    queryKey: ["listData", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`createList/${id}`);
      return res?.data;
    },
  });

  const { data: cardData, refetch: cardRefetch } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cards`);
      cardRefetch();
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
        await axiosPublic.delete(`list/${id}`);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      listRefetch();
    });
  };

  const handleTaskRemove = async (id) => {
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
        await axiosPublic.delete(`/cards/${id}`);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      cardRefetch();
    });
  };

  return (
    <div className="p-6 w-full min-h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          {boardData?.title}
        </h1>
        <CreateListModal refetch={listRefetch} boardId={id} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {listData?.map((list) => (
          <div
            key={list._id}
            className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 w-64 min-w-[250px]"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              {list?.listName}
            </h2>

            {cardData?.map((card, i) => (
              <div key={i}>
                {list._id === card?.listId ? (
                  <div className="bg-gray-100 p-3 flex justify-between items-center rounded mb-2 shadow-sm">
                    <h3>{card?.title}</h3>
                    <button onClick={() => handleTaskRemove(card?._id)}>
                      <MdDelete className="text-red-500 text-[1.4rem] hover:text-red-700" />
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}

            <button
              onClick={() => handleDelete(list?._id)}
              className="mt-3 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition w-full"
            >
              Delete
            </button>

            <button
              onClick={() => {
                setSelectedListId(list._id);
                setOpenCardModal(true);
              }}
              className="mt-3 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition w-full"
            >
              + Add Card
            </button>
          </div>
        ))}
      </div>

      {openCardModal && (
        <AddCardModal
          listId={selectedListId}
          closeModal={() => setOpenCardModal(false)}
          refetch={cardRefetch}
        />
      )}
    </div>
  );
};

export default Board;

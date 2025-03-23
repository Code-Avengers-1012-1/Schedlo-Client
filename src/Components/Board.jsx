/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import CreateListModal from "./CreateListModal/CreateListModal";
import Swal from "sweetalert2";
import AddCardModal from "./AddCardModal";
import useAuth from "../hooks/useAuth";

const Board = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isListLoading, setIsListLoading] = useState(true);
  const axiosPublic = useAxios();
  const [openCardModal, setOpenCardModal] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);

  const { data: boardData } = useQuery({
    queryKey: ["board", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/board/${id}`);
      setIsLoading(false);
      return res?.data;
    },
  });

  const { data: listData, refetch: listRefetch } = useQuery({
    queryKey: ["listData", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`createList/${id}`);
      setIsListLoading(false);
      return res?.data;
    },
  });

  const { data: cardData, refetch: cardRefetch } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cards`);
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
    <>
      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center text-3xl">
          Board Data is Loading...
        </div>
      ) : (
        <div className="p-6 w-full min-h-screen bg-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800 ">
              {boardData?.title}
            </h1>
            <CreateListModal refetch={listRefetch} boardId={id} />
          </div>

          {isListLoading ? (
            <div>List data coming soon</div>
          ) : listData?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {listData?.map((list) => (
                <div
                  key={list._id}
                  className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 w-64 min-w-[250px]"
                >
                  <h2 className="text-lg font-semibold text-gray-700 mb-3">
                    {list?.listName}
                  </h2>

                  <div>
                    {cardData?.map((card, i) => (
                      <>
                        {list._id === card?.listId ? (
                          <div
                            key={i}
                            className={`bg-gray-100 p-3 rounded mb-2 shadow-sm flex items-start gap-2 ${
                              card?.completed ? "opacity-50" : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={card?.completed}
                              className="mt-1 cursor-pointer"
                            />
                            <div>
                              <h2
                                className={`${
                                  card?.completed
                                    ? "line-through text-gray-400"
                                    : ""
                                }`}
                              >
                                {card?.title}
                              </h2>
                              <p className="text-xs text-gray-500">
                                {card?.description}
                              </p>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    ))}
                  </div>

                  <button
                    onClick={() => handleDelete(list?._id)}
                    className="mt-3 px-3 py-1 bg-red-400 text-white text-sm rounded hover:bg-red-500 transition w-full"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => {
                      setSelectedListId(list._id);
                      setOpenCardModal(true);
                    }}
                    className="mt-3 px-3 py-1 bg-blue-400 text-white text-sm rounded hover:bg-blue-500 transition w-full"
                  >
                    + Add Card
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-400">
              No list added by
              <span className="text-gray-500 text-xs">{user?.email}</span>
            </p>
          )}

          {openCardModal && (
            <AddCardModal
              listId={selectedListId}
              closeModal={() => setOpenCardModal(false)}
              refetch={cardRefetch}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Board;

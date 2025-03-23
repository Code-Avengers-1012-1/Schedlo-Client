import React, { useState } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import CreateListModal from "./CreateListModal/CreateListModal";
import Swal from "sweetalert2";
import AddCardModal from "./AddCardModal";
import useAuth from "../hooks/useAuth";
import { FaDeleteLeft } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

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
      const res = await axiosPublic.get(`cards?email=${user?.email}`);
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
        listRefetch();
      }
    });
  };

  const handleDeleteCard = async (id) => {
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
        await axiosPublic.delete(`card/${id}`);
        cardRefetch();
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
                  <div className="flex justify-between items-center pb-2 ">
                    <h2 className="text-lg font-semibold text-gray-700">
                      {list?.listName}
                    </h2>
                    <button onClick={() => handleDelete(list?._id)}>
                      <RxCross1 className="hover:text-red-500"/>
                    </button>
                  </div>

                  <div>
                    {cardData?.map((card, i) => (
                      <>
                        {list._id === card?.listId ? (
                          <div
                            key={i}
                            className={`bg-gray-100 p-4 rounded-lg shadow-sm flex items-start gap-3 ${
                              card?.completed ? "opacity-50" : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={card?.completed}
                              className="mt-1 cursor-pointer"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <h2
                                  className={`${
                                    card?.completed
                                      ? "line-through text-gray-400"
                                      : "text-gray-800"
                                  } font-semibold`}
                                >
                                  {card?.title}
                                </h2>
                                <button
                                  onClick={() => handleDeleteCard(card?._id)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <FaDeleteLeft size={18} />
                                </button>
                              </div>
                              <p className="text-xs text-gray-600">
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

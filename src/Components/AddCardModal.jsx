/* eslint-disable no-unused-vars */
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const AddCardModal = ({ listId, closeModal, refetch }) => {
    const axiosPublic = useAxios();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!title.trim() || !description.trim()) {
        setError("All fields are required.");
        return;
      }
  
      try {
        await axiosPublic.post("addCard", { title, description, listId });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Card Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
        closeModal();
      } catch (err) {
        console.error("Error adding card:", err);
        setError("Failed to add card. Try again.");
      }
    };

  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/30">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold">Add New Card</h2>
          {error && <p className="text-xs text-red-500">{error}</p>}
  
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
  
          <textarea
            placeholder="Short Description"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
  
          <div className="flex justify-end mt-4 space-x-2">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default AddCardModal;
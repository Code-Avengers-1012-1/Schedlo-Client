 import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { Link } from "react-router";
import { RiDeleteBin3Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Schedules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const axiosPublic = useAxios();
  const { user } = useAuth();
  const userEmail = user?.email;
  const status = "Upcoming"
  const reminder = true

  const {
    data: scheduleData,
    refetch: scheduleRefetch,
    isPending,
    error,
  } = useQuery({
    queryKey: ["schedules"],
    queryFn: async () => {
      const res = await axiosPublic.get(`schedules?email=${userEmail}`);
      return res?.data;
    },
  });

  if (isPending) return "Loading...";

  if (error)
    return (
      <p className="text-red-500 p-5">
        An error has occurred: + {error.message}
      </p>
    );

  const handleMakeSchedule = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Schedule Details:", { title, date, time });

    axiosPublic
      .post("/schedules", { title, date, time, userEmail, status, reminder })
      .then((res) => {
        console.log("schedules api response --> ", res?.data);
        scheduleRefetch();
      })
      .catch((err) => {
        console.log("schedules api err --> ", err);
      });
    setIsModalOpen(false);
  };

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "gray",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosPublic.delete(`schedule/${id}`);
        scheduleRefetch();
      }
    });
  };

  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          Schedules & Calendar
        </h1>

        <button
          onClick={handleMakeSchedule}
          className="px-2 md:px-4 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition text-xs md:text-lg"
        >
          Make a Schedule
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-2">
        {scheduleData?.map((schedule) => (
          <div className="bg-[#F4F2EE] p-6 shadow-lg rounded-lg border border-gray-200" key={schedule?._id}>
            <h1 className="text-lg font-bold text-gray-800">
              {schedule?.title}
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              {moment(schedule?.date).format('L')}
            </p>
            <p className="text-xs text-gray-500">
              schedule created by: {schedule?.userEmail}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-md font-medium text-gray-700 mt-1">
                {schedule?.time}
              </p>
              <button
                onClick={() => handleRemove(schedule?._id)}
                className="text-red-400"
              >
                <RiDeleteBin3Line />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 md:w-96">
            <h2 className="text-xl font-semibold mb-4">Create Schedule</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Time</label>
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedules;

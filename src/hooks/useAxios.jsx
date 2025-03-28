import axios from "axios";
import React from "react";

const useAxios = () => {
  const axiosPublic = axios.create({
    baseURL: "https://time-scheduler-server.vercel.app/",
  });

  return axiosPublic;
};

export default useAxios;

import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-screen">
      <h2 className="text-9xl text-red-500">404</h2>
      <h4 className="text-xl">Not Found Your Data</h4>
      <Link to="/">
        <button className="px-4 py-2 border rounded-lg ">Back Home</button>
      </Link>
    </div>
  );
};

export default Error;

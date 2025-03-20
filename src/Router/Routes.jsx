import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import SignupForm from "../Pages/SignUp/SignupForm";
import SinginForm from "../Pages/SignIn/SinginForm";
import Boards from "../Pages/Boards/Boards";
import Members from "../Pages/Members/Members";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Profile from "../Pages/Profile/Profile";
import Schedules from "../Pages/Schedules/Schedules";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SinginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="boards" element={<Boards />} />
        <Route path="members" element={<Members />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="schedules" element={<Schedules />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;

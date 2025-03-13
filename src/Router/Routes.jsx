import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import SignupForm from "../Pages/SignUp/SignupForm";
import SinginForm from "../Pages/SignIn/SinginForm";
import Boards from "../Pages/Boards/Boards";
import Members from "../Pages/Members/Members";
import DashBord from "../Pages/DashBord/DashBord";
import Profile from "../Pages/Profile/Profile";
import WorkSpace from "../Pages/WorkSpace/WorkSpace";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SinginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="boards" element={<Boards />} />
        <Route path="members" element={<Members />} />
        <Route path="dashboard" element={<DashBord />} />
        <Route path="profile" element={<Profile />} />
        <Route path="workspace" element={<WorkSpace />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;

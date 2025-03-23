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
import Board from "../Components/Board";
import PrivateRoute from "./PrivateRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SinginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="boards" element={<PrivateRoute><Boards /></PrivateRoute>} />
        <Route path="members" element={<PrivateRoute><Members /></PrivateRoute>} />
        <Route path="dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>} />
        <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="schedules" element={<PrivateRoute><Schedules /></PrivateRoute>} />
        <Route path="board/:id" element={<PrivateRoute><Board /></PrivateRoute>}></Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;

import React from "react";
import Signin from "./Signin.tsx";
import { Routes, Route, Navigate } from "react-router";
import Profile from "./Profile.tsx";
import Signup from "./Signup.tsx";
import AccountNavigation from "./AccountNavigation.tsx";
import { useSelector } from "react-redux";
import Users from "./Users.tsx";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="d-flex">
      <AccountNavigation />

      <div className="flex-fill">
        <Routes>
          <Route path="/" element={<Navigate to={currentUser ? "/Account/Profile" : "/Account/Signin"} />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Users/:uid" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

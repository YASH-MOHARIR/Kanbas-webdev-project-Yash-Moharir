import React from "react";
import Signin from "./Signin.tsx";
import { Routes, Route, Navigate } from "react-router";
import Profile from "./Profile.tsx";
import Signup from "./Signup.tsx";
import { Link } from "react-router-dom";
import AccountNavigation from "./AccountNavigation.tsx";

class Account extends React.Component {
  render() {
    return (
      <div className="d-flex">
        <AccountNavigation />

        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
        
      </div>
    );
  }
}

export default Account;

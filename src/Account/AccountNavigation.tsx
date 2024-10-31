import React from "react";
import { Component } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  const accountLinks = [
    { label: "Signin", path: `/Account/Signin` },
    { label: "Signup", path: `/Account/Signup` },
    { label: "Profile", path: `/Account/Profile` },
  ];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {accountLinks.map((aLink) => (
        <Link
          to={aLink.path}
          className={`list-group-item ${pathname.includes(aLink.path) ? " active" : ""} border text-danger border-0`}>
          {aLink.label}
        </Link>
      ))}
    </div>
  );
}

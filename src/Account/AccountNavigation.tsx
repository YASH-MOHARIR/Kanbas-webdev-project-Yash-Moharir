import React from "react";
import { Component } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser
    ? [{ label: "Profile", path: `/Account/Profile` }]
    : [
        { label: "Signin", path: `/Account/Signin` },
        { label: "Signup", path: `/Account/Signup` },
      ];
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((aLink) => (
        <Link
          key={aLink.path}
          to={aLink.path}
          className={`list-group-item ${pathname.includes(aLink.path) ? " active" : ""} border text-danger border-0`}>
          {aLink.label}
        </Link>
      ))}

{currentUser && currentUser.role === "FACULTY" && (
        <Link
          to={`/Account/Users`}
          className={`list-group-item  ${pathname.includes("Users") ? " active" : ""} border text-danger border-0 `}>
          Users{" "}
        </Link>
      )}
    </div>
  );
}

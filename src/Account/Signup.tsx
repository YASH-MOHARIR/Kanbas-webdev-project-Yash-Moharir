import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" /><br/>
      <input placeholder="password" type="password" /><br/>
      <input placeholder="verify password" type="password" /><br/>
      <Link to="Account/Profile" > Sign up </Link><br />
      <Link to="Account/Signin" >Sign in</Link>
    </div>
);}

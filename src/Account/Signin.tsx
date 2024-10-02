import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="username" className="form-control mb-2" /> <br />
      <input id="wd-password" placeholder="password" type="password" className="form-control mb-2" /> <br />

       <Link className="btn btn-primary w-100 mb-2" id="wd-signin-btn" to="/Dashboard"  >Sign In</Link>
       <Link  className=" mt-5" id="wd-signup-link" to="/Account/Signup">Sign up</Link>
    </div>
);}



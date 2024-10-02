import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input className="form-control mb-2" id="wd-username" value="alice" placeholder="username" /><br/>
      <input className="form-control mb-2" id="wd-password" value="123" placeholder="password"
             type="password" /><br/>
      <input className="form-control mb-2" id="wd-firstname" value="Alice" placeholder="First Name" /><br/>
      <input className="form-control mb-2" id="wd-lastname" value="Wonderland" placeholder="Last Name" /><br/>
      <input className="form-control mb-2" id="wd-dob" value="2000-01-01" type="date" /><br/>
      <input className="form-control mb-2" id="wd-email" value="alice@wonderland" type="email" /><br/>
      <select className="form-select mb-2" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link className="btn btn-danger w-100" to="/Account/Signin" >Sign out</Link>
    </div>
);}

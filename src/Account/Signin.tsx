import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer.ts";
import { useDispatch } from "react-redux";
import React from "react";
import * as client from "./client.ts";

export default function Signin() { 
  
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    try{

      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      navigate("/Dashboard");
    }catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input
        defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="form-control mb-2"
        placeholder="username"
        id="wd-username"
      />
      <input
        defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="form-control mb-2"
        placeholder="password"
        type="password"
        id="wd-password"
      />
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100">
        {" "}
        Sign in{" "}
      </button>
      <Link id="wd-signup-link" to="/Account/Signup">
        {" "}
        Sign up{" "}
      </Link>
    </div>
  );
}

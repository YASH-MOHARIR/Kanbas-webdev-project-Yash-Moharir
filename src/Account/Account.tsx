import React from "react";
import Signin from "./Signin.tsx";
import { Routes, Route, Navigate } from "react-router";
import Profile from "./Profile.tsx";
import Signup from "./Signup.tsx";
import { Link } from "react-router-dom";

 
 
class Account extends React.Component {
 
    render() { 
        return ( 
            <div>
                <h2>Account</h2> 
   
                <Link to={`/Account/Signin`}  > Signin  </Link> <br/>
                <Link to={`/Account/Signup`}  > Signup  </Link> <br/>
                <Link to={`/Account/Profile`} > Profile </Link> <br/>
            
                <Routes>
                    <Route path="/" element={<Navigate to="/Account/Signin" />} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Signup" element={<Signup />} />
                </Routes>
            </div>
         );
    }
}
 
export default Account;
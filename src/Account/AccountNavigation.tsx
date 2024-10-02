import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
 
class AccountNavigation extends  Component {
 
    render() { 
        return (
            <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
                <Link to={`/Account/Signin`}  className="list-group-item active border text-danger border-0" > Signin  </Link> 
                <Link to={`/Account/Signup`}  className="list-group-item   border text-danger border-0" > Signup  </Link> 
                <Link to={`/Account/Profile`}  className="list-group-item   border text-danger border-0"> Profile </Link> 
          </div>
        );
    }
}
 
export default AccountNavigation;
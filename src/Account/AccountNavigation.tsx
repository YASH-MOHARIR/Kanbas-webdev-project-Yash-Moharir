import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
 
class AccountNavigation extends  Component {
 
    render() { 
        return (
            <div id="wd-account-navigation">
                <Link to={`/Account/Signin`}  > Signin  </Link> <br/>
                <Link to={`/Account/Signup`}  > Signup  </Link> <br/>
                <Link to={`/Account/Profile`} > Profile </Link> <br/>
          </div>
        );
    }
}
 
export default AccountNavigation;
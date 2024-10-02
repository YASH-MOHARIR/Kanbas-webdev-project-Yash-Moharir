import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

// KanbasNavigation
class MainNavigation extends Component {
  render() {
    return (
      <div
        id="wd-kanbas-navigation"
        style={{ width: 120 }}
        className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
        <a
          href="https://www.northeastern.edu/"
          id="wd-neu-link"
          target="_blank"
          className="list-group-item bg-black border-0 text-center">
          <img src="/images/NEU_logo.png" width="75px" />
        </a>

        <Link to="/Account" id="wd-account-link" className="list-group-item text-center border-0 bg-black text-white">
          <FaRegCircleUser className="fs-1 text text-white" />
          Account
        </Link>

        <Link
          to="/Dashboard"
          id="wd-dashboard-link"
          className="list-group-item text-center border-0 bg-black text-white">
          <AiOutlineDashboard className="fs-1 text-danger" />
          Dashboard
        </Link>

        <Link to="/Courses/01" id="wd-course-link" className="list-group-item text-center border-0 bg-black text-white">
          <LiaBookSolid className="fs-1 text-danger" />
          Courses
        </Link>

        <Link to="/Calendar" id="wd-calendar-link" className="list-group-item text-center border-0 bg-black text-white">
          <IoCalendarOutline className="fs-1 text-danger" />
          Calendar
        </Link>

        <Link to="/Inbox" id="wd-inbox-link" className="list-group-item text-center border-0 bg-black text-white">
          <FaInbox className="fs-1 text-danger" /> <br />
          Inbox
        </Link>
        <a
          href="https://main--webdev-yash-moharir-landing-pag.netlify.app/"
          className="name btn btn-outline-danger m-3 p-2 ">
          Labs - Landing Page
        </a>
      </div>
    );
  }
}

export default MainNavigation;

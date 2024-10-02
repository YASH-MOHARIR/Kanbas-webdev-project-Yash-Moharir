import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class CoursesNavigation extends Component {
  render() {
    return (
      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        <Link to="/Courses/1234/Home" className="list-group-item active border border-0">
          Home
        </Link>
        <Link to="/Courses/1234/Modules" className="list-group-item active text-danger border border-0">
          Modules
        </Link>
        <Link to="/Courses/1234/Piazza" className="list-group-item active text-danger border border-0">
          Piazza
        </Link>
        <Link to="/Courses/1234/Zoom" className="list-group-item active text-danger border border-0">
          Zoom
        </Link>
        <Link to="/Courses/1234/Assignments" className="list-group-item active text-danger border border-0">
          Assignments
        </Link>
        <Link to="/Courses/1234/Quizzes" className="list-group-item active border text-danger border-0">
          Quizzes
        </Link>
        <Link to="/Courses/1234/Grades" className="list-group-item active border text-danger border-0">
          Grades
        </Link>
        <Link to="/Courses/1234/People" className="list-group-item active border border-0">
          People
        </Link>
      </div>
    );
  }
}

export default CoursesNavigation;

import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database/database.tsx";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const courseLinks = [
    { label: "Home", path: `/Courses/${cid}/Home` },
    { label: "Modules", path: `/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Courses/${cid}/Assignments` }, 
    { label: "Quizes", path: `/Courses/${cid}/Quizes` },
    { label: "Grades", path: `/Courses/${cid}/Grades` },
    { label: "People", path: `/Courses/${cid}/People` },
  ]; 
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {courseLinks.map((cLink) => (
        <Link
        key={cLink.path}
          to={cLink.path}
          className={` ${
            pathname.includes(cLink.path) ? " active" : " text-danger"
          } course-nav-link list-group-item  border border-0 `}>
          {cLink.label}
        </Link>
      ))}
    </div>
  );
}

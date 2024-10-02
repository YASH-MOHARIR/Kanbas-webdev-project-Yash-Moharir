import React from "react";
import { Component } from "react";
import { Navigate, Route, Routes } from "react-router";
import CoursesNavigation from "../Navigation/CoursesNavigation.tsx";
import Modules from "./Modules/Modules.tsx";
import Home from "./Home/Home.tsx";
import Assignments from "./Assingments/Assignments.tsx";
import AssignmentEditor from "./Assingments/AssignmentEditor.tsx";
import PeopleTable from "./People/PeopleTable.tsx";

class Courses extends Component {
  render() {
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
          {/* <FaAlignJustify className="me-4 fs-4 mb-1" /> */}
          Course 1234{" "}
        </h2>{" "}
        <hr />
        <div className="d-flex">
          <div className="d-none d-md-block">
            <CoursesNavigation />
          </div>
          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;

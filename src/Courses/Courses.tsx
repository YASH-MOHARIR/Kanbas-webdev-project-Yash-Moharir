import React from "react"; 
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import CoursesNavigation from "../Navigation/CoursesNavigation.tsx";
import Modules from "./Modules/Modules.tsx";
import Home from "./Home/Home.tsx";
import Assignments from "./Assingments/Assignments.tsx";
import AssignmentEditor from "./Assingments/AssignmentEditor.tsx";
import PeopleTable from "./People/PeopleTable.tsx";
import AssignmentDetails from "./Assingments/AssignmentDetails.tsx"; 
import NewAssignment from "./Assingments/NewAssignment.tsx";
import { addAssignment } from "./Assingments/reducer.ts";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        {" "}
        {course && course.name} &gt; {pathname.split("/")[3]}
      </h2>
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
            <Route path="Assignments/new" element={<NewAssignment addAssignment= {addAssignment}/>} />
            <Route path="Assignments/:aid/Details" element={<AssignmentDetails />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

 

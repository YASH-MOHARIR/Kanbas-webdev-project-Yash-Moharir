import React from "react";
import CourseStatus from "./Status.tsx";
import Modules from "../Modules/Modules.tsx";
import { useSelector } from "react-redux";

export default function Home() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";

  return (
    <div>
      <div className="d-flex" id="wd-home">
        <div className="flex-fill">
          <Modules />
        </div>
        {isFaculty && (
          <div className="d-none d-md-block">
            <CourseStatus />
          </div>
        )}
      </div>
    </div>
  );
}

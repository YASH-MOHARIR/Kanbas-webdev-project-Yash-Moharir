import React from "react";
import CourseStatus from "./Status.tsx";
import Modules from "../Modules/Modules.tsx";

export default function Home() {
  return (
    <div>
      <div className="d-flex" id="wd-home">
        <div className="flex-fill">
          <Modules />
        </div>
        <div className="d-none d-md-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}

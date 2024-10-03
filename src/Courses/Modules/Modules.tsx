import React from "react";
import ModulesControls from "./ModulesControls.tsx";
import ModuleControlButtons from "./ModuleControlButtons.tsx";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
    <div>
      <ModulesControls /> 
      <ul id="wd-modules" className="list-group rounded-0 mt-5 mx-md-4">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
  
            <BsGripVertical className="me-2 fs-3" />
            Week 1
            <ModuleControlButtons /> 
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES <ModuleControlButtons /> </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Introduction to the course <ModuleControlButtons /> </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Learn what is Web Development <ModuleControlButtons /> </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> LESSON 1 <ModuleControlButtons /> </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> LESSON 2 <ModuleControlButtons /> </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons /> </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES <ModuleControlButtons /> </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> LESSON 1 <ModuleControlButtons /> </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> LESSON 2 <ModuleControlButtons /> </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

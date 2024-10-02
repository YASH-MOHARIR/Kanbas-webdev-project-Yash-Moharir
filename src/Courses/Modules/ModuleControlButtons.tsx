import React from "react";
import GreenCheckmark from "./GreenCheckmark.tsx";
import { IoEllipsisVertical } from "react-icons/io5";
 
 
class ModuleControlButtons extends React.Component  {
 
    render() { 
        return (
            <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
          </div>
          );
    }
}
 
export default ModuleControlButtons;
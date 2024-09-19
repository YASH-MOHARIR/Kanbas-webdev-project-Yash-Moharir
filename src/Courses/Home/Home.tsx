import React from "react"; 
import CourseStatus from "./Status.tsx"; 
import Modules from "../Modules/Modules.tsx";

export default function Home() {
  return (
    <table id="wd-home">
      <tr>
        <td valign="top"> <Modules /> </td>
        <td valign="top"> <CourseStatus /> </td>
      </tr> 
    </table>
);}

import React, { useEffect, useState } from "react";
// import { assignments } from "../../Database/database.tsx";
import { useParams } from "react-router";

import * as assignmentsClient from "./client.ts";

export default function AssignmentDetails() {
  const { cid, aid } = useParams();
  const [currAssingment,setCurAssignmet] = useState(  {
    "_id": "A101",
    "title": "Propulsion Assignment",
    "course": "RS101",
    "module": "Module 1",
    "availableDate": "2024-10-20T00:00",
    "dueDate": "2024-10-30T23:59",
    "link": "#/Kanbas/Courses/RS101/Assignments/A101",
    "description": "This assignment is about propulsion systems in aerospace engineering.",
    "points": 100,
    "assignmentGroup": "Assignments",
    "showGradesAs": "Percentage",
    "submissionType": {
      "mode": "Online",
      "options": ["Text Entry", "Website URL", "Media Recordings"]
    },
    "assignedTo": "Everyone",
    "availableFrom": "2024-10-20T00:00",
    "availableUntil": "2024-10-30T23:59"
  });

  // var currAssingment = assignments.filter((assignment) => assignment._id == aid).map((assignment) => assignment)[0];

  const fetchThisAssignment = async(courseID,assignmentID) =>{
    const assignment = await assignmentsClient.fetchAssignmentByID(courseID,assignmentID) 
    console.log(assignment);
    
    setCurAssignmet(assignment); 
   }
 
   useEffect(() => {
    fetchThisAssignment(cid,aid);
  },[cid]);

  return (
    <div>
      <h1>Assignment Details:</h1>
      <h3>{currAssingment.title}</h3>
      <h6>Due : {currAssingment.dueDate} | Points : {currAssingment.points}</h6>
      <h6>Available From : {currAssingment.availableFrom.split("T")[0]} | Available Until : {currAssingment.availableUntil.split("T")[0]}</h6>
      <p>{currAssingment.description}</p>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./Assignments.css";

import { LiaPlusSolid, LiaSearchSolid } from "react-icons/lia";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";

import GreenCheckmark from "../Modules/GreenCheckmark.tsx";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa"; 

import * as assignmentsClient from "./client.ts";
import * as enrollmemtsClient from "../../Dashboard/client.ts";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";

const [assignments,setAssignments] = useState([  {
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
}]); 
 
  const [enrollments, setAllenrollments] = useState<any[]>([]);
  
  const fetchAllEnrollmetns = async () => {
    const allEnrollments = await enrollmemtsClient.getAllEnrollments();
    console.log(allEnrollments.data);

    setAllenrollments(allEnrollments.data);
  };

  const fetchAssignmentsInCourse = async(courseID) =>{
   const assignments = await assignmentsClient.fetchAssignmentsInCourse(courseID)
   setAssignments(assignments); 
  }
  
  const deleteAssignment = async(courseID,assignmentID) =>{
   await assignmentsClient.deleteAssignmetn(courseID,assignmentID)
   fetchAssignmentsInCourse(cid); 
  }


  useEffect(() => {
    fetchAssignmentsInCourse(cid);
    fetchAllEnrollmetns();
  },[cid]);
 

  return (
    <div id="wd-assignments">
      <div className="search actions">
        <div className="input-group  mb-3 w-50 d-inline " id="wd-search-assignment">
          <span className="input-group-text d-inline search-icon" id="basic-addon1">
            <LiaSearchSolid />
          </span>
          <input
            type="text"
            className="form-control w-50 d-inline"
            placeholder="Search..."
            aria-describedby="basic-addon1"></input>
        </div>
        {isFaculty ? (
          <div className="action-btns">
            <button className="btn btn-outline-dark   mx-3" id="wd-add-assignment-group">
              + Group
            </button>
            <Link key={cid} to={`/Courses/${cid}/Assignments/new`}>
              <button className="btn btn-danger mx-3" id="wd-add-assignment">
                + Assignment
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="assignment-heading mt-3 p-3 bg-secondary">
        <h3 id="wd-assignments-title">
          <BsGripVertical />
          <IoMdArrowDropdown />
          ASSIGNMENTS
        </h3>

        <div className="heading-controls">
          <p>40% of Total</p>
          <div className="icons">
            {isFaculty ? (
              <Link key={"cid" + cid} to={`/Courses/${cid}/Assignments/new`}>
                <LiaPlusSolid className="assingment-icon " />
              </Link>
            ) : (
              ""
            )}
            <BsThreeDotsVertical className="assingment-icon" />
          </div>
        </div>
      </div>

      <ul className="list-group assignment-cards " id="wd-assignment-list">
        {assignments
          .filter((assignment) =>
            enrollments.some((enrollment) => enrollment.course === assignment.course && enrollment.course === cid)
          )
          .map((assignment: any) => (
            <li className="wd-assignment-list-item list-group-item assignment-card p-4">
              
              <BsGripVertical className="grip-icon" />

              <MdEditDocument className="document-editor-icon mx-3" />

              <div className="card-body d-inline ml-5">
                <Link
                  className="wd-assignment-link "
                  to={`/Courses/${cid}/Assignments/${assignment._id}/${isFaculty ? "" : "Details"}`}>
                  {assignment.title}
                </Link>
                <p>Not Available Until :{assignment.availableFrom} | Due {assignment.dueDate} | - /{assignment.points}pts</p>
 
              </div>

              <div className="card-right">
                
                {isFaculty ? (
                  <button
                    className="btn btn-danger mx-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target={`#${assignment._id}`} 
                    >
                    <FaTrash />
                  </button>
                ) : (
                  ""
                )}



                <GreenCheckmark />
                <BsThreeDotsVertical />
              </div>
              <div className="modal fade" id={assignment._id}  >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Are you sure you want to delete?
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
 
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                          Cancel
                        </button>
                        <button
                          onClick={() => 
                            // dispatch(deleteAssignment(assignment._id))
                            deleteAssignment(cid,assignment._id)
                        }
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import "./Assignments.css";

import { LiaPlusSolid, LiaSearchSolid } from "react-icons/lia";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";

import GreenCheckmark from "../Modules/GreenCheckmark.tsx";
import { Link, useParams } from "react-router-dom";
 

import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer.ts";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
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
        {isFaculty?
        <div className="action-btns">
          <button className="btn btn-outline-dark   mx-3" id="wd-add-assignment-group">
            + Group
          </button>
          <Link to={`/Courses/${cid}/Assignments/new`}>
            <button className="btn btn-danger mx-3" id="wd-add-assignment">
              + Assignment
            </button>
          </Link>
        </div>
        :""}
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
            {isFaculty?
            <Link to={`/Courses/${cid}/Assignments/new`}>
              <LiaPlusSolid className="assingment-icon " />
            </Link>
            :""}
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
                <p>Due {assignment.dueDate} Oct 3 at 11:59pm | - /100 pts</p>
              </div>

              <div className="card-right">
                {isFaculty?
                <button className="btn btn-danger mx-2">
                  <FaTrash onClick={() => dispatch(deleteAssignment(assignment._id))} />
                </button>
                :""}

                <GreenCheckmark />
                <BsThreeDotsVertical />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

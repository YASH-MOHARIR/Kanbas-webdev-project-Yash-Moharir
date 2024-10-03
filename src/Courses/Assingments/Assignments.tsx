import React from "react";
import { LiaPlusSolid, LiaSearchSolid, LiaUserMinusSolid } from "react-icons/lia";
import "./Assignments.css";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import GreenCheckmark from "../Modules/GreenCheckmark.tsx";

export default function Assignments() {
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
        <div className="action-btns">
          <button className="btn btn-outline-dark   mx-3" id="wd-add-assignment-group">
            + Group
          </button>
          <button className="btn btn-danger mx-3" id="wd-add-assignment">
            + Assignment
          </button>
        </div>
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
            <LiaPlusSolid className="assingment-icon " />
            <BsThreeDotsVertical className="assingment-icon" />
          </div>
        </div>
      </div>

      <ul className="list-group assignment-cards " id="wd-assignment-list">
        <li className="wd-assignment-list-item list-group-item assignment-card p-4">
          <BsGripVertical className="grip-icon" />

          <div className="card-body d-inline ml-5">
            <a className="wd-assignment-link " href="/Courses/1234/Assignments/1">
              A1 - ENV + HTML
            </a>
            <p>Due Oct 3 at 11:59pm Oct 3 at 11:59pm | - /100 pts</p>
          </div>

          <div className="card-right">
            <GreenCheckmark />
            <BsThreeDotsVertical />
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item assignment-card p-4">
          <BsGripVertical className="grip-icon" />

          <div className="card-body d-inline ml-5">
            <a className="wd-assignment-link " href="/Courses/1234/Assignments/2">
              A2 - CSS
            </a>
            <p>Due Oct 3 at 11:59pm Oct 3 at 11:59pm | - /100 pts</p>
          </div>

          <div className="card-right">
            <GreenCheckmark />
            <BsThreeDotsVertical />
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item assignment-card p-4">
          <BsGripVertical className="grip-icon" />

          <div className="card-body d-inline ml-5">
            <a className="wd-assignment-link " href="/Courses/1234/Assignments/3">
              A3 -Bootstrap
            </a>
            <p>Due Oct 3 at 11:59pm Oct 3 at 11:59pm | - /100 pts</p>
          </div>

          <div className="card-right">
            <GreenCheckmark />
            <BsThreeDotsVertical />
          </div>
        </li>
      </ul>
    </div>
  );
}

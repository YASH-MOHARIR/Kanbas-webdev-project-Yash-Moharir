import React, { useState } from "react";
import { useParams } from "react-router"; 
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {  updateAssignment } from "./reducer.ts";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  var dispatch = useDispatch();
  
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  var currAssignment = assignments.filter((assignment) => assignment._id == aid).map((assignment) => assignment)[0];
   
  console.log(currAssignment);
  const [thisAssignment, setThisAssignment] = useState(currAssignment);

  return (
    <div id="wd-assignments-editor">
      <h1>Edit Assignment</h1>
      <label className="form-label" htmlFor="wd-name">
        Assignment Name
      </label>
      <input
        onChange={(e) => setThisAssignment({ ...thisAssignment, title: e.target.value })}
        className="form-control assignment-name"
        id="wd-name"
        defaultValue={currAssignment.title}
      />

      <p className="description-label">Description :</p>
      <textarea
        className="form-control"
        cols={10}
        rows={5}
        id="wd-description"
        defaultValue={currAssignment.description}
        onChange={(e) => setThisAssignment({ ...thisAssignment, description: e.target.value })}></textarea>

      <div className="row mt-4">
        <div className="col">
          <label htmlFor="wd-points">Points</label>
        </div>
        <div className="col-8">
          <input
            className="form-control"
            id="wd-points"
            defaultValue={currAssignment.points}
            onChange={(e) => setThisAssignment({ ...thisAssignment, points: Number(e.target.value) })}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <label htmlFor="wd-points">Assignment Group</label>
        </div>
        <div className="col-8">
          <select className="form-select" name="" id="">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
          </select>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <label htmlFor="wd-points">Submission Type</label>
        </div>
        <div className="col-8">
          <div className="form-control">
            <select className="form-select" name="" id="" defaultValue={currAssignment.submissionType.mode}>
              <option value="Online">Online</option>
              <option value="In Person">In Person</option>
            </select>

            <label htmlFor="wd-points">
              <b> Online Entry Options :</b>{" "}
            </label>

            <div className="form-check">
              <input className="form-check-input " type="checkbox" id="text-entry" name="field" value="Text Entry" />
              <label className="form-check-label " htmlFor="text-entry">
                Text Entry
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input  " type="checkbox" id="website-url" name="field" value="Website URL" />
              <label className="form-check-label " htmlFor="website-url">
                Website URL
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input "
                type="checkbox"
                id="media-recordings"
                name="field"
                value="Media Recordings"
              />
              <label className="form-check-label " htmlFor="media-recordings">
                Media Recordings
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input  "
                type="checkbox"
                id="student-annotation"
                name="field"
                value="Student Annotation"
              />
              <label className="form-check-label " htmlFor="student-annotation">
                Student Annotation
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input  "
                type="checkbox"
                id="file-uploads"
                name="field"
                value="File Uploads"
              />
              <label className="form-check-label " htmlFor="file-uploads">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <label> Assign :</label>
        </div>
        <div className="col-8">
          <div className="form-control p-4">
            <label htmlFor="wd-points assign-label">
              <b>Assign To:</b>{" "}
            </label>
            <input className="form-control" type="text" defaultValue={currAssignment.assignedTo} />

            <label htmlFor="wd-points">
              {" "}
              <b>Due</b>{" "}
            </label>
            <input
              className="form-control"
              type="date"
              name=""
              id=""
              defaultValue={currAssignment.dueDate.split("T")[0]}
              onChange={(e) => setThisAssignment({ ...thisAssignment, dueDate: e.target.value })}
            />

            <div className="row">
              <div className="col">
                <label htmlFor="wd-points ">
                  {" "}
                  <b>Available From :</b>{" "}
                </label>
                <input
                  className="form-control "
                  type="date"
                  name=""
                  id=""
                  defaultValue={currAssignment.availableFrom.split("T")[0]}
                />
              </div>
              <div className="col">
                <label htmlFor="wd-points ">
                  {" "}
                  <b>Until:</b>{" "}
                </label>
                <input
                  className="form-control "
                  type="date"
                  name=""
                  id=""
                  defaultValue={currAssignment.availableUntil.split("T")[0]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="btns container">
        <Link to={`/Courses/${cid}/Assignments`}>
        <button onClick={() => dispatch(updateAssignment(thisAssignment ))} className="btn btn-danger">
          Save
        </button>
        </Link>

        <Link to={`/Courses/${cid}/Assignments`}>
          <button className="btn btn-secondary">Cancel</button>
        </Link>
      </div>
    </div>
  );
}

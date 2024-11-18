import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router"; 
import { Link } from "react-router-dom";

import * as assignmentsClient from "./client.ts";

export default function NewAssignment({addAssignment}) {
  //name, description, points, due date, available from date, and available until date.
  const { cid   } = useParams();
  const navigate=  useNavigate();
  const id = `A${Math.floor(Math.random() * 101)}`;
  const inputData = 
  {
    "_id": id,
    "title": "Propulsion Assignment",
    "course": cid,
    "module": "Module 1",
    "availableDate": "2024-10-20T00:00",
    "dueDate": "2024-10-30T23:59",
    "link": `/Courses/RS101/Assignments/${id}`,
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
  }
 
const createAssignment = async(NewAssignment)=>{
  await assignmentsClient.createAssignment(NewAssignment)
  navigate(`/Courses/${cid}/Assignments`);  
}
  
const dispatch = useDispatch();
  const [inputDataState , setinputData] = useState(inputData);

  return (
    <div id="wd-assignments-editor">
      <label className="form-label" htmlFor="wd-name">
        Assignment Name
      </label>
      <input className="form-control assignment-name" id="wd-name" onChange={(e)=>setinputData({...inputDataState,"title" : e.target.value})}   />

      <p className="description-label">Description :</p>
      <textarea
        className="form-control"
        cols={10}
        rows={5}
        id="wd-description"
        onChange={(e)=>setinputData({...inputDataState,"description" : e.target.value})}
   ></textarea>

      <div className="row mt-4">
        <div className="col">
          <label htmlFor="wd-points">Points</label>
        </div>
        <div className="col-8">
          <input type="number" className="form-control" id="wd-points"   onChange={(e)=>setinputData({...inputDataState,"points" : Number(e.target.value)})} />
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
            <select className="form-select" name="" id=""  >
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
            <input className="form-control" type="text"   />

            <label htmlFor="wd-points">
              {" "}
              <b>Due</b>{" "}
            </label>
            <input
              className="form-control"
              type="date"
              name=""
              id="" 
              
              onChange={(e)=>setinputData({...inputDataState,"dueDate" : e.target.value})}
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
                  onChange={(e)=>setinputData({...inputDataState,"availableFrom" : e.target.value})}
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
                  onChange={(e)=>setinputData({...inputDataState,"availableUntil" : e.target.value})}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="btns container">
 
        <button onClick={()=> 
 
          createAssignment(inputDataState)
          }   className="btn btn-danger">
          Save
        </button>
 
        <Link to={`/Courses/${cid}/Assignments`}>
          <button className="btn btn-secondary">Cancel</button>
        </Link>
      </div>
    </div>
  );
}

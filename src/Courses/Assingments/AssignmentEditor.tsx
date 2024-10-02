import React from "react";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label className="form-label" htmlFor="wd-name">
        Assignment Name
      </label>
      <input className="form-control assignment-name" id="wd-name" defaultValue="A1 - ENV + HTML" />

      <p className="description-label">Description :</p>
      <textarea
        className="form-control"
        cols={10}
        rows={5}
        id="wd-description"
        value=" Submit a link to the landing page of your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application
        Links to all relevant source code repositories The Kanbas application should include a link to navigate back to
        the landing page."></textarea>

      <div className="row mt-4">
        <div className="col">
          <label htmlFor="wd-points">Points</label>
        </div>
        <div className="col-8">
          <input className="form-control" id="wd-points" value={100} />
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
            <select className="form-select" name="" id="">
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
            <input className="form-control" type="text" value={"Everyone"} />

            <label htmlFor="wd-points">
              {" "}
              <b>Due</b>{" "}
            </label>
            <input className="form-control" type="date" name="" id="" />

            <div className="row">
              <div className="col">
                <label htmlFor="wd-points ">
                  {" "}
                  <b>Available From :</b>{" "}
                </label>
                <input className="form-control " type="date" name="" id="" />
              </div>
              <div className="col">
                <label htmlFor="wd-points ">
                  {" "}
                  <b>Until:</b>{" "}
                </label>
                <input className="form-control " type="date" name="" id="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="btns container">
        <button className="btn btn-danger">Save</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
}

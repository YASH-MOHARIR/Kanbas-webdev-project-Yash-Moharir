import React from "react";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
        <p>Description :</p>
        <textarea id="wd-description" value = "assd">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Assignment Group</label>
            </td>
            <td>
             <select name="" id="">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
             </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Submission Type</label>
            </td>
            <td>
             <select name="" id="">
              <option value="Online">Online</option>
              <option value="In Person">In Person</option>
             </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Online Entry Options :  </label>
            </td>
            <td>
              <input type="checkbox" id="text-entry" name="field" value="Text Entry" />
              <label htmlFor="text-entry">Text Entry</label><br />

              {/* Checkbox for Website URL */}
              <input type="checkbox" id="website-url" name="field" value="Website URL" />
              <label htmlFor="website-url">Website URL</label><br />

              {/* Checkbox for Media Recordings */}
              <input type="checkbox" id="media-recordings" name="field" value="Media Recordings" />
              <label htmlFor="media-recordings">Media Recordings</label><br />

              {/* Checkbox for Student Annotation */}
              <input type="checkbox" id="student-annotation" name="field" value="Student Annotation" />
              <label htmlFor="student-annotation">Student Annotation</label><br />

              {/* Checkbox for File Uploads */}
              <input type="checkbox" id="file-uploads" name="field" value="File Uploads" />
              <label htmlFor="file-uploads">File Uploads</label><br />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points"> Assign To</label>
            </td>
            <td>
              <input type="text" value={"Everyone"} />
            </td>
          </tr>
          
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">  Due  </label>
            </td>
            <td>
              <input type="date" name="" id="" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">  Available From : </label>
            </td>
            <td>
              <input type="date" name="" id="" /> 
            </td>
            <td align="right" valign="top">
              <label htmlFor="wd-points">    Until:  </label>
            </td>
            <td>
              <input type="date" name="" id="" /> 
            </td>
 
          </tr>
<hr />
          <button>Cancel</button>
          <button>Save</button>


          {/* Complete on your own */}
        </table>
      </div>
  );}
  
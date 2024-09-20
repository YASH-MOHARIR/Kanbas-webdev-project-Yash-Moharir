import React from "react";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="/Courses/1234/Assignments/:aid">
              A1 - ENV + HTML
            </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, laboriosam?</p>
          </li>
          <li className="wd-assignment-list-item">
            <a href="/Courses/1234/Assignments/:aid">
              A2 - CSS And Bootstrap
            </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui nulla, nobis adipisci error accusantium!</p>
            {/* Complete On Your Own */}
          </li>
          <li>
            <a href="/Courses/1234/Assignments/:aid">
              A3 - Javscript And React
            </a>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit fugit dignissimos deserunt illo. Culpa qui rem cumque molestiae! Earum, doloremque!</p>
          </li>
        </ul>
      </div>
  );}
  
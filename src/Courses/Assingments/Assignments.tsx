import React from "react";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
        <Link className="wd-assignment-link " to="/Courses/1234/Assignments/1">
              A1 - ENV + HTML
        </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, laboriosam?</p>
        </li>
        <li className="wd-assignment-list-item">
          <Link className="wd-assignment-link " to="/Courses/1234/Assignments/2">
            A2 - CSS
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui nulla, nobis adipisci error
            accusantium!
          </p>
          {/* Complete On Your Own */}
        </li>
        <li> 
          <Link className="wd-assignment-link " to="/Courses/1234/Assignments/3">
                A3 - Javscript And React
            </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit fugit dignissimos deserunt illo. Culpa qui
            rem cumque molestiae! Earum, doloremque!
          </p>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
 
class Dashboard  extends  Component{
 
    render() { 
        return ( 
            <div id="wd-dashboard">
                <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
                <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />

                <div id="wd-dashboard-courses">
                    <div className="wd-dashboard-course">
                    <img src="NEU_Image.png" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title">
                        Full Stack software developer </p>
                        <Link to="/Courses/1234/Home"> Go </Link>
                    </div>
                    </div>
                    <div className="wd-dashboard-course"> ... </div>
                    <div className="wd-dashboard-course"> ... </div>
                </div>
                <div id="wd-dashboard-courses">
                    <div className="wd-dashboard-course">
                    <img src="NEU_Image.png" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title">
                        Full Stack software developer </p>
                        <Link to="/Courses/1234/Home"> Go </Link>
                    </div>
                    </div>
                    <div className="wd-dashboard-course"> ... </div>
                    <div className="wd-dashboard-course"> ... </div>
                </div>
                <div id="wd-dashboard-courses">
                    <div className="wd-dashboard-course">
                    <img src="NEU_Image.png" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title">
                        Full Stack software developer </p>
                        <Link to="/Courses/1234/Home"> Go </Link>
                    </div>
                    </div>
                    <div className="wd-dashboard-course"> ... </div>
                    <div className="wd-dashboard-course"> ... </div>
                </div>
                <div id="wd-dashboard-courses">
                    <div className="wd-dashboard-course">
                    <img src="NEU_Image.png" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title">
                        Full Stack software developer </p>
                        <Link to="/Courses/1234/Home"> Go </Link>
                    </div>
                    </div>
                    <div className="wd-dashboard-course"> ... </div>
                    <div className="wd-dashboard-course"> ... </div>
                </div>
                <div id="wd-dashboard-courses">
                    <div className="wd-dashboard-course">
                    <img src="NEU_Image.png" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title">
                        Full Stack software developer </p>
                        <Link to="/Courses/1234/Home"> Go </Link>
                    </div>
                    </div>
                    <div className="wd-dashboard-course"> ... </div>
                    <div className="wd-dashboard-course"> ... </div>
                </div>
                <div id="wd-dashboard-courses">
                    <div className="wd-dashboard-course">
                    <img src="NEU_Image.png" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title">
                        Full Stack software developer </p>
                        <Link to="/Courses/1234/Home"> Go </Link>
                    </div>
                    </div>
                    <div className="wd-dashboard-course"> ... </div>
                    <div className="wd-dashboard-course"> ... </div>
                </div>
            </div>

         );
    }
}
 
export default Dashboard ;
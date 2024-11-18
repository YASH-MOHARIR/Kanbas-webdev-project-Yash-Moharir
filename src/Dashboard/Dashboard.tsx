import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {  useSelector } from "react-redux";

import * as enrollmemtsClient from "./client.ts";

export default function Dashboard({
  courses,
  course,
  setCourse,
  userCourses,
  addNewCourse,
  deleteCourse,
  updateCourse,
  fetchUserCourses, 
}: {
  courses: any[];
  course: any;
  userCourses: any[];
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  fetchUserCourses: () => void; 
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";

  const [showEnrolledCourses, setshowEnrolledCourses] = useState(true);

  const enrollUserInCourse = async (userId, courseId) => {
    const newEnrollment = await enrollmemtsClient.enrollUserInCourse(userId, courseId);
    console.log(newEnrollment.data);
    fetchUserCourses(); 
  };

  const unEnrollFromCourse = async (courseInfo) => {
    await enrollmemtsClient.unEnrollFromCourse(courseInfo.user, courseInfo.course);
    fetchUserCourses();
  };

  // Helper Method to assign enroll button 
  var isEnrolled = (courseId: string) => {
    return userCourses.find((userCourse) => userCourse._id === courseId);
  };

  useEffect(() => {
    fetchUserCourses();
  }, [currentUser]);
 
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isFaculty && (
        <div className="course-editor">
          <h4 className="my-auto">
            New Course
            <button className="btn btn-primary float-end my-3" id="wd-add-new-course-click" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2 my-3" onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h4>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </div>
      )}
      <div className="d-flex justify-content-between">
        <h2 id="wd-dashboard-published">
          {isFaculty ? "Published Courses" : `Enrolled Courses  `} ({userCourses.length})
        </h2>

        <button onClick={() => setshowEnrolledCourses(!showEnrolledCourses)} className="btn btn-outline-info">
          {showEnrolledCourses ? "See All Courses" : "See Enrolled Courses"}
        </button>
      </div>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row  g-4">
          {showEnrolledCourses ? (
            userCourses.map((course) => (
              <div className="wd-dashboard-course col-md-3">
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/reactjs.webp" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>
                    <div className="action-btns-wrapper d-flex justify-content-between mt-3">
                      <Link
                        to={`/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                        <button className="btn btn-primary"> Go </button>
                      </Link>

                      {isFaculty && (
                        <div className="action-btns">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target={`#${course._id}`}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>

                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end">
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="modal fade" id={course._id}>
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
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // LIST OF COURSES
            <div className="row">
              <h1>List of all courses ({courses.length})</h1>
              {courses.map((course) => (
                <div className="wd-dashboard-course col-md-3 mt-4">
                  <div className="card rounded-3 overflow-hidden">
                    <img src="/images/reactjs.webp" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">{course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>
 
                      {/* showing enroll buttons only to students */}
                      {isEnrolled(course._id) ? (
                        <button
                          onClick={
                            () => unEnrollFromCourse({ user: currentUser._id, course: course._id }) 
                          }
                          className="btn btn-danger">
                          Un-enroll
                        </button>
                      ) : (
                        <button
                          onClick={
                            () => enrollUserInCourse(currentUser._id, course._id)
                          }
                          className="btn btn-outline-success">
                          Enroll
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

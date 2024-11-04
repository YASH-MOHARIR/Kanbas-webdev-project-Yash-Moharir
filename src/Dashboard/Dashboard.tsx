import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { addEnrollment, deleteEnrollment } from "./enrollementsReducer.ts";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";

  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const [showEnrolledCourses, setshowEnrolledCourses] = useState(true);
  const dispatch = useDispatch();
  var isEnrolled;

  const enrolledCoursesCount = enrollments.filter((enrollment) => enrollment.user === currentUser._id).length;

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
          {isFaculty ? "Published Courses" : `Enrolled Courses  `} ({enrolledCoursesCount})
        </h2>

        <button onClick={() => setshowEnrolledCourses(!showEnrolledCourses)} className="btn btn-outline-info">
          {showEnrolledCourses ? "See All Courses" : "See Enrolled Courses"}
        </button>
      </div>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row  g-4">
          {showEnrolledCourses ? (
            courses
              .filter((course) =>
                enrollments.some(
                  (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
                )
              )
              .map((course) => (
                <div className="wd-dashboard-course col-md-3">
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      to={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark">
                      <img src="/images/reactjs.webp" width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">{course.name} </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description}
                        </p>
                        <div className="action-btns-wrapper d-flex justify-content-between mt-3">
                          <button className="btn btn-primary"> Go </button>

                          {isFaculty && (
                            <div className="action-btns">
                              <button
                                onClick={(event) => {
                                  event.preventDefault();
                                  deleteCourse(course._id);
                                }}
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
                    </Link>
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
                    {/* <Link */}
                    {/* to={`/Courses/${course._id}/Home`} */}
                    {/* className="wd-dashboard-course-link text-decoration-none text-dark"> */}
                    <img src="/images/reactjs.webp" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">{course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>
                      {
                        (isEnrolled = enrollments.some(
                          (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
                        ))
                      }
                      {/* showing enroll buttons only to students */}
                      {isEnrolled ? (
                        <button
                          onClick={() => dispatch(deleteEnrollment({ user: currentUser._id, course: course._id }))}
                          className="btn btn-outline-success">
                          Un-enroll
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            dispatch(
                              addEnrollment({
                                _id: enrollments.length + 1,
                                user: currentUser._id,
                                course: course._id,
                              })
                            )
                          }
                          className="btn btn-outline-success">
                          Enroll
                        </button>
                      )}
                    </div>
                    {/* </Link> */}
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

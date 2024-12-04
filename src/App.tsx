import Account from "./Account/Account.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard/Dashboard.tsx";
import MainNavigation from "./Navigation/MainNavigation.tsx";
import Courses from "./Courses/Courses.tsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React, { useEffect, useState } from "react";

import ProtectedRoute from "./Account/ProtectedRoute.tsx";
import Session from "./Account/Session.tsx";

import * as userClient from "./Account/client.ts";
import * as courseClient from "./Courses/client.ts";
import { useSelector } from "react-redux";

function App() {

  const [courses, setCourses] = useState<any[]>([]);
  const [userCourses, setUserCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
    setUserCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
    setCourses(courses.filter((course) => course._id !== courseId));
    setUserCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    findCoursesForUser();
  };

  // USER COURSES
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setUserCourses(courses);
    } catch (error) {
      console.error("ERROR USER COURSES", error);
    }
  };

  //ALL COURSES
  const fetchCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error("ERROR ALL COURSES ", error);
    }
  };

  // enrollments - finding user courses
  const [enrolling, setEnrolling] = useState<boolean>(false);

  // ENROLL - UNENROLL

  const enrollUserInCourse = async (courseId: string) => {
    await userClient.enrollIntoCourse(currentUser._id, courseId);
    
    fetchCourses();
    findCoursesForUser();
    
  }
  const unEnrollFromCourse = async (courseId: string) => { 
    await userClient.unenrollFromCourse(currentUser._id, courseId);
    
    fetchCourses();
    findCoursesForUser();
  }

  // const updateEnrollment = async (courseId: string, enrolled: boolean) => {
  //   if (enrolled) {
  //     await userClient.enrollIntoCourse(currentUser._id, courseId);
  //   } else {
  //     await userClient.unenrollFromCourse(currentUser._id, courseId);
  //   }
  //   setCourses(
  //     courses.map((course) => {
  //       if (course._id === courseId) {
  //         return { ...course, enrolled: enrolled };
  //       } else {
  //         return course;
  //       }
  //     })
  //   );
  // };

  useEffect(() => {
      fetchCourses();
      findCoursesForUser();
  }, [currentUser]);

  return (
    <Session>
      <div className="App">
        <div id="wd-kanbas">
          <MainNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="/Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route
                path="Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      userCourses={userCourses}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                      // fetchUserCourses={fetchUserCourses}
                      enrolling={enrolling}
                      setEnrolling={setEnrolling}
                      // updateEnrollment={updateEnrollment}
                      enrollUserInCourse={enrollUserInCourse}
                      unEnrollFromCourse={unEnrollFromCourse}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Courses/:cid/*"
                element={
                  <ProtectedRoute>
                    <Courses courses={courses} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Calendar"
                element={
                  <ProtectedRoute>
                    <h1>Calendar</h1>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Inbox"
                element={
                  <ProtectedRoute>
                    <h1>Inbox</h1>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Session>
  );
}

export default App;

// mongodb+srv://yashmoharir:<db_password>@kanbas.5h7gv.mongodb.net/?retryWrites=true&w=majority&appName=Kanbas

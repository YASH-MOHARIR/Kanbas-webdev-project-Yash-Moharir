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

  const fetchAllCourses = async () => {
    let courses = [];
    try {
      courses = await courseClient.fetchAllCourses();
    } catch (error) {
      console.error(error);
    }
    setCourses(courses);
    // console.log("all Courses", courses);
    
  };

  const fetchUserCourses = async () => {
    let uCourses = [];
    try {
      uCourses = await userClient.findMyCourses();
    } catch (error) {
      
      console.error(error);
    }
    
    await setUserCourses(uCourses);
    // console.log("FetchedUser Courses", uCourses);
    // console.log("User Courses", userCourses);

  };

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
    fetchUserCourses();
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));

    fetchUserCourses();
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
    fetchUserCourses();
  };

  // useEffect(() => {
  //   console.log("App userCourses updated:", userCourses);
  // }, [userCourses]);

  
  useEffect(() => {
    fetchUserCourses();
  }, [currentUser]);

  useEffect(() => {
    fetchAllCourses(); 
  }, []);

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
                      fetchUserCourses={fetchUserCourses} 
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

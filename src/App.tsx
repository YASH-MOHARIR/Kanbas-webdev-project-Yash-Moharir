import Account from "./Account/Account.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard/Dashboard.tsx";
import MainNavigation from "./Navigation/MainNavigation.tsx";
import Courses from "./Courses/Courses.tsx";

import * as db from "./Database/database.tsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";

import store from "./store/store.ts";

import { Provider } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute.tsx";
import ProtectedCourse from "./Account/ProtecectedCourse.tsx";
function App() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    // eslint-disable-next-line no-restricted-globals
    const userResponse = confirm("Are you sure you want to delete?");
    if (userResponse) {
    setCourses(courses.filter((course) => course._id !== courseId));
    }
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
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
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
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
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

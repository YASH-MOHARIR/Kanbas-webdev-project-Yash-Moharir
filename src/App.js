import Account from "./Account/Account.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard/Dashboard.tsx";
import MainNavigation from "./Navigation/MainNavigation.tsx";
import Courses from "./Courses/Courses.tsx";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
      <div id="wd-kanbas">
        <MainNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="/Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Courses/:cid/*" element={<Courses />} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

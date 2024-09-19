import Account from './Account/Account.tsx';
import './App.css';
import { Routes, Route, Navigate } from "react-router";
import Dashboard from './Dashboard/Dashboard.tsx';
import MainNavigation from './Navigation/MainNavigation.tsx';
import Courses from './Courses/Courses.tsx';

function App() {
  return (
    <div className="App">

      <table>
        <tr>
          <td valign="top">
            <MainNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="/Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Courses/:cid/*" element={<Courses />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </td>
        </tr>
      </table>

    </div>
  );
}

export default App;

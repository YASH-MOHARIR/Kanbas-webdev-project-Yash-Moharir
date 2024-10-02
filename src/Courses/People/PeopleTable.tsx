import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface PeopleTableProps {}

interface PeopleTableState {}

class PeopleTable extends React.Component<PeopleTableProps, PeopleTableState> {
  render() {
    return (
      <div id="wd-people-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Login ID</th>
              <th>Section</th>
              <th>Role</th>
              <th>Last Activity</th>
              <th>Total Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">Tony</span> <span className="wd-last-name">Stark</span>
              </td>
              <td className="wd-login-id">001234561S</td>
              <td className="wd-section">S101</td>
              <td className="wd-role">STUDENT</td>
              <td className="wd-last-activity">2020-10-01</td>
              <td className="wd-total-activity">10:21:32</td>{" "}
            </tr>

            <tr>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">Bruce  </span> <span className="wd-last-name">  Wayne</span>
              </td>
              <td className="wd-login-id">001290561D</td>
              <td className="wd-section">S101</td>
              <td className="wd-role">STUDENT</td>
              <td className="wd-last-activity">2020-10-28</td>
              <td className="wd-total-activity">11:10:32</td>{" "}
            </tr>

            <tr>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">Natasha</span> <span className="wd-last-name">Romanoff</span>
              </td>
              <td className="wd-login-id">039234561A</td>
              <td className="wd-section">S101</td>
              <td className="wd-role">STUDENT</td>
              <td className="wd-last-activity">2020-10-11</td>
              <td className="wd-total-activity">10:21:32</td>{" "}
            </tr>

            <tr>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">Steve</span> <span className="wd-last-name">Rogers</span>
              </td>
              <td className="wd-login-id">039104501Z</td>
              <td className="wd-section">S101</td>
              <td className="wd-role">STUDENT</td>
              <td className="wd-last-activity">2022-10-05</td>
              <td className="wd-total-activity">02:19:20</td>{" "}
            </tr> 
          </tbody>
        </table>
      </div>
    );
  }
}

export default PeopleTable;

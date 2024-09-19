import React from 'react';
import { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import CoursesNavigation from '../Navigation/CoursesNavigation.tsx';
import Modules from './Modules/Modules.tsx';
import Home from './Home/Home.tsx';
import Assignments from './Assingments/Assignments.tsx';
import AssignmentEditor from './Assingments/AssignmentEditor.tsx';

 
 
class Courses extends Component {
 
    render() { 
        return ( 
            <div id="courses">
                <h2> Dummy Course</h2>
                <hr />

                <table>
                    <tr>
                    <td valign="top"><CoursesNavigation /></td>
                    <td valign="top">
                        <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} /> 
                        <Route path="Assignments/:aid"element={<AssignmentEditor />} />
                        <Route path="People" element={<h2>People</h2>} />
                        </Routes>
                    </td>
                    </tr>
                </table>
          </div>
         );
    }
}
 
export default Courses;
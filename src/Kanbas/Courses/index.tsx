import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import {Routes, Route, Navigate } from "react-router"

// Icons
import { VscMenu } from "react-icons/vsc";

export default function Courses() {
  return (
    <div id="wd-courses">
      
      <p className="course-title"> <VscMenu className="text-danger me-3 mb-1"/> Course 1234 </p>

                    <CoursesNavigation/>

                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:aid" element={<AssignmentEditor/>} />
                    <Route path="People" element={<h2>People</h2>} />
                </Routes>
    </div>
);}

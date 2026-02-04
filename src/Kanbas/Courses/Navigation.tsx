import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-6 rounded-0">
      <Link className="course list-group-item active border border-0"
      id="wd-course-home-link"    to="/Kanbas/Courses/1234/Home">
        Home
      </Link>
      
      <Link id="wd-course-modules-link" 
            className="course list-group-item border border-0 text-danger"
            to="/Kanbas/Courses/1234/Modules">
        Modules
      </Link>

      <Link id="wd-course-piazza-link"  
            className="course list-group-item border border-0 text-danger"
            to="/Kanbas/Courses/1234/Piazza">
        Piazza
      </Link>

      <Link id="wd-course-zoom-link"    
            className="course list-group-item border border-0 text-danger"
            to="/Kanbas/Courses/1234/Zoom">
        Zoom
      </Link>

      <Link id="wd-course-quizzes-link"
            className="course list-group-item border border-0 text-danger"
            to="/Kanbas/Courses/1234/Assignments">
        Assignments
      </Link>

      <Link id="wd-course-assignments-link"
            className="course list-group-item border border-0 text-danger"
            to="/Kanbas/Courses/1234/Quizzes">
        Quizzes
      </Link>

      <Link id="wd-course-grades-link"
            className="course list-group-item border border-0 text-danger"
            to="/Kanbas/Courses/1234/Grades">
        Grades
      </Link>

      <Link id="wd-course-people-link"
            className="course list-group-item border border-0 text-danger"
            to="/Kanbas/Courses/1234/People">
        People
      </Link>
    </div>
);}

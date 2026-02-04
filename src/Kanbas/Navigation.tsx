import { Link } from "react-router-dom";
import { BsPersonCircle, BsBook, BsCalendar3, BsInbox, BsSpeedometer2 } from "react-icons/bs";
import { IoFlaskOutline } from "react-icons/io5";


export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" 
      className="list-group bg-black rounded-0 position-fixed bottom-0 top-0 z-2 d-none d-md-block" 
      style={{width: "120px"}}>
      <a className="list-group-item bg-black text-white text-center border-0" 
      href="https://www.northeastern.edu/" id="wd-neu-link">Northeastern</a>
      
      <Link className="list-group-item bg-white text-danger text-center border-0" 
      to="/Kanbas/Account" id="wd-account-link">
        <BsPersonCircle className="fs-2"/> <br/>
        Account 
      </Link>
      
      <Link className="list-group-item bg-black text-white text-center border-0" 
      to="/Kanbas/Dashboard" id="wd-dashboard-link">
        <BsSpeedometer2 className="fs-3"/> <br/>
        Dashboard
      </Link>
      
      <Link className="list-group-item bg-black text-white text-center border-0" 
      to="/Kanbas/Dashboard" id="wd-course-link">
        <BsBook className="fs-3"/> <br/>
        Courses
      </Link>
      
      <Link className="list-group-item bg-black text-white text-center border-0" 
      to="/Kanbas/Calendar" id="wd-calendar-link">
        <BsCalendar3 className="fs-4"/> <br/>
        Calendar
      </Link>
      
      <Link className="list-group-item bg-black text-white text-center border-0" 
      to="/Kanbas/Inbox" id="wd-inbox-link">
        <BsInbox className="fs-3"/> <br/>
        Inbox
      </Link>
      
      <Link className="list-group-item bg-black text-white text-center border-0" 
      to="/Labs" id="wd-labs-link">
        <IoFlaskOutline className="fs-3"/> <br/>
        Labs
      </Link>
    </div>
);}

import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div className="row">
      <div className="col col-lg-9">
        <Modules/>
      </div>
      <div className="col col-lg-3 d-none d-xl-block">
        <CourseStatus/>
      </div>
    </div>
  );
}

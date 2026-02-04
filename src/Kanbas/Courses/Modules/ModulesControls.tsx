export default function ModulesControls() {
    return (
        <div id="wd-modules-controls">
            <button className="btn btn-sm btn-danger me-1 float-end"> + Module </button>

            <div className="dropdown d-inline me-1 float-end">
                <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"> 
                    <img src="/images/button-green-check.png" alt="Green Checkmark" width={12} 
                     className="position-relative me-1 "/>
                    Publish All 
                </button>

                <ul className="dropdown-menu">
                    <li className="dropdown-item"> Action 1 </li>
                    <li className="dropdown-item"> Action 2 </li>
                    <li className="dropdown-item"> Action 3 </li>
                </ul>
            </div>

            <button className="btn btn-sm btn-light me-1 float-end"> View Progress </button>
            <button className="btn btn-sm btn-light me-1 float-end"> Collapse All</button>

        </div>
    );
}
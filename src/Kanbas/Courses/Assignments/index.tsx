import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { FaBook } from "react-icons/fa6";

export default function Assignments() {
    return (
        <div>
            <AssignmentControls />
            <br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentHeaderControlButtons />
                        <div className="wd-weightage float-end">
                            <span className="wd-weight border-gray p-2 rounded-5 me-2 fs-5">40% of Total</span>
                        </div>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="float-left text-success me-2">  <FaBook /></span>
                            <a className="wd-assignment-link text-black text-decoration-none ps-1"
                                href="#/Kanbas/Courses/1234/Assignments/123">
                                A1
                            </a>
                            <AssignmentControlButtons />
                            <div className="wd-assignment-details ms-5">
                                <span className="wd-module-type text-danger">Multiple Modules</span> |
                                <span className="wd-start-date"> <b>Not available until</b> May 6 at 12:00 am</span> |
                                <span className="wd-end-date"><b> Due</b> May 13 at 11:59pm</span> |
                                <span className="wd-points"> 100 pts</span>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="float-left text-success me-2">  <FaBook /></span>
                            <a className="wd-assignment-link text-black text-decoration-none ps-1"
                                href="#/Kanbas/Courses/1234/Assignments/234">
                                A2
                            </a>
                            <AssignmentControlButtons />
                            <div className="wd-assignment-details ms-5">
                                <span className="wd-module-type text-danger">Multiple Modules</span> |
                                <span className="wd-start-date"> <b>Not available until</b> May 13 at 12:00 am</span> |
                                <span className="wd-end-date"><b> Due</b> May 20 at 11:59pm</span> |
                                <span className="wd-points"> 100 pts</span>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="float-left text-success me-2">  <FaBook /></span>
                            <a className="wd-assignment-link text-black text-decoration-none ps-1"
                                href="#/Kanbas/Courses/1234/Assignments/123">
                                A3
                            </a>
                            <AssignmentControlButtons />
                            <div className="wd-assignment-details ms-5">
                                <span className="wd-module-type text-danger">Multiple Modules</span> |
                                <span className="wd-start-date"> <b>Not available until</b> May 20 at 12:00 am</span> |
                                <span className="wd-end-date"><b> Due</b> May 27 at 11:59pm</span> |
                                <span className="wd-points"> 100 pts</span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

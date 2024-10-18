import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { FaBook } from "react-icons/fa6";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div>
            <AssignmentControls />
            <br /><br />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment-bar list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentHeaderControlButtons />
                        <div className="wd-weightage float-end">
                            <span className="wd-weight border-gray p-2 rounded-5 me-2 fs-5">40% of Total</span>
                        </div>
                    </div>
                    <ul className="wd-assignment-list list-group rounded-0">
                        {assignments
                            .filter((assignment) => assignment.course === cid)
                            .map((assignment) => (
                                <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <span className="float-left text-success me-2">  <FaBook /></span>
                                    <a className="wd-assignment-link text-black text-decoration-none ps-1"
                                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                        {assignment.title}
                                    </a>
                                    <AssignmentControlButtons />
                                    <div className="wd-assignment-details ms-5">
                                        <span className="wd-module-type text-danger">Multiple Modules</span> |
                                        <span className="wd-start-date"> <b>Not available until</b> {assignment.available_from_date} </span> |
                                        <span className="wd-end-date"><b> Due</b> {assignment.due_date} </span> |
                                        <span className="wd-points"> {assignment.points} pts</span>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

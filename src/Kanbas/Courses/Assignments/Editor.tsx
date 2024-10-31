import * as db from "../../Database";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment, addAssignment } from "./reducer";
import React, { useState } from "react";

export default function AssignmentEditor() {
    const { aid, cid } = useParams();

    const navigate = useNavigate();
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const dispatch = useDispatch();

    const assignment = assignments ? assignments.find((assignment: any) => assignment._id === aid) : null;
    
    const [formState, setFormState] = useState({
        title: assignment?.title || "",
        description: assignment?.description || "",
        points: assignment?.points || "",
        due_date: assignment?.due_date || "",
        available_from_date: assignment?.available_from_date || "",
        available_until_date: assignment?.available_until_date || "",
        gradeType: assignment?.gradeType || "Percentage",
        submissionType: assignment?.submissionType || "Online",
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormState({
            ...formState,
            [id]: value,
        });
    };

    const handleSave = () => {
        if (assignment) {
            dispatch(updateAssignment({ ...assignment, ...formState }));
            alert("Saved!");
        } else {
            const newAssignment = {
                ...formState,
                course: cid,
                _id: new Date().getTime().toString(),
            };
            dispatch(addAssignment(newAssignment));
            alert("Added");
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        if (window.confirm("Are you sure?")) {
            navigate(`/Kanbas/Courses/${cid}/Assignments`);
        }
    };

    return (
        <div id="wd-assignments-editor">
            <form className="assignment-editor" style={{ maxWidth: "600px" }}>
                <label htmlFor="title" className="mb-2">
                    <b>Assignment Name</b>
                </label>
                <br />
                <input
                    id="title"
                    className="form-control"
                    value={formState.title}
                    onChange={handleChange}
                /> <br />
                <textarea
                    id="description"
                    rows={10}
                    className="form-control"
                    value={formState.description}
                    onChange={handleChange}
                />
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="wd-points" className="me-2">Points</label>
                            </td>
                            <td>
                                <input
                                    id="points"
                                    className="form-control"
                                    value={formState.points}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="assignment-group" className="me-2">Assignment Group</label>
                            </td>
                            <td>
                                <select
                                    id="assignment-group"
                                    className="form-select"
                                    value="ASSIGNMENTS"
                                    onChange={handleChange}
                                >
                                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                </select>
                            </td>
                        </tr>
                        <p></p>
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="wd-display-grade-as" className="me-2">Display Grade as</label>
                            </td>
                            <td>
                                <select
                                    id="gradeType"
                                    className="form-select"
                                    value={formState.gradeType}
                                    onChange={handleChange}
                                >
                                    <option value="Percentage">Percentage</option>
                                    <option value="Points">Points</option>
                                </select>
                            </td>
                        </tr>
                        <p></p>
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="wd-submission-type" className="me-2">Submission Type</label>
                            </td>
                            <td className="border p-3">
                                <select
                                    id="submissionType"
                                    className="form-select"
                                    value={formState.submissionType}
                                    onChange={handleChange}
                                >
                                    <option value="Online">Online</option>
                                    <option value="In-person">In-person</option>
                                </select>

                                <p></p>
                                {/* <div id="wd-online-options">
                                    <label>Online Entry Options:</label><br />
                                    <div className="form-check">
                                        <input type="checkbox" name="check-online-options" id="wd-chkbox-text" className="form-check-input" />
                                        <label htmlFor="wd-chkbox-text" className="form-check-label"> Text Entry</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" name="check-online-options" id="wd-chkbox-website" className="form-check-input" />
                                        <label htmlFor="wd-chkbox-website" className="form-check-label">  Website URL</label>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" name="check-online-options" id="wd-chkbox-recordings" className="form-check-input" />
                                        <label htmlFor="wd-chkbox-recordings" className="form-check-label"> Media Recordings</label>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" name="check-online-options" id="wd-chkbox-annotations" className="form-check-input" />
                                        <label htmlFor="wd-chkbox-annotations" className="form-check-label">
                                            Student Annotations
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" name="check-online-options" id="wd-chkbox-uploads" className="form-check-input" />
                                        <label htmlFor="wd-chkbox-uploads" className="form-check-label"> File Uploads</label>
                                    </div>
                                </div> */}
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="assign-to" className="me-2">Assign</label>
                            </td>
                            <td valign="top">
                                <label htmlFor="assign-to" className="mb-2">Assign to</label> <br />
                                <input
                                    type="text"
                                    id="assign-to"
                                    value="Everyone"
                                    className="form-control"
                                />
                                <p></p>
                                <label htmlFor="due_date" className="mb-2">Due</label> <br />
                                <input
                                    type="date"
                                    className="form-control"
                                    id="due_date"
                                    value={formState.due_date}
                                    onChange={handleChange}
                                />
                                <p></p>
                                <td>
                                    <label htmlFor="available_from_date" className="mb-2">Available from</label><br />
                                    <input
                                        className="me-2 form-control"
                                        type="date"
                                        id="available_from_date"
                                        value={formState.available_from_date}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <label htmlFor="available_until_date" className="mb-2">Until</label><br />
                                    <input
                                        type="date"
                                        className="me-2 form-control"
                                        id="available_until_date"
                                        value={formState.available_until_date}
                                        onChange={handleChange}
                                    />
                                </td>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}><hr /></td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="right">
                                <button
                                    type="button"
                                    className="btn btn-secondary me-2"
                                    id="wd-cancel"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn button-red"
                                    id="wd-save"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

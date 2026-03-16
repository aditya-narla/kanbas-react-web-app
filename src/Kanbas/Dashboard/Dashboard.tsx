import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedContent from "../Account/ProtectedContent";
import { enrollCourse, unenrollCourse, getUserEnrollments } from './client';

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
        updateEnrollment: (courseId: string, enrolled: boolean) => void
    }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    // when not in enrolling mode, non-faculty only see their enrolled courses
    const visibleCourses = (enrolling || isFaculty)
        ? courses
        : courses.filter((c) => c.enrolled);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary">
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
            </h1>
            <hr />

            {/* Faculty course editor */}
            <ProtectedContent allowedRoles={['FACULTY']}>
                <h5>New Course
                    <button className="btn btn-primary float-end me-2"
                        id="wd-add-new-course-click" onClick={addNewCourse}>Add</button>
                    <button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">Update</button>
                </h5>
                <br />
                <input value={course.name} className="form-control mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <textarea value={course.description} className="form-control"
                    onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                <hr />
            </ProtectedContent>

            <h2 id="wd-dashboard-published">
                {enrolling ? `All Courses (${courses.length})` : `My Courses (${visibleCourses.length})`}
            </h2>
            <hr />

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {visibleCourses.map((c) => (
                        <div key={c._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to={`/Kanbas/Courses/${c._id}/Home`}>
                                    <img src="/images/1234.png" width="100%" height={160} alt="Course" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title overflow-y-hidden"
                                            style={{ maxHeight: 100 }}>
                                            {/* enroll/unenroll button visible in enrolling mode */}
                                            {enrolling && (
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    updateEnrollment(c._id, !c.enrolled);
                                                }} className={`btn float-end ${c.enrolled ? "btn-danger" : "btn-success"}`}>
                                                    {c.enrolled ? "Unenroll" : "Enroll"}
                                                </button>
                                            )}
                                            {c.name}
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text">{c.description}</p>
                                        <button className="btn btn-primary">Go</button>
                                        {/* faculty edit/delete buttons */}
                                        <ProtectedContent allowedRoles={['FACULTY']}>
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(c._id);
                                            }} className="btn btn-danger float-end" id="wd-delete-course-click">
                                                Delete
                                            </button>
                                            <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse({ ...c });
                                                }} className="btn btn-warning me-2 float-end">
                                                Edit
                                            </button>
                                        </ProtectedContent>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

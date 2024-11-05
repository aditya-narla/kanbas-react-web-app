import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProtectedContent from "../Account/ProtectedContent";
import { enrollCourse, unenrollCourse } from "./actions";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleEnrollment = (courseId: string) => {
    if (isEnrolled(courseId)) {
      dispatch(unenrollCourse(currentUser._id, courseId));
    } else {
      dispatch(enrollCourse(currentUser._id, courseId));
    }
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course) => isEnrolled(course._id));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      
      {/* Show Enroll/Unenroll button for both students and faculty */}
      {(currentUser.role === "STUDENT" || currentUser.role === "FACULTY") && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}
      
      {/* Faculty can add/delete/update courses */}
      <ProtectedContent allowedRoles={['FACULTY']}>
        <h5>New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}> Add </button>
          <button className="btn btn-warning float-end me-2"
            onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>
        </h5>
        <br />
        <input value={course.name} className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <textarea value={course.description} className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      </ProtectedContent>

      <hr />
      
      {/* Show published courses if faculty */}
      {currentUser.role === "FACULTY" && (
        <>
          <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
          <hr />
          <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses.map((course) => (
                <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                      to={`/Kanbas/Courses/${course._id}/Home`}
                    >
                      <img src={`/images/1234.png`} width="100%" height={160} alt="Course" />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.name}
                        </h5>
                        <p className="wd-dashboard-course-title card-text">{course.description}</p>
                        {/* Faculty can delete/edit courses */}
                        <ProtectedContent allowedRoles={['FACULTY']}>
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse({ ...course });
                            }}
                            className="btn btn-warning me-2 float-end" >
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
        </>
      )}

      {/* Show enrolled or all courses if student or faculty */}
      {(currentUser.role === "STUDENT" || currentUser.role === "FACULTY") && (
        <>
          <h2 id="wd-dashboard-published">
            {showAllCourses ? "All Courses" : "Enrolled Courses"} ({filteredCourses.length})
          </h2>
          <hr />
          <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {filteredCourses.map((course) => (
                <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    {/* Only allow navigation if user is enrolled */}
                    <Link
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      onClick={(e) => {
                        if (!isEnrolled(course._id)) {
                          e.preventDefault();
                          navigate("/Kanbas/Dashboard");
                        }
                      }}
                    >
                      <img src={`/images/1234.png`} width="100%" height={160} alt="Course" />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.name}
                        </h5>
                        <p className="wd-dashboard-course-title card-text">{course.description}</p>

                        {/* Show Enroll/Unenroll button for both students and faculty */}
                        {(currentUser.role === "STUDENT" || currentUser.role === "FACULTY") && (
                          <button
                            className={`btn ${isEnrolled(course._id) ? "btn-danger" : "btn-success"}`}
                            onClick={(e) => {
                              e.preventDefault();
                              toggleEnrollment(course._id);
                            }}
                          >
                            {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                          </button>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
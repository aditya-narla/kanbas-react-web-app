import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.png" width="100%" height={160} alt="React JS" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS1234.MERGED.202510
                                        202510_2 Fall 2024 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/2345/Home">
                                <img src="/images/nodejs.png" height={160} alt="Node JS" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2345 Node JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS2345.MERGED.202510
                                        202510_2 Fall 2024 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/3456/Home">
                                <img src="/images/express.png" width="100%" height={160} alt="Express" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS3456 Express
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS3456.MERGED.202510
                                        202510_2 Fall 2024 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/4567/Home">
                                <img src="/images/mongodb.jpg" width="100%" height={160} alt="MongoDB" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4567 MongoDB
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS4567.MERGED.202510
                                        202510_2 Fall 2024 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5678/Home">
                                <img src="/images/html.png" height={160} alt="HTML" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5678 HTML
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5678.MERGED.202510
                                        202510_2 Fall 2024 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/6789/Home">
                                <img src="/images/css.png" width="100%" height={160} alt="CSS" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS6789 CSS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS6789.MERGED.202510
                                        202510_2 Fall 2024 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/7890/Home">
                                <img src="/images/javascript.jpg" width="100%" height={160} alt="JavaScript" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS7890 JavaScript
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS7890.MERGED.202510
                                        202510_2 Fall 2024 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

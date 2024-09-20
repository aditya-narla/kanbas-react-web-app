import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.png" width={200} alt="React JS"/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Learn about React JS
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/nodejs.png" width={200} alt="Node JS" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/2345/Home">
                            CS2345 Node JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Learn about Node JS
                        </p>
                        <Link to="/Kanbas/Courses/2345/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/express.png" width={200} alt="Express"/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/3456/Home">
                            CS3456 Express
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Learn about Express
                        </p>
                        <Link to="/Kanbas/Courses/3456/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/mongodb.jpg" width={200} alt="MongoDB"/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/4567/Home">
                            CS4567 MongoDB
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Learn about MongoDB
                        </p>
                        <Link to="/Kanbas/Courses/4567/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/html.png" width={200} alt="HTML"/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5678/Home">
                            CS5678 HTML
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Learn about HTML
                        </p>
                        <Link to="/Kanbas/Courses/5678/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/css.png" width={200} alt="CSS"/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/6789/Home">
                            CS6789 CSS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Learn about CSS
                        </p>
                        <Link to="/Kanbas/Courses/6789/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/javascript.jpg" width={200} alt="JavaScript"/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/7890/Home">
                            CS7890 JavaScript
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Learn about JavaScript
                        </p>
                        <Link to="/Kanbas/Courses/7890/Home"> Go </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

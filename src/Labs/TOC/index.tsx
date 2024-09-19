import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <div>
      <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
        <li><Link to="/Kanbas">Kanbas</Link></li>
      </ul>
      <a id="wd-github" href="https://github.com/aditya-narla/kanbas-react-web-app" target="_blank"></a>
    </div>
  );
}

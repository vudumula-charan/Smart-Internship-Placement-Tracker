import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>CareerConnect</h2>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/applications">Applications</Link></li>
        <li><Link to="/resume">Resume Upload</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
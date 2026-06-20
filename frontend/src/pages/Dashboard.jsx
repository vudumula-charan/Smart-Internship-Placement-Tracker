import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));

    const [internshipCount, setInternshipCount] = useState(0);
    const [applicationCount, setApplicationCount] = useState(0);
    const [resumeCount, setResumeCount] = useState(0);

    useEffect(() => {
        API.get("/internships/count")
            .then((res) => setInternshipCount(res.data));

        API.get("/applications/count")
            .then((res) => setApplicationCount(res.data));

        API.get("/resumes/count")
            .then((res) => setResumeCount(res.data));
    }, []);

    return (
        <>
            <Sidebar />

            <div className="dashboard">
                <h1>Dashboard</h1>
                <h2>Welcome, {user?.name}</h2>

                <div className="cards">
                    <div className="card">
                        <h3>Total Internships</h3>
                        <p>{internshipCount}</p>
                    </div>

                    <div className="card">
                        <h3>Applications</h3>
                        <p>{applicationCount}</p>
                    </div>

                    <div className="card">
                        <h3>Resume Uploaded</h3>
                        <p>{resumeCount > 0 ? "Yes" : "No"}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
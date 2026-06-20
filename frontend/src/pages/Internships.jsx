import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import API from "../services/api";

function Internships() {
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        API.get("/internships")
            .then((res) => {
                setInternships(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const applyInternship = (job) => {
        API.post("/applications", {
            studentName: "Charan",
            companyName: job.companyName,
            jobRole: job.jobRole,
            status: "Applied"
        })
            .then(() => {
                alert("Application Submitted Successfully!");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <Sidebar />

            <div className="dashboard">
                <h1>Internship Listings</h1>

                <input
                    type="text"
                    placeholder="Search Internship..."
                    className="search-box"
                />

                <div className="cards">
                    {internships.map((job) => (
                        <div className="card" key={job.id}>
                            <h3>{job.companyName}</h3>

                            <p>
                                <strong>Role:</strong> {job.jobRole}
                            </p>

                            <p>
                                <strong>Location:</strong> {job.location}
                            </p>

                            <p>
                                <strong>Stipend:</strong> ₹{job.stipend}
                            </p>

                            <button onClick={() => applyInternship(job)}>
                                Apply
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Internships;
import "./Applications.css";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import API from "../services/api";

function Applications() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        API.get("/applications")
            .then((res) => {
                setApplications(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Sidebar />

            <div className="dashboard">
                <h1>Application Tracker</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {applications.map((app) => (
                            <tr key={app.id}>
                                <td>{app.companyName}</td>
                                <td>{app.jobRole}</td>
                                <td>{app.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Applications;
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import API from "../services/api";

function ResumeUpload() {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        setFileName(event.target.files[0].name);
    };

    const uploadResume = () => {
        API.post("/resumes", {
            studentName: "Charan",
            fileName: fileName
        })
        .then(() => {
            alert("Resume Uploaded Successfully!");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <>
            <Sidebar />

            <div className="dashboard">
                <h1>Resume Upload</h1>

                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                />

                <br /><br />

                {fileName && (
                    <p>
                        Selected File: <strong>{fileName}</strong>
                    </p>
                )}

                <button onClick={uploadResume}>
                    Upload Resume
                </button>
            </div>
        </>
    );
}

export default ResumeUpload;
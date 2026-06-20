import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <>
      <Sidebar />

      <div className="dashboard">
        <h1>Profile</h1>

        <div className="card">
          <h3>Student Information</h3>

          <p><strong>Name:</strong> Charan Reddy</p>
          <p><strong>Email:</strong> charan@example.com</p>
          <p><strong>College:</strong> SR Gudlavalleru Engineering College</p>
          <p><strong>Branch:</strong> Information Technology</p>
          <p><strong>Phone:</strong> 9876543210</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
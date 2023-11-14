import React from 'react'
import Layout from '../../components/layout/Layout'
import './css/admindashboard.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../components/context/auth';
import avtar from '../../assets/avatar.jpg'
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [auth,setAuth] = useAuth();
  return (
    <>
      <Layout title="Admin-Dashboard">
        <div className="admin-dashboard">
          <div className="admin-update-section">
            <div className="admin-update-section-details">
              <button
                className="admin-update-btn"
                onClick={() => navigate("/dashboard/admin/all-users")}
              >
                All User
              </button>
              <button
                className="admin-update-btn"
                onClick={() => navigate("/dashboard/admin/project-details")}
              >
                project Details
              </button>
              <button
                className="admin-update-btn"
                onClick={() => navigate("/dashboard/admin/create-project")}
              >
                Create Project
              </button>
              <button
                className="admin-update-btn"
                onClick={() => navigate("/dashboard/admin/create-java-script")}
              >
                Create JavaScript
              </button>
            </div>
          </div>
          <div className="admin-detail-section">
            <div className="admin-details-section-container">
              <img src={avtar} alt="logo" />
              <p>
                <b>Name: </b>
                {auth.user.name}
              </p>
              <p>
                <b>Email: </b>
                {auth.user.email}
              </p>
              <p>
                <b>Phone no: </b>
                {auth.user.phone}
              </p>
              <p>
                <b>Gender: </b>
                {auth.user.gender}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AdminDashboard
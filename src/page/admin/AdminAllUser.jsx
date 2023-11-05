import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { toast } from 'react-toastify';
import axios from 'axios';

const AdminAllUser = () => {
  const [alluser ,setAlluser] = useState([]);
  const getAllUser= async()=>{
    try {
      const {data} = await axios.get('')
    } catch (error) {
      toast.error('Something went wrong!!')
    }
  }
  return (
    <>
      <Layout title="all-user">
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
            </div>
          </div>
          <div className="admin-detail-section">
            <div className="admin-details-section-container">
              
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AdminAllUser
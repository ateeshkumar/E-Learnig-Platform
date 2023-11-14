import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { toast } from 'react-toastify';
import axios from 'axios';
import './css/adminalluser.css'
import { useNavigate } from 'react-router-dom';
const AdminAllUser = () => {
  const navigate = useNavigate();
  const [alluser ,setAlluser] = useState([]);
  const getAllUser= async()=>{
    try {
      const { data } = await axios.get(
        "https://alphapartical-api-v2-l7kz.onrender.com/api/v1/user/all-user"
      );
      if(data.success){
        setAlluser(data?.users)
      }
    } catch (error) {
      toast.error('Something went wrong!!')
    }
  }
  useEffect(()=>{
    getAllUser()
  },[])
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
              <button
                className="admin-update-btn"
                onClick={() => navigate("/dashboard/admin/create-java-script")}
              >
                Create JavaScript
              </button>
            </div>
          </div>
          <div className="admin-detail-section">
            {/* <div className="admin-details-section-container"> */}
            {alluser.map((item) => (
              <div className="admin-user-details">
                <p>{item?.name}</p>
                <p>{item?.email}</p>
                <p>{item?.gender}</p>
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AdminAllUser
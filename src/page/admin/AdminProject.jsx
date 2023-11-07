import React ,{ useEffect,useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/adminprojectdetails.css'
import { toast } from 'react-toastify';
const AdminProject = () => {
  const navigate = useNavigate();
  const [projects,setProjects] = useState([]);
   const getProject = async () => {
     const { data } = await axios.get(
       "https://alphapartical-api-v2-l7kz.onrender.com/api/v1/auth/get-project"
     );
     if (data?.success) {
       setProjects(data?.projects);
     }
   };
   const deteleProject=async(id)=>{
    try {
       const { data } = await axios.delete(
         `https://alphapartical-api-v2-l7kz.onrender.com/api/v1/auth/delete-product/${id}`
       );
       if (data?.success) {
         toast.success(data?.massage);
       } else {
         toast.error(data?.massage);
       }
    } catch (error) {
      toast.error("Something went wrong!!")
    }
   }
   useEffect(()=>{
    getProject();
   },[])
  return (
    <>
      <Layout title="Admin-product-details">
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
            {projects.map((item) => (
              <div className="admin-project-details">
                <span>{item?.title}</span>
                <span>{item?.lable}</span>
                <span>{item?.mentor?.name}</span>
                <button className="admin-project-btn"
                onClick={()=>deteleProject(item._id)}>Detete</button>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AdminProject
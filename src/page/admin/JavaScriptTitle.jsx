import React from 'react'
import Layout from '../../components/layout/Layout'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const JavaScriptTitle = () => {
    const navigate = useNavigate();
    const [title,setTitle] = useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const { data } = await axios.post(
              "https://alphapartical-api-v2-l7kz.onrender.com/api/v1/content/create-javascript-title",
              {
                title:title
              }
            );
            if(data?.success){
                toast.success(data?.massage);
                localStorage.setItem('content',JSON.stringify(data))
                navigate("/dashboard/admin/create-java-script/description");
            }
        } catch (error) {
            toast.error('Error in posting title');
        }
    }
    useEffect(()=>{
        localStorage.removeItem("content");
    },[]);
  return (
    <div>
      <Layout title="Java-Script-Title">
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
              <h4>CREATE JAVA SCRIPT TITLE</h4>
              <form onSubmit={handleSubmit} className="create-project">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <input type="submit" value="CREATE JAVASCRIPT" />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default JavaScriptTitle

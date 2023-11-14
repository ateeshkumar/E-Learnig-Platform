import React from 'react'
import Layout from '../../components/layout/Layout'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const JavaScriptDescription = () => {
  const navigate = useNavigate();
  const [heading,setHeading] = useState("");
  const [paragraph,setParagraph] = useState("");
  const [code,setCode] = useState("");

  const data = localStorage.getItem('content');
  const content = JSON.parse(data);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://alphapartical-api-v2-l7kz.onrender.com/api/v1/content/create-javascript-content",
        {
          heading: heading,
          paragraph: paragraph,
          code: code,
          content: content?.javascript?._id,
        }
      );
      if(data?.success){
        toast.success(data?.massage);
        navigate("/dashboard/admin/create-java-script/description");
      }else{
        toast.warning(data?.massage);
      }
    } catch (error) {
      toast.error('Error in Posting Description');
    }
  }
  useEffect(()=>{
    console.log(content?.javascript?._id)
  },[content])
  return (
    <div>
      <Layout title="JavaScript Description">
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
              <h4>CREATE JAVA SCRIPT DESCRIPTION</h4>
              <form onSubmit={handleSubmit} className="create-project">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
                <textarea
                  name="text"
                  rows="5"
                  placeholder="Project Description"
                  value={paragraph}
                  onChange={(e) => setParagraph(e.target.value)}
                  
                ></textarea>
                <textarea
                  type="text"
                  rows="5"
                  placeholder="Project Guide"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                ></textarea>
                <input type="submit" value="CREATE JAVASCRIPT DESCRIPTION" />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default JavaScriptDescription

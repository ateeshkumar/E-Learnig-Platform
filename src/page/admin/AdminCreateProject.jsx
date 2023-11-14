import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import './css/admincreateproject.css';
import './css/admincreateproject.css';
import { useAuth } from '../../components/context/auth';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AdminCreateProject = () => {
  const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    // const [input, setInput] = useState({
    //   logo: "",
    //   title: "",
    //   description: "",
    //   lable: "",
    //   github: "",
    //   language: "",
    //   skills: "",
    //   guide: ""
    // });
    const [logo,setLogo] = useState('');
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState("");
    const [lable, setLable] = useState("");
    const [github, setGithub] = useState("");
    const [language, setLanguage] = useState("");
    const [skills, setSkills] = useState("");
    const [guide, setGuide] = useState("");

    
    const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://alphapartical-api-v2-l7kz.onrender.com/api/v1/auth/create-project"
        ,{
          logo:logo,
          title:title,
          description:description,
          lable:lable,
          github:github,
          language:language,
          skills:skills,
          guide:guide,
          mentor:auth.user._id
        });
        if(data.success){
          toast.success(data?.massage);
          navigate("/dashboard/admin/project-details");
        }else{
          toast.warning(data?.massage);
        }
      } catch (error) {
        toast.error('Something Went Wrong!!')
      }
    }
    
  return (
    <>
      <Layout title="create-project">
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
              <h4>CREATE PROJECT</h4>
              <form onSubmit={handleSubmit} className="create-project">
                <input
                  type="url"
                  placeholder="Project Logo"
                  value={logo}
                  onChange={(e) => setLogo(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Project Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <textarea
                  name="text"
                  rows="5"
                  placeholder="Project Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
                <input
                  type="text"
                  placeholder="Project Level"
                  value={lable}
                  onChange={(e) => setLable(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Project Reposectory"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Coding Language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Project Need Skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  required
                />

                <textarea
                  type="text"
                  rows="5"
                  placeholder="Project Guide"
                  value={guide}
                  onChange={(e) => setGuide(e.target.value)}
                  required
                ></textarea>
                <input type="submit" value="CREATE PROJECT" />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AdminCreateProject
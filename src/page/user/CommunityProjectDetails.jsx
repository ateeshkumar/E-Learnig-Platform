import React,{ useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useParams } from 'react-router-dom';
import { TypeAnimation } from "react-type-animation";
import axios from 'axios';
import { useEffect } from 'react';
import { useAuth } from '../../components/context/auth';
import './css/communityprojectdetails.css';

const CommunityProjectDetails = () => {
  const {slug} = useParams();
  const [auth,setAuth] = useAuth();
  const [projectd,setProjectd] = useState({});
  const getSingleProjectDetails = async()=>{
    const { data } = await axios.get(
      `https://alphapartical-api-v2-l7kz.onrender.com/api/v1/auth/get-project/${slug}`
    );
    if(data?.success){
      setProjectd(data.projects);
    }
  }
  useEffect(()=>{
    getSingleProjectDetails();
  },[slug])
  return (
    <>
      <Layout title={projectd?.title}>
        <div className="community-header">
          <TypeAnimation
            sequence={["Welcome To Our Student Community", 1000]}
            wrapper="span"
            speed={150}
            style={{
              fontSize: "87px",
              display: "inline-block",
              color: "#fff",
              textShadow: "5px 5px #d1cbcb",
              textAlign: "center",
              fontWeight: "bold",
            }}
            repeat={Infinity}
          />
        </div>
        <div className="community-details-container-1">
          <div className="community-live-project-1">
            <h4>Google Ads</h4>
          </div>
          <div className="community-history-project-details-1">
            <div className="community-histrory-project-1">
              <p>
                <b>Project Title: </b>
                {projectd?.title}
              </p>
              <p>
                <b>Project Description: </b>
                {projectd?.description}
              </p>
              <p>
                <b>Project Level: </b>
                {projectd?.lable}
              </p>
              <p>
                <b>Project Github Reposectory: </b>
                <a
                  href={projectd?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo for Project
                </a>
              </p>
              <p>
                <b>Project Required Coding Language:</b> {projectd?.language}
              </p>
              <p>
                <b>Project Required Skills:</b> {projectd?.skills}
              </p>
              <p>
                <b>Project Mentor:</b> {projectd?.mentor?.name}
              </p>
              {auth?.token ? (
                <button className="community-btn">
                  Join Project for Contribution
                </button>
              ) : (
                <button
                  className="community-btn"
                  onClick={() =>
                    navigate("/login", {
                      state: `/student/community/${projectd.slug}`,
                    })
                  }
                >
                  Login To Join For Contibution
                </button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CommunityProjectDetails
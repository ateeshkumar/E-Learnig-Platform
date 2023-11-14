import React from 'react';
import Layout from '../../components/layout/Layout';
import './css/ourcommunity.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../../components/context/auth';
import SimpleLoader from '../../components/layout/SimpleLoader';
import Ads from '../../components/GoogleAds/Ads';

const OurCommunity = () => {
  const [projects,setProjects] = useState([]);
  const [auth,setAuth] = useAuth();
 
  const navigate = useNavigate();
  const getProject=async()=>{
    const { data } = await axios.get(
      "https://alphapartical-api-v2-l7kz.onrender.com/api/v1/auth/get-project"
    );
    if(data?.success){
      setProjects(data?.projects);
    }
  }
  
  useEffect(()=>{
    getProject();
  },[])
  
  
  return (
    <>
      <Layout title="Our Community">
        <div className="community-header">
          <TypeAnimation
            sequence={["Welcome To Our Student Community", 1000]}
            wrapper="span"
            speed={150}
            style={{
              fontSize: "67px",
              display: "inline-block",
              color: "#fff",
              textShadow: "5px 5px #d1cbcb",
              textAlign: "center",
              fontWeight: "bold",
            }}
            repeat={Infinity}
          />
        </div>
        <div className="community-details-container">
          <div className="community-live-project">
            <Ads/>
          </div>
          <div className="community-history-project-details">
            {projects && projects.length > 0 ? (
              <>
                {projects.map((item) => (
                  <div className="community-project-datails-container">
                    <p>{item.title}</p>
                    <p>{item.lable}</p>
                    <button
                      className="community-btn"
                      onClick={() =>
                        navigate(`/student/community/${item.slug}`)
                      }
                    >
                      Details
                    </button>
                  </div>
                ))}
              </>
            ) : (
              <SimpleLoader />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default OurCommunity
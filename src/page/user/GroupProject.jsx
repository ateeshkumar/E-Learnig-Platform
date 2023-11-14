import React from 'react'
import Layout from '../../components/layout/Layout'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';
import avatar from '../../assets/avatar.jpg';
import './css/groupproject.css'
import SimpleLoader from '../../components/layout/SimpleLoader';
import Ads from '../../components/GoogleAds/Ads';

const GroupProject = () => {
    const {slug} = useParams();
    const [user,setUser] = useState([]);
    const [project,setProject] = useState({});
    const getDetailsData= async()=>{
        try {
            const { data } = await axios.get(
              `https://alphapartical-api-v2-l7kz.onrender.com/api/v1/auth/project-group/${slug}`
            );
            if(data?.success){
                setProject(data?.project);
                setUser(data?.project?.users);
            }else{
                toast.error(data?.massage);
            }
        } catch (error) {
            toast.error('Something Went Wrong!!');
        }
    }
    useEffect(()=>{
        getDetailsData();
    },[slug]);
    console.log(user);
    console.log(project);
  return (
    <>
      <Layout>
        <div className="group-project-container">
          <div className="header-group-project">
            <img src={project?.logo} alt="logo" />
            <h1>{project?.title}</h1>
            <a href={project?.github}>Github Reposectory Url</a>
          </div>
          <div className="main-group-project">
            <div className="group-user-detail">
              {user && user.length > 0 ? (
                <>
                  {user?.map((item) => (
                    <div className="user-group-container">
                      <img src={avatar} alt="avatar" />
                      <p>{item.name}</p>
                      <p>{item.college}</p>
                    </div>
                  ))}
                </>
              ) : (
                <SimpleLoader />
              )}
            </div>
            <div className="group-chat-detail"></div>
          </div>
          <div className="bottom-group-project">
            <Ads/>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default GroupProject
import React from 'react'
import Layout from '../../components/layout/Layout'
import './css/userdashboard.css'
import { useAuth } from '../../components/context/auth'
import avatar from '../../assets/avatar.jpg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment/moment';
import SimpleLoader from '../../components/layout/SimpleLoader';

const UserDashboard = () => {
  const navigate = useNavigate()
  const [auth,setAuth] = useAuth();
  const [user,setUser] = useState([]);
  const userProject = async()=>{
    try {
      const { data } = await axios.get(
        `https://alphapartical-api-v2-l7kz.onrender.com/api/v1/user/all-user/${auth.user._id}`
      );
        if(data?.success){
          setUser(data?.users?.projects);
        }
    } catch (error) {
      toast.error('Something went wrong!')
    }
  } 
  useEffect(()=>{
    userProject()
  },[auth?.user?._id]) 
  return (
    <>
      <Layout title="user-dashboard">
        <div className="user-dashboard-container">
          <div className="user-dashboard-profile">
            <div className="user-dashboard-details">
              <img src={avatar} alt="Avatar" />
              <h3>Name: {auth?.user?.name}</h3>
              <h3>Email: {auth?.user?.email}</h3>
              <h3>Phone No: {auth?.user?.phone}</h3>
              <h3>Gender: {auth?.user?.gender}</h3>
              <h3>College: {auth?.user?.college}</h3>
              <button className="user-btn" onClick={() => navigate("")}>
                Update Profile
              </button>
            </div>
          </div>
          <div className="user-activity-details">
            <h1>User Activity</h1>
            <div className="user-project">
              {user && user.length > 0 ? (
                <>
                  {user.map((item) => (
                    <div className="user-project-details">
                      <img src={item?.logo} alt="logo" />
                      <p>{item?.title}</p>
                      <p>{moment(item?.createdAt).fromNow()}</p>
                      <button
                        className="project-btn"
                        onClick={() =>
                          navigate(`/dashboard/user/group/${item?.slug}`)
                        }
                      >
                        Go to Project
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <SimpleLoader />
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default UserDashboard
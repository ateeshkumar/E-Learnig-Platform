import React from 'react'
import Layout from '../../components/layout/Layout'
import './css/userdashboard.css'
import { useAuth } from '../../components/context/auth'
import avatar from '../../assets/avatar.jpg';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate()
  const [auth,setAuth] = useAuth();
  return (
    <>
      <Layout title='user-dashboard'>
        <div className="user-dashboard-container">
          <div className="user-dashboard-profile">
            <div className="user-dashboard-details">
                <img src={avatar} alt="Avatar"/>
                <h3>Name: {auth?.user?.name}</h3>
                <h3>Email: {auth?.user?.email}</h3>
                <h3>Phone No: {auth?.user?.phone}</h3>
                <h3>Gender: {auth?.user?.gender}</h3>
                <h3>College: {auth?.user?.college}</h3>
                <button className='user-btn'
                onClick={()=>navigate('')}>Update Profile</button>
            </div>

          </div>
          <div className="user-activity-details">
              <h1>User Activity</h1>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default UserDashboard
import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/auth';
import { useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Loader from '../layout/Loader';

const AdminRoute = () => {
    const [ok,setOk] = useState(false);
    const [auth,setAuth] = useAuth();
    useEffect(()=>{
        const authCheck = async () => {
          const res = await axios.get(
            "https://alphapartical-api-v2-l7kz.onrender.com/api/v1/user/admin-auth"
          );
          if (res.data.ok) {
            setOk(true);
          } else {
            setOk(false);
          }
        };
        if (auth?.token) authCheck();
    },[])
  return ok?<Outlet/>:<Loader path=' '/>
}

export default AdminRoute
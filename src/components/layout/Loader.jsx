import React,{ useEffect, useState} from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { HashLoader } from "react-spinners";
import Layout from "./Layout";

const Loader = ({path='login'}) => {
    const [count,setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count=>--count);
        },1000);
        count===0 && navigate(`/${path}`,
        {state: location.pathname,})
        return ()=> clearInterval(interval);
    },[count,navigate,location,path])
  return (
    <>
      
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height:'40vh'
          }}
        >
          <HashLoader color="#dd0eed" />
          <h1>Rediracting to you in {count} second</h1>
        </div>
      
    </>
  );
}

export default Loader
import React, { useEffect, useRef, useState } from "react";
import "./css/layout.css";
import { useParams } from "react-router-dom";
import Layout from '../layout/Layout'
import axios from "axios";
import Left from "./Left";
import Midle from "./Midle";
const LayoutContent = () => {
     const navref = useRef();
     const { id } = useParams();
     const { add } = useParams();
     const [content, setContent] = useState([]);
     const getAllConent = async (add) => {
       try {
         const { data } = await axios.get(
           `https://alphapartical-api-v2-l7kz.onrender.com/api/v1/content/get-${add}`
         );
         if (data?.success) {
           setContent(data?.content);
         }
       } catch (error) {
         console.log(error);
       }
     };
     useEffect(() => {
       getAllConent(add);
     }, [add]);
  return (
    <>
      <Layout title={add}>
         
          <div className="body">
            <div className="left">
              <Left search={content} add={add} />
            </div>
            <div className="mid">
              <Midle id={id} add={add} content={content} />
            </div>
          </div>
      </Layout>
    </>
  );
}

export default LayoutContent

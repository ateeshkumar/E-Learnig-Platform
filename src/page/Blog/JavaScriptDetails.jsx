import React from 'react';
import Layout from '../../components/layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import CodeSnippit from '../../components/CodeSnippit';
import './css/javascriptdetails.css';
import javascript from '../../assets/blog/What-JavaScript.jpg';
import Ads from '../../components/GoogleAds/Ads'
const JavaScriptDetails = () => {
    const {slug} = useParams();
    const [details,setDetails] = useState([]);
    const getJavaScriptDetails = async(slug)=>{
        const { data } = await axios.get(
          `https://alphapartical-api-v2-l7kz.onrender.com/api/v1/content/get-javascript-content/${slug}`
        );
        if(data?.success){
            setDetails(data?.javascript?.description);
        }
    }
    useEffect(()=>{
        getJavaScriptDetails(slug);
    },[slug])
  return (
    <div>
      <Layout title={slug}>
        <div className="js-container">
            <h1>Java Script Tutorial</h1>
            <img src={javascript} alt="JavaScript" />
            {
                details && details.map((item)=>(
                    <div className="js-card">
                        <h1>{item.heading}</h1>
                        <p>{item.paragraph}</p>
                        {item.code && <CodeSnippit type='javascript' code={item.code}/>}
                        <Ads/>
                    </div>
                ))
            }
        </div>
      </Layout>
    </div>
  )
}

export default JavaScriptDetails

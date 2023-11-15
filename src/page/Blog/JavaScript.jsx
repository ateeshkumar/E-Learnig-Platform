import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import { useEffect } from 'react';
import './css/javascript.css';

const JavaScript = () => {
  const [javascript,setJavascript] = useState([]);
  const getJavaScript =async()=>{
    const { data } = await axios.get(
      "https://alphapartical-api-v2-l7kz.onrender.com/api/v1/content/get-jevascript-title"
    );
    if(data?.success){
      setJavascript(data?.javascript)
    }
  }
  useEffect(()=>{
    getJavaScript();
  },[]); 
  return (
    <>
      <Layout title="Java-Script">
        <div className="java-script-container">
          <h1>Java Script Introduction</h1>
          <h3>Overview</h3>
          <p>
            ES6 or ECMAScript6 or ECMAScript(2015) is a trademarked
            specification standardized by European Computer Manufacturers
            Association (ECMA). As JavaScript popularity was rising and it has
            to be run on most of the browsers there was a need for a single
            platform where all new JavaScript features could be standardized
            thus ECMAScript was formed. Apart from JavaScript, there are other
            well-known implementations of ECMAScript like JScript and
            ActionScript. It has been used for both frontend client-side
            rendering and the world wide web and server-side rendering in
            Node.js.
          </p>
          <h3>Topics Cover in Letest Java Script Version</h3>
          {javascript &&
            javascript.map((item) => (
              <div className="javascript-card">
                <a href={`/blogs/java-script-tutorial/${item?.slug}`}>
                  {item.title}
                </a>
              </div>
            ))}
        </div>
      </Layout>
    </>
  );
}

export default JavaScript

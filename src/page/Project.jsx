import Layout from '../components/layout/Layout';
import React, { useEffect } from "react";
import "./css/project.css";
import project from "../data/project";
import { useNavigate, Link } from "react-router-dom";
import Ads from '../components/GoogleAds/Ads';
const Project = () => {
  return (
    <>
      <Layout title="All Project">
        <div className="p-header">
          <h1>PROJECT</h1>
        </div>
        <div className="p-bottom">
          <div className="p-box-container">
            {project.map((item) => (
              <div className="p-detail-box">
                <img src={item.image} alt="project"/>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <p>{item.tag[1]}</p>
                <Link to={`/engineering/project-detals/${item.id}`}>
                  Project Details
                </Link>
              </div>
            ))}
          </div>
          <Ads/>
        </div>
      </Layout>
    </>
  );
}

export default Project;

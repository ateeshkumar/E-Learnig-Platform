import Layout from '../components/layout/Layout'
import React, { useEffect } from "react";
import "./css/EthicalHacking.css";
import ethicalHacking from "../data/ethicalHacking";
import { useNavigate, useParams } from "react-router-dom";
import img from "../assets/Ethicalhacking.jpg";
import VideoPlayer from '../components/layout/VideoPlayer';
import Ads from '../components/GoogleAds/Ads';
const EthicalHacking = () => {
     const naviagte = useNavigate();
     const { id } = useParams();
    //  let idx = parseInt(id);
     const result = ethicalHacking.find((obj) => obj.slug === id);
     console.log(result);
     const ethical = "courses";
  return (
    <>
      <Layout title="ethical-hacking">
        <div className="ethical-container">
          <div className="ethical-left">
            <div className="ethical-video">
              {
                <>
                  <VideoPlayer video={result.video} />
                </>
              }
            </div>
            <div className="ethical-description">
              <h2>Description</h2>
              <div className="video-desc-con">
                <h3>{result.title}</h3>
                <Ads/>
              </div>
            </div>
          </div>
          <div className="ethical-right">
            {ethicalHacking.map((item) => (
              <div
                className="video-card"
                onClick={() =>
                  naviagte(`/${ethical}/ethical-hacking/${item.slug}`)
                }
              >
                <img src={img} alt={img} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default EthicalHacking

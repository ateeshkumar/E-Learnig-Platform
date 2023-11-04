import React, { useEffect } from "react";
import "./css/projectdetails.css";
import { useParams, Link } from "react-router-dom";
import project from "../data/project";
import VideoPlayer from "../components/layout/VideoPlayer";
import Layout from "../components/layout/Layout";

const ProjectDetails = () => {
    const { id } = useParams();
    let idx = parseInt(id);
    const result = project.find((obj) => obj.id === idx);
    useEffect(() => {
      document.title = `${result.title}`;
    }, [result.title]);
  return (
    <>
      <Layout title={result.title}>
        <div className="details-container-project">
          <div className="project-details-video">
            <VideoPlayer
              video={result.video}
              width={"300px"}
              height={"500px"}
            />
          </div>
          <div className="project-deatlis-descri">
            <div className="p-left-des">
              <h1>Deacription</h1>
              {result.description.map((item) => (
                <p>{item.des}</p>
              ))}
            </div>
            <div className="p-right-price">
              <a href={result.src}>Source Code</a>
              {result.tag.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProjectDetails;

import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import './css/blog.css';
import vscode from '../assets/page/vs-code-extension.jpg'
import placement1 from '../assets/blog/placement-question.jpg';
import project from '../assets/blog/project.png';
import eCommerce from '../assets/blog/e-commerce.png';
import learning from '../assets/blog/elearning-plateform.jpg';
import Ads from '../components/GoogleAds/Ads';
import javaScript from '../assets/blog/What-JavaScript.jpg';
import scapeFromTarkev from '../assets/blog/escape-from-tarkov.jpg'
const Blog = () => {
  return (
    <>
      <Layout title="Blog">
        <div className="blog-container">
          <div className="blog-content">
            <div className="blog-details">
              <Link to="/blogs/vs-code-extensions-for-developers">
                <img src={vscode} alt="Vs Code Extnsions" />
                <div className="blog-details-pro">
                  <p>
                    <b>VS Code Extensions For Developers</b>
                    <p>by Ateesh Kumar</p>
                  </p>
                </div>
              </Link>
            </div>
            <div className="blog-details">
              <Link to="/blogs/wipro-talent-next-milestone-all-coding-question-cheatsheet">
                <img src={placement1} alt="Placement Question" />
                <div className="blog-details-pro">
                  <p>
                    <b>
                      Wipro Talent Next Milestone All Coding Question Cheatsheet
                    </b>
                    {/* <p>by Ateesh Kumar</p> */}
                  </p>
                </div>
              </Link>
            </div>
            <div className="blog-details">
              <Ads />
            </div>
            <div className="blog-details">
              <Link to="/blogs/placement-coding-question-2023">
                <img src={placement1} alt="Placement Question" />
                <div className="blog-details-pro">
                  <p>
                    <b>Placement Coding Question 2023 Cheatsheet</b>
                    {/* <p>by Ateesh Kumar</p> */}
                  </p>
                </div>
              </Link>
            </div>
            <div className="blog-details">
              <Link to="/blogs/top-ptoject-for-placement">
                <img src={project} alt="Placement Questio" />
                <div className="blog-details-pro">
                  <p>
                    <b>Project For Top Level Placement</b>
                    {/* <p>by Ateesh Kumar</p> */}
                  </p>
                </div>
              </Link>
            </div>
            <div className="blog-details">
              <Ads />
            </div>
            <div className="blog-details">
              <Link to="/blogs/eCommerce-Website-planning-cheatsheet-using-mern-stack">
                <img src={eCommerce} alt="Placement Questio" />
                <div className="blog-details-pro">
                  <p>
                    <b>
                      e-Commerce Website Planning Using Mern Stack Development
                      Cheatsheet
                    </b>
                    {/* <p>by Ateesh Kumar</p> */}
                  </p>
                </div>
              </Link>
            </div>
            <div className="blog-details">
              <Link to="/blogs/eLearning-Platform-planning-cheatsheet-using-mern-stack">
                <img src={learning} alt="Placement Questio" />
                <div className="blog-details-pro">
                  <p>
                    <b>
                      e-Learning Platform Planning Using Mern Stack Development
                      Cheatsheet
                    </b>
                    {/* <p>by Ateesh Kumar</p> */}
                  </p>
                </div>
              </Link>
            </div>
            <div className="blog-details">
              <Ads />
            </div>
            <div className="blog-details">
              <Link to="/blogs/java-script-tutorial">
                <img src={javaScript} alt="Java Script" />
                <div className="blog-details-pro">
                  <p>
                    <b>Java Script Full Tutorials</b>
                    {/* <p>by Ateesh Kumar</p> */}
                  </p>
                </div>
              </Link>
            </div>
            <div className="blog-details">
              <Link to="/blogs/escape-from-tarkov">
                <img src={scapeFromTarkev} alt="Java Script" />
                <div className="blog-details-pro">
                  <p>
                    <b>Escape From Tarkov Game</b>
                    {/* <p>by Ateesh Kumar</p> */}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Blog
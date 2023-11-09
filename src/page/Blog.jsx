import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import './css/blog.css';
import vscode from '../assets/page/vs-code-extension.jpg'
import placement1 from '../assets/blog/placement-question.jpg';
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
              <Link to="/blogs/placement-coding-question-2023">
                <img src={placement1} alt="Placement Question" />
                <div className="blog-details-pro">
                  <p>
                    <b>
                      Placement Coding Question 2023 Cheatsheet
                    </b>
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
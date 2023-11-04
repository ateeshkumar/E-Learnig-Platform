import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import './css/blog.css';
import vscode from '../assets/page/vs-code-extension.jpg'
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
          </div>
        </div>
      </Layout>
      Blog
    </>
  );
}

export default Blog
import React from 'react';
import Layout from '../../components/layout/Layout';
import elearning from '../../assets/blog/elearning-plateform.jpg';
import './css/vscodeextension.css';
const LearningPlatform = () => {
  return (
    <div>
      <Layout title='Learning Platform'>
        <div className="vce-container">
          <h1>E-Learning Platform</h1>
          <img className='blog-img' src={elearning} alt="Project" />
          <div className="extension-container">
            <p>
              Create Website Using MERN Stack (MengoDB, Express, React, Node)
            </p>
            <p>
              An e-commerce website is an online platform that allows businesses
              to sell products or services to customers over the internet. It
              serves as a digital storefront, enabling customers to browse,
              select, purchase, and pay for products or services. Here's an
              overview of the key components and features of an e-commerce
              website:
            </p>
            <hr />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default LearningPlatform

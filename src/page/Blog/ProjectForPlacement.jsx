import React from 'react'
import Layout from '../../components/layout/Layout'
import project from '../../assets/blog/project.png'
import Ads from '../../components/GoogleAds/Ads';
const ProjectForPlacement = () => {
  return (
    <>
      <Layout title="Project for plecement">
        <div className="vce-container">
          <h1>Project For Top Level Placement</h1>
          <img src={project} alt="Project" />
          <div className="extension-container">
            <h3>1. Ecommerce Website</h3>
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
            <a href="/blogs/eCommerce-Website-planning-cheatsheet-using-mern-stack">
              e-Commerce Website
            </a>
            <hr />
          </div>
          <Ads/>
          <div className="extension-container">
            <h3>2. Learning Platform</h3>
            <p>
              Create Website Using MERN Stack (MengoDB, Express, React, Node)
            </p>
            <p>
              A learning platform is a digital tool or software that facilitates
              the creation, delivery, and management of educational content.
              These platforms are used for a wide range of educational purposes,
              from schools and universities to corporate training and online
              courses. Here are the key components and features of a learning
              platform:
            </p>
            <a href="/blogs/eLearning-Platform-planning-cheatsheet-using-mern-stack">
              e-Learning platform
            </a>
            <hr />
          </div>
          <Ads/>
          <div className="extension-container">
            <h3>3. Portfolio Website</h3>
            <p>Create Website Using React</p>
            <p>
              Creating a portfolio website using React is a great way to
              showcase your work, skills, and accomplishments to potential
              employers or clients. Here are the steps to build a simple
              portfolio website using React:
            </p>
            <a href="/blogs/eCommerce-Website-planning-cheatsheet-using-mern-stack">
              Portfolio Website
            </a>
            <hr />
          </div>
          <Ads/>
          <div className="extension-container">
            <h3>4. Clone of any Social Media Platform</h3>
            <p>Create Website Using React.</p>
            <p>
              Creating a clone of a social media platform, such as Twitter or
              Facebook, using React is a complex and ambitious project. It
              involves building a wide range of features, including user
              profiles, news feeds, posts, comments, likes, and more. Here's an
              overview of the key components and steps you would need to
              consider when building a social media platform clone in React:
            </p>
            <a href="/blogs/eCommerce-Website-planning-cheatsheet-using-mern-stack">
              Social Media Clone Platform
            </a>
            <hr />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProjectForPlacement

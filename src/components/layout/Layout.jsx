import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children,title,description,keyword,author}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}
Layout.defaultProps = {
  title: "E-Learning app",
  description: "Here the all problem of solution",
  keyword: "mern,react,node.js,html",
  author: "Ateesh Kumar",
};

export default Layout

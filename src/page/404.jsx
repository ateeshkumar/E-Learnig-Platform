import React from 'react'
import Layout from '../components/layout/Layout'

const PageNotFound = () => {
  return (
    <>
      <Layout title='404'>
        <h1 style={{ textAlign: "center",alignItems:'center',height:'35vh'}}>
          404
          <p>Page Not Found</p>
          <a href="/" style={{ color: "blue", textDecoration: "none" }}>
            Go Back To Home
          </a>
        </h1>
      </Layout>
    </>
  );
}

export default PageNotFound
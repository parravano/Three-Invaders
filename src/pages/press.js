import React from 'react'

import Layout from "../components/layout";
import SEO from "../components/seo";

import Article from "../components/press/Article";
import ArticleOne from "../components/press/ArticleOne";
import Audio from "../components/press/Audio";

function press() {
  return (
    <Layout>
    <SEO title="press" /> 
     <ArticleOne />
      <Article />
     
    <Audio />

  </Layout>
  )
}

export default press

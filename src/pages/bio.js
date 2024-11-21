import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BioHero from "../components/bio/BioHero";
import BioBody from "../components/bio/BioBody";

const SecondPage = () => (
  <Layout>
    <SEO title="bio" />
    <BioHero />
    <BioBody />
  </Layout>
);

export default SecondPage;

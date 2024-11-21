import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BuyOptions from "../components/BuyOptions";
import Quote from "../components/Quote";
import BpSum from "../components/book/BpSum";
import BookImgComp from "../components/book/BookImgComp";
import BpSumCon from "../components/book/BpSumCon";
import Video from "../components/Video";

const SecondPage = () => (
  <Layout>
    <SEO title="Book" />
    <BpSum />
    <BookImgComp />
    <BpSumCon />
    <BuyOptions />
    <Video />
    <Quote />
  </Layout>
);

export default SecondPage;

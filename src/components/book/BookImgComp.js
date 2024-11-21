import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function BookImgComp({ className }) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "book-img-comp.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section>
      <div className={className}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </section>
  );
}

export default styled(BookImgComp)`
  margin-top: -150px;
  @media (max-width: 1224px) {
    margin-top: 0;
  }
`;

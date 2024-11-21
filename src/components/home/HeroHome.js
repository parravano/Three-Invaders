import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "home-hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />;
};

const StyledImg = styled(BackgroundImage)`
  display: block !important;
  height: 90vh;
  background-position: 80% 50% !important;
`;
export default Image;

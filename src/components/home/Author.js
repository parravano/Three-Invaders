import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from 'gatsby';
import styled from "styled-components";
import Title from "../../components/Title";
import Text from "../../components/Text";

function Author({ className }) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "author-bio.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className={className}>
      <div className="container">
        <Title center>
          <h2>About Dr. Saleem I. Abdulrauf</h2>
        </Title>
        <div className="innerContainer">
          <div className="textContainer">
            <div className="imgContainer">
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
            <Text>
              Professor Saleem I. Abdulrauf is a world-renowned neurosurgeon who
              has performed over 2,000 complex brain surgeries. He is the
              neurosurgeon-in-chief of the Abdulrauf Institute of Neurosurgery™
              and the founding chairman of the department of neurosurgery at
              Saint Louis University in St. Louis, Missouri. He is highly
              published academician and has served as a visiting professor to
              over 100 universities around the globe. Dr. Abdulrauf has
              developed a brain bypass surgical procedure as well as
              microsurgical instruments, both of which have been named after
              him. He has authored two textbooks in the field of neurosurgery,
              including the reference textbook for brain bypass surgery. Three
              Invaders is his first book written for the general public
            </Text>
            <Text>
              Dr. Abdulrauf has always been interested in larger social and
              humanitarian issues. He co-authored a peer-reviewed article in
              2019 which examined scientific proof of Nazi crimes against Jews
              during WWII titled “Crimes Against the Nervous System:
              Neurological References During the Nuremberg Trials.”
            </Text>
            <Text>
              Dr. Abdulrauf’s ancestors hailed from the heart of Arabia in the
              region known as Hejaz, the birthplace of the Arab and Islamic
              civilizations. He grew up in the heart of the American Midwest, a
              region known for its traditional American spirit. This background
              and blend of cultures gives him a unique perspective on the larger
              issues discussed in this book.
            </Text>

             <Link to="/bio">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default styled(Author)`
  .container {
    max-width: 1100px;
    margin: 90px auto;
    padding-bottom: 25px;
    border-bottom: 1px solid #c5c5c5;
  }
  .innerContainer {
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    /* max-width: 980px; */
    width: 100%;
    margin: auto;
    padding: 20px;
  }
  .imgContainer {
    width: 30%;
    float: left;
    margin-right: 50px;
    shape-outside: ellipse();
  }

    a, a:visited{
   color var(--secondaryColor);
  }
    a:hover{
     color: var(--tertiaryColor);
  }
  /* .textContainer {
    width: 60%;
  } */
  @media (max-width: 1300px) {
    .innerContainer {
      max-width: 980px;
    }
  }
  @media (max-width: 450px) {
    .container {
      margin: 40px 20px;
      padding: 0;
    }
    .innerContainer {
      display: flow-root;
    }
    /* .textContainer {
      width: 100%;
    } */
    p {
      text-align: left;
    }
    .imgContainer {
      width: 50%;
      margin-right: 20px;
      /* margin: 0 auto 20px; */
    }
  }
`;

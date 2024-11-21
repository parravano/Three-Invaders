import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
function BookCover({ className }) {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <div className={className}>
      <Link to="/book" className="book-container">
        <div className="book">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </Link>
    </div>
  );
}

export default styled(BookCover)`
  .book-container {
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1300px;
  }

  @keyframes initAnimation {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(30deg);
    }
  }

  .book {
    width: 350px;
    height: 525px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(-30deg);
    transition: 1s ease;
    animation: 1s ease 0s 1 initAnimation;
  }

  .book:hover {
    transform: rotateY(0deg);
  }

  .book > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    width: 350px;
    height: 525px;
    transform: translateZ(25px);
    background-color: #01060f;
    border-radius: 0 2px 2px 0;
    /* box-shadow: 5px 5px 20px #666; */
  }

  .book::before {
    position: absolute;
    content: " ";
    background-color: blue;
    left: 0;
    top: 3px;
    width: 48px;
    height: 519px;
    transform: translateX(322px) rotateY(90deg);
    background: linear-gradient(
      90deg,
      #fff 0%,
      #f9f9f9 5%,
      #fff 10%,
      #f9f9f9 15%,
      #fff 20%,
      #f9f9f9 25%,
      #fff 30%,
      #f9f9f9 35%,
      #fff 40%,
      #f9f9f9 45%,
      #fff 50%,
      #f9f9f9 55%,
      #fff 60%,
      #f9f9f9 65%,
      #fff 70%,
      #f9f9f9 75%,
      #fff 80%,
      #f9f9f9 85%,
      #fff 90%,
      #f9f9f9 95%,
      #fff 100%
    );
  }

  .book::after {
    position: absolute;
    top: 0;
    left: 0;
    content: " ";
    width: 350px;
    height: 525px;
    transform: translateZ(-25px);
    background-color: #01060f;
    border-radius: 0 2px 2px 0;
    /* box-shadow: -10px 0 50px 10px #666; */
  }
  /* Mobile Style */
  @media (max-width: 450px) {
    .book-container {
      perspective: 600px;
    }

    @keyframes initAnimation {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(-20deg);
      }
    }

    .book {
      width: 250px;
      height: 375px;
      transform: rotateY(-20deg);
    }

    .book:hover {
      transform: rotateY(0deg);
    }

    .book > :first-child {
      width: 250px;
      height: 375px;
      transform: translateZ(25px);
    }

    .book::before {
      top: 3px;
      width: 48px;
      height: 369px;
      transform: translateX(222px) rotateY(90deg);
    }

    .book::after {
      width: 250px;
      height: 375px;
      transform: translateZ(-25px);
    }
  }
  /* Mobile Style */
`;

import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Title from "../Title";
import Text from "../Text";
import { graphql, useStaticQuery } from "gatsby";

function ArticleOne ({ className }) {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "articleimg1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <section className={className}>
      <div className="wrapper">
  
        <div className="textContainer">
          {/* <Title>
            <h1>INTERNATIONAL POLICY DIGEST</h1>
          </Title>
          <Text>
            <b> How Hollywood Embraced the Notion of ‘Arab Terrorist’ and Ran with It</b>
          </Text> */}

        <Title center>
          <h2>St. Louis Post Dispatch
            <span className="subTitle">Abdulrauf: The Man Who Saved the Church of the Holy Sepulchre</span>
          </h2>
        </Title>

        <div className="artImg">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div> 


        <div className="container">
              <div className="linkWrapper" >
                <a className="link" href="https://www.stltoday.com/opinion/editorial/abdulrauf-the-man-who-saved-the-church-of-the-holy-sepulchre/article_a1f0fed2-0447-5184-a031-85021544483a.html"  target="_blank" rel="noreferrer noopener" >
                  <div className="linkText">READ Article</div>
                </a>
              </div>
        </div>

    

        </div>
      </div>
    </section>
  );
}

export default styled(ArticleOne)`
   .wrapper {
    display: flex;
    justify-content: space-around;
    /* margin-top: 80px; */
    max-width: 1400px;
    margin: 40px auto 0;
    padding: 25px;
  }

    .subTitle{
    display: block;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  .artImg {
    
    max-width: 60%;
      max-height:50%;
    z-index: 1;
    margin: 40px auto;
  }
 
  img{
    object-fit:cover !important;
    object-position: top center !important;
    }
  .textContainer {
  
    width: 90%;
    margin: auto;
  }

.container {
    display: flex;
    flex-wrap: wrap;
    /* max-width: 980px; */
    margin: auto;
    justify-content: space-around;
  }

  .link {
    font-size: 18px;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    text-decoration: none;
      color: var(--offWhite);
    letter-spacing: 1.5px;
  }
  .link:hover{
      color: var(--textColor);
  }
  .linkWrapper {
    font-size: 16px;
    border: 1.2px solid transparent;
    border-radius: 3px;
    width: 200px;
    margin: 8px;
    background:var(--secondaryColor);
  }
    .linkWrapper:hover {
    font-size: 16px;
    border: 1.2px solid var(--textColor);
    background:transparent;

  }
  .linkText {
    width: 100%;
    padding: 8px 0;
    font-weight: 800;
  }

.divider{
  font-size: 24px;
color: var(--TextColor);
font-weight: 400;
line-height: 3;
-webkit-letter-spacing: 3px;
-moz-letter-spacing: 3px;
-ms-letter-spacing: 3px;
letter-spacing: 3px;
text-transform: uppercase;
border-bottom: 1px solid #C5C5C5;
color: var(--textColor);
}


  @media (max-width: 1024px) {
    .wrapper {
      display: flow-root;
      margin-top: 40px;
    }
    .mockUp {
      width: 100%;
      margin-bottom: 0;
      padding-right: 40px;
    }
    .textContainer {
      width: 100%;
      /* padding: 20px; */
    }
    h2{
      line-height: 1.5;
           letter-spacing: .8px;
    }
    .subTitle{
      padding-top: 15px;
      font-size: 16px;
    letter-spacing: .5px;
     line-height: 1.5;
     etter-spacing: .5px;
    }
    .artImg {
    max-width: 100%;
    z-index: 1;
    margin: 20px auto;
  }
  .linkWrapper{
    margin: 0;
  }

  .link{
    font-size: 16px;
  }

  }
`;

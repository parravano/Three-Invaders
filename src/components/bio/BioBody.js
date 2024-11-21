import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from 'styled-components';
import Title from '../../components/Title';
import Text from '../../components/Text';

function BioBody({ className }) {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bio-img-teaching.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className={className}>
      <div className='wrapper'>
        <Title>
          <h1>About Dr. Saleem I. Abdulrauf</h1>
        </Title>
      
        <Text>
          Professor Saleem I. Abdulrauf is a world-renowned neurosurgeon who has
          performed over 2,000 complex brain surgeries. He is the
          neurosurgeon-in-chief of the <a target="_blank" href='https://abdulraufinstitute.org/'>
           Abdulrauf Institute of Neurosurgery™</a> and the founding chairman of the department of neurosurgery at Saint Louis
          University in St. Louis, Missouri. He is highly published academician
          and has served as a visiting professor to over 100 universities around
          the globe. Dr. Abdulrauf has developed a brain bypass surgical
          procedure as well as microsurgical instruments, both of which have
          been named after him. He has authored two textbooks in the field of
          neurosurgery, including the reference textbook for brain bypass
          surgery. Three Invaders is his first book written for the general
          public
        </Text>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <Text>
          Dr. Abdulrauf has always been interested in larger social and
          humanitarian issues. He co-authored a peer-reviewed article in 2019
          which examined scientific proof of Nazi crimes against Jews during
          WWII titled “Crimes Against the Nervous System: Neurological
          References During the Nuremberg Trials.”
        </Text>
        <Text>
          Dr. Abdulrauf’s ancestors hailed from the heart of Arabia in the
          region known as Hejaz, the birthplace of the Arab and Islamic
          civilizations. He grew up in the heart of the American Midwest, a
          region known for its traditional American spirit. This background and
          blend of cultures gives him a unique perspective on the larger issues
          discussed in this book.
        </Text>
      </div>
    </section>
  );
}

export default styled(BioBody)`
  .wrapper {
    max-width: 1200px;
    margin: 70px auto;
    padding: 0 20px;
  }
  img{
    padding-bottom: 30px;
  }
    a, a:visited{
   color var(--secondaryColor);
  }
  a:hover{
   color: var(--tertiaryColor);
  }
`;

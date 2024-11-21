import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Title from "../../components/Title";
import Text from "../../components/Text";
import { graphql, useStaticQuery } from "gatsby";

function BpSum({ className }) {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "cover-mockup.png" }) {
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
        <div className="mockUp">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="textContainer">
          <Title>
            <h1>Three Invaders</h1>
          </Title>
          <Text>
            <b> 5 Vexing Questions the Author Answers in the Book:</b>
          </Text>
          <Text>
            <strong>Question 1:</strong> <em>Back to the Future</em> a film
            about time travel set in America’s 1950s, is one of the most iconic
            movies of a generation. Why did Steven Spielberg, in this science
            fiction movie, choose to make the bad guy an Arab character? In a
            recent survey, a Pittsburgh-based research firm posed the question
            “Should Americans, as part of their school curriculum, learn Arabic
            Numerals?”; 56% of the 3,200 respondents said no, and 15% had no
            opinion. Perhaps many among the respondents did not know that Arabic
            numerals are the numbers 0 to 9 which we use every day, reflecting a
            deep bias. How is this bias connected to the movie Back to the
            Future?
          </Text>
          <Text>
            <strong>Question 2:</strong> Terrorists planted a bomb in the
            basement of a church, and in the ensuing explosion, four young
            girls—11-year-old Denise McNair, and three 14-year-olds, Addie Mae
            Collins, Carole Robertson, and Cynthia Wesley—were killed. This
            occurred on September 15, 1963, in the city of Birmingham, Alabama.
            The four girls who died that day were African American. The
            terrorists who committed the bombing were White Christian extremists
            belonging to the KKK, for whom this was the third terrorist bombing
            in Birmingham in 11 days. Why did the mainstream media never label
            these men terrorists and the KKK a terrorist organization?
          </Text>
          {/* <Text>
            “Then there came to our places a large army, who killed many men and
            took me and brought me to the great sea and sold me into the hands
            of the Christians, who bound me and sent me on board a great ship
            and we sailed upon the great sea a month and a half . . . I reside
            in this our country by reason of great necessity. Wicked men took me
            by violence and sold me to the Christians.” This was written in
            Arabic on the wall of a jail cell in North Carolina by Omar ibn
            Said, who had been captured in Western Africa in 1807 and sold as a
            slave in the United States. Is slavery in the US yet another
            flashpoint in the interaction between Christianity and Islam? Were
            there forced conversions to Christianity? Why was the Bible used for
            proselytizing slaves, known as the Slave Bible, so heavily edited?
            Are there millions of Christian African Americans in the US today
            who are descendants of proud Muslim families from Western Africa?
          </Text>
          <Text>
            Spanish Christians call God <em>Dios</em>, French Christians call
            God <em>Dieu</em>, Arab Christians call God <em>Allah</em>, and
            Muslims call God <em>Allah</em> or <em>Elah</em>. In the US, while
            <em>Dios</em> and <em>Dieu</em> would be considered the same as God
            in English, many in the media and the public consider the term{' '}
            <em>Allah</em>
            to be a different entity than what they define as <em>God</em>. Why
            is that? Especially since Jesus, the son of Mary, who spoke Aramaic
            and not English, used the word <em>Elaha</em> for God, which is akin
            to the Arabic <em>Allah</em> or <em>Elah</em>. Jesus would not have
            even recognized the English word <em>God</em>
          </Text>
          <Text>
            The concentration camps for Muslims in China, the genocide of
            Muslims in Myanmar, the targeting of Muslims by Prime Minister Modi
            in India, the apartheid system for Muslims in the occupied
            territories of Israel; none of these would be tolerated singularly,
            let alone in combination, by world powers if the victims were
            Christians or Jews. Such a question was asked by Edward Luce of the
            Financial Times in January of 2020: “Imagine if China had
            incarcerated upwards of a million Christians. Or India said it would
            take all refugees except Christian ones. The west would be in a
            state of frenzy.” So why are these egregious acts tolerated by the
            world’s civilized societies and governments?
          </Text> */}
        </div>
      </div>
    </section>
  );
}

export default styled(BpSum)`
  .wrapper {
    display: flex;
    justify-content: space-around;
    margin-top: 80px;
  }
  .mockUp {
    width: 50%;
    z-index: 1;
    margin-bottom: -80px;
  }
  .textContainer {
    width: 40%;
    margin: auto;
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
      padding: 20px;
    }
  }
`;

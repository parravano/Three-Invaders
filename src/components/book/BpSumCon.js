import React from "react";
import styled from "styled-components";
import Text from "../../components/Text";

function BpSumCon({ className }) {
  return (
    <section className={className}>
      <div className="wrapper">
        <div className="textContainer">
          <Text>
            <strong>Question 3:</strong> “Then there came to our places a large
            army, who killed many men and took me and brought me to the great
            sea and sold me into the hands of the Christians, who bound me and
            sent me on board a great ship and we sailed upon the great sea a
            month and a half . . . I reside in this our country by reason of
            great necessity. Wicked men took me by violence and sold me to the
            Christians.” This was written in Arabic on the wall of a jail cell
            in North Carolina by Omar ibn Said, who had been captured in Western
            Africa in 1807 and sold as a slave in the United States. Is slavery
            in the US yet another flashpoint in the interaction between
            Christianity and Islam? Were there forced conversions to
            Christianity? Why was the Bible used for proselytizing slaves, known
            as the Slave Bible, so heavily edited? Are there millions of
            Christian African Americans in the US today who are descendants of
            proud Muslim families from Western Africa?
          </Text>
          <Text>
            <strong>Question 4:</strong> Spanish Christians call God{" "}
            <em>Dios</em>, French Christians call God <em>Dieu</em>, Arab
            Christians call God <em>Allah</em>, and Muslims call God{" "}
            <em>Allah</em> or <em>Elah</em>. In the US, while
            <em>Dios</em> and <em>Dieu</em> would be considered the same as God
            in English, many in the media and the public consider the term{" "}
            <em>Allah</em>
            to be a different entity than what they define as <em>God</em>. Why
            is that? Especially since Jesus, the son of Mary, who spoke Aramaic
            and not English, used the word <em>Elaha</em> for God, which is akin
            to the Arabic <em>Allah</em> or <em>Elah</em>. Jesus would not have
            even recognized the English word <em>God</em>
          </Text>
          <Text>
            <strong>Question 5:</strong> The concentration camps for Muslims in
            China, the genocide of Muslims in Myanmar, the targeting of Muslims
            by Prime Minister Modi in India, the apartheid system for Muslims in
            the occupied territories of Israel; none of these would be tolerated
            singularly, let alone in combination, by world powers if the victims
            were Christians or Jews. Such a question was asked by Edward Luce of
            the Financial Times in January of 2020: “Imagine if China had
            incarcerated upwards of a million Christians. Or India said it would
            take all refugees except Christian ones. The west would be in a
            state of frenzy.” So why are these egregious acts tolerated by the
            world’s civilized societies and governments?
          </Text>
        </div>
      </div>
    </section>
  );
}

export default styled(BpSumCon)`
  .wrapper {
    /* justify-content: space-around; */
    margin-top: 40px;
    /* border-bottom: 1px solid #c5c5c5; */
  }

  .textContainer {
    display: flex;
    width: 90%;
    margin: auto;
  }

  p {
    padding: 20px;
    /* width: 33%; */
    text-align: left;
  }
  @media (max-width: 780px) {
    .textContainer {
      display: flow-root;
      margin-top: 40px;
      width: 100%;
      text-align: justify;
    }
  }
`;

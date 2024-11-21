import React from 'react';
import styled from 'styled-components';
import Title from "../../components/Title";
function Audio({ className }) {
  return (

      <section className={className}>
       <div>
        <div>
          <Title center>
            <h2>KMOX Saint Louis - The Charlie Brennan Show
              <span className="subTitle">Dr. Saleem Abdulrauf discussing racial and religious targeting in Hollywood movies.</span>
            </h2>
          </Title>
        <iframe className="iframe" title="audio1" src="https://omny.fm/shows/charlie-brennan-show/whine-line-jason-motte-kyle-mcclellan-dr-salem-abd/embed?style=cover" frameborder="0" width="100%" height="180"></iframe>
        </div>
    
        <div>
         <Title center>
          <h2>The Randy Tobler Show
            <span className="subTitle"> Dr. Saleem Abdulrauf discussing Three Invaders: The Secrets and Lies Behind the Deliberate Revision of History.</span>
          </h2>
        </Title>
        <iframe className="iframe" title="audio2" src="https://omny.fm/shows/the-randy-tobler-show-podcast/february-6-2021-the-randy-tobler-show/embed?style=cover" frameborder="0" width="100%" height="180"></iframe>
        </div>
       
        <div>
              <div>
             <Title center>
          <h2>Diversified Game
            <span className="subTitle">Neurosurgeon Dr. Saleem Abdulrauf Gives The Game On Solving The Middle East Issues.</span>
          </h2>
        </Title>
          <iframe className="iframe" title="audio3" src="https://open.spotify.com/embed-podcast/episode/5MeQXTvHLKwfiswRAXg8oA" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>        </div>
          </div>
          </div>
      </section>

      

  );
};

export default styled(Audio)`
max-width: 1400px;
margin: auto;
padding: 20px;

  .subTitle{
    display: block;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

.iframe{
  padding-top: 16px;
}


  @media (max-width: 1024px) {
    padding: 0 20px;

      h2{
        margin-top: 16px;
      line-height: 1.5;
      letter-spacing: .8px;

    }
        .subTitle{
      padding-top: 15px;
      font-size: 16px;
    letter-spacing: .5px;
      
      
    }
  }
`;

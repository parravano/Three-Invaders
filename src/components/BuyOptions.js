import React from "react";
import Title from "./Title";
import buyLinks from "../constants/buyLinks";
import styled from "styled-components";

function BuyOptions({ className }) {
  return (
    <section className={className}>
      <div className="wrapper">
        <Title center>
          <h2>Three Invaders 
            <span className="subTitle">The Deliberate Revision of History & the Secrets and Lies Behind Today's World</span>
          </h2>
        </Title>
        
        <div className="container">
          {buyLinks.map((item, index) => {
            return (
              <div className="linkWrapper" key={index}>
                <a className="link" href={item.url}>
                  <div className="linkText">{item.text}</div>
                </a>
              </div>
            );
          })}
        </div>
        
      </div> 
      {/* <div className="available">
        <div className="variants ">
          <a href="https://www.amazon.com/Three-Invaders-Deliberate-Revision-History-ebook/dp/B08MV8NG31/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=" target="_blank" rel="noopener norefferer">
            <span className="variantItem ">Kindle</span> 
          </a> 
        • <a href="https://www.amazon.com/Three-Invaders-Deliberate-Revision-History/dp/0578706245/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=" target="_blank" rel="noopener norefferer">
            <span className="variantItem ">Hardback</span>
            </a>  
        • <a href="https://www.amazon.com/Three-Invaders-Deliberate-Revision-History/dp/057870191X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=" target="_blank" rel="noopener norefferer">
          <span className="variantItem ">Paperback</span>
        </a>  
        </div>
      </div> */}


    </section>
  );
}

export default styled(BuyOptions)`
  background: #eee;
  height: 100%;
  padding: 80px 0;
  .wrapper {
    max-width: 1100px;
    margin: auto;
    padding-bottom: 25px;
    border-bottom: 1px solid #c5c5c5;
  }

  .subTitle{
    display: block;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
   .available{
    text-align:center;
    margin-top: 40px;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1.5px;
    
   }
   .variants a{
       text-decoration: none;
      font-weight:500;  
      color: var(--secondaryColor);
   }
    .variants a:hover{
       text-decoration: underline;
       font-weight:800;  
   }
   .variantItem{
      margin: auto 18px;
   }
  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 980px;
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
  @media (max-width: 450px) {
    padding: 40px 20px;
       .variantItem{
      margin: auto 10px;
   }
  }
`;

import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import socialIcons from '../constants/social-icons';
import Title from "../components/Title";
function Footer({ className }) {
  return (
    <footer className={className}>
     
     
      <div className="available">
        <Title lite>Three Invaders Index</Title>
        <div className="variants ">
          <a href="../../subject.pdf" target="_blank" rel="noopener norefferer">
            <span className="variantItem ">Subject Index</span> 
          </a> 
        • <a href="../../places.pdf" target="_blank" rel="noopener norefferer">
            <span className="variantItem ">Places Index</span>
            </a>  
        • <a href="../../names.pdf" target="_blank" rel="noopener norefferer">
          <span className="variantItem ">Names Index</span>
        </a>  
        </div>
      </div>

      <div className='wrapper'>
        
        {/* <div className="indexLinks">
          <Title lite>Three Invaders Index</Title>
          <div>
            <a href="../../subject.pdf">Subject</a>
            <a href="../../places.pdf">Places</a>
            <a href="../../names.pdf">Names</a>
          </div>
    
        </div> */}

        <div className='logo'>
          <Logo />
        </div>
        


        <div className='socialIcons'>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.icon}
              </a>
            );
          })}
        </div>

        <div className='credit'>
          © {new Date().getFullYear()}, Web Design by
          {` `}
          <a className='credit' href='https://www.moximetrics.com'>
            Moximetrics
          </a>
        </div>
      </div>
    </footer>
  );
}

export default styled(Footer)`

   .available{
    text-align:center;
    padding: 40px;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1.5px;
    background: #eee;
   }
   .variants{
     margin-top: 15px;
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
  .wrapper {
    background: var(--secondaryColor);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    margin: 45px auto 35px;
    width: 300px;
  }
  .socialIcons {
    width: 180px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
  }
  .socialIcons a {
    color: var(--textColorLight);
    font-size: 18px;
  }
  .credit {
    color: gray;
    text-decoration: none;
    margin-bottom: 10px;
  }

  @media (max-width: 450px) {
    .logo {
      width: 250px;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import links from '../constants/links';
import { Link } from 'gatsby';

const MobileMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      {links.map((item, index) => {
        return (
          <span key={index}>
            <Link className='link' to={item.path}>
              {item.text}
            </Link>
          </span>
        );
      })}
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  background: var(--secondaryColor);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  height: 100vh;
  text-align: left;
  align-items: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1001;
  transition: transform 0.4s ease;
  border: none;

  span {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 576px) {
    display: flex;
    position: fixed;
    width: 100%;
  }
`;

export default MobileMenu;

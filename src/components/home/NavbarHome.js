import React from "react";
import { Link } from "gatsby";
import links from "../../constants/links";
import styled from "styled-components";

function NavbarHome({ className }) {
  return (
    <section className={className}>
      <div className="wrapper">
        <div className="container">
          {links.map((item, index) => {
            return (
              <span key={index}>
                <Link className="link" to={item.path}>
                  {item.text}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default styled(NavbarHome)`
  .wrapper {
    display: flex;
    justify-content: flex-end;
    height: 70px;
    background: var(--secondaryColor);
    padding: 0 50px;
  }
  .container {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }
  .link {
    font-size: 18px;
    font-weight: 700;
    color: var(--textColorLight);
    letter-spacing: 1.7px;
    text-transform: uppercase;
    text-decoration: none;
    padding-left: 5px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

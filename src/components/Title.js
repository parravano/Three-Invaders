import React from "react";
import styled from "styled-components";
const Title = ({ children, className }) => {
  return <span className={className}>{children}</span>;
};

export default styled(Title)`
  text-align: ${(props) => (props.center ? "center" : "left")};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 24px;
    color: var(--TextColor);
    font-weight: 400;
    line-height: 3;
    letter-spacing: 3px;
    text-transform: uppercase;

    border-bottom: ${(props) =>
      props.lite ? "1px solid #636365" : "1px solid #C5C5C5"};
    color: ${(props) =>
      props.lite ? "var(--textColorLight)" : "var(--textColor)"};
  }
  @media (max-width: 450px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
`;

import React from "react";
import styled from "styled-components";
function Text({ className, children }) {
  return <p className={className}>{children}</p>;
}

export default styled(Text)`
  color: ${(props) =>
    props.lite ? "var(--textColorLight)" : "var(--textColor);"};
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 1.5;
  text-align: justify;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

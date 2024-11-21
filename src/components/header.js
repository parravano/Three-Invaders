import PropTypes from "prop-types";
import React from "react";

const Header = () => (
  <header>
    <div></div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

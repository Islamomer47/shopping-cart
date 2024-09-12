import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Products</Link>
        <br />
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;

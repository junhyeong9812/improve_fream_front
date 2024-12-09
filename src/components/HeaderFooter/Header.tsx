import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header style={{ background: "#f3f3f3", padding: "10px 20px" }}>
      <nav>
        <Link to="/">Home</Link> | <Link to="/style">Style</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;

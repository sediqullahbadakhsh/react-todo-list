import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="navbar">
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/notmatch">NotMatch</Link>
    </nav>
  </header>
);

export default Navbar;

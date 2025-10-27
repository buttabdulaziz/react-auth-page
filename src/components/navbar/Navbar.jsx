import React from "react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">MyApp</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

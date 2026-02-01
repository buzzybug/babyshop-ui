import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => navigate("/")}>
        <span className="logo">BabyShop</span>
      </div>

      <div className="nav-right">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
        <button
          className="signup-btn"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Lottie from "lottie-react";
import babyMomAnimation from "./assets/Caring-Mother.json";
import "./Login.css"; // reuse same CSS
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";

const Signup = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/api/auth/signup", form);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="page">
        <div className="login-container">

          <div className="animation-section">
            <Lottie animationData={babyMomAnimation} loop />
            <h2>Join Our Caring Community</h2>
          </div>

          <div className="form-section">
            <h1>Create Account</h1>

            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />

            <button>Sign Up</button>

            <p className="signup">
              Already have an account? <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;

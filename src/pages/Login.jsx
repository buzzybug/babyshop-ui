import React from "react";
import Lottie from "lottie-react";
import babyMomAnimation from "./assets/mom-baby.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });

      login(res.data.token, res.data.role);
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="page">
        <div className="login-container">
          <div className="animation-section">
            <Lottie animationData={babyMomAnimation} loop />
            <h2>Safe Care, Loving Hands</h2>
          </div>

          <div className="form-section">
            <h1>Welcome Back</h1>

            <input placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <input type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Login</button>

            <p className="signup">
              New here?
              <span onClick={() => navigate("/signup")}>Create account</span>
            </p>
          </div>
        </div>
      </div>
    </form>

  );
};

export default Login;

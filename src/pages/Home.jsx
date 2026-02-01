import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useAuth } from "../context/AuthContext";
import WelcomeBanner from "./WelcomeBanner";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) return <h2>Loading...</h2>;
  return (

    <div className="page">
      <WelcomeBanner user={user} />

      <div className="home-container">

        {/* HERO */}
        <section className="hero">
          <h1>
            Gentle Care for <span>Your Little One</span>
          </h1>
          <p>
            Premium baby products crafted with love, safety, and trust.
          </p>
          <div className="floating-images">
            <img
              src={require("./assets/baby1.png")}
              alt="Baby care"
              className="float-img img-one"
            />
            <img
              src={require("./assets/babymom.png")}
              alt="Mother and baby"
              className="float-img img-two"
            />
            <img
              src={require("./assets/babyproduct2.png")}
              alt="Baby product"
              className="float-img img-three"
            />
          </div>

          <div className="hero-buttons">
            <button onClick={() => navigate("/products")}>
              Shop Now
            </button>
            <button
              className="secondary"
              onClick={() => navigate("/signup")}
            >
              Join Us
            </button>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features">
          <div className="feature-card">
            <h3>🍼 Safe Products</h3>
            <p>Carefully tested and baby-friendly essentials.</p>
          </div>

          <div className="feature-card">
            <h3>🤱 Trusted Care</h3>
            <p>Designed with parents and pediatric advice.</p>
          </div>

          <div className="feature-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Quick, reliable delivery to your doorstep.</p>
          </div>
        </section>
      </div>
    </div>

  );
};

export default Home;

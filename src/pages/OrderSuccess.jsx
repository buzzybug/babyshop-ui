import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="success-container">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Your baby products will be delivered soon 🍼</p>

        <button onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Payment.css";

const Payment = () => {
  const { cartItems} = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalAmount = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replaceAll('₹','')) || 0;
    const qty = Number(item.quantity) || 1;
    return sum + price * qty;
  }, 0);

  const handlePlaceOrder = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login again");
        navigate("/login");
        return;
      }

      const orderData = {
        totalAmount: totalAmount,
        items: cartItems.map((item) => ({
          productId: item.id,
          productName: item.name,
          price: Number(item.price),
          quantity: Number(item.quantity) || 1,
        })),
      };

      await axios.post(
        "http://localhost:8080/api/orders/checkout",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/order-success");
    } catch (err) {
      console.error(err);
      setError("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="payment-container">
        <h2>Checkout 💳</h2>

        {cartItems.map((item, index) => (
          <div key={index} className="payment-item">
            <span>{item.name}</span>
            <span>
              ₹{item.price} x {item.quantity || 1}
            </span>
          </div>
        ))}

        <h3>Total: ₹{totalAmount.toFixed(2)}</h3>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          className="pay-btn"
          onClick={handlePlaceOrder}
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Pay & Place Order"}
        </button>
      </div>
    </div>
  );
};

export default Payment;

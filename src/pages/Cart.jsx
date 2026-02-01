import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="page">
      <div className="cart-container">
        <h2 className="cart-title">Your Cart 🛒</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <p>Total Items: {cartItems.length}</p>
              <h2>Total: ₹{totalAmount}</h2>

              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

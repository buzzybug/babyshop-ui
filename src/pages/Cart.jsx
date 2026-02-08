import React from "react";
import { useCart } from "../context/CartContext";
import { checkout } from "../api/orderApi";   // ✅ ADD THIS
import "./Cart.css";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItems} = useCart();
  const navigate = useNavigate();
  debugger;
  const totalAmount = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replaceAll('₹','')) || 0;
    const qty = Number(item.quantity) || 1;
    return sum + price * qty;
  }, 0);



  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderData = {
      totalAmount: totalAmount,
      items: cartItems.map(item => ({
        productId: item.id,
        productName: item.name,
        price: item.price,
        quantity: item.quantity || 1
      }))
    };

    try {
      const result = await checkout(orderData);
      console.log("Order placed:", result);
      alert("Order placed successfully! 🎉");

      
    } catch (err) {
      console.error("Checkout failed:", err);
      alert("Checkout failed. Please login again.");
    }
  };

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
                    <p>{item.price}</p>
                    <p>Qty: {item.quantity || 1}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <p>Total Items: {cartItems.length}</p>
              <h2>Total: {totalAmount.toFixed(2)}</h2>

              <button className="checkout-btn" onClick={() => navigate("/payment")}>
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

import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // ✅ ADD THIS

  const handleAddToCart = () => {
    addToCart(product);     // 1️⃣ Add product to cart
    navigate("/cart");      // 2️⃣ Go to cart page
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>

        <button onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

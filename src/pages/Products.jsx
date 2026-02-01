import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const Products = () => {
  return (
    <div className="page">

      <div className="products-container">
        <h1>Our Products</h1>
        <p className="subtitle">
          Carefully selected essentials for your baby
        </p>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

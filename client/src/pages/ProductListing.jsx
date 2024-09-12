import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { getProducts } from "../services/productAPI";
import ProductCard from "../components/ProductCard";

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = getProducts();

  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductListing;

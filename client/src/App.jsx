import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;

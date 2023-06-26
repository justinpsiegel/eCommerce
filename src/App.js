import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ShopContextProvider from "./context/ShopContext";
import SingleProduct from "./product/SingleProduct";

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:productId" element={<SingleProduct />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_page from "./components/home_page";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Sellersign from "./components/Sellersign";
import AdminAddProduct from "./components/Addproduct";
import ShopPage from "./components/Shoppage";
import CartPage from "./components/Cart";
import SellerLogin from "./components/Sellerlogin";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home_page/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/sellersign" element={<Sellersign />} />
          <Route path="/sellerlogin" element={<SellerLogin />} />
          <Route path="/addproduct" element={<AdminAddProduct />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
    </Router>
  );
};

export default App;

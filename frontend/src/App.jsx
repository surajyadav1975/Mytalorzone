import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_page from "./components/home_page";
import { Myprovider } from "./context/createContext";
import Login from "./components/login";
import Signup from "./components/Signup";
import SellerLogin from "./components/Sellerlogin";
import AdminAddProduct from "./components/Addproduct";
import ShopPage from "./components/Shoppage";
import CartPage from "./components/Cart";

const App = () => {
  return (
    <Router>
      <Myprovider>
        <Routes>
          <Route path="/" element={<Home_page/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/seller" element={<SellerLogin />} />
          <Route path="/addproduct" element={<AdminAddProduct />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Myprovider>
    </Router>
  );
};

export default App;

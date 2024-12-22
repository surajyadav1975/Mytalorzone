import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Toggle the profile menu
  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-600">
        <Link to="/">MyTalorZone</Link>
        </h1>

        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
          <Link to="/shop" className="text-gray-700 hover:text-purple-600">Shop</Link>
         <Link to="/cart" className="text-gray-700 hover:text-purple-600">Cart</Link>

          <button
            onClick={toggleProfileMenu}
            className="relative text-gray-700 hover:text-purple-600 focus:outline-none"
          >
            Profile
          </button>
        </nav>
      </div>

      {isProfileOpen && (
        <div className="absolute top-full right-4 mt-2 w-48 bg-white shadow-md rounded-lg py-2 z-50">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/login">Login</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/signup">Signup</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to="/sellersign">Seller Signup</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to="/sellerlogin">Seller Login</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Signout</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

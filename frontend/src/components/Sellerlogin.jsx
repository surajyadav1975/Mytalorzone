import React, { useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const apiurl = import.meta.env.VITE_API_URL;
const SellerLogin = () => {

    const navigate=useNavigate();
  // State for form fields
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  // State for handling errors and success
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous error messages
    setError('');
    setSuccess('');

    const loginData = {
      email,
      phoneNumber,
      password,
    };

    try {
      const response = await fetch(`${apiurl}admin/seller/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        // On success, store the JWT token and show success message
        localStorage.setItem('sellerToken', data.token); 
        setSuccess('Login successful!');
        navigate('/addproduct');
      } else {
        // On error, display the error message
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong while logging in.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Seller Login Form */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Seller Login</h2>

          {/* Error and Success Messages */}
          {error && <div className="text-red-600 mb-4">{error}</div>}
          {success && <div className="text-green-600 mb-4">{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SellerLogin;

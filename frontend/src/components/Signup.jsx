import React, { useState } from 'react';
import Header from './Header';
const apiurl = import.meta.env.VITE_API_URL;
const Signup = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  // State to hold response messages
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiurl}auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('userId', result._id);
        setMessage('Signup successful! Please log in.');
        setFormData({ name: '', email: '', phone: '', password: '' }); 
      } else {
        setMessage(`Signup failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header/>

      {/* Signup Form */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Signup</h2>
          {message && (
            <p
              className={`text-center text-sm ${
                message.includes('successful') ? 'text-green-600' : 'text-red-600'
              } mb-4`}
            >
              {message}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              Signup
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;

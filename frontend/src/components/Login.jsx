import React from 'react';
import Header from './Header';
import { useState } from 'react';

const apiurl = import.meta.env.VITE_API_URL;
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const [message, setMessage] = useState('');
    
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
          const response = await fetch(`${apiurl}auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            credentials: 'include',
          });
    
          const result = await response.json();
    
          if (response.ok) {
            localStorage.setItem('userId', result.userId);
            setMessage('login successful!.');
            setFormData({ email: '',  password: '' }); 
          } else {
            setMessage(`login failed: ${result.message}`);
          }
        } catch (error) {
          console.error('Error during login:', error);
          setMessage('An error occurred. Please try again later.');
        }
      };
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Login</h2>
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
              <label htmlFor="email" className="block text-gray-700">Email</label>
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
              <label htmlFor="password" className="block text-gray-700">Password</label>
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
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;

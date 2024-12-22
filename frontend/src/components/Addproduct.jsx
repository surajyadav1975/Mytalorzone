import React, { useState } from 'react';
import Header from './Header';

const apiurl = import.meta.env.VITE_API_URL;
const AdminAddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    img: '',
    category: '',
    rating: 0,
    inStockValue: 0,
    soldStockValue: 0,
  });
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiurl}create-product`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        setMessage('Product added successfully!');
        setProduct({
          name: '',
          price: '',
          img: '',
          category: '',
          rating: 0,
          inStockValue: '',
          soldStockValue: '',
        });
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage('An error occurred while adding the product.');
    }
  };

  return (
        <>
        <Header></Header>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Add Product</h2>
        {message && <p className="text-center text-red-600">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Product Price"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="img"
            value={product.img}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="number"
            name="inStockValue"
            value={product.inStockValue}
            onChange={handleChange}
            placeholder="In Stock Value"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="number"
            name="soldStockValue"
            value={product.soldStockValue}
            onChange={handleChange}
            placeholder="Sold Stock Value"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </div></>
  );
};

export default AdminAddProduct;

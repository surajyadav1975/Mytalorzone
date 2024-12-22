import React, { useState, useEffect } from 'react';
import Header from './Header';
const apiurl = import.meta.env.VITE_API_URL;

const ShopPage = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [cart, setCart] = useState([]); // State to store cart items

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiurl}get-product`);
        const data = await response.json();
        setProducts(data.products); // Assuming data has a 'products' array
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Add product to cart
  const userId = localStorage.getItem('userId');
  const addToCart = async (product) => {
    try {
      const quantity = 1; // Default quantity for now, you can allow users to select it
    // console.log({ productId: product._id, quantity })
      const response = await fetch(`${apiurl}cart/addtocart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies for session
        body: JSON.stringify({ userId,productId: product._id, quantity }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message || 'Product added to cart!');
      } else {
        alert(data.message || 'Failed to add product to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  return (
    <>
    <Header></Header>
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">Shop</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.productId} className="bg-white shadow-lg rounded-lg p-4">
            <img src={product.img} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ShopPage;

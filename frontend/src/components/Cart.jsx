import React, { useEffect, useState } from 'react';
import Header from './Header';
const apiurl = import.meta.env.VITE_API_URL;
const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const userId = localStorage.getItem('userId');
  useEffect(() => {
    // Fetch cart data from the server (assuming you have a cart endpoint)
    const fetchCartProducts = async () => {
      try {
        // Assuming you have an API that returns cart details based on the userId or session
        const response = await fetch(`${apiurl}cart/get-cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include cookies for session
          body: JSON.stringify({ userId }),
        });
    
        const products = await response.json();
        if(response.ok){
        setCartProducts(products.products); // Update state with fetched products
        }
      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    };

    fetchCartProducts();
  }, []);

  return (
    <>
    <Header></Header>
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cartProducts.length === 0 ? (
          <p className="col-span-full text-center text-xl">Your cart is empty.</p>
        ) : (
          cartProducts.map((product) => (
            <div key={product._id} className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
                <p className="text-gray-600">₹{product.price}</p>
                <p className="text-sm text-gray-500">Category: {product.category}</p>
                <p className="text-sm text-yellow-500">Rating: {product.rating} ⭐</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default CartPage;

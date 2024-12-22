import React, { useState, useEffect } from 'react';

const apiurl = import.meta.env.VITE_API_URL;
const Cart = () => {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Assuming userId is stored in localStorage or can be obtained
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    // Fetch the cart data from the server using fetch API
    const fetchCartData = async () => {
      try {
        const response = await fetch(`${apiurl}cart/get-cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include cookies for session
          body: JSON.stringify({ userId}),
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch cart data');
        }

        const data = await response.json();
        setCartData(data); // Set cart data from response
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (userId) {
      fetchCartData();
    } else {
      setError('User is not logged in');
      setLoading(false);
    }
  }, [userId]);

  return (
    <>HELONDBJS</>
  );
};

export default Cart;

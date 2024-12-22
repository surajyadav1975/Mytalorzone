import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="bg-cover bg-center h-[400px] flex items-center justify-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/269887/pexels-photo-269887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded">
        <h2 className="text-4xl font-bold">Welcome to Mytalorzone By Sahiba</h2>
        <p className="mt-2">Creative, Unique, and Trendy Styles for Every Occasion</p>
        <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          <Link to="/shop">shop Now</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const FeaturedProducts = () => {
  const products = [
    { name: "Dress 1", price: "₹1200", img: "https://handmadelovebytanya.com/_next/image?url=https%3A%2F%2Fcdn.handmadelovebytanya.com%2Fhmlmain%2Fproducts%2F6213db51dbbc74af550967b3%2FP-7417-mVg-p.jpeg&w=384&q=100" },
    { name: "Dress 2", price: "₹1500", img: "https://handmadelovebytanya.com/_next/image?url=https%3A%2F%2Fcdn.handmadelovebytanya.com%2Fhmlmain%2Fproducts%2F669f54a451b420f70e615004%2FP-16132-nic02.jpeg&w=384&q=100" },
    { name: "Dress 3", price: "₹1800", img: "https://handmadelovebytanya.com/_next/image?url=https%3A%2F%2Fcdn.handmadelovebytanya.com%2Fhmlmain%2Fproducts%2F63cc1b4b2e0f73c677e93ce2%2FP-10103-n1JKD.jpeg&w=384&q=100" },
  ];

  return (
    <section id="featured-products" className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded shadow p-4 text-center">
            <img src={product.img} alt={product.name} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-purple-600 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

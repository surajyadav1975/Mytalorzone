import React from 'react';

const Categories = () => {
  const categories = ["Traditional", "Western", "Trendy"];

  return (
    <section id="categories" className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Explore Categories</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-200 rounded shadow p-6 text-center">
            <h3 className="text-xl font-semibold">{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Categories from './Category';
import FeaturedProducts from './Featuredproduct';
import Footer from './Footer';

const Home_page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Home_page;


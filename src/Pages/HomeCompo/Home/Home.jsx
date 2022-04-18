import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div className="w-full">
      <Banner />
      <Services />
      <Reviews />
    </div>
  );
};

export default Home;

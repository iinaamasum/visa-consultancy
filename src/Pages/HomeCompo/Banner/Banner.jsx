import React from 'react';
import banner1 from '../../../images/banner/banner2.jpg';

const Banner = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${banner1})` }}
        className="h-[50vh] bg-no-repeat bg-cover"
      >
        hi there
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';
import banner1 from '../../../images/banner/banner2.jpg';

const Banner = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${banner1})` }}
        className="h-[50vh] bg-no-repeat bg-cover flex items-center justify-center"
      >
        <div className="h-full w-full flex items-center justify-center backdrop-blur-sm">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl tracking-normal text-black font-bold mb-3">
              Welcome to Visa Consultancy and Tourism Service
            </h1>
            <h3 className="text-2xl text-slate-700 ">
              I am here to provide you proper guidance to achieve your desired
              visa. Please visit our services section.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

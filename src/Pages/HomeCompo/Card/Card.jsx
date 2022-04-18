import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Card = ({ service }) => {
  const { name, price, img, des } = service;
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-all duration-150 ease-in-out">
        <img
          className="h-72 w-full object-cover object-center"
          src={img}
          alt="blog"
        />
        <div className="px-6 py-2">
          <div className="border-l-2 border-red-600 my-4">
            <h2 className="pl-3 py-0 tracking-wide text-3xl title-font font-medium text-red-600 mb-1">
              {name}
            </h2>
          </div>

          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Cost: {price}
          </h1>
          <p className="leading-relaxed mb-3">{des.slice(0, 150)}...</p>
          <div className="flex items-center flex-wrap ">
            <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
          <button
            onClick={() => navigate(`/checkout`)}
            className="text-black font-sans tracking-wide font-bold text-xl mr-3 hover:bg-slate-500 px-5 py-2 rounded-full hover:text-white shadow outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 w-full mt-6 hover:shadow-xl inline-flex justify-center items-center sticky bottom-0"
            type="button"
          >
            Check Out <MdArrowForwardIos className="ml-4 font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

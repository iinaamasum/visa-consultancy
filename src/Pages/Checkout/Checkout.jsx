import React from 'react';
import display from '../../images/tour.avif.avif';

const Checkout = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                Pro Package
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Visa Consultancy and Tour Guide
              </h1>
              <div className="flex mb-4">
                <p className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </p>
                <p className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Reviews
                </p>
                <p className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </p>
              </div>
              <p className="leading-relaxed mb-4">
                This service is for those who want to explore the things of the
                city and just feel the inner peace. This Service is for 10 days
                where I will provide you 8 hours daily and we will explore at
                least 20 beautiful place of your travelling place. So, why are
                you waiting for? Grab the offer.
              </p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Days</span>
                <span className="ml-auto text-gray-900">10 days</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Daily</span>
                <span className="ml-auto text-gray-900">8 hours</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Place Visit</span>
                <span className="ml-auto text-gray-900">20</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $49.99
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy Now
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full h-96 mt-5 md:mt-16 object-center rounded"
              src={display}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;

import React from 'react';

const Review = ({ opinion }) => {
  const { name, work, des, img } = opinion;
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img
          className="h-60 rounded w-full object-center mb-6"
          src={img}
          alt="content"
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {work}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {name}
        </h2>
        <p className="leading-relaxed text-base">{des}</p>
      </div>
    </div>
  );
};

export default Review;

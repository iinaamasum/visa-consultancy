import React from 'react';
import useServiceData from '../../../hooks/useServiceData';
import Card from '../Card/Card';

const Services = () => {
  const services = useServiceData();
  return (
    <div>
      <h1 className="text-center text-4xl text-red-500  mt-10 mb-5 font-bold hover:text-red-600">
        <span className="border-b-4 border-red-600 ">Our Services</span>
      </h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            {services.map((service) => (
              <Card key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

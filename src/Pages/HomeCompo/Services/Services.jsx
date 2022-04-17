import React from 'react';
import useServiceData from '../../../hooks/useServiceData';
import Card from '../Card/Card';

const Services = () => {
  const services = useServiceData();
  return (
    <div>
      <h1 className="text-center text-4xl text-red-500  mt-10 mb-5 font-bold hover:text-red-600">
        <span className="border-b-4 border-red-600 ">Offered Services</span>
      </h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-10 pt-4 mx-auto">
          <div
            id="services"
            className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          >
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

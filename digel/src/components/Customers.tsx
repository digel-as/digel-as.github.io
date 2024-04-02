import React from 'react';
import config from '../config/index.json';
import Divider from './Divider';

const Customers = () => {
  const { customers } = config;

  return (
    <section className="bg-backgroundDark py-8" id="customers">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-tertiary">
          {customers.title}
        </h1>
        <Divider />
        <div className={`flex flex-row justify-center`}>
        {customers.items.map((item, index) => (
            <div key={index}>
                <img 
                    src={item.img}
                    alt={item.name}
                    className="filter brightness-0 invert max-h-32 w-auto"
                />
            </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;

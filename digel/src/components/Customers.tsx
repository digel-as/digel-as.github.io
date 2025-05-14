import React from "react";
import config from "../config/index.json";

const Customers = () => {
  const { customers } = config;

  return (
    <section id="customers">
      <div className="container max-w-5xl mx-auto m-24">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
          {customers.title}
        </h1>
        <div className={`flex flex-row flex-wrap justify-center`}>
          {customers.items.map((item, index) => (
            <a
              key={index}
              className="h-32 w-48 flex items-center justify-center mx-4 my-4"
              href={item.href}
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-24 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;

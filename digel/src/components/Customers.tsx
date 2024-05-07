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
              className="h-32 flex items-center justify-center"
              href={item.href}
            >
              <img
                src={item.img}
                alt={item.name}
                className="filter brightness-0 invert max-h-full w-auto object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;

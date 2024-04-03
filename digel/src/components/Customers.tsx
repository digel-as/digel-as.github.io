import React from "react";
import config from "../config/index.json";
import Divider from "./Divider";

const Customers = () => {
  const { customers } = config;

  return (
    <section className="bg-backgroundDark py-8" id="customers">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-tertiary">
          {customers.title}
        </h1>
        <Divider />
        <div className={`flex flex-row flex-wrap justify-center`}>
          {customers.items.map((item, index) => (
            <div key={index} className="h-32 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.name}
                className="filter brightness-0 invert max-h-full w-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;

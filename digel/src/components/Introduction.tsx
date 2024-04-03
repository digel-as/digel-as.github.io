import React from "react";
import config from "../config/index.json";
import Divider from "./Divider";

const Introduction = () => {
  const { introduction } = config;

  return (
    <section id="introduction">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-tertiary">
          {introduction.title}
        </h1>
        <Divider />
        {introduction.items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-wrap ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-full sm:w-1/2 p-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3 text-tertiary">
                  {item.title}
                </h3>
                <p className="text-white mb-8">{item.description}</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-6 flex justify-center items-center">
              <img className="h-full" src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Introduction;

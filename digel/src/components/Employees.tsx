import React from "react";
import config from "../config/index.json";
import Chip from "./Chip";

const Employees = () => {
  const { employees } = config;

  return (
    <section id="employees">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-backgroundMedium">
          {employees.title}
        </h1>
        <div className="flex justify-center">
          <div
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2`}
          >
            {employees.items.map((item, index) => (
              <div
                key={index}
                className="bg-white max-w-[500px] p-8 rounded-lg flex gap-3"
              >
                <img
                  src={item.img ?? ""}
                  alt={item.name}
                  className="object-contain rounded-lg max-h-32"
                />
                <div className="flex flex-col justify-around">
                  <div>
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-sm">{item.description}</p>
                  </div>
                  <Chip value={item.role} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employees;

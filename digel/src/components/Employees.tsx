import React from "react";
import config from "../config/index.json";
import Divider from "./Divider";
import Chip from "./Chip";

const Employees = () => {
  const { employees } = config;

  return (
    <section id="employees">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-tertiary">
          {employees.title}
        </h1>
        <Divider />
        <div className="flex justify-center">
          <div
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8`}
          >
            {employees.items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg flex flex-col items-center gap-2"
              >
                <div className="max-h-32 overflow-hidden">
                  <img
                    src={item.img ?? ""}
                    alt={item.name}
                    className="w-auto h-full rounded-full"
                  />
                </div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <Chip value={item.role} />
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employees;

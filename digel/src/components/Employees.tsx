import React from 'react';
import config from '../config/index.json';
import Divider from './Divider';

const Employees = () => {
  const { employees } = config;

  return (
    <section className="bg-background py-8" id="employees">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-black">
          {employees.title}
        </h1>
        <Divider />
        <div className={`flex flex-row justify-center gap-16`}>
        {employees.items.map((item, index) => (
            <div key={index} className='bg-white p-8 rounded-lg flex flex-col items-center gap-2'>
            <div className="max-h-32 overflow-hidden">
              <img 
                src={item.img}
                alt={item.name}
                className="w-auto h-full rounded-full"
              />
            </div>
            <h2 className='text-lg font-bold'>
              {item.name}
            </h2>
            <div className="relative inline-block select-none rounded-lg bg-blue-500 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
              <span className="text-center">{item.role}</span>
            </div>
            <p className='text-sm'>
              {item.description}
            </p>
          </div>
          
        ))}
        </div>
      </div>
    </section>
  );
};

export default Employees;

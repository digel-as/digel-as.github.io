import React from 'react';

import config from '../config/index.json';

const Title = () => {
  const { title } = config;
  return (
    <main className="flex items-center justify-center h-screen bg-backgroundDark">
        <div className="max-w-screen-xl text-center flex flex-col md:flex-row items-center mx-16">
            <img
                src={title.img}
                alt="Title"
                className="mx-auto mb-4 md:mb-0 md:mr-4"
            />
            <h1 className="sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl text-primary" >
                {title.slogan}
            </h1>
        </div>
    </main>
  );
};

export default Title;

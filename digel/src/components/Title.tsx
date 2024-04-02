import React from 'react';

import config from '../config/index.json';

const Title = () => {
  const { title } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="flex">
            <img
                src={title.img}
                alt="Title"
            />
            <h1>
                {title.slogan}
            </h1>
        </div>
    </main>
  );
};

export default Title;

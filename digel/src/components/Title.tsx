import React from "react";

import config from "../config/index.json";
import LazyShow from "./LazyShow";

const Title = () => {
  const { title } = config;
  return (
    <main className="flex items-center justify-center h-screen bg-backgroundDark">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/industrial-plant.jpg')",
          opacity: 1,
          mixBlendMode: "soft-light",
          height: "100vh",
        }}
      />
      <LazyShow>
        <div className="max-w-screen-xl text-center flex flex-col md:flex-row items-center mx-16 md:gap-8 lg:gap-12">
          <img
            src={title.img}
            alt="Title"
            className="mx-auto mb-4 md:mb-0 md:mr-4"
          />
          <h1 className="sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl text-primary md:text-left">
            {title.slogan}
          </h1>
        </div>
      </LazyShow>
    </main>
  );
};

export default Title;

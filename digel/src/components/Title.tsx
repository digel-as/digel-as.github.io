import React from "react";

import config from "../config/index.json";
import LazyShow from "./LazyShow";

const Title = () => {
  const { title } = config;
  return (
    <main className="flex items-center justify-center h-screen bg-backgroundDark bg-gradient-dark">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/industrial-plant.jpg')",
          opacity: 0.05,
          height: "100vh",
        }}
      />
      <LazyShow>
        <div className="max-w-screen-xl text-center flex flex-col items-center mx-16 gap-6">
          <img
            src={title.img}
            alt="Title"
            className="w-128 md:w-160 lg:w-192"
          />
          <h1 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-primary">
            {title.slogan}
          </h1>
        </div>
      </LazyShow>
    </main>
  );
};

export default Title;

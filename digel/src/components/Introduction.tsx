import React from "react";
import config from "../config/index.json";

const Introduction = () => {
  const { introduction } = config;

  // Function to parse content and mark certain words as bold
  const parseContent = (content: string[], boldWords: string[]) => {
    return content.map((paragraph, index) => {
      const words = paragraph.split(" ");
      return (
        <p className="text-primary mb-8" key={index}>
          {words.map((word, i) => {
            const isBold = boldWords.includes(word.replace(/[.,!?]/g, ""));
            return isBold ? (
              <b key={i}>{word} </b>
            ) : (
              <span key={i}>{word} </span>
            );
          })}
        </p>
      );
    });
  };
  return (
    <section id="introduction">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
          {introduction.title}
        </h1>
        <div className="flex flex-col md:flex-row p-4">
          {introduction.items.map((item, index) => (
            <div key={index} className={`p-3`}>
              <h3 className="text-3xl font-bold leading-none mb-3 text-primary">
                {item.title}
              </h3>
              {parseContent(item?.content ?? [], item?.bold ?? [])}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;

import React from "react";

import About from "../components/About";
import LazyShow from "../components/LazyShow";
import Title from "../components/Title";
import Introduction from "../components/Introduction";
import Customers from "../components/Customers";
import Employees from "../components/Employees";

const App = () => {
  return (
    <div className={`bg-background grid overflow-hidden`}>
      <Title />
      <LazyShow>
        <>
          <Introduction />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Customers />
        </>
      </LazyShow>
      <LazyShow>
        <Employees />
      </LazyShow>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
    </div>
  );
};

export default App;

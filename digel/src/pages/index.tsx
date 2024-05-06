import React from "react";

import About from "../components/About";
import Title from "../components/Title";
import Introduction from "../components/Introduction";
import Customers from "../components/Customers";
import Employees from "../components/Employees";

const App = () => {
  return (
    <div className={`bg-background grid overflow-hidden`}>
      <Title />
      <div className="py-8 bg-backgroundMedium">
        <Introduction />
      </div>
      <div className="py-8 bg-white">
        <Employees />
      </div>
      <div className="py-8 bg-backgroundMedium">
        <Customers />
      </div>
      <div className="py-8 bg-backgroundDark">
        <About />
      </div>
    </div>
  );
};

export default App;

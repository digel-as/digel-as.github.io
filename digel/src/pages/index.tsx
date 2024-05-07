import React from "react";

import About from "../components/About";
import Title from "../components/Title";
import Introduction from "../components/Introduction";
import Customers from "../components/Customers";
import Employees from "../components/Employees";
import Blog from "../components/Blog";

const App = () => {
  return (
    <div className={`bg-backgroundDark grid overflow-hidden`}>
      <Title />
      <div className="py-8 bg-backgroundMedium">
        <Introduction />
      </div>
      <div className="py-8 bg-backgroundDark">
        <Employees />
      </div>
      <div className="py-8 bg-backgroundMedium">
        <Blog />
      </div>
      <div className="py-8 bg-backgroundDark">
        <Customers />
      </div>
      <div className="py-8 bg-backgroundMedium">
        <About />
      </div>
    </div>
  );
};

export default App;

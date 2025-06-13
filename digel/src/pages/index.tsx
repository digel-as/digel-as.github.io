import React from "react";

import About from "../components/About";
import Title from "../components/Title";
import Introduction from "../components/Introduction";
import Customers from "../components/Customers";
import Employees from "../components/Employees";
import Blog from "../components/Blog";

const App = () => {
  return (
    <div className={`bg-backgroundDark bg-gradient-dark grid overflow-hidden`}>
      <Title />
      <div className="py-8 bg-backgroundMedium bg-gradient-medium">
        <Introduction />
      </div>
      <div className="py-8 bg-backgroundDark bg-gradient-dark">
        <Employees />
      </div>
      <div className="py-8 bg-backgroundMedium bg-gradient-medium">
        <Blog />
      </div>
      <div className="py-8 bg-backgroundDark bg-gradient-dark">
        <Customers />
      </div>
      <div className="py-8 bg-backgroundMedium bg-gradient-medium">
        <About />
      </div>
    </div>
  );
};

export default App;

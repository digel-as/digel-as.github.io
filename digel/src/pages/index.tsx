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
      <div className="py-8 bg-backgroundMedium">
        <LazyShow>
          <>
            <Introduction />
          </>
        </LazyShow>
      </div>
      <div className="py-8 bg-backgroundDark">
        <LazyShow>
          <>
            <Customers />
          </>
        </LazyShow>
      </div>
      <div className="py-8 bg-backgroundMedium">
        <LazyShow>
          <Employees />
        </LazyShow>
      </div>
      <div className="py-8 bg-backgroundDark">
        <LazyShow>
          <>
            <About />
          </>
        </LazyShow>
      </div>
    </div>
  );
};

export default App;

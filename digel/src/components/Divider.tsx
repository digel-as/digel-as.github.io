import React from "react";

type DividerProps = {
  width?: string;
  color?: string;
};
const Divider = ({
  width = "w-64",
  color = "bg-backgroundLight",
}: DividerProps) => {
  return (
    <div className={`w-full mb-4`}>
      <div
        className={`h-1 mx-auto ${color} ${width} opacity-25 my-0 py-0 rounded-t mb-10`}
      ></div>
    </div>
  );
};

export default Divider;

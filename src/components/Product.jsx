import React from "react";
import Button from "./Button";

const Product = ({ val, mover, count }) => {
  return (
    <div className="w-full py-10 md:py-20 h-auto text-white">
      <div
        onMouseEnter={() => mover(count)}
        className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4"
      >
        <h1 className="text-4xl z-10 md:text-6xl capitalize font-medium text-center md:text-left ">
          {val.title}
        </h1>
        <div className="w-full z-10 md:w-1/3 mt-4 md:mt-0">
          <p className="mb-4  md:mb-10 text-center md:text-left">{val.description}</p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            {val.live && <Button title="Live Preview" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

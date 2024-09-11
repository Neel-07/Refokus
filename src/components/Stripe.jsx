import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border-t border-b border-r border-l border-zinc-600 md:flex-row md:items-start md:justify-between">
      <img
        src={val.url}
        alt="stripe"
        className="w-20 h-20 object-contain md:w-32 md:h-32"
      />
      <span className="font-semibold text-lg md:text-xl mt-2 md:mt-0">
        {val.number}
      </span>
    </div>
  );
};

export default Stripe;

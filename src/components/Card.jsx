import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({
  width,
  start,
  para,
  hover = "false",
  heading,
  text,
  team = "",
}) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "24px",
      }}
      className={`${width} min-h-[20rem] md:min-h-[30rem] flex flex-col justify-between bg-zinc-800 p-5 rounded-xl`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="font-extralight text-base md:text-lg">{heading}</h3>
          <IoIosArrowRoundForward size={24} />
        </div>

        <h1 className="text-2xl md:text-3xl font-normal mt-5">{text}</h1>
      </div>

      <div className="w-full">
        {start && (
          <>
            <h1 className="text-5xl md:text-8xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 border border-zinc-50 py-2 px-5 font-semibold hover:bg-white hover:text-black">
              Contact Us
            </button>
          </>
        )}

        {para && <p className="text-sm text-zinc-500 font-medium mt-2">{team}</p>}
      </div>
    </motion.div>
  );
};

export default Card;

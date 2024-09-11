import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex justify-between items-center border-b border-b-zinc-700 ml-10">
      <div className="flex items-center">
        {/* Logo */}
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="refokus_logo"
          className="w-28 sm:w-36 " // Adjust the logo size on smaller screens
        />

        {/* Navigation Links */}
        <div className="flex gap-12 ml-16 md:ml-20 z-[100]">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[1px] h-7 bg-zinc-700" key={index}></span>
            ) : (
              <a
                href="#"
                key={index}
                className="font-regular text-sm flex items-center gap-1 relative group"
              >
                {/* Dot for "Work" by default */}
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 .25em #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>

      {/* Button (Hidden on small screens) */}
      <div className="hidden md:block">
        <Button />
      </div>
    </div>
  );
}

export default Navbar;

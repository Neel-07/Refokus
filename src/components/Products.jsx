import React, { useState, useEffect } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
    },
    {
      title: "Webflow",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "Brightwave",
      description:
        "Brightwave, a category disruptor came to us to build their brand from scratch and make a statement on its launch.",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mover = (val) => {
    setPos(val * 18);
  };

  // Check if the screen width is larger than or equal to 720 pixels
  const isLargeScreen = windowWidth >= 1065;

  return (
    <div className="mt-16 md:mt-32 relative">
      {products.map((elem, index) => (
        <Product mover={mover} count={index} val={elem} key={index} />
      ))}
      <div
        className={`absolute top-0 mt-14 w-full h-full pointer-events-none ${isLargeScreen ? "" : "hidden"}`}
      >
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute w-full max-w-[25rem] h-[18rem] bg-white left-[45%] transform -translate-x-1/2 overflow-hidden rounded -z-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + "rem" }}
              className={`w-full h-full bg-sky-${index + 200} relative`}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            >
              <video
                width="100%"
                height="100%"
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={`../videos/${product.title.toLowerCase()}-43.webm`}
                type="video/webm"
              >
                Your browser does not support the video tag.
              </video>
             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

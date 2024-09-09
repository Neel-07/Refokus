import React, { useState } from "react";
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
        "Brightwave, a category disruptor came to a us to build their brand from scratch and make a statement on its launch.",
      live: true,
      case: false,
    },
    
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 18); 
  };

  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product mover={mover} count={index} val={elem} key={index} />
      ))}
      <div className="absolute top-0  mt-14 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute w-[25rem] h-[18rem] bg-white left-[44%] overflow-hidden rounded"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-200"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video width="100%" height="100%"  autoPlay muted loop>
              <source src="../videos/arqitel-43.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-300"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video width="100%" height="100%"  autoPlay muted loop>
              <source src="../videos/cula-43.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-400"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video width="100%" height="100%"  autoPlay muted loop>
              <source src="../videos/layoutland-43.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-500"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video width="100%" height="100%"  autoPlay muted loop>
              <source src="../videos/brightwave-43.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "@/ui/AnimatedHeading";
import AnimatedButton from "@/ui/AnimatedButton";

const Header = () => {
  const [click, setClick] = React.useState(false);
  const handleOnClick = (index) => {
    // Handle button click event here
    index === 0 ? setClick(false) : setClick(true); // Updated to setClick(true) for index 1
    console.log("Button clicked!");
    console.log(click);
  };

  const innerWidth = window.innerWidth;
  const width = innerWidth > 460 ? "450px" : "370px";

  return (
    <div className="w-full relative min-h-20 p-4 md:px-6 lg:px-8 lg:py-6 flex items-center justify-between">
      <div className="w-full h-auto">
        <AnimatedHeading />
      </div>
      <motion.div
        initial={{ width: 0, height: 0, position: "absolute" }}
        animate={{ width: width, height: "700px", position: "absolute" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute flex items-start justify-end top-2 right-2 sm:top-10 p-2 sm:right-12 rounded-xl bg-amber-400"
      >
        <AnimatedButton
          text="Menu"
          spanClassName="text-white font-medium"
          divClassName="right-6 top-3"
          className="border-2 border-white py-2 px-3 rounded-full"
          handleOnClick={handleOnClick}
          index={1}
        />
      </motion.div>
    </div>
  );
};

export default Header;

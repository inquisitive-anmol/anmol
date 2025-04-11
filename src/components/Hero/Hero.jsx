import React from "react";
import { motion } from "framer-motion";
import AnimatedButton from "@/ui/AnimatedButton";

const Hero = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="1"
      className="hero-section w-full relative flex items-center justify-cente"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center space-y-4 py-10 px-4 "
      >
        {/* Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-26 h-26 sm:w-28 sm:h-28 rounded-full overflow-hidden xl:w-36 xl:h-36"
        >
          <img
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="face"
            className="w-full h-full object-cover object-center rounded-full"
          />
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
            },
          }}
          className="text-3xl sm:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text leading-tight mt-3"
        >
          Hello! I'm Anmol.
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-xl sm:text-xl xl:text-3xl font-medium text-gray-300 leading-snug"
        >
          MERN Stack Developer.
        </motion.h2>

        {/* Animated Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-base sm:text-lg xl:text-xl text-gray-400 leading-relaxed max-w-xs sm:max-w-md mt-2"
        >
          Turning Ideas into Scalable Web Solutions with Modern Tech.
        </motion.p>

        {/* Animated CTA Button */}
        <AnimatedButton
          text="Let's talk!"
          svgTrue={true}
          className="gap-0.5 px-5 sm:px-6 xl:px-8 py-2.5 sm:py-3 xl:py-4 text-base sm:text-lg xl:text-2xl font-semibold 
                    rounded-full  border border-[#E0E0E0]"
          divClassName="mt-8 sm:mt-10 xl:mt-12"
          spanClassName="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
        />
      </motion.div>
    </div>
  );
};

export default Hero;

{
  /* <Circular /> */
}

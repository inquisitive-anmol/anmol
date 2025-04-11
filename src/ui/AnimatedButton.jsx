import React from "react";
import { motion } from "framer-motion";

function AnimatedButton({
  text,
  svgTrue = false,
  className,
  divClassName,
  spanClassName,
  handleOnClick,
  index,
}) {
  const [hover, setHover] = React.useState(false);

  const letterVariantsUpFromNormal = {
    normal: { opacity: 1, y: "0" }, // Start above and hidden
    normalRev: { opacity: 0, y: "-100%" }, // Start above and hidden
    fallsIntoPlace: (i) => ({
      opacity: 0,
      y: "-100%", // Falls into place
      transition: {
        delay: i * 0.04, // Delay each letter
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    fallsIntoPlaceRev: (i) => ({
      opacity: 1,
      y: "0", // Falls into place
      transition: {
        delay: i * 0.04, // Delay each letter
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };
  const letterVariantsUpFromDown = {
    normal: { opacity: 0, y: "100%" },
    normalRev: { opacity: 1, y: "0" }, // Start above and hidden
    fallsIntoPlace: (i) => ({
      opacity: 1,
      y: "0", // Falls into place
      transition: {
        delay: i * 0.04, // Delay each letter
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    fallsIntoPlaceRev: (i) => ({
      opacity: 0,
      y: "100%", // Falls into place
      transition: {
        delay: i * 0.04, // Delay each letter
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const handleHoverStart = (event) => {
    setHover(true);
  };

  const handleHoverEnd = (event) => {
    setHover(false);
  };

  return (
    <a
      onClick={() => handleOnClick(index)}
      className={`relative w-fit h-auto flex items-center justify-center bg-amber-800 ${divClassName}`}
      href="#contact"
    >
      <motion.div
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        className={`absolute flex items-center overflow-hidden cursor-pointer  transition-all duration-300 ${className}`}
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariantsUpFromNormal}
            initial={hover ? "normal" : "normalRev"}
            animate={hover ? "fallsIntoPlace" : "fallsIntoPlaceRev"}
            className={`inline-block ${spanClassName}`}
          >
            {letter}
          </motion.span>
        ))}
        {svgTrue && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="url(#gradient)" // Reference the gradient ID
            className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" /> {/* cyan-400 */}
                <stop offset="50%" stopColor="#a855f7" /> {/* purple-500 */}
                <stop offset="100%" stopColor="#ec4899" /> {/* pink-500 */}
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        )}
      </motion.div>
      <motion.div
        href="#contact"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        className={`absolute flex items-center overflow-hidden cursor-pointer  transition-all duration-300 ${className}`}
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariantsUpFromDown}
            initial={hover ? "normal" : "normalRev"}
            animate={hover ? "fallsIntoPlace" : "fallsIntoPlaceRev"}
            className={`inline-block ${spanClassName}`}
          >
            {letter}
          </motion.span>
        ))}
        {svgTrue && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="url(#gradient)" // Reference the gradient ID
            className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" /> {/* cyan-400 */}
                <stop offset="50%" stopColor="#a855f7" /> {/* purple-500 */}
                <stop offset="100%" stopColor="#ec4899" /> {/* pink-500 */}
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        )}
      </motion.div>
    </a>
  );
}

export default AnimatedButton;

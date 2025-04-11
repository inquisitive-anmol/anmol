import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {motion} from "framer-motion";

const SocialIcons = () => {

  return (
    <div className="fixed z-50 bottom-5 left-5 flex flex-col gap-1 sm:flex sm:gap-2 lg:gap-3.5 sm:flex-row items-center justify-between text-white/55 ">
      <motion.div
        className="w-fit h-fit"
        whileHover={{ scale: 1.3, color: "oklch(0.555 0.163 48.998)" }}
      >
        <InstagramIcon className="sm:!text-3xl xl:!text-5xl" />
      </motion.div>
      <motion.div
        className="w-fit h-fit"
        whileHover={{ scale: 1.3, color: "oklch(0.555 0.163 48.998)" }}
      >
        <XIcon className="sm:!text-3xl xl:!text-5xl" />
      </motion.div>
      <motion.div
        className="w-fit h-fit"
        whileHover={{ scale: 1.3, color: "oklch(0.555 0.163 48.998)" }}
      >
        <LinkedInIcon className="sm:!text-3xl xl:!text-5xl" />
      </motion.div>
      <motion.div
        className="w-fit h-fit"
        whileHover={{ scale: 1.3, color: "oklch(0.555 0.163 48.998)" }}
      >
        <GitHubIcon className="sm:!text-3xl xl:!text-5xl" />
      </motion.div>
    </div>
  );
};

export default SocialIcons;

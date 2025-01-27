import { motion } from "motion/react";
import { Link as ScrollLink } from "react-scroll";
import { DownArrow } from "../data/DownArrow";

const HeroSection = () => {
  return (
    <>
      <article className="top-5 flex h-screen flex-col items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black text-slate-200">
        <motion.p
          className="bg-gradient-to-br from-zinc-900 via-white to-zinc-900 bg-clip-text text-center text-2xl font-bold text-transparent md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeIn",
            delay: 0.5,
          }}
        >
          I do
        </motion.p>
        <p>
          <motion.span
            className="text-wrap bg-gradient-to-br from-slate-950 via-white to-slate-950 bg-clip-text py-4 text-center font-sans text-4xl font-bold text-transparent md:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              ease: "easeIn",
              delay: 1.5,
            }}
          >
            Web Development
          </motion.span>
          <motion.span
            className="text-4xl font-bold text-red-600 md:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              ease: "easeIn",
              delay: 2.5,
            }}
          >
            .
          </motion.span>
        </p>
        <motion.p
          className="text-md px-2 py-1 text-center md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeIn",
            delay: 3.5,
          }}
        >
          React, Redux, TanStack Query, Bootstrap, Tailwind, NodeJS, Express,
          MongoDB
        </motion.p>
        <motion.a
          href="mailto:sanjeetdeshwal@outlook.com"
          className="mb-2 mt-6 animate-pulse rounded-lg bg-red-950 px-5 py-2.5 text-sm font-medium text-white shadow-2xl hover:ring-1 hover:ring-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeIn",
            delay: 4,
          }}
        >
          Get in touch
        </motion.a>
        <ScrollLink
          to="projects-section"
          href="#projects-section"
          smooth={true}
          duration={500}
        >
          <motion.button
            className="relative top-20"
            aria-label="project section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              ease: "easeIn",
              delay: 4,
            }}
          >
            {DownArrow}
          </motion.button>
        </ScrollLink>
      </article>
    </>
  );
};

export default HeroSection;

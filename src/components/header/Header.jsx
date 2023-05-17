import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./header.css";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const right = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const left = useTransform(scrollYProgress, [0, 1], [0, -800]);
  return (
    <section className="header" id="header">
      <div className="header__hero">
        <div class="text__filled">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8, delay: 2 } }}
            style={{ x: right }}
            className="title"
          >
            javascript tech stack
          </motion.h1>
        </div>
        <div class="text__outline">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8, delay: 2 } }}
            style={{ x: right }}
            className="title"
          >
            javascript tech stack
          </motion.h1>
        </div>
        <div class="text__filled to-left">
          <motion.h1
            initial={{ x: 1800 }}
            animate={{ x: 0, transition: { duration: 0.8, delay: 2 } }}
            style={{ x: left }}
            className="title"
          >
            software engineer
          </motion.h1>
        </div>
        <div class="text__outline to-left">
          <motion.h1
            initial={{ x: 1800 }}
            animate={{ x: 0, transition: { duration: 0.8, delay: 2 } }}
            style={{ x: left }}
            className="title"
          >
            software engineer
          </motion.h1>
        </div>
        <div className="header__image-container">
          <motion.div
            initial={{ y: 200, opacity: 1 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 2.1 },
            }}
            className="header__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;

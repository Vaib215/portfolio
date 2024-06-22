"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header
      id="home"
      className="lg:bg-[url('/profile.png')] relative grid place-items-center bg-no-repeat bg-right min-h-[50%] text-blue-500 dark:text-white"
    >
      <div className="absolute inset-0 w-full h-full md:mx-0 bg-gradient-to-r mix-blend-soft-light" />
      <div className="mx-auto text-balance w-full h-full py-20 px-4 sm:px-6 grid place-items-center place-content-center md:block text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold sm:text-6xl md:text-7xl mb-4"
        >
          Vaibhav Kumar Singh
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 max-w-md text-xl sm:text-2xl md:mt-5 md:max-w-3xl"
        >
          A Full Stack Web Developer & React Native Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex justify-center md:justify-start space-x-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-300"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </header>
  );
}

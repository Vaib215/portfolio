"use client";
import React from "react";
import Section from "./section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about" title="About Me" className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I&apos;m a passionate full stack web developer with experience in
            building scalable and efficient applications. I love turning complex
            problems into simple, beautiful, and intuitive designs.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            With a strong foundation in both front-end and back-end
            technologies, I strive to create seamless user experiences across
            web platforms.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Education
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
            <li>
              Bachelor of Engineering in Computer Science, Chandigarh University
              (7.84 CGPA | Jun 2021)
            </li>
            <li>
              Senior Secondary Education, Board of Secondary Education, Ajmer
              (97.80% | 2021)
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
            Achievements
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Smart India Hackathon 2022 Finalist</li>
            <li>Winner of CSS Quest by Hackoverflow Society</li>
            <li>
              Coordinator: DevHive Club (Departmental Club for web developers)
            </li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

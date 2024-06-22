"use client";
import React from "react";
import Section from "./section";
import { motion } from "framer-motion";

const Skill = ({ name, level }: { name: string; level: number }) => (
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="mb-6"
  >
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-700 dark:text-gray-300">
        {name}
      </span>
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {level}%
      </span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      className="bg-gray-100 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Frontend
          </h3>
          <Skill name="React" level={95} />
          <Skill name="Next.js" level={90} />
          <Skill name="JavaScript/TypeScript" level={90} />
          <Skill name="TailwindCSS" level={85} />
          <Skill name="SEO, Performance & Accesibility" level={85} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Backend
          </h3>
          <Skill name="Node.js" level={90} />
          <Skill name="Express" level={85} />
          <Skill name="Python" level={80} />
          <Skill name="MongoDB" level={85} />
          <Skill name="Prisma" level={80} />
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Other Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Git",
            "AWS",
            "Docker",
            "Webflow",
            "Figma",
            "C++",
            "Java",
            "Bash",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

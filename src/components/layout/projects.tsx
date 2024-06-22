"use client";
import React from "react";
import Section from "./section";
import { motion } from "framer-motion";

const Project = ({
  title,
  description,
  techStack,
  link,
  image,
}: {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="mb-4">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          Tech Stack:{" "}
        </span>
        {techStack.join(", ")}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      className="bg-white dark:bg-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Project
          title="THE ABC"
          description="A suite of AI tools to do multiple tasks like diagram/image/component generation, text summarization, text generation, resume maker etc. 300 MAU are utilizing it currently."
          techStack={["NextJS", "AI Prompt Engineering", "TypeScript"]}
          link="#"
          image="/api/placeholder/400/320"
        />
        <Project
          title="TRADEWISE"
          description="An app for individuals to get financial education, know what's going on in finance world and more."
          techStack={["React.js", "Firebase", "TypeScript", "Node.js"]}
          link="#"
          image="/api/placeholder/400/320"
        />
        <Project
          title="UPIMG"
          description="Image management app that helps users host images on our service and then use them in their projects or just simply download them. Uses pocketbase to store images."
          techStack={["Next.js", "TypeScript", "PocketBase"]}
          link="#"
          image="/api/placeholder/400/320"
        />
        <Project
          title="ASK VAIB"
          description="An open source extension for Raycast that allow users to get quick answers to questions with free chatGPT API."
          techStack={["React", "TypeScript"]}
          link="#"
          image="/api/placeholder/400/320"
        />
      </div>
    </Section>
  );
}

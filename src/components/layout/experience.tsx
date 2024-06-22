"use client";
import React from "react";
import Section from "./section";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      className="bg-gray-100 dark:bg-gray-800"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            THE FUTURE UNIVERSITY | Software Development Engineer - I
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Mohali, PB | May 2024 - Present
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>
              Working on TradeWise app to build a goto app to learn trading as a
              beginner.
            </li>
            <li>
              Created websites for ventures HealoVed OnCampus using NextJS.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            THE FUTURE UNIVERSITY | Software Development Engineer Intern
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Mohali, PB | June 2023 - May 2024
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>
              Single handedly created and now managing TradeWise app for the
              company with over 20,000 downloads on Play Store with live class
              feature that can handle 1000+ participants with video, audio, chat
              and reaction capabilities.
            </li>
            <li>
              Maintained main website NextJS, admin dashboard NextJS and
              backendNodeJS and implemented bug fixes, code optimizations and
              new features: access logs, redis, whatsapp automation for class
              reminders, created google sheets automations & webhooks
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            CONTENT CREATOR | Web & App Development
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Youtube | Aug 2021 - Present
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>
              Developed a comprehensive course on React named The Last React
              Course you need which helped over 500 learners learn React,
              Tailwind, Appwrite & Deployment.
            </li>
            <li>In-depth tutorials on challenges by Frontend Mentor</li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

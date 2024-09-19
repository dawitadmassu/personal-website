"use client";

import { motion } from "framer-motion";

import { skillsList } from "@/lib/data";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { SectionHeading } from "./section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      id="skills"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="Skills" />
      <ul className="flex flex-wrap max-w-2xl justify-center gap-2 text-lg text-gray-800">
        {skillsList.map((obj, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-gray-50 border-black rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {obj.skill}
          </motion.li>
        ))}
      </ul>
      {/* 
      {skillsData.map(({ icon }, index) => (
        <motion.div
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {icon}
        </motion.div>
      ))} */}
    </motion.section>
  );
};

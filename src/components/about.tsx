"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { useSectionInView } from "@/hooks/use-section-in-view";

export const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 mb-4 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Dawit Admassu, a Full Stack Engineer with over 7 years of
          experience in web and mobile development. I&apos;ve worked in ERP,
          CRM, Medical, and Fintech, using technologies like Python, JavaScript,
          Java, React, Next.js, and AWS. I&apos;m an AWS Certified Developer
          Associate and enjoy problem-solving, having led teams to deliver
          projects efficiently. I also have a strong interest in machine
          learning. I&apos;m always eager to learn new technologies and improve
          my skills.
        </p>
        <p>
          I&apos;m open to job opportunities where I can grow and contribute.
          Feel free to reach out if my experience matches what you&apos;re
          looking for.
        </p>
      </div>
    </motion.section>
  );
};

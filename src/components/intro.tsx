"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/button";
import { Icons } from "@/components/icons";
import { useSectionInView } from "@/hooks/use-section-in-view";
import photo from "@/assets/img/photo.jpg";
import Image from "next/image";

export const Intro = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-4 text-center sm:mt-20"
    >
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  "
      >
        <Image
          className="w-64 h-64 mb-3 rounded-full"
          src={photo}
          alt="Photo of Dawit Admassu"
        />
      </motion.a>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        Dawit Admassu
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-lg"
      >
        Senior Software Engineer | Python | FastAPI | Django | ReactJS | VueJS |
        Android | AWS | Machine Learning
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="hidden sm:flex"
          asChild
        >
          <a href="/DawitAdmassuCV.pdf" download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a
            href="https://www.linkedin.com/in/dawit-admassu/"
            aria-label="Linkedin"
            download
          >
            <Icons.linkedin className="size-6" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a href="https://github.com/dawitadmassu" aria-label="Github">
            <Icons.github className="size-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

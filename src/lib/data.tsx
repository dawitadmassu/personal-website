import { Icons } from "@/components/icons";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    image: "/projects/socialhub.svg",
    title: "SocialHub",
    description:
      "Next-generation social media app, built with its own backend.",
    technologies: ["Next.js", "TypeScript", " Nest.js", "Tailwind", "Prisma"],
    links: {
      preview: "https://socialhub-ms.vercel.app/",
      github: "https://github.com/dawitadmassu/SocialHub",
      githubApi: "https://api.github.com/repos/Skolaczk/SocialHub",
    },
  },
  {
    image: "/projects/nextstarter.svg",
    title: "Next-starter",
    description: "Next.js starter template, packed with useful features.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Shadcn/ui",
      "Next-auth",
      "Prisma",
    ],
    links: {
      preview: "https://next-starter-skolaczk.vercel.app",
      github: "https://github.com/dawitadmassu/next-starter",
      githubApi: "https://api.github.com/repos/Skolaczk/next-starter",
    },
  },
  {
    image: "/projects/audiophile.svg",
    title: "Audiophile",
    description: "Online store specializing in headphones and speakers.",
    technologies: [
      "React",
      "Styled-components",
      "TypeScript",
      "Stripe",
      "Firebase",
    ],
    links: {
      preview: "https://audiophile-ms.netlify.app/",
      github: "https://github.com/dawitadmassu/Audiophile",
      githubApi: "https://api.github.com/repos/Skolaczk/Audiophile",
    },
  },
] as const;

export const educationsData = [
  {
    title: "Master of Science in Computer Science",
    location: "Fairfield, IA",
    description: "Graduate-level coursework in computer science.",
    date: "2023 - Now",
  },
  {
    title: "Bachelor of Science in Software Engineering",
    location: "Addis Ababa, Ethiopia",
    description: "Undergraduate degree in software engineering.",
    date: "2011 - 2016",
  },
] as const;

export const experiencesData = [
  {
    title: "Sr. Software Engineer",
    company: "ENGIE Energy Access",
    location: "Kampala, Uganda",
    description:
      "Developed software solutions for energy and financial management systems.",
    date: "Jul 2022 - Oct 2023",
  },
  {
    title: "Sr. Software Engineer",
    company: "Geez Technology",
    location: "Addis Ababa, Ethiopia (Remote)",
    description:
      "Led the development of CRM features and managed deployment pipelines.",
    date: "Oct 2021 - Sep 2023",
  },
  {
    title: "Sr. Frontend Developer",
    company: "Uplancer Agency",
    location: "Columbus, OH, USA (Remote)",
    description:
      "Worked on frontend development for medical data presentation systems.",
    date: "Mar 2022 - Jul 2022",
  },
  {
    title: "Sr. Software Engineer",
    company: "Pagatech Limited",
    location: "Lagos, Nigeria (Remote)",
    description:
      "Developed payment systems and integrated various business solutions.",
    date: "Apr 2019 - Mar 2022",
  },
  {
    title: "Software Engineer",
    company: "CNET Software Technologies",
    location: "Addis Ababa, Ethiopia",
    description: "Worked on ERP system features and mobile app integrations.",
    date: "Sep 2016 - Apr 2019",
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
  { icon: <Icons.aws className="size-12" /> },
] as const;

export const skillsList = [
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "Java" },
  { skill: "C#" },
  { skill: ".NET" },
  { skill: "Android" },
  { skill: "AWS" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "FastAPI" },
  { skill: "Django" },
  { skill: "Vue.js" },
  { skill: "React.js" },
  { skill: "TypeScript" },
  { skill: "SQL" },
  { skill: "SQLAlchemy" },
  { skill: "Tailwind" },
  { skill: "Spring Boot" },
] as const;

export const contactDetails = {
  email: "dawit.getachew1@gmail.com",
  phone: "+1 (234) 567-890",
  address: "123 Main Street, Nashville, TN 37209",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093717!2d144.95543131589745!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577fdd2f9e6d291!2s123%20Main%20St%2C%20Nashville%20TN%2037209%2C%20USA!5e0!3m2!1sen!2sus!4v1633248105212!5m2!1sen!2sus",
} as const;

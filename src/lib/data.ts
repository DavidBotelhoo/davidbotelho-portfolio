import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiAdonisjs,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
  category: "languages" | "frontend" | "backend" | "database" | "tools";
};

export const skills: Skill[] = [
  { name: "Java", icon: FaJava, color: "#f89820", category: "languages" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", category: "languages" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", category: "languages" },
  { name: "React", icon: SiReact, color: "#61dafb", category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "frontend" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8", category: "frontend" },
  { name: "HTML5", icon: SiHtml5, color: "#e34f26", category: "frontend" },
  { name: "CSS3", icon: SiCss, color: "#1572b6", category: "frontend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68a063", category: "backend" },
  { name: "Express", icon: SiExpress, color: "#ffffff", category: "backend" },
  { name: "AdonisJS", icon: SiAdonisjs, color: "#5a45ff", category: "backend" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f", category: "backend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "database" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1", category: "database" },
  { name: "Docker", icon: SiDocker, color: "#2496ed", category: "tools" },
  { name: "Git", icon: SiGit, color: "#f05032", category: "tools" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", category: "tools" },
];

export const social = {
  email: "davidbotelho.dev@gmail.com",
  whatsapp: "5593991026469",
  whatsappDisplay: "93 99102-6469",
  instagram: "davidbotelho__",
  instagramUrl: "https://instagram.com/davidbotelho__",
  github: "DavidBotelhoo",
  githubUrl: "https://github.com/DavidBotelhoo",
  linkedin: "davidbotelho-dev",
  linkedinUrl: "https://linkedin.com/in/davidbotelho-dev",
} as const;

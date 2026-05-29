"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";

// Links por projeto (na mesma ordem dos itens nos arquivos de tradução)
const projectLinks: Array<{ repo: string; demo?: string }> = [
  { repo: "https://github.com/DavidBotelhoo/teste-tecnico-pedidos/tree/develop" },
  { repo: "https://github.com/DavidBotelhoo/markov-pac-man", demo: "https://markov-pac-man.vercel.app" },
  { repo: "https://github.com/DavidBotelhoo/grafica-dd" },
  { repo: "https://github.com/DavidBotelhoo/hospital-management" },
];

export function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as Array<{
    title: string;
    description: string;
    tags: string[];
  }>;

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-700/40 to-transparent" />

      <div className="container-section">
        <SectionLabel
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-brand-900/40 bg-gradient-to-br from-brand-950/30 via-background to-background p-6 transition-all hover:border-brand-600/60 hover:shadow-xl hover:shadow-brand-950/30"
            >
              {/* Glow */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl transition-all duration-500 group-hover:bg-brand-500/20" />

              <div className="relative">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-900/40 bg-brand-950/40 transition-all group-hover:border-brand-600/40 group-hover:bg-brand-900/30">
                    <Folder className="h-5 w-5 text-brand-300" />
                  </span>
                  <div className="flex items-center gap-1">
                    <a
                      href={projectLinks[i]?.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("viewCode")}
                      title={t("viewCode")}
                      className="rounded-lg border border-brand-900/40 bg-brand-950/40 p-2 text-brand-400 transition-all hover:border-brand-600/60 hover:bg-brand-900/30 hover:text-brand-300"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {projectLinks[i]?.demo && (
                      <a
                        href={projectLinks[i]?.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("viewDemo")}
                        title={t("viewDemo")}
                        className="rounded-lg border border-brand-900/40 bg-brand-950/40 p-2 text-brand-400 transition-all hover:border-brand-600/60 hover:bg-brand-900/30 hover:text-brand-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-brand-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground/70">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-brand-900/40 bg-brand-950/40 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

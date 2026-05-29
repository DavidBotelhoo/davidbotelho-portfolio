"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { skills, type Skill } from "@/lib/data";
import { SectionLabel } from "../ui/SectionLabel";

const categoryKeys = ["languages", "frontend", "backend", "database", "tools"] as const;

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-700/10 blur-3xl" />

      <div className="container-section relative">
        <SectionLabel
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="space-y-10">
          {categoryKeys.map((category, idx) => {
            const items = skills.filter((s) => s.category === category);
            if (items.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-brand-400">
                    {t(`categories.${category}` as never)}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-900/60 to-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {items.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-brand-900/40 bg-brand-950/20 p-4 transition-all hover:border-brand-600/60 hover:bg-brand-950/40"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/0 via-brand-500/0 to-brand-600/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative flex flex-col items-center gap-2.5">
        <Icon
          className="h-8 w-8 transition-transform group-hover:scale-110"
          style={{ color: skill.color }}
        />
        <span className="text-center text-sm font-medium text-foreground/85">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

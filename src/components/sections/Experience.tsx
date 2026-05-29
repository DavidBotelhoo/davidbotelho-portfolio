"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { cn } from "@/lib/cn";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
};

export function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as ExperienceItem[];

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-section">
        <SectionLabel
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute bottom-2 left-4 top-2 w-px bg-gradient-to-b from-brand-600/50 via-brand-700/30 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {items.map((item, i) => (
              <TimelineItem key={item.company} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  // First experience (index 0) goes LEFT, alternating from there
  const isRight = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative md:grid md:grid-cols-2 md:items-start md:gap-12"
    >
      {/* Dot */}
      <span className="absolute left-4 top-2 z-10 flex h-3 w-3 -translate-x-1/2 md:left-1/2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-40" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 ring-4 ring-background" />
      </span>

      {/* Content card */}
      <div
        className={cn(
          "pl-12 md:pl-0",
          isRight
            ? "md:col-start-2 md:row-start-1 md:pl-8"
            : "md:col-start-1 md:row-start-1 md:pr-8 md:text-right"
        )}
      >
        <div className="group relative overflow-hidden rounded-xl border border-brand-900/40 bg-brand-950/20 p-6 transition-all hover:border-brand-600/50 hover:bg-brand-950/30">
          <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-brand-600/0 via-brand-500/10 to-brand-600/0 opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative">
            <div
              className={cn(
                "mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-400",
                !isRight && "md:justify-end"
              )}
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>{item.period}</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              {item.role}
            </h3>
            <div
              className={cn(
                "mt-1 flex items-center gap-2 text-brand-300",
                !isRight && "md:justify-end"
              )}
            >
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-medium">{item.company}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              {item.description}
            </p>
            <div
              className={cn(
                "mt-4 flex flex-wrap gap-2",
                !isRight && "md:justify-end"
              )}
            >
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-brand-900/40 bg-brand-950/40 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

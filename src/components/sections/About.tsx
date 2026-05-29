"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, CircleDot, Languages, Github } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { social } from "@/lib/data";

const stats = [
  { key: "experience", value: "3+" },
  { key: "projects", value: "20+" },
  { key: "languages", value: "3" },
  { key: "stack", value: "15+" },
] as const;

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-700/40 to-transparent" />

      <div className="container-section">
        <SectionLabel
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="left"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Profile photo column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-brand-900/40 bg-gradient-to-br from-brand-950/40 via-background to-background p-5 lg:sticky lg:top-24">
              {/* Glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl transition-all group-hover:bg-brand-500/30" />
              <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

              {/* Photo */}
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-brand-700/40 bg-brand-950 shadow-xl shadow-brand-950/40">
                <Image
                  src={`${social.githubUrl}.png`}
                  alt="David Botelho"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

                {/* Corner decoration */}
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-2.5 py-1 backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <CircleDot className="relative h-1.5 w-1.5 text-emerald-400" />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                    online
                  </span>
                </div>

                {/* Bottom info on photo */}
                <div className="absolute inset-x-3 bottom-3">
                  <div className="rounded-xl border border-brand-700/40 bg-background/60 px-3 py-2 backdrop-blur-md">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-brand-400">
                      &lt;Fullstack /&gt;
                    </p>
                    <h3 className="text-base font-semibold text-foreground">
                      David Botelho
                    </h3>
                  </div>
                </div>
              </div>

              {/* Below photo */}
              <div className="relative mt-4 space-y-2">
                <div className="flex items-center gap-2 rounded-lg border border-brand-900/40 bg-brand-950/30 px-3 py-2 text-sm">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-400" />
                  <span className="text-foreground/85">{t("location")}</span>
                </div>
                <a
                  href={social.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-brand-900/40 bg-brand-950/30 px-3 py-2 text-sm transition-all hover:border-brand-600/60 hover:bg-brand-900/30"
                >
                  <Github className="h-3.5 w-3.5 shrink-0 text-brand-400" />
                  <span className="text-foreground/85">@{social.github}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column: bio + languages + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4 text-base leading-relaxed text-foreground/80 text-justify">
              <p>{t("bio1")}</p>
              <p>{t("bio2")}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-4 py-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <CircleDot className="relative h-2 w-2 text-emerald-400" />
                </span>
                <span className="text-emerald-300">{t("available")}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="group relative overflow-hidden rounded-xl border border-brand-900/40 bg-gradient-to-br from-brand-950/30 to-background p-4 transition-all hover:border-brand-600/50"
                >
                  <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-brand-500/10 blur-2xl transition-all group-hover:bg-brand-500/25" />
                  <div className="relative">
                    <div className="font-mono text-2xl font-bold tracking-tight text-brand-300 sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {t(`stats.${stat.key}` as never)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-6 rounded-2xl border border-brand-900/40 bg-brand-950/20 p-5">
              <div className="mb-4 flex items-center gap-2">
                <Languages className="h-4 w-4 text-brand-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-brand-300">
                  {t("languages.title")}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <LangBar
                  flag="🇧🇷"
                  name={t("languages.portuguese")}
                  level={t("languages.portugueseLevel")}
                  percent={100}
                />
                <LangBar
                  flag="🇪🇸"
                  name={t("languages.spanish")}
                  level={t("languages.spanishLevel")}
                  percent={90}
                />
                <LangBar
                  flag="🇺🇸"
                  name={t("languages.english")}
                  level={t("languages.englishLevel")}
                  percent={65}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LangBar({
  flag,
  name,
  level,
  percent,
}: {
  flag: string;
  name: string;
  level: string;
  percent: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="flex items-center gap-1.5">
          <span className="text-base">{flag}</span>
          <span className="text-foreground/90">{name}</span>
        </span>
        <span className="text-xs text-brand-300">{level}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-brand-950">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-gradient-to-r from-brand-500 to-cyan-400"
        />
      </div>
    </div>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Loader } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";

export function Education() {
  const t = useTranslations("education");
  const items = t.raw("items") as Array<{
    title: string;
    institution: string;
    period: string;
    status: "ongoing" | "completed";
    level: string;
    description?: string;
  }>;
  const certs = t.raw("certifications.items") as Array<{
    name: string;
    issuer: string;
    year: string;
  }>;

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container-section">
        <SectionLabel
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Academic */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-brand-900/40 bg-brand-950/20 p-6 transition-all hover:border-brand-600/50"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-500/5 blur-3xl transition-all group-hover:bg-brand-500/10" />
                <div className="relative">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-700/30">
                        <GraduationCap className="h-5 w-5 text-brand-300" />
                      </span>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-brand-400">
                          {item.level}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.period}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider ${
                        item.status === "ongoing"
                          ? "border border-amber-500/40 bg-amber-950/30 text-amber-300"
                          : "border border-emerald-500/40 bg-emerald-950/30 text-emerald-300"
                      }`}
                    >
                      {item.status === "ongoing" ? (
                        <Loader className="h-3 w-3 animate-spin" />
                      ) : (
                        <CheckCircle2 className="h-3 w-3" />
                      )}
                      {item.status === "ongoing"
                        ? t("ongoing")
                        : t("completed")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-300">
                    {item.institution}
                  </p>
                  {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70 text-justify">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-brand-900/40 bg-brand-950/20 p-6"
          >
            <div className="mb-5 flex items-center gap-2">
              <Award className="h-4 w-4 text-brand-400" />
              <span className="font-mono text-xs uppercase tracking-wider text-brand-300">
                {t("certifications.title")}
              </span>
            </div>
            <ul className="space-y-3">
              {certs.map((cert, i) => (
                <motion.li
                  key={cert.name}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  className="group relative rounded-lg border border-brand-900/30 bg-brand-950/30 p-3 transition-all hover:border-brand-700/60 hover:bg-brand-950/50"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-foreground/90">
                        {cert.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="shrink-0 rounded font-mono text-[10px] text-brand-400">
                      {cert.year}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

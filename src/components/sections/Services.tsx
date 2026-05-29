"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Globe, Monitor, Cloud, Headphones, ArrowRight } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { social } from "@/lib/data";

const serviceIcons = [Globe, Monitor, Cloud, Headphones];

export function Services() {
  const t = useTranslations("services");
  const tContact = useTranslations("contact");
  const items = t.raw("items") as Array<{
    title: string;
    description: string;
  }>;

  const whatsappUrl = `https://wa.me/${social.whatsapp}?text=${encodeURIComponent(
    tContact("whatsappMessage")
  )}`;

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute right-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-3xl" />

      <div className="container-section relative">
        <SectionLabel
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((service, i) => {
            const Icon = serviceIcons[i] ?? Globe;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-brand-900/40 bg-brand-950/20 p-6 transition-all hover:border-brand-600/60"
              >
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-brand-500/10 blur-3xl transition-all group-hover:bg-brand-500/25" />
                <div className="relative">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-700/40 bg-gradient-to-br from-brand-900/40 to-brand-950/60 transition-all group-hover:border-brand-500/60">
                    <Icon className="h-5 w-5 text-brand-300" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70 text-justify">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-brand-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                    <span className="font-mono uppercase tracking-wider">
                      explore
                    </span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-brand-500/40 bg-gradient-to-br from-brand-600 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/50 transition-all hover:from-brand-500 hover:to-brand-600 hover:shadow-brand-700/60"
          >
            {t("cta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

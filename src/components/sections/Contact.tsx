"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
  Copy,
  Check,
  CircleDot,
  ArrowUpRight,
} from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { social } from "@/lib/data";

export function Contact() {
  const t = useTranslations("contact");
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const whatsappUrl = `https://wa.me/${social.whatsapp}?text=${encodeURIComponent(
    t("whatsappMessage")
  )}`;

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/10 blur-3xl" />

      <div className="container-section relative">
        <SectionLabel
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <CircleDot className="relative h-2 w-2 text-emerald-400" />
          </span>
          <span className="text-sm text-emerald-300">{t("available")}</span>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            whileHover={{ y: -4 }}
            onClick={copyEmail}
            className="group relative col-span-1 overflow-hidden rounded-2xl border border-brand-900/40 bg-brand-950/20 p-5 text-left transition-all hover:border-brand-600/60 sm:col-span-2 lg:col-span-3"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl transition-all group-hover:bg-brand-500/20" />
            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-700/40 bg-gradient-to-br from-brand-900/40 to-brand-950/60">
                  <Mail className="h-5 w-5 text-brand-300" />
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-brand-400">
                    {t("channels.email")}
                  </div>
                  <div className="mt-0.5 break-all text-base font-medium text-foreground">
                    {social.email}
                  </div>
                </div>
              </div>
              <span className="shrink-0 rounded-lg border border-brand-900/40 bg-brand-950/40 px-3 py-2 text-xs text-brand-300 transition-all group-hover:border-brand-600/60 group-hover:text-foreground">
                {copied ? (
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5" />
                    {t("copied")}
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <Copy className="h-3.5 w-3.5" />
                    {t("copy")}
                  </span>
                )}
              </span>
            </div>
          </motion.button>

          <ContactCard
            href={whatsappUrl}
            icon={MessageCircle}
            label={t("channels.whatsapp")}
            value={social.whatsappDisplay}
            delay={0.1}
            external
          />
          <ContactCard
            href={social.instagramUrl}
            icon={Instagram}
            label={t("channels.instagram")}
            value={`@${social.instagram}`}
            delay={0.15}
            external
          />
          <ContactCard
            href={social.linkedinUrl}
            icon={Linkedin}
            label={t("channels.linkedin")}
            value={`/${social.linkedin}`}
            delay={0.2}
            external
          />
          <ContactCard
            href={social.githubUrl}
            icon={Github}
            label={t("channels.github")}
            value={`@${social.github}`}
            delay={0.25}
            external
            className="sm:col-span-2 lg:col-span-3"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon: Icon,
  label,
  value,
  delay = 0,
  external = false,
  className = "",
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  value: string;
  delay?: number;
  external?: boolean;
  className?: string;
}) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4 }}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group relative overflow-hidden rounded-2xl border border-brand-900/40 bg-brand-950/20 p-5 transition-all hover:border-brand-600/60 ${className}`}
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/10 blur-3xl transition-all group-hover:bg-brand-500/20" />
      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-700/40 bg-gradient-to-br from-brand-900/40 to-brand-950/60">
            <Icon className="h-4.5 w-4.5 text-brand-300" />
          </span>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-brand-400">
              {label}
            </div>
            <div className="mt-0.5 text-sm font-medium text-foreground">
              {value}
            </div>
          </div>
        </div>
        <ArrowUpRight className="h-4 w-4 text-brand-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-300" />
      </div>
    </motion.a>
  );
}

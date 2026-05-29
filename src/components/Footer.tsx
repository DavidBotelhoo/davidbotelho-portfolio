"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Instagram, Mail, ArrowUp, Code2 } from "lucide-react";
import { social } from "@/lib/data";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-brand-900/40 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-700/40 to-transparent" />
      <div className="container-section py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-mono text-sm font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <Code2 className="h-4 w-4" />
              </span>
              <span className="text-foreground">
                David<span className="text-brand-400">.</span>Botelho
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {t("builtWith")}
            </p>
          </div>

          <div className="flex items-center justify-start md:justify-center">
            <div className="flex items-center gap-3">
              <SocialButton href={social.githubUrl} icon={Github} label="GitHub" />
              <SocialButton
                href={social.linkedinUrl}
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialButton
                href={social.instagramUrl}
                icon={Instagram}
                label="Instagram"
              />
              <SocialButton
                href={`mailto:${social.email}`}
                icon={Mail}
                label="Email"
              />
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-end">
            <a
              href="#hero"
              className="group flex items-center gap-2 rounded-lg border border-brand-900/40 bg-brand-950/30 px-4 py-2 text-xs text-foreground/80 transition-all hover:border-brand-600/60 hover:text-foreground"
            >
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
              {t("backToTop")}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-900/30 pt-6 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {year} David Botelho. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Github;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-900/40 bg-brand-950/30 text-brand-400 transition-all hover:border-brand-600/60 hover:bg-brand-900/30 hover:text-brand-300"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Globe, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const languages = [
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇺🇸" },
] as const;

export function LanguageSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  function changeLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale as "pt" | "es" | "en" });
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-lg border border-brand-900/40 bg-brand-950/30 px-3 py-2 text-sm text-foreground/80 transition-all hover:border-brand-600/60 hover:bg-brand-900/30 hover:text-foreground"
        aria-label={t("language")}
      >
        <Globe className="h-4 w-4 text-brand-400" />
        <span className="hidden sm:inline-block uppercase">{current.code}</span>
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-lg border border-brand-900/50 bg-[#0a0f1e]/95 backdrop-blur-md shadow-xl shadow-brand-950/40 animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLocale(lang.code)}
              className={cn(
                "flex w-full items-center justify-between gap-2 px-3 py-2.5 text-sm transition-colors hover:bg-brand-900/40",
                locale === lang.code
                  ? "text-brand-300 bg-brand-900/20"
                  : "text-foreground/80"
              )}
            >
              <span className="flex items-center gap-2">
                <span className="text-base leading-none">{lang.flag}</span>
                <span>{lang.name}</span>
              </span>
              {locale === lang.code && <Check className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

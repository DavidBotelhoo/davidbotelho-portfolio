"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/cn";

const navItems = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-brand-900/30 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-section flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="group flex items-center gap-2 font-mono text-sm font-semibold"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-900/40 transition-transform group-hover:scale-110">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="text-foreground">
            David<span className="text-brand-400">.</span>Botelho
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-brand-900/30 hover:text-foreground"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="rounded-lg border border-brand-900/40 bg-brand-950/30 p-2 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-brand-400" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-4">
              <span className="font-mono text-sm font-semibold text-foreground">
                David<span className="text-brand-400">.</span>Botelho
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-brand-900/40 bg-brand-950/30 p-2"
              >
                <X className="h-5 w-5 text-brand-400" />
              </button>
            </div>
            <nav className="flex flex-col items-stretch gap-1 px-4 py-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-brand-900/30 bg-brand-950/20 px-4 py-3 text-base text-foreground transition-all hover:border-brand-600/50 hover:bg-brand-900/30"
                >
                  {t(item.key)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

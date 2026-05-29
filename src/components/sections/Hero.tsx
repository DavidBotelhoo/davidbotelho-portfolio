"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, ChevronDown, Sparkles } from "lucide-react";
import { social } from "@/lib/data";

const loadedModules = ["React", "Next.js", "Node.js", "TypeScript", "Java", "Spring"];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Glow effects */}
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Decorative tags */}
      <div className="pointer-events-none absolute right-6 top-24 hidden font-mono text-xs text-brand-700/50 md:block">
        &lt;System.Init /&gt;
      </div>
      <div className="pointer-events-none absolute bottom-12 left-6 hidden font-mono text-xs text-brand-800/60 md:block">
        while(alive) {`{`} code() {`}`}
      </div>

      <div className="container-section relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-700/50 bg-brand-950/50 px-3 py-1.5 font-mono text-xs tracking-wider text-brand-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            {t("kernel")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="block text-foreground">{t("greeting")}</span>
            <span className="block bg-gradient-to-r from-brand-400 via-cyan-300 to-brand-500 bg-clip-text text-transparent">
              {t("name")}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-2 font-mono text-sm text-brand-400"
          >
            <span>{t("roleTag")}</span>
            <span className="hidden h-px w-12 bg-gradient-to-r from-brand-500 to-transparent sm:block" />
            <span className="text-foreground/80">{t("tagline")}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={social.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-brand-700/60 bg-gradient-to-br from-brand-900/40 to-brand-950/60 px-5 py-3 text-sm font-medium text-foreground/80 transition-all hover:border-brand-500 hover:text-foreground hover:shadow-lg hover:shadow-brand-900/50"
            >
              <Github className="h-4 w-4 text-brand-300 transition-transform group-hover:scale-110" />
              <span>
                <span className="text-muted-foreground">{t("github")} </span>
                <span className="font-semibold text-foreground">
                  {t("githubBrand")}
                </span>
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-600/0 via-brand-500/10 to-brand-600/0 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>

            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl border border-brand-900/40 bg-brand-950/20 px-5 py-3 text-sm font-medium text-foreground/80 transition-all hover:border-brand-700 hover:bg-brand-900/30 hover:text-foreground"
            >
              <Sparkles className="h-4 w-4 text-brand-400" />
              {t("viewProjects")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-xs tracking-wider text-brand-700">
              {t("loadedModules")}
            </span>
            {loadedModules.map((mod, i) => (
              <motion.span
                key={mod}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.05 }}
                className="rounded-md border border-brand-700/40 bg-brand-950/40 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-300"
              >
                {mod}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right code editor */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          {/* Glow behind */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 via-cyan-500/10 to-brand-500/20 blur-3xl" />

          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-brand-900/60 bg-[#0a0f1e]/95 shadow-2xl shadow-brand-950/60 backdrop-blur">
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-brand-900/50 bg-[#0a0f1e]/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-brand-400">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {t("codeFile")}
              </div>
              <div className="w-12" />
            </div>

            {/* Code content */}
            <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
              <CodeLine n={1}>
                <span className="text-slate-500">{t("codeComment")}</span>
              </CodeLine>
              <CodeLine n={2}>
                <span className="text-purple-400">import</span>
                <span className="text-foreground/90"> {`{ `}</span>
                <span className="text-cyan-300">Developer</span>
                <span className="text-foreground/90">{` } `}</span>
                <span className="text-purple-400">from</span>
                <span className="text-emerald-300">{` './universe'`}</span>
                <span className="text-foreground/90">;</span>
              </CodeLine>
              <CodeLine n={3}> </CodeLine>
              <CodeLine n={4}>
                <span className="text-purple-400">const</span>
                <span className="text-cyan-300"> Portfolio</span>
                <span className="text-foreground/90"> = () </span>
                <span className="text-brand-400">⇒</span>
                <span className="text-foreground/90">{` {`}</span>
              </CodeLine>
              <CodeLine n={5}>
                <span className="ml-4 inline-block" />
                <span className="text-purple-400">return</span>
                <span className="text-foreground/90"> (</span>
              </CodeLine>
              <CodeLine n={6}>
                <span className="ml-8 inline-block" />
                <span className="text-foreground/90">{`<`}</span>
                <span className="text-cyan-300">Developer</span>
              </CodeLine>
              <CodeLine n={7}>
                <span className="ml-12 inline-block" />
                <span className="text-rose-300">name</span>
                <span className="text-foreground/90">=</span>
                <span className="text-emerald-300">{'"David Botelho"'}</span>
              </CodeLine>
              <CodeLine n={8}>
                <span className="ml-12 inline-block" />
                <span className="text-rose-300">role</span>
                <span className="text-foreground/90">=</span>
                <span className="text-emerald-300">{'"Fullstack Engineer"'}</span>
              </CodeLine>
              <CodeLine n={9}>
                <span className="ml-12 inline-block" />
                <span className="text-rose-300">passion</span>
                <span className="text-foreground/90">=</span>
                <span className="text-emerald-300">{'"Engineering Beyond Boundaries"'}</span>
              </CodeLine>
              <CodeLine n={10}>
                <span className="ml-8 inline-block" />
                <span className="text-foreground/90">{`/>`}</span>
              </CodeLine>
              <CodeLine n={11}>
                <span className="ml-4 inline-block" />
                <span className="text-foreground/90">);</span>
              </CodeLine>
              <CodeLine n={12}>
                <span className="text-foreground/90">{`};`}</span>
                <span className="ml-1 inline-block h-4 w-1.5 translate-y-0.5 animate-blink bg-brand-400" />
              </CodeLine>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "loop" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-500/70 hover:text-brand-400"
        aria-label={t("scrollHint")}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}

function CodeLine({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex items-start">
      <span className="mr-4 w-6 select-none text-right text-slate-600">{n}</span>
      <span className="flex-1 whitespace-pre">{children}</span>
    </div>
  );
}

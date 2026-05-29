import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="font-mono text-6xl font-bold text-brand-400">404</h1>
      <p className="text-lg text-foreground/80">Page not found</p>
      <Link
        href="/"
        className="rounded-lg border border-brand-700/50 bg-brand-950/30 px-4 py-2 text-sm text-foreground/80 transition-all hover:border-brand-500 hover:text-foreground"
      >
        Go home
      </Link>
    </div>
  );
}

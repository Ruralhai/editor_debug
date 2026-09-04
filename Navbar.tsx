import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(17,19,21,0.75)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Link href="/" className="flex flex-col">
          <span className="font-heading text-2xl font-black tracking-[0.28em] text-[var(--color-heading)]">
            PACKFORGE
          </span>

          <span className="text-xs text-[var(--color-muted)]">
            Professional Packaging Platform
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium tracking-wide text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-primary)]"
          >
            Features
          </Link>

          <Link
            href="#solutions"
            className="text-sm font-medium tracking-wide text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-primary)]"
          >
            Solutions
          </Link>

          <Link
            href="#pricing"
            className="text-sm font-medium tracking-wide text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-primary)]"
          >
            Pricing
          </Link>

          <Link
            href="#about"
            className="text-sm font-medium tracking-wide text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-primary)]"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className="text-sm font-medium text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-primary)]"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[#111315] shadow-lg shadow-[rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[var(--color-primary-hover)]"
          >
            Start Free
          </Link>
        </div>

      </div>
    </nav >
  );
}

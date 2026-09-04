import {
  Undo2,
  Redo2,
  Eye,
  Download,
  Share2,
  Search,
} from "lucide-react";

export default function TopToolbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-card)] px-6">

      {/* Left */}
      <div className="flex items-center gap-8">

        <div>
          <h1 className="text-lg font-bold tracking-wide text-[var(--color-heading)]">
            PackForge AI
          </h1>

          <p className="text-xs text-[var(--color-muted)]">
            Packaging Design Studio
          </p>
        </div>

        <div className="flex items-center gap-2">

          <button className="rounded-lg p-2 transition hover:bg-[var(--color-surface)]">
            <Undo2
              size={18}
              className="text-[var(--color-text)]"
            />
          </button>

          <button className="rounded-lg p-2 transition hover:bg-[var(--color-surface)]">
            <Redo2
              size={18}
              className="text-[var(--color-text)]"
            />
          </button>

        </div>

      </div>

      {/* Center */}

      <div className="hidden w-96 items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 lg:flex">

        <Search
          size={18}
          className="mr-2 text-[var(--color-muted)]"
        />

        <input
          type="text"
          placeholder="Search tools, assets or templates..."
          className="w-full bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-muted)]"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        <button className="rounded-xl border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-heading)] transition hover:bg-[var(--color-surface)]">
          <span className="flex items-center gap-2">
            <Eye size={16} />
            Preview
          </span>
        </button>

        <button className="rounded-xl border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-heading)] transition hover:bg-[var(--color-surface)]">
          <span className="flex items-center gap-2">
            <Share2 size={16} />
            Share
          </span>
        </button>

        <button className="rounded-xl bg-[var(--color-primary)] px-5 py-2 font-semibold text-[#111315] transition hover:bg-[var(--color-primary-hover)]">
          <span className="flex items-center gap-2">
            <Download size={16} />
            Export
          </span>
        </button>

      </div>

    </header>
  );
}
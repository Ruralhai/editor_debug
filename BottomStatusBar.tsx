"use client";

import {
  Grid3X3,
  Magnet,
  MousePointer2,
  CheckCircle2,
} from "lucide-react";

export default function BottomStatusBar() {
  return (
    <footer className="flex h-11 items-center justify-between border-t border-[var(--color-border)] bg-[var(--color-card)] px-6 text-sm">

      {/* Left */}
      <div className="flex items-center gap-6 text-[var(--color-text)]">

        <div className="flex items-center gap-2">
          <CheckCircle2
            size={16}
            className="text-green-500"
          />
          Auto Saved
        </div>

        <div className="flex items-center gap-2">
          <MousePointer2 size={16} />
          Select Tool
        </div>

      </div>

      {/* Center */}
      <div className="flex items-center gap-6 text-[var(--color-text)]">

        <button className="flex items-center gap-2 rounded-lg px-3 py-1 transition hover:bg-[var(--color-surface)]">
          <Grid3X3 size={16} />
          Grid
        </button>

        <button className="flex items-center gap-2 rounded-lg px-3 py-1 transition hover:bg-[var(--color-surface)]">
          <Magnet size={16} />
          Snap
        </button>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6 text-[var(--color-text)]">

        <span>Canvas 900 × 600</span>

        <span>100%</span>

      </div>

    </footer>
  );
}
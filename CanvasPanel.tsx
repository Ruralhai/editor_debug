"use client";

export default function CanvasPanel() {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      <h3 className="text-sm font-semibold">Canvas</h3>
      <p className="mt-2 text-sm text-gray-500">
        Select an object to edit its properties.
      </p>
    </div>
  );
}
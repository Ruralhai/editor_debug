"use client";

import { Bold, Italic, Underline } from "lucide-react";

type TypographySectionProps = {
  fontFamily: string;
  fontSize: number;

  fontStyle: "normal" | "bold" | "italic" | "bold italic";

  onFontFamilyChange: (value: string) => void;
  onFontSizeChange: (value: number) => void;

  onToggleBold: () => void;
  onToggleItalic: () => void;
  onToggleUnderline: () => void;
};

const FONT_FAMILIES = [
  "Inter",
  "Poppins",
  "Roboto",
  "Montserrat",
  "Open Sans",
  "Lato",
];

export default function TypographySection({
  fontFamily,
  fontSize,
  fontStyle,
  onFontFamilyChange,
  onFontSizeChange,
  onToggleBold,
  onToggleItalic,
  onToggleUnderline,
}: TypographySectionProps) {
  return (
    <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      <h3 className="mb-4 text-sm font-semibold">Typography</h3>

      {/* Font */}
      <div className="mb-4">
        <label className="mb-1 block text-xs">Font</label>

        <select
          value={fontFamily}
          onChange={(e) => onFontFamilyChange(e.target.value)}
          className="w-full rounded-lg border p-2"
        >
          {FONT_FAMILIES.map((font) => (
            <option
              key={font}
              value={font}
              style={{ fontFamily: font }}
            >
              {font}
            </option>
          ))}
        </select>
      </div>

      {/* Size */}
      <div className="mb-4">
        <label className="mb-1 block text-xs">Size</label>

        <input
          type="number"
          min={8}
          max={300}
          value={fontSize}
          onChange={(e) =>
            onFontSizeChange(Number(e.target.value))
          }
          className="w-full rounded-lg border p-2"
        />
      </div>

      {/* Style Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onToggleBold}
          className={`rounded-lg border p-2 transition ${
            fontStyle.includes("bold")
              ? "bg-gray-200"
              : "hover:bg-gray-100"
          }`}
        >
          <Bold size={16} />
        </button>

        <button
          onClick={onToggleItalic}
          className={`rounded-lg border p-2 transition ${
            fontStyle.includes("italic")
              ? "bg-gray-200"
              : "hover:bg-gray-100"
          }`}
        >
          <Italic size={16} />
        </button>

        <button
          onClick={onToggleUnderline}
          className="rounded-lg border p-2 hover:bg-gray-100"
        >
          <Underline size={16} />
        </button>
      </div>
    </section>
  );
}
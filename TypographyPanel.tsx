"use client";

type TypographyPanelProps = {
  fontSize: number;
  onFontSizeChange: (value: number) => void;
};

export default function TypographyPanel({
  fontSize,
  onFontSizeChange,
}: TypographyPanelProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm">
      <div>
        <label className="mb-1 block text-sm font-medium">
          Font Size
        </label>

        <input
          type="number"
          min={8}
          max={300}
          value={fontSize}
          onChange={(e) =>
            onFontSizeChange(Number(e.target.value))
          }
          className="w-full rounded border px-3 py-2"
        />
      </div>
    </div>
  );
}
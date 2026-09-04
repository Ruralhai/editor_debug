"use client";

import TypographySection from "./sections/TypographySection";

type TextPanelProps = {
  fontFamily: string;
  fontSize: number;

  fontStyle: "normal" | "bold" | "italic" | "bold italic";

  onFontFamilyChange: (value: string) => void;
  onFontSizeChange: (value: number) => void;

  onToggleBold: () => void;
  onToggleItalic: () => void;
  onToggleUnderline: () => void;
};

export default function TextPanel(props: TextPanelProps) {
  return (
    <div className="space-y-6">
      <TypographySection {...props} />
    </div>
  );
}
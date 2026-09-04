"use client";

import { useEditorStore } from "../store/editorStore";

import CanvasPanel from "./panels/CanvasPanel";
import ShapePanel from "./panels/ShapePanel";
import TextPanel from "./panels/TextPanel";

export default function RightSidebar() {
  const selectedId = useEditorStore((state) => state.selectedId);
  const objects = useEditorStore((state) => state.objects);
  const updateObject = useEditorStore((state) => state.updateObject);

  const selectedObject = objects.find(
    (object) => object.id === selectedId
  );

  if (!selectedObject) {
    return (
      <aside className="w-80 border-l border-[var(--color-border)] bg-[var(--color-card)] p-5">
        <CanvasPanel />
      </aside>
    );
  }

  if (selectedObject.type !== "text") {
    return (
      <aside className="w-80 border-l border-[var(--color-border)] bg-[var(--color-card)] p-5">
        <ShapePanel />
      </aside>
    );
  }

  return (
    <aside className="w-80 border-l border-[var(--color-border)] bg-[var(--color-card)] p-5">
      <TextPanel
        fontFamily={selectedObject.fontFamily ?? "Inter"}
        fontSize={selectedObject.fontSize ?? 16}
        fontStyle={selectedObject.fontStyle ?? "normal"}

        onFontFamilyChange={(value) => {
          console.log("Changing font to:", value);

          updateObject(selectedObject.id, {
            fontFamily: value,
          });
        }}

        onFontSizeChange={(value) =>
          updateObject(selectedObject.id, {
            fontSize: value,
          })
        }

        onToggleBold={() => {
          const current = selectedObject.fontStyle ?? "normal";

          const next =
            current === "normal"
              ? "bold"
              : current === "italic"
                ? "bold italic"
                : current === "bold"
                  ? "normal"
                  : "italic";

          updateObject(selectedObject.id, {
            fontStyle: next,
          });
        }}

        onToggleItalic={() => {
          const current = selectedObject.fontStyle ?? "normal";

          const next =
            current === "normal"
              ? "italic"
              : current === "bold"
                ? "bold italic"
                : current === "italic"
                  ? "normal"
                  : "bold";

          updateObject(selectedObject.id, {
            fontStyle: next,
          });
        }}

        onToggleUnderline={() => {
          // We'll implement underline in the next milestone.
        }}
      />
    </aside>
  );
}
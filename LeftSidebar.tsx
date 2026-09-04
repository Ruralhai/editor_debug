"use client";

import { useState } from "react";
import { useEditorStore } from "../store/editorStore";
import {
  MousePointer2,
  Type,
  Image,
  Shapes,
  Package,
  FolderOpen,
  Layers3,
  Sparkles,
  Palette,
  Upload,
} from "lucide-react";
import ShapesPanel from "./ShapesPanel";
import { DEFAULT_STYLES } from "../canvas/data/defaultStyles";
import { DEFAULT_TEXT_STYLE } from "../typography";

const tools = [
  { icon: MousePointer2, label: "Select" },
  { icon: Type, label: "Text" },
  { icon: Image, label: "Images" },
  { icon: Shapes, label: "Shapes" },
  { icon: Package, label: "Packaging" },
  { icon: FolderOpen, label: "Templates" },
  { icon: Palette, label: "Brand Kit" },
  { icon: Upload, label: "Uploads" },
  { icon: Layers3, label: "Layers" },
  { icon: Sparkles, label: "AI" },
];

export default function LeftSidebar() {

  const addObject = useEditorStore(
    (state) => state.addObject
  );

  const setSelectedId = useEditorStore(
    (state) => state.setSelectedId
  );

  const [showShapesPanel, setShowShapesPanel] = useState(false);

  const handleAddObject = (
    type: "rectangle" | "circle" | "text"
  ) => {
    const id = `shape-${Date.now()}`;

    switch (type) {
      case "rectangle":
        addObject({
          id,
          type: "rectangle",
          x: 200,
          y: 200,
          width: 200,
          height: 120,
          fill: DEFAULT_STYLES.rectangle.fill,
        });
        break;

      case "circle":
        addObject({
          id,
          type: "circle",
          x: 200,
          y: 200,
          width: 150,
          height: 150,
          fill: DEFAULT_STYLES.circle.fill,
        });
        break;

      case "text":
        addObject({
          id,
          type: "text",

          x: 200,
          y: 200,

          width: 180,
          height: 32,

          text: "",

          fill: DEFAULT_STYLES.text.fill,

          ...DEFAULT_TEXT_STYLE,
        });
        break;
    }

    setSelectedId(id);
  };
  return (
    <>
      <aside className="flex w-20 flex-col items-center border-r border-[var(--color-border)] bg-[var(--color-card)] py-4">

        <div className="flex flex-col gap-3">
          {tools.map(({ icon: Icon, label }) => (
            <button
              key={label}
              title={label}
              onClick={() => {
                if (label === "Shapes") {
                  setShowShapesPanel((prev) => !prev);
                  return;
                }

                if (label === "Text") {
                  handleAddObject("text");
                  return;
                }
              }}
              className="group flex h-12 w-12 items-center justify-center rounded-xl text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary)] hover:text-[#111315]"
            >
              <Icon size={20} />
            </button>
          ))}
        </div>

      </aside>

      {showShapesPanel && (
        <ShapesPanel
          onSelect={(shape) => {
            switch (shape) {
              case "Rectangle":
                handleAddObject("rectangle");
                break;

              case "Circle":
                handleAddObject("circle");
                break;
            }

            setShowShapesPanel(false);
          }}
        />
      )}
    </>
  );
}
"use client";

import { useEffect, useRef } from "react";
import type { CanvasObject } from "../store/slices/objectSlice";
import {
  getTextareaPosition,
  getTextareaStyle,
  resizeTextarea,
  focusTextarea,
} from "./textEditorUtils";

type InlineTextEditorProps = {
  object: CanvasObject;

  value: string;

  stageRef: React.RefObject<any>;

  onChange: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
};

export default function InlineTextEditor({
  object,
  value,
  stageRef,
  onChange,
  onSave,
  onCancel,
}: InlineTextEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    focusTextarea(textareaRef.current);
    resizeTextarea(textareaRef.current);
  }, []);

  useEffect(() => {
    resizeTextarea(textareaRef.current);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        textareaRef.current &&
        !textareaRef.current.contains(event.target as Node)
      ) {
        onSave();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [onSave]);

  const position = getTextareaPosition(stageRef, object);

  return (
    <div
      className="fixed z-50"
      style={{
        left: position.left,
        top: position.top,
      }}
    >
      <textarea
        ref={textareaRef}
        autoFocus
        placeholder="Type here..."
        value={value}
        style={getTextareaStyle(object)}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          e.stopPropagation();

          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSave();
          }

          if (e.key === "Escape") {
            e.preventDefault();
            onCancel();
          }
        }}
      />
    </div>
  );
}
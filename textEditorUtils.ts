import type { CanvasObject } from "../store/slices/objectSlice";

export type TextareaPosition = {
  left: number;
  top: number;
};

export function getTextareaPosition(
  stageRef: React.RefObject<any>,
  object: CanvasObject | undefined
): TextareaPosition {
  if (!stageRef.current || !object) {
    return {
      left: 0,
      top: 0,
    };
  }

  const stageBox = stageRef.current.container().getBoundingClientRect();

  return {
    left: stageBox.left + object.x,
    top: stageBox.top + object.y,
  };
}

export function resizeTextarea(
  textarea: HTMLTextAreaElement | null
) {
  if (!textarea) return;

  textarea.style.height = "0px";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

export function getTextareaStyle(
  object: CanvasObject | undefined
): React.CSSProperties {
  const fontStyle = object?.fontStyle ?? "normal";

  return {
    width: object?.width ?? 180,
    minHeight: 32,

    fontSize: object?.fontSize ?? 16,
    fontFamily: object?.fontFamily ?? "Inter",

    fontWeight: fontStyle.includes("bold") ? "700" : "400",
    fontStyle: fontStyle.includes("italic") ? "italic" : "normal",

    color: object?.fill ?? "#111827",

    lineHeight: String(object?.lineHeight ?? 1.2),

    background: "transparent",
    border: "none",
    outline: "none",
    resize: "none",
    overflow: "hidden",
    padding: 0,
    margin: 0,
    boxShadow: "none",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  };
}

export function focusTextarea(
  textarea: HTMLTextAreaElement | null
) {
  if (!textarea) return;

  textarea.focus();

  const length = textarea.value.length;

  textarea.setSelectionRange(length, length);
}
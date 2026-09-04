import Konva from "konva";
import type { CanvasObject } from "../store/slices/objectSlice";

export function measureTextHeight(object: CanvasObject): number {
  const text = new Konva.Text({
    text: object.text ?? "",
    width: object.width,
    fontSize: object.fontSize ?? 16,
    fontFamily: object.fontFamily ?? "Inter",
    fontStyle: object.fontStyle ?? "normal",
    fontVariant: "normal",
    lineHeight: object.lineHeight ?? 1.2,
  });

  return text.height();
}
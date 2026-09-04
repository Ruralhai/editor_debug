import { Rect } from "react-konva";
import type { CanvasObject as CanvasObjectType } from "./types/canvas";

type Props = {
  object: CanvasObjectType;
};

export default function CanvasObject({ object }: Props) {
  return (
    <Rect
      id={object.id}
      x={object.x}
      y={object.y}
      width={object.width}
      height={object.height}
      fill={object.fill}
      cornerRadius={12}
    />
  );
}
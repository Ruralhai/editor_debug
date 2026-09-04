import { Rect } from "react-konva";

type RectangleObjectProps = {
  rectRef: any;

  id: string;
  x: number;
  y: number;
  width: number;
  height: number;

  fill: string;

  selected: boolean;

  onClick: () => void;
  onDragEnd: (e: any) => void;
  onTransformEnd: () => void;
};

export default function RectangleObject({
  rectRef,
  id,
  x,
  y,
  width,
  height,
  fill,
  selected,
  onClick,
  onDragEnd,
  onTransformEnd,
}: RectangleObjectProps) {
  return (
    <Rect
      ref={rectRef}
      id={id}
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      draggable
      stroke={selected ? "#0ea5e9" : undefined}
      strokeWidth={selected ? 3 : 0}
      onClick={onClick}
      onDragEnd={onDragEnd}
      onTransformEnd={onTransformEnd}
    />
  );
}
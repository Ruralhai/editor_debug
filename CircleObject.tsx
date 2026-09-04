import { Group, Circle } from "react-konva";

type CircleObjectProps = {
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

export default function CircleObject({
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
}: CircleObjectProps) {
    return (
        <Group
            ref={rectRef}
            id={id}
            x={x}
            y={y}
            draggable
            onClick={onClick}
            onDragEnd={onDragEnd}
            onTransformEnd={onTransformEnd}
        >
            <Circle
                x={width / 2}
                y={height / 2}
                radius={width / 2}
                fill={fill}
                stroke={selected ? "#0ea5e9" : undefined}
                strokeWidth={selected ? 3 : 0}
            />
        </Group>
    );
}
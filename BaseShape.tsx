import { Group } from "react-konva";

type BaseShapeProps = {
    rectRef: any;

    id: string;
    x: number;
    y: number;

    selected: boolean;

    onClick: () => void;
    onDragEnd: (e: any) => void;
    onTransformEnd: () => void;

    children: React.ReactNode;
};

export default function BaseShape({
    rectRef,
    id,
    x,
    y,
    onClick,
    onDragEnd,
    onTransformEnd,
    children,
}: BaseShapeProps) {
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
            {children}
        </Group>
    );
}
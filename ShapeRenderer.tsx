import RectangleObject from "./RectangleObject";
import CircleObject from "./CircleObject";
import TextObject from "../text/TextObject";
import { CanvasObject } from "../store/slices/objectSlice";


type ShapeRendererProps = {
    object: CanvasObject;
    selected: boolean;

    rectRef: (node: any) => void;

    editingId: string | null;

    onClick: () => void;
    onTextDoubleClick: () => void;
    onDragEnd: (e: any) => void;
    onTransformEnd: () => void;
};

export default function ShapeRenderer({
    object,
    selected,
    rectRef,
    editingId,
    onClick,
    onTextDoubleClick,
    onDragEnd,
    onTransformEnd,
}: ShapeRendererProps) {
    switch (object.type) {
        case "rectangle":
            return (
                <RectangleObject
                    rectRef={rectRef}
                    id={object.id}
                    x={object.x}
                    y={object.y}
                    width={object.width}
                    height={object.height}
                    fill={object.fill}
                    selected={selected}
                    onClick={onClick}
                    onDragEnd={onDragEnd}
                    onTransformEnd={onTransformEnd}
                />
            );

        case "circle":
            return (
                <CircleObject
                    rectRef={rectRef}
                    id={object.id}
                    x={object.x}
                    y={object.y}
                    width={object.width}
                    height={object.height}
                    fill={object.fill}
                    selected={selected}
                    onClick={onClick}
                    onDragEnd={onDragEnd}
                    onTransformEnd={onTransformEnd}
                />
            );

        case "text":
            if (editingId === object.id) {
                return null;
            }

            console.log(
                "ShapeRenderer:",
                object.id,
                object.fontFamily,
                object.fontStyle
            );
            
            return (
                <TextObject
                    rectRef={rectRef}
                    id={object.id}
                    x={object.x}
                    y={object.y}
                    width={object.width ?? 50}
                    text={object.text || ""}

                    fill={object.fill}

                    fontFamily={object.fontFamily}
                    fontSize={object.fontSize}
                    fontStyle={object.fontStyle}
                    textAlign={object.textAlign}
                    lineHeight={object.lineHeight}
                    letterSpacing={object.letterSpacing}
                    rotation={object.rotation}
                    opacity={object.opacity}

                    selected={selected}
                    onClick={onClick}
                    onDoubleClick={onTextDoubleClick}
                    onDragEnd={onDragEnd}
                    onTransformEnd={onTransformEnd}
                />
            );

        default:
            return null;
    }
}
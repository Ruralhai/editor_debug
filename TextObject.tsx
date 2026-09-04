import { useEffect } from "react";
import { Text } from "react-konva";

type TextObjectProps = {
    rectRef: any;

    id: string;
    x: number;
    y: number;
    width: number;

    fill: string;
    text: string;

    fontFamily?: string;
    fontSize?: number;
    fontStyle?: "normal" | "bold" | "italic" | "bold italic";

    textAlign?: "left" | "center" | "right";

    lineHeight?: number;
    letterSpacing?: number;

    rotation?: number;
    opacity?: number;

    selected: boolean;

    onClick: () => void;
    onDoubleClick: () => void;
    onDragEnd: (e: any) => void;
    onTransformEnd: () => void;
};

export default function TextObject({
    rectRef,
    id,
    x,
    y,
    width,

    fill,
    text,

    fontFamily = "Inter",
    fontSize = 16,
    fontStyle = "normal",

    textAlign = "left",

    lineHeight = 1.2,
    letterSpacing = 0,

    rotation = 0,
    opacity = 1,

    selected,

    onClick,
    onDoubleClick,
    onDragEnd,
    onTransformEnd,
}: TextObjectProps) {

    useEffect(() => {
        if (!rectRef?.current) return;

        rectRef.current.clearCache?.();
        rectRef.current.getLayer()?.batchDraw();
    }, [fontFamily, fontSize, fontStyle, text]);

    console.log("TextObject font:", fontFamily);

    return (
        <Text
            key={`${id}-${fontFamily}-${fontStyle}-${fontSize}-${text}`}
            ref={rectRef}
            id={id}

            x={x}
            y={y}

            text={text ?? ""}
            width={width}

            hitStrokeWidth={16}

            fill={fill ?? "#111827"}

            fontFamily="Lato"
            fontSize={fontSize ?? 16}
            fontStyle={fontStyle ?? "normal"}

            lineHeight={lineHeight ?? 1.2}

            letterSpacing={letterSpacing ?? 0}

            align={textAlign ?? "left"}

            rotation={rotation ?? 0}

            opacity={opacity ?? 1}

            draggable
           listening={true}
            onClick={onClick}
            onDblClick={onDoubleClick}
            onDragEnd={onDragEnd}
            onTransformEnd={onTransformEnd}
        />
    );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Transformer } from "react-konva";
import ShapeRenderer from "./ShapeRenderer";
import {
    ARTBOARD_WIDTH,
    ARTBOARD_HEIGHT,
} from "./constants";

type ArtboardProps = {
    zoom: number;
};
import { useEditorStore } from "../store/editorStore";
import { useKeyboard } from "./hooks/useKeyboard";
import InlineTextEditor from "../text/InlineTextEditor";

export default function Artboard({ zoom: _zoom }: ArtboardProps) {

    const selectedId = useEditorStore(
        (state) => state.selectedId
    );

    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingText, setEditingText] = useState("");

    const updateText = useEditorStore(
        (state) => state.updateText
    );

    const setSelectedId = useEditorStore(
        (state) => state.setSelectedId
    );

    const rectRef = useRef<any>(null);
    const transformerRef = useRef<any>(null);

    const stageRef = useRef<any>(null);

    const objectRefs = useRef<Record<string, any>>({});
    const selectedNode =
        selectedId ? objectRefs.current[selectedId] : null;

    const objects = useEditorStore((state) => state.objects);

    const updateObject = useEditorStore(
        (state) => state.updateObject
    );

    const addObject = useEditorStore(
        (state) => state.addObject
    );

    const selectedObject =
        objects.find((object) => object.id === selectedId) ?? objects[0];

    useEffect(() => {
        if (!transformerRef.current) return;

        if (selectedNode) {
            transformerRef.current.nodes([selectedNode]);
        } else {
            transformerRef.current.nodes([]);
        }

        transformerRef.current.getLayer()?.batchDraw();
    }, [selectedNode]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (!editingId) return;

            if (
                textareaRef.current &&
                !textareaRef.current.contains(event.target as Node)
            ) {
                updateText(editingId, editingText);
                setEditingId(null);
                setEditingText("");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [editingId, editingText, updateText]);

    useEffect(() => {
        resizeTextarea();
    }, [editingText]);

    useKeyboard();

    const handleAddRectangle = () => {
        const id = `rect-${Date.now()}`;

        addObject({
            id,
            type: "rectangle",
            x: 200 + objects.length * 50,
            y: 200 + objects.length * 50,
            width: 200,
            height: 120,
            fill: "#3b82f6",
        });

        setSelectedId(id);
    };

    const editingObject = objects.find(
        (object) => object.id === editingId
    );

    const containerRef = useRef<HTMLDivElement>(null);

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const stageBox = stageRef.current
        ?.container()
        .getBoundingClientRect();

    const textareaPosition =
        editingObject && stageBox
            ? {
                left: stageBox.left + editingObject.x,
                top: stageBox.top + editingObject.y,
            }
            : null;

    const resizeTextarea = () => {
        if (!textareaRef.current) return;

        textareaRef.current.style.height = "0px";
        textareaRef.current.style.height =
            `${textareaRef.current.scrollHeight}px`;
    };

    console.log(
        objects.map((obj) => ({
            id: obj.id,
            fontFamily: obj.fontFamily,
        }))
    );
    return (
        <div
            ref={containerRef}
            className="relative"
        >
            {editingObject && (
                <InlineTextEditor
                    object={editingObject}
                    value={editingText}
                    stageRef={stageRef}
                    onChange={setEditingText}
                    onSave={() => {
                        if (editingId) {
                            updateText(editingId, editingText);
                        }
                        setEditingId(null);
                        setEditingText("");
                    }}
                    onCancel={() => {
                        setEditingId(null);
                        setEditingText("");
                    }}
                />
            )}
            <Stage
                ref={stageRef}
                width={ARTBOARD_WIDTH}
                height={ARTBOARD_HEIGHT}
                style={{
                    background: "#ffffff",
                    borderRadius: "18px",
                    border: "1px solid #e5e7eb",
                }}
                onMouseDown={(e) => {
                    if (e.target === e.target.getStage()) {
                        setSelectedId(null);
                    }
                }}
            >
                <Layer>
                    {objects.map((object) => (
                        <ShapeRenderer
                            key={object.id}
                            object={object}
                            selected={selectedId === object.id}
                            editingId={editingId}
                            rectRef={(node: any) => {
                                if (node) {
                                    objectRefs.current[object.id] = node;
                                }
                            }}
                            onClick={() => setSelectedId(object.id)}
                            onTextDoubleClick={() => {
                                setEditingId(object.id);
                                setEditingText(object.text || "");

                                setTimeout(() => {
                                    resizeTextarea();
                                }, 0);
                            }}
                            onDragEnd={(e) => {
                                updateObject(object.id, {
                                    x: e.target.x(),
                                    y: e.target.y(),
                                });
                            }}
                            onTransformEnd={() => {
                                const node = objectRefs.current[object.id];
                                if (!node) return;

                                const scaleX = node.scaleX();
                                const scaleY = node.scaleY();

                                node.scaleX(1);
                                node.scaleY(1);

                                const newWidth = Math.max(40, node.width() * scaleX);
                                const newHeight = Math.max(40, node.height() * scaleY);

                                if (object.type === "text") {
                                    updateObject(object.id, {
                                        x: node.x(),
                                        y: node.y(),
                                        width: newWidth,
                                    });

                                    return;
                                }

                                updateObject(object.id, {
                                    x: node.x(),
                                    y: node.y(),
                                    width:
                                        object.type === "circle"
                                            ? Math.max(newWidth, newHeight)
                                            : newWidth,
                                    height:
                                        object.type === "circle"
                                            ? Math.max(newWidth, newHeight)
                                            : newHeight,
                                });
                            }}
                        />
                    ))}

                    <Transformer
                        ref={transformerRef}
                        rotateEnabled={false}
                        keepRatio={false}
                        flipEnabled={false}
                        enabledAnchors={[
                            "middle-left",
                            "middle-right",
                        ]}
                        anchorSize={8}
                        anchorCornerRadius={4}
                        anchorFill="#ffffff"
                        anchorStroke="#2563eb"
                        anchorStrokeWidth={2}
                        borderStroke="#2563eb"
                        borderStrokeWidth={2}
                        boundBoxFunc={(oldBox, newBox) => {
                            if (newBox.width < 40 || newBox.height < 40) {
                                return oldBox;
                            }

                            return newBox;
                        }}
                    />
                </Layer>
            </Stage>
        </div>

    );
}
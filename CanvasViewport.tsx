"use client";

import { useEditorStore } from "../store/editorStore";
import { usePan, useZoom } from "./hooks";
import { useEffect, useRef } from "react";
import Artboard from "./Artboard";
import {
    WORKSPACE_WIDTH,
    WORKSPACE_HEIGHT,
    ARTBOARD_WIDTH,
    ARTBOARD_HEIGHT,
} from "./constants";

export default function CanvasViewport() {
    const viewportRef = useRef<HTMLDivElement>(null);
    const {
        zoom,
    } = useZoom(viewportRef);

    const {
        onMouseDown,
        onMouseMove,
        onMouseUp,
    } = usePan(viewportRef);

    useEffect(() => {
        const viewport = viewportRef.current;

        if (!viewport) return;

        requestAnimationFrame(() => {
            viewport.scrollLeft =
                (WORKSPACE_WIDTH - viewport.clientWidth) / 2;

            viewport.scrollTop =
                (WORKSPACE_HEIGHT - viewport.clientHeight) / 2;
        });
    }, []);

    return (
        <div
            ref={viewportRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onAuxClick={(e) => e.preventDefault()}
            className="absolute inset-0 overflow-auto bg-[var(--color-surface)]"
        >
            <div
                className="relative"
                style={{
                    width: `${WORKSPACE_WIDTH}px`,
                    minWidth: `${WORKSPACE_WIDTH}px`,
                    height: `${WORKSPACE_HEIGHT}px`,
                    minHeight: `${WORKSPACE_HEIGHT}px`,
                    backgroundColor: "#171A1F",

                    backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",

                    backgroundSize: "28px 28px",
                }}
            >
                <div
                    className="absolute"
                    style={{
                        left: (WORKSPACE_WIDTH - ARTBOARD_WIDTH) / 2,
                        top: (WORKSPACE_HEIGHT - ARTBOARD_HEIGHT) / 2,
                        transform: `scale(${zoom})`,
                        transformOrigin: "top left",
                    }}
                >
                    <Artboard zoom={zoom} />
                </div>
            </div>
        </div>
    );
}
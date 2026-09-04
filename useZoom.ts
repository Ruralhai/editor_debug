import { useEffect } from "react";
import { useEditorStore } from "../../store/editorStore";
import { clamp } from "../utils/math";

export function useZoom(
    viewportRef: React.RefObject<HTMLDivElement | null>) {

    const zoom = useEditorStore((state) => state.zoom);
    const setZoom = useEditorStore((state) => state.setZoom);
    const setScroll = useEditorStore((state) => state.setScroll);

    useEffect(() => {
        const viewport = viewportRef.current;

        if (!viewport) return;

        const handleWheel = (e: WheelEvent) => {
            if (!e.altKey) return;

            e.preventDefault();

            const rect = viewport.getBoundingClientRect();

            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const direction = e.deltaY > 0 ? -1 : 1;

            const nextZoom = Math.min(
                3,
                Math.max(0.25, zoom + direction * 0.1)
            );

            const scale = nextZoom / zoom;

            const newScrollLeft =
                (viewport.scrollLeft + mouseX) * scale - mouseX;

            const newScrollTop =
                (viewport.scrollTop + mouseY) * scale - mouseY;

            setZoom(nextZoom);

            viewport.scrollLeft = newScrollLeft;
            viewport.scrollTop = newScrollTop;

            setScroll(newScrollLeft, newScrollTop);
        };

        viewport.addEventListener("wheel", handleWheel, {
            passive: false,
        });

        return () => {
            viewport.removeEventListener("wheel", handleWheel);
        };
    }, [viewportRef, zoom, setZoom]);

    return {
        zoom,
    };
}
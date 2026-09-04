import { useEffect, useRef } from "react";

export function usePan(
    viewportRef: React.RefObject<HTMLDivElement | null>
) {
    const isPanning = useRef(false);
    const isSpacePressed = useRef(false);
    const lastPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code !== "Space") return;

            e.preventDefault();

            if (
                e.target instanceof HTMLInputElement ||
                e.target instanceof HTMLTextAreaElement
            ) {
                return;
            }

            isSpacePressed.current = true;
            document.body.style.cursor = "grab";
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code !== "Space") return;

            isSpacePressed.current = false;
            isPanning.current = false;

            document.body.style.cursor = "default";
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const isLeftButton = e.button === 0;
        const isMiddleButton = e.button === 1;

        if (!(isLeftButton && isSpacePressed.current) && !isMiddleButton) {
            return;
        }

        e.preventDefault();

        isPanning.current = true;

        lastPosition.current = {
            x: e.clientX,
            y: e.clientY,
        };

        document.body.style.cursor = "grabbing";
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isPanning.current || !viewportRef.current) return;

        const dx = e.clientX - lastPosition.current.x;
        const dy = e.clientY - lastPosition.current.y;

        viewportRef.current.scrollLeft -= dx;
        viewportRef.current.scrollTop -= dy;

        lastPosition.current = {
            x: e.clientX,
            y: e.clientY,
        };
    };

    const onMouseUp = () => {
        isPanning.current = false;

        document.body.style.cursor =
            isSpacePressed.current ? "grab" : "default";
    };

    return {
        onMouseDown,
        onMouseMove,
        onMouseUp,
    };
}
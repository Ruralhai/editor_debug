import { useEffect } from "react";
import { useEditorStore } from "../../store/editorStore";

export function useKeyboard() {
    const selectedId = useEditorStore((state) => state.selectedId);
    const setSelectedId = useEditorStore((state) => state.setSelectedId);
    const deleteObject = useEditorStore(
        (state) => state.deleteObject
    );
    const duplicateObject = useEditorStore(
        (state) => state.duplicateObject
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const target = e.target as HTMLElement;

            // Ignore shortcuts while typing
            if (
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA" ||
                target.isContentEditable
            ) {
                return;
            }

            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "d") {
                e.preventDefault();

                if (!selectedId) return;

                const newId = duplicateObject(selectedId);

                if (newId) {
                    setSelectedId(newId);
                }

                return;
            }

            if (e.key !== "Delete" && e.key !== "Backspace") return;

            if (!selectedId) return;

            e.preventDefault();

            deleteObject(selectedId);
            setSelectedId(null);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedId, deleteObject, duplicateObject, setSelectedId]);
}
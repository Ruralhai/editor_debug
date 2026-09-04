export type SelectionSlice = {
    selectedId: string | null;
    setSelectedId: (id: string | null) => void;
};

export const createSelectionSlice = (set: any): SelectionSlice => ({
    selectedId: null,

    setSelectedId: (id) =>
        set({
            selectedId: id,
        }),
});
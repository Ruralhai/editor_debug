export type ViewportSlice = {
    zoom: number;
    scrollLeft: number;
    scrollTop: number;

    setZoom: (zoom: number) => void;
    setScroll: (left: number, top: number) => void;
};

export const createViewportSlice = (set: any): ViewportSlice => ({
    zoom: 1,
    scrollLeft: 0,
    scrollTop: 0,

    setZoom: (zoom) => set({ zoom }),

    setScroll: (left, top) =>
        set({
            scrollLeft: left,
            scrollTop: top,
        }),
});
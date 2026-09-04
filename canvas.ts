export type Point = {
    x: number;
    y: number;
};

export type ViewportState = {
    zoom: number;
    scrollLeft: number;
    scrollTop: number;
};

export type CanvasObject = {
    id: string;
    type: "rectangle";

    x: number;
    y: number;

    width: number;
    height: number;

    fill: string;
};
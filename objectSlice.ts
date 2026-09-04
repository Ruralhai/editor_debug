import { DEFAULT_TEXT_STYLE } from "@/components/editor/typography";

export type ShapeType =
    | "rectangle"
    | "circle"
    | "triangle"
    | "line"
    | "arrow"
    | "text"
    ;

export type CanvasObject = {
    id: string;
    type: ShapeType;

    x: number;
    y: number;

    width: number;
    height: number;

    fill: string;

    text?: string;

    fontFamily?: string;
    fontSize?: number;
    
    fontStyle?: "normal" | "bold"| "italic" | "bold italic";

    textAlign?: "left" | "center" | "right";

    lineHeight?: number;
    letterSpacing?: number;

    opacity?: number;

    rotation?: number;
};

export type ObjectSlice = {
    objects: CanvasObject[];

    addObject: (object: CanvasObject) => void;

    updateObject: (
        id: string,
        updates: Partial<CanvasObject>
    ) => void;

    updateText: (
        id: string, text: string
    ) => void;

    deleteObject: (id: string) => void;

    duplicateObject: (id: string) => string | null;
};

export const createObjectSlice = (set: any): ObjectSlice => ({
    objects: [
        {
            id: "rect-1",
            type: "rectangle",

            x: 300,
            y: 180,

            width: 260,
            height: 160,

            fill: "#2563eb",
        },

        {
            id: "rect-2",
            type: "rectangle",
            x: 650,
            y: 250,
            width: 180,
            height: 120,
            fill: "#16a34a",
        },
    ],

    addObject: (object) =>
        set((state: ObjectSlice) => ({
            objects: [...state.objects, object],
        })),

    updateObject: (id, updates) =>
        set((state: ObjectSlice) => ({
            objects: state.objects.map((object) =>
                object.id === id
                    ? { ...object, ...updates }
                    : object
            ),
        })),

    updateText: (id, text) =>
        set((state: ObjectSlice) => ({
            objects: state.objects.map((object) =>
                object.id === id
                    ? {
                        ...object,
                        text,
                    }
                    : object
            ),
        })),

    deleteObject: (id) =>
        set((state: ObjectSlice) => ({
            objects: state.objects.filter(
                (object) => object.id !== id
            ),
        })),

    duplicateObject: (id) => {
        const newId = `rect-${Date.now()}`;

        set((state: ObjectSlice) => {
            const object = state.objects.find(
                (obj) => obj.id === id
            );

            if (!object) {
                return state;
            }

            return {
                objects: [
                    ...state.objects,
                    {
                        ...object,
                        id: newId,
                        x: object.x + 30,
                        y: object.y + 30,
                    },
                ],
            };
        });

        return newId;
    },
});
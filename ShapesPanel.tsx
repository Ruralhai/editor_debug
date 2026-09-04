"use client";

type ShapesPanelProps = {
    onSelect: (shape: string) => void;
};

const shapes = [
    "Rectangle",
    "Circle",
    "Triangle",
    "Line",
    "Arrow",
    "Square"
];

export default function ShapesPanel({
    onSelect,
}: ShapesPanelProps) {
    return (
        <div className="absolute left-24 top-24 z-50 w-56 rounded-xl border bg-white p-3 shadow-xl">
            <h3 className="mb-3 font-semibold">
                Shapes
            </h3>

            <div className="grid grid-cols-2 gap-2">
                {shapes.map((shape) => (
                    <button
                        key={shape}
                        onClick={() => onSelect(shape)}
                        className="rounded-lg border p-3 hover:bg-gray-100"
                    >
                        {shape}
                    </button>
                ))}
            </div>
        </div>
    );
}
import {
    RotateCw,
    Sparkles,
    BadgeCheck,
} from "lucide-react";
export default function Preview3D() {
    return (
        <>
            <section
                id="preview"
                className="bg-[var(--color-surface)] py-24 px-6">

                <div className="mx-auto max-w-7xl">

                    <div className="text-center">

                        <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
                            3D Preview
                        </span>

                        <h2 className="text-center text-4xl font-bold text-[var(--color-heading)] md:text-5xl">
                            Visualize Before You Print
                            <span className="block text-[var(--color-primary)]">
                                Interactive 3D Preview
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-[var(--color-text)]">
                            Rotate, inspect, and validate your packaging in real time before sending it to production.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:grid-cols-[1.2fr_0.8fr]">

                        <div className="relative flex h-[460px] items-center justify-center rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-background)]">

                            <div className="text-center">

                                <img
                                    src="/images/coffee-box.png"
                                    alt="3D Packaging Preview"
                                    className="mx-auto h-72 w-auto object-contain transition-transform duration-300 hover:scale-105"
                                />

                                <h3 className="mt-6 text-3xl font-bold text-[var(--color-heading)]">
                                    Interactive Preview
                                </h3>

                                <p className="mt-4 text-[var(--color-text)]">
                                    Rotate • Zoom • Inspect
                                </p>

                            </div>

                            <div className="absolute top-6 right-6 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[#111315] shadow-lg">
                                Live Preview
                            </div>

                        </div>

                        <div className="flex flex-col justify-center space-y-6">

                            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-lg">
                                <div className="flex items-center gap-3">
                                    <RotateCw size={20} className="text-[var(--color-primary)]" />
                                    <h4 className="font-semibold text-[var(--color-heading)]">
                                        360° Rotation
                                    </h4>
                                </div>

                                <p className="mt-2 text-sm text-[var(--color-text)]">
                                    Inspect every side of your packaging before production.
                                </p>
                            </div>

                            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-lg">
                                <div className="flex items-center gap-3">
                                    <Sparkles size={20} className="text-[var(--color-primary)]" />
                                    <h4 className="font-semibold text-[var(--color-heading)]">
                                        Realistic Materials
                                    </h4>
                                </div>

                                <p className="mt-2 text-sm text-[var(--color-text)]">
                                    Preview paper, matte and glossy finishes.
                                </p>
                            </div>

                            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-lg">
                                <div className="flex items-center gap-3">
                                    <BadgeCheck size={20} className="text-[var(--color-primary)]" />
                                    <h4 className="font-semibold text-[var(--color-heading)]">
                                        Production Ready
                                    </h4>
                                </div>

                                <p className="mt-2 text-sm text-[var(--color-text)]">
                                    Validate the design before exporting for print.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

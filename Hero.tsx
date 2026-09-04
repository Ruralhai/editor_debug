import {
    MousePointer2,
    Type,
    Image,
    Square,
} from "lucide-react";
export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[var(--color-background)]">
            <div className="mx-auto grid min-h-[110vh] max-w-7xl grid-cols-1 items-center gap-10 px-8 pt-28 pb-20 lg:grid-cols-[1fr_1.15fr]">
                {/* LEFT SIDE */}
                <div className="space-y-8">
                    <span className="mb-4 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
                        Professional Packaging Design Platform
                    </span>

                    <h1 className="max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">
                        Packaging That
                        <br />
                        Makes Products
                        <br />
                        <span className="text-[var(--color-primary)]">
                            Stand Out.
                        </span>
                    </h1>

                    <p className="max-w-xl text-lg leading-8 text-[var(--color-text)]">
                        Design, preview and export professional packaging with AI assistance,
                        live product visualization and print-ready tools built specifically
                        for modern brands.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-5">
                        <button className="rounded-xl bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-[#111315] shadow-xl shadow-[rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[var(--color-primary-hover)]">
                            Start Designing Free
                        </button>

                        <button className="rounded-xl border border-[var(--color-border)] px-8 py-4 text-lg text-[var(--color-heading)] transition-all duration-300 hover:bg-[var(--color-card)]">
                            Watch Demo
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-6 text-[var(--color-text)]">
                        <div className="flex items-center gap-3">
                            <span>✨</span>
                            <span>AI Assisted Design</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span>📦</span>
                            <span>Live Product View</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span>🖨️</span>
                            <span>Print Ready Export</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span>🎨</span>
                            <span>500+ Templates</span>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="relative">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)] blur-3xl">
                    </div>

                    <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_35px_100px_rgba(0,0,0,0.55)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_70%)] before:pointer-events-none">

                        {/* Top Toolbar */}
                        <div className="flex items-center gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4">

                            <div className="flex gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                            </div>

                            <span className="ml-4 font-semibold text-[var(--color-heading)]">
                                PackForge Editor
                            </span>

                            <div className="ml-auto flex gap-2">

                                <button className="rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm hover:bg-[var(--color-card)]">
                                    Preview
                                </button>

                                <button className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[#111318]">
                                    Export
                                </button>

                            </div>

                        </div>

                        {/* Workspace */}
                        <div className="grid h-[480px] grid-cols-[70px_1fr_200px]">
                            {/* Left Toolbar */}
                            <div className="border-r border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                                <div className="space-y-4">

                                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-card)] text-[var(--color-heading)] hover:bg-[var(--color-primary)] hover:text-black transition">
                                        <MousePointer2 size={18} />
                                    </button>

                                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-card)] text-[var(--color-heading)] hover:bg-[var(--color-primary)] hover:text-black transition">
                                        <Type size={18} />
                                    </button>

                                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-card)] text-[var(--color-heading)] hover:bg-[var(--color-primary)] hover:text-black transition">
                                        <Image size={18} />
                                    </button>

                                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-card)] text-[var(--color-heading)] hover:bg-[var(--color-primary)] hover:text-black transition">
                                        <Square size={18} />
                                    </button>

                                </div>
                            </div>

                            {/* Canvas */}
                            <div className="flex h-[480px] flex-col items-center justify-center bg-[linear-gradient(135deg,#fafafa,#f2f2f2)] p-6 overflow-hidden">

                                <div className="mx-auto w-64 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-amber-50 to-orange-100 p-6 shadow-xl transition-transform duration-300 hover:scale-105">

                                    <div className="mx-auto flex h-56 w-56 items-center justify-center">
                                        <img
                                            src="/images/coffee-box.png"
                                            alt="Coffee Box"
                                            className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-gray-900">
                                        Coffee Box
                                    </h3>

                                    <div className="mt-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                        Ready for Print
                                    </div>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Organic Premium Blend
                                    </p>

                                </div>

                                <div className="mt-6 flex justify-center gap-3">

                                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                        Print Ready
                                    </span>

                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                                        AI Generated
                                    </span>

                                </div>

                            </div>

                            <div className="absolute bottom-6 left-6 hidden w-56 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-2xl lg:block">

                                <p className="text-xs font-semibold uppercase text-[var(--color-primary)]">
                                    AI Assistant
                                </p>

                                <h4 className="mt-2 font-semibold text-[var(--color-heading)]">
                                    Design Suggestions
                                </h4>

                                <p className="mt-2 text-sm text-[var(--color-text)]">
                                    Increase logo size and improve text contrast for better shelf visibility.
                                </p>

                            </div>

                            <div className="absolute top-4 right-[190px] hidden rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[#111315] shadow-xl lg:block">
                                3D Preview ✓
                            </div>

                            {/* Properties */}
                            <div className="h-full overflow-y-auto border-l border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                                <h4 className="font-semibold text-[var(--color-heading)]">
                                    Properties
                                </h4>

                                <div className="mt-6 space-y-5">

                                    <div>
                                        <p className="mb-2 text-xs font-semibold uppercase text-[var(--color-text)]">
                                            Fill Color
                                        </p>

                                        <div className="flex gap-2">
                                            <div className="h-7 w-7 rounded-full bg-blue-500"></div>
                                            <div className="h-7 w-7 rounded-full bg-yellow-500"></div>
                                            <div className="h-7 w-7 rounded-full bg-red-500"></div>
                                            <div className="h-7 w-7 rounded-full border border-gray-500 bg-white"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs font-semibold uppercase text-[var(--color-text)]">
                                            Font
                                        </p>

                                        <div className="rounded-lg bg-[var(--color-card)] px-3 py-2 text-sm text-[var(--color-heading)]">
                                            Poppins Bold
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs font-semibold uppercase text-[var(--color-text)]">
                                            Layers
                                        </p>

                                        <div className="space-y-2">
                                            <div className="rounded-lg bg-[var(--color-card)] px-3 py-2 text-sm">
                                                Logo
                                            </div>

                                            <div className="rounded-lg bg-[var(--color-card)] px-3 py-2 text-sm">
                                                Product Name
                                            </div>

                                            <div className="rounded-lg bg-[var(--color-card)] px-3 py-2 text-sm">
                                                Background
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 hidden w-56 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-2xl lg:block">

                            <p className="text-xs font-semibold uppercase text-[var(--color-primary)]">
                                AI Assistant
                            </p>

                            <h4 className="mt-2 font-semibold text-[var(--color-heading)]">
                                Design Suggestions
                            </h4>

                            <p className="mt-2 text-sm text-[var(--color-text)]">
                                Increase logo size and improve text contrast for better shelf visibility.
                            </p>

                        </div>

                        <div className="absolute top-4 right-[190px] hidden rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[#111315] shadow-xl lg:block">
                            3D Preview ✓
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}
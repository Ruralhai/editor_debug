import {
    Sparkles,
    Box,
    Palette,
    Users,
    Printer,
    FolderOpen,
} from "lucide-react";
export default function Features() {
    return (
        <section
            id="features"
            className="bg-[var(--color-surface)] py-24 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 flex justify-center">
                    <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
                        Features
                    </span>
                </div>

                <h2 className="text-center text-4xl font-bold text-[var(--color-heading)] md:text-5xl">
                    Everything You Need to Build
                    <span className="block text-[var(--color-primary)]">
                        Professional Packaging
                    </span>
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-[var(--color-text)]">
                    Powerful AI tools, professional templates, real-time previews, and print-ready exports—all in one platform.
                </p>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                            <Sparkles size={28} className="text-[var(--color-primary)]" />
                        </div>

                        <h3 className="text-2xl font-bold text-[var(--color-heading)]">
                            AI Design Generator
                        </h3>
                        <p className="mt-4 text-[var(--color-text)]">
                            Generate complete packaging concepts using Artificial Intelligence.
                        </p>
                    </div>

                    <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">

                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <Box size={28} className="text-[var(--color-primary)]" />
                        </div>

                        <h3 className="text-2xl font-bold text-[var(--color-heading)]">
                            3D Preview
                        </h3>

                        <p className="mt-4 text-[var(--color-text)]">
                            View realistic packaging before sending it to production.
                        </p>

                    </div>

                    <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">

                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <Palette size={28} className="text-[var(--color-primary)]" />
                        </div>

                        <h3 className="text-2xl font-bold text-[var(--color-heading)]">
                            Brand Kit
                        </h3>

                        <p className="mt-4 text-[var(--color-text)]">
                            Keep your fonts, colors and logos consistent across every design.
                        </p>

                    </div>

                    <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">

                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <Users size={28} className="text-[var(--color-primary)]" />
                        </div>

                        <h3 className="text-2xl font-bold text-[var(--color-heading)]">
                            Team Collaboration
                        </h3>

                        <p className="mt-4 text-[var(--color-text)]">
                            Invite your team, comment on designs and approve packaging together.
                        </p>

                    </div>

                    <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">

                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <Printer size={28} className="text-[var(--color-primary)]" />
                        </div>

                        <h3 className="text-2xl font-bold text-[var(--color-heading)]">
                            Print Ready Export
                        </h3>

                        <p className="mt-4 text-[var(--color-text)]">
                            Export production-ready files with proper bleed, dielines and CMYK support.
                        </p>

                    </div>

                    <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">

                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <FolderOpen size={28} className="text-[var(--color-primary)]" />
                        </div>

                        <h3 className="text-2xl font-bold text-[var(--color-heading)]">
                            Project Management
                        </h3>

                        <p className="mt-4 text-[var(--color-text)]">
                            Organize packaging projects, manage versions, and keep all design assets in one workspace.
                        </p>

                    </div>
                </div >
            </div>
        </section >
    );
}
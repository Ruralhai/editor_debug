import { HelpCircle } from "lucide-react";
export default function FAQ() {
    return (
        <>
            <section className="bg-[var(--color-surface)] py-24 px-6">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-6 flex justify-center">
                        <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
                            FAQ
                        </span>
                    </div>

                    <h2 className="text-center text-4xl font-bold text-[var(--color-heading)] md:text-5xl">
                        Frequently Asked
                        <span className="block text-[var(--color-primary)]">
                            Questions
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-[var(--color-text)]">
                        Everything you need to know before getting started with PackForge AI.
                    </p>

                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                            <HelpCircle
                                size={20}
                                className="text-[var(--color-primary)]"
                            />
                        </div>

                        <h3 className="text-xl font-semibold text-[var(--color-heading)]">
                            What is PackForge AI?
                        </h3>

                        <p className="mt-4 leading-7 text-[var(--color-text)]">
                            PackForge AI is an AI-powered platform for designing professional product packaging with 3D previews and production-ready exports.
                        </p>

                    </div>

                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                            <HelpCircle
                                size={20}
                                className="text-[var(--color-primary)]"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--color-heading)]">
                            Can I export print-ready files?
                        </h3>

                        <p className="mt-3 leading-7 text-[var(--color-text)]">
                            Yes. You can export packaging with proper bleed,
                            CMYK colors and print-ready formats.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                                <HelpCircle
                                    size={20}
                                    className="text-[var(--color-primary)]"
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-heading)]">
                                Is there a free plan?
                            </h3>

                            <p className="mt-3 leading-7 text-[var(--color-text)]">
                                Yes. Our Starter plan is free and lets you explore
                                the core features before upgrading.
                            </p>
                        </div>

                    </div>

                </div >
            </section >
        </>
    );
}

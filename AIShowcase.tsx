export default function AIShowcase() {
    return (
        <>
            <section
                id="templates"
                className="bg-[var(--color-background)] py-24 px-6">
                <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

                    <div>

                        <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
                            AI Studio
                        </span>

                        <h2 className="mt-6 text-5xl font-bold text-[var(--color-heading)]">
                            Let AI Design
                            <br />
                            Your Packaging
                        </h2>

                        <p className="mt-6 text-xl text-[var(--color-text)]">
                            Describe your product in plain English and let PackForge AI
                            generate packaging concepts, layouts, colors and typography
                            within seconds.
                        </p>

                        <ul className="mt-10 space-y-4 text-[var(--color-text)]">
                            <li>✅ AI Packaging Generator</li>
                            <li>✅ AI Color Suggestions</li>
                            <li>✅ AI Brand Matching</li>
                            <li>✅ AI Copywriting</li>
                            <li>✅ AI Image Generation</li>
                        </ul>

                        <button className="mt-10 rounded-xl bg-[var(--color-primary)] px-8 py-4 font-semibold text-[#111318] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary-hover)]">
                            Explore AI Studio
                        </button>

                    </div>

                    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-10">

                        <div className="rounded-2xl bg-[var(--color-surface)] p-6">

                            <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                                AI Prompt
                            </h3>

                            <p className="mt-6 text-[var(--color-text)]">
                                "Design premium coffee packaging using black, gold and minimal
                                typography for an organic brand."
                            </p>

                            <div className="mt-8 rounded-xl bg-[var(--color-primary)] p-4 text-center font-semibold text-[#111318]">
                                Generate Packaging →
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

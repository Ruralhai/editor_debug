export default function BrandKit() {
    return (
        <>
            <section className="bg-[var(--color-background)] py-24 px-6">

                <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

                    <div>
                        <h2 className="text-5xl font-bold text-[var(--color-heading)]">
                            Build a Consistent Brand
                        </h2>

                        <p className="mt-6 text-xl text-[var(--color-text)]">
                            Store your logos, fonts, colors, packaging assets, and design
                            guidelines in one place so every package stays consistent.
                        </p>

                        <div className="mt-10 space-y-4">

                            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 text-[var(--color-heading)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]">
                                🎨 Brand Colors
                            </div>

                            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 text-[var(--color-heading)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]">
                                🔤 Typography Library
                            </div>

                            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 text-[var(--color-heading)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]">
                                🖼 Logo Assets
                            </div>

                            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 text-[var(--color-heading)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]">
                                📚 Brand Guidelines
                            </div>

                        </div>
                    </div>

                    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-10 shadow-xl">

                        <h3 className="text-3xl font-bold text-[var(--color-primary)]">
                            Brand Kit Panel
                        </h3>

                        <div className="mt-8 space-y-5">

                            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-[var(--color-heading)] transition-all duration-300 hover:border-[var(--color-primary)]">
                                Primary Color
                            </div>

                            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-[var(--color-heading)] transition-all duration-300 hover:border-[var(--color-primary)]">
                                Secondary Color
                            </div>

                            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-[var(--color-heading)] transition-all duration-300 hover:border-[var(--color-primary)]">
                                Logo Collection
                            </div>

                            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-[var(--color-heading)] transition-all duration-300 hover:border-[var(--color-primary)]">
                                Font Library
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

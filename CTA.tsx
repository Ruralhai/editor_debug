export default function CTA() {
    return (
        <section className="bg-[var(--color-background)] py-24 px-6">
            <div className="mx-auto max-w-5xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-16 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(212,175,55,0.12)]">

                <h2 className="text-4xl font-bold text-[var(--color-heading)] md:text-5xl">
                    Ready to Design
                    <span className="block text-[var(--color-primary)]">
                        Your Next Package?
                    </span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text)]">
                    Start creating professional packaging with AI assistance, 3D previews, and print-ready exports today.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-6">

                    <button className="rounded-xl bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-[#111315] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary-hover)]">
                        Start Designing Free
                    </button>

                    <button className="rounded-xl border border-[var(--color-border)] px-8 py-4 text-lg text-[var(--color-heading)] transition-all duration-300 hover:bg-[var(--color-surface)]">
                        Contact Sales
                    </button>

                </div>

            </div>
        </section>
    );
}
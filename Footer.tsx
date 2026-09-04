export default function Footer() {
    return (
        <>
            <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20">

                <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

                    {/* Logo */}

                    <div>
                        <h2 className="text-3xl font-extrabold tracking-[0.2em] text-[var(--color-heading)]">
                            PACKFORGE
                        </h2>

                        <p className="mt-2 text-sm text-[var(--color-text)]">
                            Professional Packaging Platform
                        </p>
                    </div>

                    {/* Product */}

                    <div>
                        <h3 className="mb-4 font-bold text-[var(--color-heading)]">
                            Product
                        </h3>

                        <ul className="space-y-2 text-[var(--color-text)]">
                            <li className="cursor-pointer transition-colors hover:text-[var(--color-primary)]">
                                Features
                            </li>
                            <li className="cursor-pointer transition-colors hover:text-[var(--color-primary)]">
                                AI Studio
                            </li>
                            <li className="cursor-pointer transition-colors hover:text-[var(--color-primary)]">
                                Templates
                            </li>
                            <li className="cursor-pointer transition-colors hover:text-[var(--color-primary)]">
                                Pricing
                            </li>
                        </ul>
                    </div>

                    {/* Company */}

                    <div>
                        <h3 className="mb-4 font-bold text-[var(--color-heading)]">
                            Company
                        </h3>

                        <ul className="space-y-2 text-[var(--color-text)]">
                            <li className="cursor-pointer transition-colors hover:text-[var(--color-primary)]">
                                About
                            </li>
                            <li className="cursor-pointer transition-colors hover:text-[var(--color-primary)]">
                                Contact
                            </li>
                            <li className="cursor-pointer transition-colors hover:text-[var(--color-primary)]">
                                Privacy Policy
                            </li>
                            <li className="cursor-pointer transition-colors hover:text-[var(--color-primary)]">
                                Terms of Service
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}

                    <div>
                        <h3 className="mb-4 font-bold text-[var(--color-heading)]">
                            Stay Updated
                        </h3>

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-[var(--color-heading)] outline-none transition-all duration-300 placeholder:text-[var(--color-text)] focus:border-[var(--color-primary)]"
                        />

                        <button className="mt-4 w-full rounded-xl bg-[var(--color-primary)] py-3 font-semibold text-[#111318] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary-hover)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)]">
                            Subscribe
                        </button>

                    </div>

                </div>

                <div className="mt-16 border-t border-[var(--color-border)] pt-6 text-center text-[var(--color-text)]">
                    © 2026 PackForge AI. All rights reserved.
                </div>

            </footer>
        </>
    );
}

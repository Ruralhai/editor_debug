import { Check } from "lucide-react";
export default function Pricing() {
    return (
        <>
            <section
                id="pricing"
                className="bg-[var(--color-background)] py-24 px-6">

                <div className="mx-auto max-w-7xl">
                    <div className="mb-6 flex justify-center">
                        <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
                            Pricing
                        </span>
                    </div>

                    <h2 className="text-center text-4xl font-bold text-[var(--color-heading)] md:text-5xl">
                        Simple Pricing for
                        <span className="block text-[var(--color-primary)]">
                            Every Business
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-center text-xl text-[var(--color-text)]">
                        Choose a plan that grows with your packaging business.
                    </p>

                    <div className="mt-16 grid gap-8 md:grid-cols-3">

                        {/* Starter */}

                        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">
                            <h3 className="text-3xl font-bold text-[var(--color-heading)]">Starter</h3>

                            <p className="mt-6 text-5xl font-bold text-[var(--color-primary)]">
                                Free
                            </p>

                            <ul className="mt-8 space-y-4 text-[var(--color-text)]">
                                <li className="flex items-center gap-3">
                                    <Check size={18} className="text-[var(--color-primary)]" />
                                    <span>3 Projects</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check size={18} className="text-[var(--color-primary)]" />
                                    <span>100 AI Credits/Month</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check size={18} className="text-[var(--color-primary)]" />
                                    <span>Brand Kit</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check size={18} className="text-[var(--color-primary)]" />
                                    <span>3D Preview</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check size={18} className="text-[var(--color-primary)]" />
                                    <span>Community Support</span>
                                </li>
                            </ul>

                            <button className="mt-10 w-full rounded-xl bg-[var(--color-card)] py-3 font-semibold text-[var(--color-heading)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-surface)]">
                                Get Started
                            </button>
                        </div>

                        {/* Pro */}

                        <div className="rounded-3xl border-2 border-[var(--color-primary)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">

                            <span className="inline-flex rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[#111318] shadow-lg">
                                Most Popular
                            </span>

                            <h3 className="mt-5 text-3xl font-bold text-[var(--color-heading)]">
                                Pro
                            </h3>

                            <p className="mt-6 text-5xl font-bold text-[var(--color-heading)]">
                                ₹499
                                <span className="text-lg text-[var(--color-text)]">/month</span>
                            </p>

                            <ul className="mt-8 space-y-4 text-[var(--color-text)]">
                                <li>✔ Unlimited Projects</li>
                                <li>✔ 5,000 AI Credits / Month</li>
                                <li>✔ Team Collaboration</li>
                                <li>✔ Brand Kit</li>
                                <li>✔ 3D Preview</li>
                                <li>✔ Print-Ready Export</li>
                                <li>✔ Unlimited Packaging Templates</li>
                                <li>✔ Priority Email Support</li>

                            </ul>

                            <button className="mt-10 w-full rounded-xl bg-[var(--color-primary)] py-3 font-semibold text-[#111318] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary-hover)]">
                                Start Free Trial
                            </button>

                        </div>

                        {/* Business */}

                        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">

                            <h3 className="text-3xl font-bold text-[var(--color-heading)]">
                                Business
                            </h3>

                            <p className="mt-6 text-5xl font-bold text-[var(--color-heading)]">
                                Custom
                            </p>

                            <ul className="mt-8 space-y-4 text-[var(--color-text)]">
                                <li>✔ 20,000 AI Credits / Month</li>
                                <li>✔ Unlimited Team Members</li>
                                <li>✔ API Access</li>
                                <li>✔ Priority Email Support</li>
                                <li>✔ Custom Integrations</li>
                                <li>✔ Advance Security</li>
                            </ul>

                            <button className="mt-10 w-full rounded-xl bg-[var(--color-card)] py-3 font-semibold text-[var(--color-heading)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-surface)]">
                                Contact Sales
                            </button>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

import { Star } from "lucide-react";
export default function Testimonials() {
  return (
    <>
      <section className="bg-[var(--color-surface)] py-24 px-6">

        <div className="mx-auto max-w-7xl">

          <div className="mb-6 flex justify-center">
            <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
              Trusted by Brands
            </span>
          </div>

          <h2 className="text-center text-5xl font-bold text-[var(--color-heading)]">
            Trusted by Packaging Professionals
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-xl text-[var(--color-text)]">
            See what early users say about PackForge AI.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">
              <div className="mb-5 flex gap-1 text-[var(--color-primary)]">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
              </div>

              <p className="text-[var(--color-text)] leading-7">
                "PackForge AI reduced our packaging design time from weeks to just two days."
              </p>

              <h4 className="mt-6 font-bold text-[var(--color-heading)]">
                Sarah Johnson
              </h4>

              <p className="mt-1 text-sm text-[var(--color-text)]">
                Packaging Designer
              </p>
            </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">
                <div className="mb-5 flex gap-1 text-[var(--color-primary)]">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                </div>

                <p className="text-[var(--color-text)] leading-7">
                  "The AI suggestions are incredibly helpful for brainstorming new packaging ideas."
                </p>

                <h4 className="mt-6 font-bold text-[var(--color-heading)]">
                  David Chen
                  </h4>
                
                <p className="mt-1 text-sm text-[var(--color-text)]">
                  Brand Manager
                  </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]">
                <div className="mb-5 flex gap-1 text-[var(--color-primary)]">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                </div>

                <p className="text-[var(--color-text)] leading-7">
                  "Our team collaboration became much smoother after switching to PackForge AI."
                </p>

                <h4 className="mt-6 font-bold text-[var(--color-heading)]">
                  Emily Roberts
                  </h4>

                <p className="mt-1 text-sm text-[var(--color-text)]">
                  Creative Director
                </p>
              </div>

            </div>

          </div>

      </section>
    </>
  );
}
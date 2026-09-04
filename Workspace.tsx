import Canvas from "../canvas/Canvas";

export default function Workspace() {
  return (
    <main className="relative flex flex-1 overflow-hidden bg-[var(--color-surface)]">

      {/* Premium Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />

      {/* Dot Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 flex-1 min-w-0 min-h-0">
        <Canvas />
      </div>

    </main>
  );
}
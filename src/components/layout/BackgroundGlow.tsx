export default function BackgroundGlow() {
  return (
    <>
      {/* Primary hero glow — top-left ambient radial */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute -left-[10%] -top-[10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)] blur-[120px] animate-glow-drift" />
      </div>
      {/* Secondary subtle glow — bottom-right, very faint */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(198,241,53,0.03)_0%,transparent_70%)] blur-[150px] animate-glow-pulse" />
      </div>
    </>
  );
}

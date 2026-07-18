"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Orange Glow */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/20 blur-[150px]" />

      {/* Blue Glow */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[150px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />
    </>
  );
}
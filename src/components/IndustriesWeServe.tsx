import Image from "next/image";

export function IndustriesWeServe() {
  return (
    <div className="relative flex items-center bg-[#E2E2E2] w-full max-w-[1651px] h-screen px-[80px] lg:px-[120px] overflow-hidden mx-auto">
      {/* ── Background Text (Z: 0) ── */}
      {/* 09 — bottom right, z-index 0 (behind robot) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <span
          className="absolute bottom-[-2%] left-[55%] lg:left-[58%] text-[160px] xl:text-[200px] font-extrabold text-white tracking-tighter"
          style={{ fontFamily: "var(--font-poppins), sans-serif", lineHeight: 0.8 }}
        >
          09
        </span>
      </div>

      <div className="w-full h-full absolute inset-0 z-20 pointer-events-none">
        {/* ── Top Left heading ── */}
        <div className="absolute top-[60px] left-[80px] lg:left-[120px] pointer-events-auto opacity-0 animate-fade-in-up">
          <h3
            className="text-[16px] md:text-[18px] font-bold tracking-[1.5px] text-[#111827] uppercase"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            INDUSTRIES WE SERVE
          </h3>
          <p className="text-[12px] text-[#6B7280] mt-3 max-w-[200px] leading-[1.6]">
            List of industries we worked with on our platform:
          </p>
          <span className="text-[12px] font-semibold text-[#6B7280] mt-8 block">01/03</span>
        </div>

        {/* ── Main Heading ── */}
        <div className="absolute top-[160px] left-[80px] lg:left-[120px] flex flex-col pointer-events-auto opacity-0 animate-fade-in-up-delay-1">
          <h1 className="text-[52px] xl:text-[64px] font-bold leading-[1.05] uppercase tracking-tight text-[#020101]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            <span className="ml-[70px] md:ml-[105px] block">CHANGING</span>
            <span className="block">YOUR IDEA OF</span>
            <span className="ml-[70px] md:ml-[105px] block">WHAT ROBOTS</span>
            <span className="block">CAN DO</span>
          </h1>
        </div>

        {/* RJV — bottom-left, z-index 20 (above robot) */}
        <span className="absolute bottom-[40px] lg:bottom-[80px] left-[80px] lg:left-[120px] text-[200px] xl:text-[260px] font-extrabold text-white tracking-tighter z-20"
          style={{ fontFamily: "var(--font-poppins), sans-serif", lineHeight: 0.75 }}>
          RJV
        </span>

        {/* ── Read More Button (At the very bottom left) ── */}
        <div className="absolute bottom-[40px] left-[80px] lg:left-[120px] pointer-events-auto z-30 opacity-0 animate-fade-in-up-delay-2">
          <button className="w-fit px-[24px] py-[12px] bg-white rounded-[30px] shadow-sm text-[14px] text-[#111827] font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors duration-300">
            Read More
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>

        {/* ── Right Content Info Block (Z: 2) ── */}
        <div className="absolute top-[180px] right-[80px] lg:right-[120px] flex flex-col items-end pointer-events-auto z-20 opacity-0 animate-fade-in-up-delay-2">
          <h3
            className="text-[16px] md:text-[18px] font-bold tracking-wider text-[#4B5563] uppercase"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            INDUSTRY 01
          </h3>
          <p className="text-[12px] text-[#9CA3AF] text-right mt-1 max-w-[150px] leading-relaxed">
            Description Here about the industry
          </p>
        </div>

        {/* ── N — P Indicator ── */}
        <div className="absolute top-1/2 right-[80px] lg:right-[120px] -translate-y-1/2 flex items-center gap-4 pointer-events-auto z-0">
          <span className="text-[24px] text-[#111827] font-medium">N</span>
          <div className="w-[120px] h-[1px] bg-[#111827]"></div>
          <span className="text-[24px] text-[#111827] font-medium">P</span>
        </div>

        {/* ── Work With Us Vertical ── */}
        <div className="absolute bottom-[40px] right-[40px] lg:right-[60px] pointer-events-auto z-20 flex items-start gap-2" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
          <div className="text-[10px] tracking-[0.25em] text-[#9CA3AF] uppercase font-bold" style={{ writingMode: "vertical-rl" }}>
            US
          </div>
          <div className="text-[10px] tracking-[0.25em] text-[#9CA3AF] uppercase font-bold" style={{ writingMode: "vertical-rl" }}>
            WORK WITH
          </div>
        </div>
      </div>

      {/* ── Robot Image (Z: 10) ── */}
      <div className="absolute bottom-0 left-[52%] -translate-x-1/2 w-[100%] h-[92%] z-10 pointer-events-none mix-blend-multiply">
        <Image
          src="/photo_2026-04-21_17-21-55.jpg"
          alt="Futuristic humanoid robot"
          fill
          style={{ objectFit: "contain", objectPosition: "bottom center", filter: "grayscale(100%) contrast(110%)" }}
          priority
        />
      </div>
    </div>
  );
}
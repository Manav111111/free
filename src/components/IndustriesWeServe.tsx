import Image from "next/image";

export function IndustriesWeServe() {
  return (
    <div className="relative flex items-center bg-[#E2E2E2] w-full max-w-[1651px] h-[918px] px-[80px] lg:px-[120px] overflow-hidden mx-auto">
      {/* ── Background Text (Z: 0) ── */}
      {/* ── Background Text (Z: 0) ── */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-[3%] pointer-events-none select-none z-0 translate-y-[10%]">
        <span
          className="text-[250px] xl:text-[350px] font-extrabold text-white tracking-tighter"
          style={{ fontFamily: "var(--font-poppins), sans-serif", lineHeight: 0.8 }}
        >
          RJV
        </span>
        <span
          className="text-[160px] xl:text-[220px] font-extrabold text-white tracking-tighter mb-[2%]"
          style={{ fontFamily: "var(--font-poppins), sans-serif", lineHeight: 0.8 }}
        >
          09
        </span>
      </div>

      <div className="w-full h-full absolute inset-0 z-20 pointer-events-none">
        {/* ── Top Left heading ── */}
        <div className="absolute top-[60px] left-[80px] lg:left-[120px] pointer-events-auto">
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

        {/* ── Main Heading & Button ── */}
        <div className="absolute top-[35%] left-[80px] lg:left-[120px] flex flex-col pointer-events-auto">
          <h1
            className="text-[48px] xl:text-[64px] font-bold text-[#111827] leading-[1.1] uppercase tracking-tight"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            <span className="ml-[70px] md:ml-[110px] block">CHANGING</span>
            <span className="block">YOUR IDEA OF</span>
            <span className="ml-[70px] md:ml-[110px] block">WHAT ROBOTS</span>
            <span className="block">CAN DO</span>
          </h1>

          <button className="mt-[60px] w-fit px-[18px] py-[10px] border border-[#D1D5DB] rounded-[20px] bg-transparent text-[14px] text-[#111827] font-semibold flex items-center gap-2 hover:bg-[#111827] hover:text-white transition-colors duration-300">
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
        <div className="absolute top-[180px] right-[80px] lg:right-[120px] flex flex-col items-end pointer-events-auto z-20">
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
        <div className="absolute bottom-[80px] right-[40px] lg:right-[80px] pointer-events-auto z-20">
           <span
              className="text-[10px] tracking-[0.25em] text-[#9CA3AF] uppercase"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                display: "block",
                fontFamily: "var(--font-poppins), sans-serif"
              }}
            >
              Work With Us
            </span>
        </div>
      </div>

      {/* ── Robot Image (Z: 1) ── */}
      <div className="absolute bottom-0 left-[50%] -translate-x-1/2 w-[100%] h-[92%] z-10 pointer-events-none">
        <Image
          src="/robot.png"
          alt="Futuristic humanoid robot"
          fill
          style={{ objectFit: "contain", objectPosition: "bottom center", filter: "grayscale(100%) contrast(110%)" }}
          priority
        />
      </div>
    </div>
  );
}
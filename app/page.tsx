import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 space-y-8 relative">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
            OPEN TO OPPORTUNITIES
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            DIAZ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 animate-gradient-x">SANGEVE</span> <br />
            QUANTITATIVE RESEARCHER
          </h1>
        </div>
        <p className="text-lg md:text-xl text-cyan-100/70 max-w-2xl leading-relaxed font-light border-l-2 border-fuchsia-500/50 pl-6">
          MComm Economics student at Stellenbosch University. Research interests: macroeconomic policy, fiscal dynamics, and emerging market economies. Toolkit: R, Python, Stata, Bloomberg, LaTeX. Previously an Economic Research Intern at Cirrus Capital, Windhoek.
        </p>
        <div className="pt-8 flex gap-6">
          <Link 
            href="/research" 
            className="group relative px-8 py-3 bg-cyan-950/30 border border-cyan-500/50 text-cyan-300 font-bold tracking-widest uppercase text-sm overflow-hidden hover:bg-cyan-900/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              VIEW MY WORK <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </Link>
        </div>
      </section>

      {/* Section Cards */}
      <section className="py-20 space-y-12 border-t border-cyan-900/30">
        <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
          <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
            {"// EXPLORE"}
          </h2>
          <span className="text-xs font-mono text-cyan-700">Where to dig deeper</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SectionCard 
            title="RESEARCH"
            description="Honours thesis, MComm work, and economic research outputs from my time at Cirrus Capital."
            color="cyan"
            href="/research"
          />
          <SectionCard 
            title="PROJECTS"
            description="Quantitative and technical work — econometric models, data analyses, and code-based research projects."
            color="fuchsia"
            href="/projects"
          />
          <SectionCard 
            title="WRITING"
            description="Economic commentary, analysis, and written work on macroeconomics and emerging markets."
            color="purple"
            href="/writing"
          />
          <SectionCard 
            title="ABOUT"
            description="Background, technical stack, research principles, and how I work."
            color="yellow"
            href="/about"
          />
        </div>
      </section>
    </>
  );
}

function SectionCard({ title, description, color, href }: { title: string, description: string, color: "cyan" | "fuchsia" | "purple" | "yellow", href: string }) {
  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-400",
    fuchsia: "group-hover:text-fuchsia-400",
    purple: "group-hover:text-purple-400",
    yellow: "group-hover:text-yellow-400",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[color]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[color]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[color]}`} />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
    </Link>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

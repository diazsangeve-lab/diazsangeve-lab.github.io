import Link from "next/link";

export default function Projects() {
  return (
    <section className="py-20 space-y-12">
      <div className="space-y-4 border-b border-cyan-900/30 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-950/20 text-fuchsia-400 text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,1)]" />
          // PROJECTS
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">PROJECTS</span>
        </h1>
        <p className="text-lg text-cyan-100/70 max-w-3xl leading-relaxed font-light">
          Quantitative and technical work — econometric models, data analyses, and code-based research builds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="BUSINESS CYCLE STATISTICS"
          description="Empirical evaluation of US business cycle stylised facts from Q1 1982 to Q3 2025. HP-filtered quarterly time series for GDP, consumption, debt, inflation, and the Federal Funds Rate; ADF stationarity tests; standard deviations and correlations with output."
          tags={["R", "HP FILTER", "TIME-SERIES"]}
          color="cyan"
          href="https://github.com/diazsangeve-lab/Macro-Project"
          footer={null}
        />
        <ProjectCard
          title="FRED API — SA MACRO ANALYSIS"
          description="Comparative analysis of South African and Turkish unemployment (2010–2023) and South African monetary policy response to inflation, pulled from the FRED API and visualised with ggplot2. Includes economic commentary on structural unemployment and inflation-targeting trade-offs in emerging markets."
          tags={["R", "FRED API", "GGPLOT2"]}
          color="fuchsia"
          href="https://github.com/diazsangeve-lab/API_Exercise"
          footer="In collaboration with K. Nkosi"
        />
        <ProjectCard
          title="ROLLING BETA — SA FUND MANAGERS"
          description="Functional R analysis computing 36-month rolling betas for South African active fund managers against the J433 local benchmark. Implements custom rolling-regression and visualisation functions using map/walk over lists of manager returns."
          tags={["R", "ROLLING REGRESSION", "FUND PERFORMANCE"]}
          color="purple"
          href="https://github.com/diazsangeve-lab/Maps"
          footer={null}
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tags, color, href, footer }: { title: string, description: string, tags: string[], color: "cyan" | "fuchsia" | "purple" | "yellow", href: string, footer: string | null }) {
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
    <Link href={href} target="_blank" rel="noopener noreferrer" className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[color]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[color]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[color]}`} />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
      {footer && (
        <p className="text-[10px] uppercase tracking-widest font-mono text-cyan-900 pt-2 border-t border-cyan-900/30">
          {footer}
        </p>
      )}
    </Link>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

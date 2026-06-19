import Link from "next/link";

export default function DsgePolicyMix() {
  return (
    <section className="py-20 space-y-12">
      {/* Back link */}
      <Link href="/research" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">
        <ArrowLeftIcon className="w-4 h-4" />
        BACK TO RESEARCH
      </Link>

      {/* Header */}
      <div className="space-y-4 border-b border-cyan-900/30 pb-8">
        <div className="text-xs font-bold tracking-widest uppercase text-fuchsia-700 font-mono">
          // RESEARCH / DSGE-POLICY-MIX
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
          Monetary policy shocks and inflation in a <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">monetary–fiscal policy mix</span> regime
        </h1>
        <p className="text-sm font-mono text-fuchsia-400 tracking-wider">
          MComm Macroeconomics Group Project · Stellenbosch University · May 2026
        </p>
        <p className="text-xs font-mono text-cyan-700 tracking-wider">
          Co-authored with Sihlelelwe L. Nzima and Tshulani H. Khosa
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {["DSGE", "NEW KEYNESIAN", "WELFARE ANALYSIS", "MONETARY-FISCAL INTERACTION"].map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-fuchsia-300 bg-fuchsia-950/30 px-2 py-1 border border-fuchsia-500/30">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
          // OVERVIEW
        </h2>
        <p className="text-cyan-100/80 leading-relaxed font-light text-base md:text-lg">
          This project examines how monetary policy transmission depends on the prevailing monetary–fiscal regime. Using a New Keynesian DSGE model with partially unbacked public debt, we analyse contractionary monetary policy shocks under three regimes: monetary dominance (Regime M), fiscal dominance (Regime F), and a coexistence regime where stabilisation responsibility is shared. The model is calibrated to standard New Keynesian parameter values and simulated to compare impulse responses, debt dynamics, and welfare outcomes across regimes.
        </p>
      </div>

      {/* Key Findings */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold tracking-widest text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]">
          // KEY_FINDINGS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FindingCard 
            number="01"
            heading="Monetary dominance controls inflation at high real cost"
            body="Under Regime M, inflation is contained but the real economy contracts severely, with procyclical fiscal austerity amplifying the downturn."
            color="cyan"
          />
          <FindingCard 
            number="02"
            heading="Fiscal dominance disables monetary tightening"
            body="Under Regime F, the absence of fiscal adjustment leads to rising inflation, persistent debt accumulation, and macroeconomic instability — consistent with the Fiscal Theory of the Price Level."
            color="fuchsia"
          />
          <FindingCard 
            number="03"
            heading="Coexistence produces the most balanced outcome"
            body="Partial fiscal accommodation preserves disinflation and lowers the real costs of adjustment. Consumption-equivalent welfare loss is 0.49% under coexistence, compared with 2.28% under fiscal dominance."
            color="purple"
          />
          <FindingCard 
            number="04"
            heading="Nominal rigidities and fiscal backing drive the dynamics"
            body="Sensitivity analysis shows that the degree of fiscal inflation backing (ζ) and price stickiness (θ) determine how adjustment costs are distributed between inflation and real activity."
            color="yellow"
          />
        </div>
      </div>

      {/* Implications */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-widest text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
          // IMPLICATIONS
        </h2>
        <p className="text-cyan-100/80 leading-relaxed font-light">
          The results carry direct implications for high-debt, fiscally constrained economies. Monetary tightening alone may be insufficient to control inflation in such environments and can worsen fiscal vulnerabilities by raising debt-service costs. Effective stabilisation requires credible coordination between monetary restraint and fiscal adjustment. The coexistence regime demonstrates that shared stabilisation responsibility can preserve price stability, contain debt accumulation, and reduce the real economic cost of adjustment.
        </p>
      </div>

      {/* Footer */}
      <div className="space-y-6 border-t border-cyan-900/30 pt-8">
        <a 
          href="/dsge-policy-mix.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 px-8 py-3 bg-fuchsia-950/30 border border-fuchsia-500/50 text-fuchsia-300 font-bold tracking-widest uppercase text-sm overflow-hidden hover:bg-fuchsia-900/50 transition-all hover:shadow-[0_0_20px_rgba(232,121,249,0.4)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            <DownloadIcon className="w-4 h-4" />
            DOWNLOAD REPORT
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
        </a>
        <p className="text-xs font-mono text-cyan-700">
          Group project for MComm Macroeconomics, Stellenbosch University. May 2026.
        </p>
      </div>
    </section>
  );
}

function FindingCard({ number, heading, body, color }: { number: string, heading: string, body: string, color: "cyan" | "fuchsia" | "purple" | "yellow" }) {
  const borderClasses = {
    cyan: "border-cyan-900/30 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "border-cyan-900/30 hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "border-cyan-900/30 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "border-cyan-900/30 hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const numberColors = {
    cyan: "text-cyan-400",
    fuchsia: "text-fuchsia-400",
    purple: "text-purple-400",
    yellow: "text-yellow-400",
  };

  return (
    <div className={`p-6 bg-[#0a0a1a] border ${borderClasses[color]} transition-all duration-300 space-y-3`}>
      <p className={`text-3xl font-bold font-mono ${numberColors[color]} drop-shadow-[0_0_8px_currentColor]`}>{number}</p>
      <h3 className="text-base font-bold text-white tracking-wide leading-tight">{heading}</h3>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light">{body}</p>
    </div>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  )
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

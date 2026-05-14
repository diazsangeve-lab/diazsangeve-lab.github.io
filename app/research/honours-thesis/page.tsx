import Link from "next/link";

export default function AusterityThesis() {
  return (
    <section className="py-20 space-y-12">
      {/* Back link */}
      <Link href="/research" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">
        <ArrowLeftIcon className="w-4 h-4" />
        BACK TO RESEARCH
      </Link>

      {/* Header */}
      <div className="space-y-4 border-b border-cyan-900/30 pb-8">
        <div className="text-xs font-bold tracking-widest uppercase text-cyan-700 font-mono">
          // RESEARCH / AUSTERITY-THESIS
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
          The Short- and Medium-Term Effects of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Austerity Measures</span> in Emerging Economies
        </h1>
        <p className="text-sm font-mono text-cyan-400 tracking-wider">
          BCom Honours Thesis · Stellenbosch University · 2025
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {["R", "PANEL DATA", "FISCAL POLICY", "NARRATIVE IDENTIFICATION", "EMERGING MARKETS"].map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-300 bg-cyan-950/30 px-2 py-1 border border-cyan-500/30">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-widest text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]">
          // OVERVIEW
        </h2>
        <p className="text-cyan-100/80 leading-relaxed font-light text-base md:text-lg">
          Fiscal consolidation — austerity — has been a recurring response to fiscal distress, yet its macroeconomic effects in emerging markets remain unresolved. Most empirical research focuses on advanced economies, which differ fundamentally from emerging markets in their fiscal space, financial depth, and exposure to external shocks. This thesis investigates how austerity affects growth, fiscal sustainability, and macroeconomic stability across ten emerging economies from 2009 to 2023, with particular attention to whether expenditure-based and tax-based consolidations produce different outcomes. Using narrative identification of consolidation episodes and a dynamic fixed-effects panel framework, the analysis estimates both contemporaneous and lagged effects across five outcomes: GDP growth, debt-to-GDP, unemployment, investment, and consumption.
        </p>
      </div>

      {/* Key Findings */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
          // KEY_FINDINGS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FindingCard 
            number="01"
            heading="Both EB and TB plans are contractionary"
            body="On impact, expenditure-based consolidations reduce GDP growth by ~0.9 percentage points; tax-based by ~1.1 pp."
            color="cyan"
          />
          <FindingCard 
            number="02"
            heading="Tax-based plans are deeper and more persistent"
            body="Cumulative output losses over three years are roughly three times larger for TB consolidations (–1.05) than EB (–0.34)."
            color="fuchsia"
          />
          <FindingCard 
            number="03"
            heading="Debt-to-GDP rises before it falls"
            body="Output contracts faster than debt adjusts; both consolidation types raise the debt ratio by 5–6 pp before stabilising."
            color="purple"
          />
          <FindingCard 
            number="04"
            heading="Investment and consumption both decline"
            body="Findings align with Carrière-Swallow et al. (2018) for Latin America and Alesina et al. (2019) for advanced economies."
            color="yellow"
          />
        </div>
      </div>

      {/* Methodology */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-widest text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
          // METHODOLOGY
        </h2>
        <p className="text-cyan-100/80 leading-relaxed font-light">
          The empirical strategy combines narrative identification of fiscal consolidation episodes with dynamic fixed-effects panel regression. Episodes were hand-coded from budget speeches, IMF Article IV reports, and official policy statements following Devries et al. (2011) and Romer &amp; Romer (2010), then classified as expenditure-based, tax-based, or mixed. The regression specification includes country and year fixed effects, two lags on each fiscal variable, and controls for lagged deficit and inflation. Cumulative three-year effects are estimated using the delta method.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="p-4 bg-cyan-950/20 border border-cyan-900/30">
            <p className="text-[10px] uppercase tracking-widest font-bold text-cyan-400 mb-2">SAMPLE</p>
            <p className="text-sm text-cyan-100/70 font-light">Argentina, Brazil, Chile, Colombia, Greece, India, Mexico, Morocco, South Africa, Türkiye</p>
          </div>
          <div className="p-4 bg-cyan-950/20 border border-cyan-900/30">
            <p className="text-[10px] uppercase tracking-widest font-bold text-cyan-400 mb-2">PERIOD</p>
            <p className="text-sm text-cyan-100/70 font-light">2009–2023 (15 years, unbalanced panel)</p>
          </div>
          <div className="p-4 bg-cyan-950/20 border border-cyan-900/30">
            <p className="text-[10px] uppercase tracking-widest font-bold text-cyan-400 mb-2">TOOLS</p>
            <p className="text-sm text-cyan-100/70 font-light">R (tidyverse, plm, stargazer); narrative coding in Excel</p>
          </div>
        </div>
      </div>

      {/* Footer / Request */}
      <div className="space-y-4 border-t border-cyan-900/30 pt-8">
        <p className="text-xs font-mono text-cyan-700">
          Supervised by Dr Melt Van Schoor, Department of Economics, Stellenbosch University.
        </p>
        <p className="text-sm text-cyan-100/70 font-light">
          The full thesis is available on request — please <Link href="/contact" className="text-fuchsia-400 hover:text-fuchsia-300 underline underline-offset-4 transition-colors">get in touch</Link>.
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

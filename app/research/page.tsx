export default function Research() {
  return (
    <section className="py-20 space-y-8">
      <div className="space-y-4 border-b border-cyan-900/30 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
          // RESEARCH
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">RESEARCH</span>
        </h1>
        <p className="text-lg text-cyan-100/70 max-w-3xl leading-relaxed font-light">
          Academic and applied research at the intersection of macroeconomic policy, emerging markets, and quantitative methods.
        </p>
      </div>

      <div className="py-12 text-center text-cyan-700 font-mono">
        <p className="text-sm">// CONTENT_LOADING...</p>
        <p className="text-xs mt-2 text-cyan-900">Research entries coming in the next pass</p>
      </div>
    </section>
  );
}

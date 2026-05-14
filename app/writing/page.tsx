export default function Writing() {
  return (
    <section className="py-20 space-y-8">
      <div className="space-y-4 border-b border-cyan-900/30 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-400 text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,1)]" />
          // WRITING
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">WRITING</span>
        </h1>
        <p className="text-lg text-cyan-100/70 max-w-3xl leading-relaxed font-light">
          Economic commentary, analysis, and written work on macroeconomics and emerging markets.
        </p>
      </div>

      <div className="py-12 text-center text-cyan-700 font-mono">
        <p className="text-sm">// CONTENT_LOADING...</p>
        <p className="text-xs mt-2 text-cyan-900">Writing entries coming in the next pass</p>
      </div>
    </section>
  );
}

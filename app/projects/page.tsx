export default function Projects() {
  return (
    <section className="py-20 space-y-8">
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

      <div className="py-12 text-center text-cyan-700 font-mono">
        <p className="text-sm">// CONTENT_LOADING...</p>
        <p className="text-xs mt-2 text-cyan-900">Project entries coming in the next pass</p>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <section className="py-20 space-y-8">
      <div className="space-y-4 border-b border-cyan-900/30 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
          // CONTACT
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">GET IN TOUCH</span>
        </h1>
        <p className="text-lg text-cyan-100/70 max-w-3xl leading-relaxed font-light">
          Open to research collaborations, internships, and full-time roles in finance, economics, and policy research.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-8">
        <a href="mailto:diaz.sangeve@gmail.com" className="group block p-6 bg-[#0a0a1a] border border-cyan-900/30 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
          <p className="text-xs font-bold tracking-widest uppercase mb-2 text-cyan-400">EMAIL</p>
          <p className="text-lg text-white font-light">diaz.sangeve@gmail.com</p>
        </a>

        <a href="https://github.com/diazsangeve-lab" target="_blank" rel="noopener noreferrer" className="group block p-6 bg-[#0a0a1a] border border-cyan-900/30 hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(232,121,249,0.2)] transition-all duration-300">
          <p className="text-xs font-bold tracking-widest uppercase mb-2 text-fuchsia-400">GITHUB</p>
          <p className="text-lg text-white font-light">diazsangeve-lab</p>
        </a>

        <a href="https://www.linkedin.com/in/diazsangeve" target="_blank" rel="noopener noreferrer" className="group block p-6 bg-[#0a0a1a] border border-cyan-900/30 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300">
          <p className="text-xs font-bold tracking-widest uppercase mb-2 text-purple-400">LINKEDIN</p>
          <p className="text-lg text-white font-light">diazsangeve</p>
        </a>

        <div className="block p-6 bg-[#0a0a1a] border border-cyan-900/30">
          <p className="text-xs font-bold tracking-widest uppercase mb-2 text-yellow-400">LOCATION</p>
          <p className="text-lg text-white font-light">Stellenbosch, South Africa</p>
        </div>
      </div>
    </section>
  );
}

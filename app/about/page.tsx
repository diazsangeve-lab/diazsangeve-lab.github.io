import Image from "next/image";

const basePath = "";

export default function About() {
  return (
    <section className="py-20 space-y-8">
      <div className="space-y-4 border-b border-cyan-900/30 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-950/20 text-yellow-400 text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,1)]" />
          // ABOUT
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">ABOUT_ME</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-12 gap-12 pt-8">
        <div className="md:col-span-4 space-y-8">
          <div className="relative w-full aspect-[4/5] border border-cyan-500/30 rounded-sm overflow-hidden bg-cyan-950/30 group">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,5,16,0.8)_100%)] z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />
            
            <Image 
              src={`${basePath}/me.png`}
              alt="Profile"
              fill
              className="object-cover z-0 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
            />
          </div>
        </div>
        <div className="md:col-span-8 space-y-8 text-cyan-100/80 leading-relaxed font-light">
          <p>
            I&apos;m an economics graduate student at Stellenbosch University, working at the intersection of macroeconomic policy, emerging markets, and quantitative research. My Honours thesis examined the short- and medium-term effects of austerity in emerging economies — work that earned a distinction and crystallised my interest in fiscal dynamics in developing contexts. <strong className="text-fuchsia-400 font-bold">Research that informs policy is what drives me.</strong>{" "}Before returning for my Master&apos;s, I spent five months as an Economic Research Intern at Cirrus Capital in Windhoek, covering sovereign bonds, fiscal policy, and macroeconomic commentary.
          </p>
          <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
            <div className="grid grid-cols-2 gap-8 font-mono text-sm">
              <div>
                <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">STACK_TRACE</h3>
                <ul className="space-y-2 text-cyan-200/70">
                  <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> R / Stata / MATLAB</li>
                  <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Python / SQL / LaTeX</li>
                  <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Bloomberg Terminal / Git / Excel</li>
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">PROTOCOLS</h3>
                <ul className="space-y-2 text-cyan-200/70">
                  <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Rigour over speed</li>
                  <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Empirics over intuition</li>
                  <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Always learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

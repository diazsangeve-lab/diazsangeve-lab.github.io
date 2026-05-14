import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diaz Sangeve · Quantitative Researcher",
  description: "Portfolio of Diaz Sangeve — economics graduate student and quantitative researcher at Stellenbosch University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
          {/* Grid Background */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-fuchsia-900/20 to-transparent opacity-30" />
          </div>

          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
              <Link 
                href="/" 
                className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:to-cyan-400 transition-all duration-300"
              >
                DIAZ SANGEVE
              </Link>
              <div className="flex gap-6 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
                <Link href="/research" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">RESEARCH</Link>
                <Link href="/projects" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">PROJECTS</Link>
                <Link href="/writing" className="hover:text-purple-400 hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] transition-all">WRITING</Link>
                <Link href="/about" className="hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">ABOUT</Link>
                <Link href="/contact" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">CONTACT</Link>
              </div>
            </div>
          </nav>

          <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
            {children}
          </main>

          <footer className="py-8 text-center text-xs font-mono text-cyan-900/50 border-t border-cyan-900/20 relative z-10">
            <p>© 2026 Diaz Sangeve · <a href="https://github.com/diazsangeve-lab/diazsangeve-lab.github.io" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">Source on GitHub</a></p>
          </footer>
        </div>
      </body>
    </html>
  );
}

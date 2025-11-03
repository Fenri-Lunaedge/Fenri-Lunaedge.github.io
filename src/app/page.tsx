import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

// Dynamically import components with loading states
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <LoadingSection />,
});

const Experience = dynamic(() => import("@/components/sections/Experience"), {
  loading: () => <LoadingSection />,
});

const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <LoadingSection />,
});

const Skills = dynamic(() => import("@/components/sections/Skills"), {
  loading: () => <LoadingSection />,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <LoadingSection />,
});

const Dashboards = dynamic(() => import("@/components/sections/Dashboards"), {
  loading: () => <LoadingSection />,
});

function LoadingSection() {
  return (
    <div className="section flex items-center justify-center">
      <div className="spinner" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation - Fixed header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-dark-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Logo */}
            <a href="#" className="font-bold text-xl neon-text">
              FL
            </a>

            {/* Navigation links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="link text-sm">
                About
              </a>
              <a href="#experience" className="link text-sm">
                Experience
              </a>
              <a href="#projects" className="link text-sm">
                Projects
              </a>
              <a href="#dashboards" className="link text-sm">
                Dashboards
              </a>
              <a href="#skills" className="link text-sm">
                Skills
              </a>
              <a href="#contact" className="btn-primary text-sm py-2 px-4">
                Contact
              </a>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden text-neon-cyan">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Dashboards />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="glass-strong border-t border-dark-border py-8">
        <div className="container-custom px-4">
          <div className="text-center space-y-4">
            <p className="text-dark-textSecondary text-sm">
              Built with Next.js, TypeScript, Tailwind CSS, and Three.js
            </p>
            <p className="text-dark-textMuted text-xs">
              © 2025 Iramam Silva (Fenri-Lunaedge). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

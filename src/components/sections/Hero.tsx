"use client";

import { useEffect, useState } from "react";
import { personalInfo, about } from "@/data/portfolio";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="section relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated scanline effect */}
      <div className="scanline" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-neon-cyan font-mono text-lg">
                <span className="text-dark-textMuted">$</span> whoami
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <p className="text-xl lg:text-2xl text-dark-textSecondary font-mono">
                aka <span className="text-neon-purple">{personalInfo.alias}</span>
              </p>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-3">
              <h2 className="text-2xl lg:text-3xl font-bold text-neon-cyan">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-dark-textSecondary">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {about.stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-lg p-4 text-center hover:glass-strong transition-all duration-300 hover:shadow-neon-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="stat-number text-3xl lg:text-4xl mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-dark-textSecondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-primary"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-outline"
              >
                Get in Touch
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                GitHub →
              </a>
            </div>
          </div>

          {/* Right side - Terminal simulation */}
          <div className="terminal animate-fade-in" style={{ animationDelay: "200ms" }}>
            {/* Terminal header */}
            <div className="terminal-header">
              <div className="terminal-dot bg-data-error" />
              <div className="terminal-dot bg-data-warning" />
              <div className="terminal-dot bg-data-success" />
              <span className="ml-2 text-dark-textMuted text-xs">
                portfolio.sh
              </span>
            </div>

            {/* Terminal body */}
            <div className="terminal-body space-y-2">
              <TypewriterEffect text="$ cat profile.json" delay={0} />
              <TypewriterEffect text="{" delay={800} />
              <TypewriterEffect
                text='  "role": "Senior BI Analyst",'
                delay={1200}
              />
              <TypewriterEffect
                text='  "experience": "5+ years",'
                delay={1600}
              />
              <TypewriterEffect
                text='  "company": "Samsung SDS",'
                delay={2000}
              />
              <TypewriterEffect
                text='  "expertise": ['
                delay={2400}
              />
              <TypewriterEffect
                text='    "Tableau ⭐",'
                delay={2800}
              />
              <TypewriterEffect
                text='    "Power BI",'
                delay={3200}
              />
              <TypewriterEffect
                text='    "Python + NLP",'
                delay={3600}
              />
              <TypewriterEffect
                text='    "ETL Engineering",'
                delay={4000}
              />
              <TypewriterEffect
                text='    "Apache Hop",'
                delay={4400}
              />
              <TypewriterEffect
                text='    "SAP HANA & Vertica"'
                delay={4800}
              />
              <TypewriterEffect text="  ]," delay={5200} />
              <TypewriterEffect
                text='  "passion": "Transforming data into strategic insights"'
                delay={5600}
              />
              <TypewriterEffect text="}" delay={6000} />
              <TypewriterEffect
                text="$ █"
                delay={6400}
                className="text-neon-cyan animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Typewriter effect component
function TypewriterEffect({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setShowCursor(true);
      let index = 0;

      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText((prev) => prev + text[index]);
          index++;
        } else {
          setShowCursor(false);
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return (
    <div className={`font-mono text-sm ${className}`}>
      {displayText}
      {showCursor && <span className="animate-pulse">█</span>}
    </div>
  );
}

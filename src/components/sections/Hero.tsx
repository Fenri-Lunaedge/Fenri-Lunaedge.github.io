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
            <div className="terminal-body space-y-2 font-mono text-sm">
              <TypewriterLine text="$ cat profile.json" delay={0} />
              <TypewriterLine text="{" delay={800} />
              <TypewriterLine
                text='  "role": "Senior BI Analyst",'
                delay={1200}
              />
              <TypewriterLine
                text='  "experience": "5+ years",'
                delay={1600}
              />
              <TypewriterLine
                text='  "company": "Samsung SDS",'
                delay={2000}
              />
              <TypewriterLine
                text='  "expertise": ['
                delay={2400}
              />
              <TypewriterLine
                text='    "Tableau ⭐",'
                delay={2800}
              />
              <TypewriterLine
                text='    "Power BI",'
                delay={3200}
              />
              <TypewriterLine
                text='    "Python + NLP",'
                delay={3600}
              />
              <TypewriterLine
                text='    "ETL Engineering",'
                delay={4000}
              />
              <TypewriterLine
                text='    "Apache Hop",'
                delay={4400}
              />
              <TypewriterLine
                text='    "SAP HANA & Vertica"'
                delay={4800}
              />
              <TypewriterLine text="  ]," delay={5200} />
              <TypewriterLine
                text='  "passion": "Transforming data into strategic insights"'
                delay={5600}
              />
              <TypewriterLine text="}" delay={6000} />
              <TypewriterLine
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

// Improved Typewriter effect component - Fixed undefined bug
function TypewriterLine({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Start after delay
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started || currentIndex >= text.length) return;

    const typingTimer = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, 30);

    return () => clearTimeout(typingTimer);
  }, [started, currentIndex, text]);

  return (
    <div className={className || ""}>
      {displayText}
      {started && currentIndex < text.length && (
        <span className="animate-pulse">█</span>
      )}
    </div>
  );
}

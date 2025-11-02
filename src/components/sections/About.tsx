"use client";

import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section bg-dark-bgSecondary/30">
      <div className="container-custom space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            About Me
          </h2>
          <p className="text-dark-textSecondary max-w-2xl mx-auto">
            Passionate about transforming raw data into actionable insights
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Summary */}
          <div className="space-y-6">
            <div className="glass rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold text-neon-cyan mb-4">
                Professional Summary
              </h3>
              <p className="text-dark-text leading-relaxed">
                {about.summary}
              </p>
            </div>
          </div>

          {/* Right side - Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-cyan">Education</h3>
            <div className="space-y-4">
              {about.education.map((edu, index) => (
                <div
                  key={index}
                  className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-neon-blue">{edu.degree}</h4>
                    <span
                      className={`badge ${
                        edu.status === "In Progress"
                          ? "badge-warning"
                          : "badge-success"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-dark-textSecondary text-sm">
                    {edu.institution}
                  </p>
                  <p className="text-dark-textMuted text-xs mt-1">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

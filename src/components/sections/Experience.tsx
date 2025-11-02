"use client";

import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            Professional Experience
          </h2>
          <p className="text-dark-textSecondary max-w-2xl mx-auto">
            5+ years transforming data into strategic business insights
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <div
              key={index}
              className="glass rounded-lg p-8 hover:glass-strong transition-all duration-300 hover:shadow-neon-sm"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-neon-cyan">
                    {job.role}
                  </h3>
                  <p className="text-lg text-dark-text mt-1">{job.company}</p>
                  <p className="text-sm text-dark-textMuted mt-1">
                    {job.period} • {job.duration}
                  </p>
                </div>
                <span className="badge-primary">{job.type}</span>
              </div>

              {/* Description */}
              <ul className="space-y-2 mb-6">
                {job.description.map((item, i) => (
                  <li key={i} className="text-dark-textSecondary text-sm flex">
                    <span className="text-neon-cyan mr-2">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded-full border border-neon-cyan/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Achievements */}
              {job.achievements.length > 0 && (
                <div className="border-t border-dark-border pt-4">
                  <h4 className="text-sm font-bold text-neon-blue mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-dark-textSecondary text-sm flex"
                      >
                        <span className="text-data-success mr-2">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

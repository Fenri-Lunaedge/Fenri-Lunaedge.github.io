"use client";

import { projects } from "@/data/portfolio";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section bg-dark-bgSecondary/30">
      <div className="container-custom space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            Featured Projects
          </h2>
          <p className="text-dark-textSecondary max-w-2xl mx-auto">
            Building innovative solutions that drive business value
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project image/visual */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="glass rounded-lg p-8 aspect-video flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">
                      {project.id === "ultrathink" ? "🤖" : "📊"}
                    </div>
                    <h4 className="text-xl font-bold text-neon-cyan">
                      {project.category}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <span className="badge-primary mb-2 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-neon-cyan mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-dark-textSecondary">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-dark-text leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                {project.stats && (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-neon-cyan">
                          {stat.value}
                        </div>
                        <div className="text-xs text-dark-textMuted">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-bgTertiary text-neon-blue text-xs rounded-lg border border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key features (only for Ultrathink) */}
                {project.id === "ultrathink" && (
                  <details className="glass rounded-lg">
                    <summary className="cursor-pointer p-4 font-bold text-neon-cyan hover:bg-dark-bgTertiary/50 transition-colors">
                      View All Features ({project.features.length})
                    </summary>
                    <ul className="p-4 pt-0 space-y-2 max-h-64 overflow-y-auto">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-dark-textSecondary flex"
                        >
                          <span className="text-neon-cyan mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}

                {/* Highlights */}
                {project.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="badge-success">
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

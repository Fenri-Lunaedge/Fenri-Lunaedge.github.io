"use client";

import { skills } from "@/data/portfolio";

export default function Skills() {
  const skillCategories = [
    { title: "BI Platforms", data: skills.biTools, icon: "📊" },
    { title: "Programming", data: skills.programming, icon: "💻" },
    { title: "ETL & Orchestration", data: skills.etl, icon: "🔄" },
    { title: "Databases", data: skills.databases, icon: "🗄️" },
    { title: "AI & NLP", data: skills.aiNlp, icon: "🤖" },
    { title: "Data Visualization", data: skills.dataViz, icon: "📈" },
  ];

  return (
    <section id="skills" className="section">
      <div className="container-custom space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            Technical Skills
          </h2>
          <p className="text-dark-textSecondary max-w-2xl mx-auto">
            Comprehensive expertise across the modern data stack
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300 hover:shadow-neon-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-neon-cyan">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.data.map((skill, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-dark-text">
                        {skill.name}
                        {skill.primary && (
                          <span className="text-neon-cyan ml-1">⭐</span>
                        )}
                      </span>
                      <span className="text-xs text-dark-textMuted">
                        {skill.years}y
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-2 bg-dark-bgTertiary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

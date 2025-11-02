"use client";

import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: personalInfo.linkedin,
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "@Fenri-Lunaedge",
      href: personalInfo.github,
    },
    {
      icon: "📱",
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
  ];

  return (
    <section id="contact" className="section bg-dark-bgSecondary/30">
      <div className="container-custom max-w-4xl space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            Let's Connect
          </h2>
          <p className="text-dark-textSecondary max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about data analytics
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={
                method.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300 hover:shadow-neon-sm card-hover block"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{method.icon}</div>
                <div className="flex-1">
                  <div className="text-sm text-dark-textMuted mb-1">
                    {method.label}
                  </div>
                  <div className="text-neon-cyan font-medium">
                    {method.value}
                  </div>
                </div>
                <div className="text-dark-textMuted">→</div>
              </div>
            </a>
          ))}
        </div>

        {/* Quick message form */}
        <div className="glass rounded-lg p-8">
          <h3 className="text-2xl font-bold text-neon-cyan mb-6">
            Send a Quick Message
          </h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-dark-bgTertiary border border-dark-border rounded-lg px-4 py-3 text-dark-text focus:border-neon-cyan focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-dark-bgTertiary border border-dark-border rounded-lg px-4 py-3 text-dark-text focus:border-neon-cyan focus:outline-none transition-colors"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-dark-bgTertiary border border-dark-border rounded-lg px-4 py-3 text-dark-text focus:border-neon-cyan focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="btn-primary w-full"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "Form submission not yet implemented. Please use the email link above."
                );
              }}
            >
              Send Message
            </button>
          </form>
          <p className="text-xs text-dark-textMuted text-center mt-4">
            Or email me directly at{" "}
            <a href={`mailto:${personalInfo.email}`} className="link">
              {personalInfo.email}
            </a>
          </p>
        </div>

        {/* Location */}
        <div className="text-center space-y-2">
          <div className="text-4xl">📍</div>
          <p className="text-dark-textSecondary">
            Based in {personalInfo.location}
          </p>
          <p className="text-sm text-dark-textMuted">
            Open to remote opportunities and relocation
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import LuxuryTourismDashboard from "../dashboards/LuxuryTourism";
import SocialMediaDashboard from "../dashboards/SocialMedia";
import EcommerceDashboard from "../dashboards/Ecommerce";
import FinancialDashboard from "../dashboards/Financial";
import PeopleAnalyticsDashboard from "../dashboards/PeopleAnalytics";

const dashboards = [
  {
    id: "luxury-tourism",
    name: "Luxury Tourism Analytics",
    description: "Premium travel insights & destination performance",
    icon: "🏖️",
    category: "Travel & Hospitality",
    component: LuxuryTourismDashboard,
  },
  {
    id: "social-media",
    name: "Social Media & Media Monitoring",
    description: "Brand sentiment & cross-platform analytics",
    icon: "📱",
    category: "Marketing & PR",
    component: SocialMediaDashboard,
  },
  {
    id: "ecommerce",
    name: "E-commerce Performance",
    description: "Sales funnel, conversion & customer metrics",
    icon: "💳",
    category: "Retail & Sales",
    component: EcommerceDashboard,
  },
  {
    id: "financial",
    name: "Financial Services",
    description: "Portfolio performance & risk analytics",
    icon: "💰",
    category: "Finance",
    component: FinancialDashboard,
  },
  {
    id: "people-analytics",
    name: "People Analytics (HR)",
    description: "Workforce insights & talent metrics",
    icon: "👥",
    category: "Human Resources",
    component: PeopleAnalyticsDashboard,
  },
];

export default function Dashboards() {
  const [activeDashboard, setActiveDashboard] = useState(dashboards[0].id);

  const currentDashboard = dashboards.find((d) => d.id === activeDashboard);
  const DashboardComponent = currentDashboard?.component;

  return (
    <section id="dashboards" className="section bg-dark-bgSecondary/30">
      <div className="container-custom space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            Interactive Dashboards
          </h2>
          <p className="text-dark-textSecondary max-w-2xl mx-auto">
            Explore fully interactive BI dashboards showcasing data visualization expertise
            across multiple industries and use cases
          </p>
        </div>

        {/* Dashboard Selector */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {dashboards.map((dashboard) => (
            <button
              key={dashboard.id}
              onClick={() => setActiveDashboard(dashboard.id)}
              className={`glass rounded-lg p-4 text-left transition-all duration-300 hover:glass-strong hover:shadow-neon-sm ${
                activeDashboard === dashboard.id
                  ? "border-2 border-neon-cyan shadow-neon"
                  : "border border-dark-border"
              }`}
            >
              <div className="text-3xl mb-2">{dashboard.icon}</div>
              <h3 className="font-bold text-neon-cyan text-sm mb-1">
                {dashboard.name}
              </h3>
              <p className="text-xs text-dark-textMuted mb-2">
                {dashboard.description}
              </p>
              <span className="inline-block px-2 py-1 bg-dark-bgTertiary rounded text-xs text-dark-textSecondary">
                {dashboard.category}
              </span>
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="glass rounded-lg p-8 min-h-[800px]">
          {DashboardComponent ? (
            <DashboardComponent />
          ) : (
            <div className="flex flex-col items-center justify-center h-full min-h-[600px] space-y-4">
              <div className="text-6xl">{currentDashboard?.icon}</div>
              <h3 className="text-2xl font-bold text-neon-cyan">
                {currentDashboard?.name}
              </h3>
              <p className="text-dark-textSecondary text-center max-w-md">
                This dashboard is currently under development. Check back soon for
                interactive visualizations and insights!
              </p>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-data-warning/20 text-data-warning rounded-full text-sm">
                  Coming Soon
                </span>
                <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-sm">
                  {currentDashboard?.category}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Info Note */}
        <div className="glass rounded-lg p-6 border-l-4 border-neon-purple">
          <h4 className="text-lg font-bold text-neon-purple mb-2">💡 About These Dashboards</h4>
          <p className="text-dark-textSecondary text-sm">
            All dashboards feature realistic mock data and fully interactive visualizations built with
            <span className="text-neon-cyan font-medium"> Recharts</span>, demonstrating proficiency in
            data visualization, UX design, and modern web technologies. Each dashboard showcases
            different analytical approaches and business intelligence patterns used in real-world scenarios.
          </p>
        </div>
      </div>
    </section>
  );
}

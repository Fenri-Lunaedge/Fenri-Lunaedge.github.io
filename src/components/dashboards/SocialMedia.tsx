"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { socialMediaData } from "@/data/dashboards";

export default function SocialMediaDashboard() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const { overview, platforms, timeline, traditionalMedia, topKeywords } = socialMediaData;

  const sentimentColors = {
    positive: "#06FFA5",
    neutral: "#FFD60A",
    negative: "#FF006E",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-3xl font-bold gradient-text">Social Media & Media Monitoring</h3>
        <p className="text-dark-textSecondary">
          Real-time brand monitoring • Multi-platform sentiment analysis • Traditional vs Digital media insights
        </p>
      </div>

      {/* Overview KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="glass rounded-lg p-4 hover:glass-strong transition-all">
          <div className="text-xs text-dark-textMuted mb-1">TOTAL MENTIONS</div>
          <div className="text-2xl font-bold text-neon-cyan">{overview.totalMentions.toLocaleString()}</div>
          <div className="text-xs text-data-success mt-1">↑ Last 7 days</div>
        </div>
        <div className="glass rounded-lg p-4 hover:glass-strong transition-all">
          <div className="text-xs text-dark-textMuted mb-1">TOTAL REACH</div>
          <div className="text-2xl font-bold text-neon-cyan">{(overview.reach / 1000000).toFixed(1)}M</div>
          <div className="text-xs text-dark-textSecondary mt-1">People reached</div>
        </div>
        <div className="glass rounded-lg p-4 hover:glass-strong transition-all">
          <div className="text-xs text-dark-textMuted mb-1">AVG ENGAGEMENT</div>
          <div className="text-2xl font-bold text-neon-cyan">{overview.engagement}%</div>
          <div className="text-xs text-data-success mt-1">+0.5% vs prev week</div>
        </div>
        <div className="glass rounded-lg p-4 hover:glass-strong transition-all">
          <div className="text-xs text-dark-textMuted mb-1">SENTIMENT SCORE</div>
          <div className="text-2xl font-bold text-data-success">{overview.sentiment.positive}%</div>
          <div className="text-xs text-dark-textSecondary mt-1">Positive overall</div>
        </div>
        <div className="glass rounded-lg p-4 hover:glass-strong transition-all">
          <div className="text-xs text-dark-textMuted mb-1">TRENDING TOPICS</div>
          <div className="text-2xl font-bold text-neon-cyan">{overview.trendingTopics}</div>
          <div className="text-xs text-dark-textSecondary mt-1">Active discussions</div>
        </div>
      </div>

      {/* Sentiment Over Time & Distribution */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Timeline */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Sentiment Timeline (7 Days)</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2e" />
              <XAxis dataKey="date" stroke="#8b92a7" />
              <YAxis stroke="#8b92a7" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0D1117",
                  border: "1px solid #00F5FF",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="positive" stroke={sentimentColors.positive} strokeWidth={2} name="Positive" />
              <Line type="monotone" dataKey="neutral" stroke={sentimentColors.neutral} strokeWidth={2} name="Neutral" />
              <Line type="monotone" dataKey="negative" stroke={sentimentColors.negative} strokeWidth={2} name="Negative" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sentiment Distribution */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Overall Sentiment Distribution</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: "Positive", value: overview.sentiment.positive, color: sentimentColors.positive },
                  { name: "Neutral", value: overview.sentiment.neutral, color: sentimentColors.neutral },
                  { name: "Negative", value: overview.sentiment.negative, color: sentimentColors.negative },
                ]}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {[overview.sentiment.positive, overview.sentiment.neutral, overview.sentiment.negative].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={Object.values(sentimentColors)[index]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0D1117",
                  border: "1px solid #B76EFF",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Platform Performance */}
      <div className="glass rounded-lg p-6">
        <h4 className="text-xl font-bold text-neon-cyan mb-6">Platform Performance Comparison</h4>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={platforms}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2e" />
            <XAxis dataKey="name" stroke="#8b92a7" />
            <YAxis yAxisId="left" orientation="left" stroke="#8b92a7" />
            <YAxis yAxisId="right" orientation="right" stroke="#8b92a7" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0D1117",
                border: "1px solid #00F5FF",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar yAxisId="left" dataKey="mentions" fill="#00F5FF" name="Mentions" radius={[8, 8, 0, 0]} />
            <Bar yAxisId="right" dataKey="engagement" fill="#B76EFF" name="Engagement %" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Traditional Media & Top Keywords */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Traditional Media */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Traditional Media Coverage</h4>
          <div className="space-y-3">
            {traditionalMedia.map((outlet, index) => (
              <div
                key={outlet.outlet}
                className="flex items-center justify-between p-3 bg-dark-bgTertiary rounded-lg hover:bg-dark-border transition-colors"
              >
                <div className="flex-1">
                  <div className="font-medium text-dark-text">{outlet.outlet}</div>
                  <div className="text-xs text-dark-textMuted mt-1">
                    <span className="px-2 py-1 bg-dark-bg rounded text-xs">{outlet.category}</span>
                    <span className="ml-2">{(outlet.reach / 1000000).toFixed(1)}M reach</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-neon-cyan">{outlet.mentions}</div>
                  <div
                    className={`text-xs px-2 py-1 rounded-full ${
                      outlet.sentiment >= 80
                        ? "bg-data-success/20 text-data-success"
                        : outlet.sentiment >= 70
                        ? "bg-data-warning/20 text-data-warning"
                        : "bg-data-error/20 text-data-error"
                    }`}
                  >
                    {outlet.sentiment}% positive
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Keywords */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Top Keywords & Topics</h4>
          <div className="space-y-3">
            {topKeywords.map((keyword, index) => (
              <div key={keyword.word} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-dark-text font-medium capitalize">{keyword.word}</span>
                  <span className="text-dark-textMuted text-sm">{keyword.count.toLocaleString()} mentions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-dark-bgTertiary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                      style={{ width: `${(keyword.count / topKeywords[0].count) * 100}%` }}
                    />
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      keyword.sentiment >= 80
                        ? "bg-data-success/20 text-data-success"
                        : keyword.sentiment >= 70
                        ? "bg-data-warning/20 text-data-warning"
                        : "bg-data-error/20 text-data-error"
                    }`}
                  >
                    {keyword.sentiment}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Platform Table */}
      <div className="glass rounded-lg p-6 overflow-x-auto">
        <h4 className="text-xl font-bold text-neon-cyan mb-6">Detailed Platform Metrics</h4>
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-border">
              <th className="text-left py-3 px-4 text-sm font-bold text-neon-cyan">Platform</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Mentions</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Reach</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Engagement %</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((platform) => (
              <tr
                key={platform.name}
                className="border-b border-dark-border hover:bg-dark-bgTertiary transition-colors cursor-pointer"
                onClick={() => setSelectedPlatform(platform.name)}
              >
                <td className="py-3 px-4 font-medium text-dark-text">{platform.name}</td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">{platform.mentions.toLocaleString()}</td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">
                  {(platform.reach / 1000000).toFixed(1)}M
                </td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">{platform.engagement}%</td>
                <td className="text-right py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      platform.sentiment >= 70
                        ? "bg-data-success/20 text-data-success"
                        : platform.sentiment >= 60
                        ? "bg-data-warning/20 text-data-warning"
                        : "bg-data-error/20 text-data-error"
                    }`}
                  >
                    {platform.sentiment}% positive
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Insights */}
      <div className="glass rounded-lg p-6 border-l-4 border-neon-cyan">
        <h4 className="text-lg font-bold text-neon-cyan mb-3">📊 Key Insights</h4>
        <ul className="space-y-2 text-dark-textSecondary">
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>Instagram leads with highest engagement rate (4.2%) and strong positive sentiment (68%)</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>LinkedIn shows best sentiment (72%) but lower volume, ideal for B2B communication</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>Traditional media (TV Globo) delivers massive reach (8.9M) complementing digital presence</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>"Innovation" and "quality" keywords drive strongest positive sentiment (78-82%)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

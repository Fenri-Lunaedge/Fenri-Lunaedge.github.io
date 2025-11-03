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
  Area,
  AreaChart,
} from "recharts";
import { luxuryTourismData } from "@/data/dashboards";

export default function LuxuryTourismDashboard() {
  const [selectedMetric, setSelectedMetric] = useState<"revenue" | "bookings" | "avgTicket">("revenue");
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const { revenue, destinations, clientProfile, kpis } = luxuryTourismData;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-3xl font-bold gradient-text">Luxury Tourism Analytics</h3>
        <p className="text-dark-textSecondary">
          Premium travel insights • High-end destination performance • Client behavior analysis
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {Object.entries(kpis).map(([key, value], index) => (
          <div
            key={key}
            className="glass rounded-lg p-4 hover:glass-strong transition-all duration-300"
          >
            <div className="text-xs text-dark-textMuted mb-1">
              {key.replace(/([A-Z])/g, " $1").trim().toUpperCase()}
            </div>
            <div className="text-2xl font-bold text-neon-cyan">{value}</div>
          </div>
        ))}
      </div>

      {/* Revenue Trend with Metric Selector */}
      <div className="glass rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-bold text-neon-cyan">Revenue & Performance Trends</h4>
          <div className="flex gap-2">
            {(["revenue", "bookings", "avgTicket"] as const).map((metric) => (
              <button
                key={metric}
                onClick={() => setSelectedMetric(metric)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedMetric === metric
                    ? "bg-neon-cyan text-dark-bg"
                    : "bg-dark-bgTertiary text-dark-textSecondary hover:bg-dark-border"
                }`}
              >
                {metric === "avgTicket" ? "Avg Ticket" : metric.charAt(0).toUpperCase() + metric.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenue.monthly}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00F5FF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00F5FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2e" />
            <XAxis dataKey="month" stroke="#8b92a7" />
            <YAxis stroke="#8b92a7" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0D1117",
                border: "1px solid #00F5FF",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey={selectedMetric}
              stroke="#00F5FF"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Destinations Performance & Client Segments */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Destinations */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Premium Destinations Performance</h4>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={destinations} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2e" />
              <XAxis type="number" stroke="#8b92a7" />
              <YAxis dataKey="name" type="category" stroke="#8b92a7" width={100} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0D1117",
                  border: "1px solid #B76EFF",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="bookings" fill="#00F5FF" name="Bookings" radius={[0, 8, 8, 0]} />
              <Bar dataKey="satisfaction" fill="#B76EFF" name="Satisfaction %" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Client Segments */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Client Segments Distribution</h4>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={clientProfile.segments}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  percent,
                  name,
                }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="#0D1117"
                      stroke="white"
                      strokeWidth="3"
                      paintOrder="stroke"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                      className="text-xs font-bold"
                    >
                      {`${name} ${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {clientProfile.segments.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0D1117",
                  border: "1px solid #FF006E",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Age Groups & Spending */}
      <div className="glass rounded-lg p-6">
        <h4 className="text-xl font-bold text-neon-cyan mb-6">Client Demographics & Spending Patterns</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={clientProfile.ageGroups}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2e" />
            <XAxis dataKey="range" stroke="#8b92a7" />
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
            <Bar yAxisId="left" dataKey="percentage" fill="#00F5FF" name="% of Clients" radius={[8, 8, 0, 0]} />
            <Bar yAxisId="right" dataKey="avgSpend" fill="#B76EFF" name="Avg Spend (R$)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Destinations Details Table */}
      <div className="glass rounded-lg p-6 overflow-x-auto">
        <h4 className="text-xl font-bold text-neon-cyan mb-6">Detailed Destinations Metrics</h4>
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-border">
              <th className="text-left py-3 px-4 text-sm font-bold text-neon-cyan">Destination</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Bookings</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Revenue</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Avg Stay (days)</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Satisfaction</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((dest, index) => (
              <tr
                key={dest.name}
                className="border-b border-dark-border hover:bg-dark-bgTertiary transition-colors cursor-pointer"
                onClick={() => setSelectedDestination(dest.name)}
              >
                <td className="py-3 px-4 font-medium text-dark-text">{dest.name}</td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">{dest.bookings}</td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">
                  R$ {(dest.revenue / 1000000).toFixed(2)}M
                </td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">{dest.avgStay}</td>
                <td className="text-right py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      dest.satisfaction >= 97
                        ? "bg-data-success/20 text-data-success"
                        : dest.satisfaction >= 94
                        ? "bg-data-warning/20 text-data-warning"
                        : "bg-data-error/20 text-data-error"
                    }`}
                  >
                    {dest.satisfaction}%
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
            <span>Peak season (Jun-Aug) drives 32% of annual revenue with avg ticket 15% above baseline</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>Honeymoon segment shows highest client satisfaction (99%) and repeat booking rate (78%)</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>Age group 46-55 represents the highest spending power with R$ 71K avg ticket</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>Dubai and Maldives account for 55% of total bookings, maintaining 96%+ satisfaction</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

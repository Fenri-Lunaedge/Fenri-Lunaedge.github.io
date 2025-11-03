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
  AreaChart,
  Area,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts";
import { ecommerceData } from "@/data/dashboards";

export default function EcommerceDashboard() {
  const [timeRange, setTimeRange] = useState<"7d" | "30d">("30d");

  const { sales, funnel, topProducts, customerMetrics, categories } = ecommerceData;

  const COLORS = ["#00F5FF", "#B76EFF", "#FF006E", "#FFD60A", "#06FFA5"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-3xl font-bold gradient-text">E-commerce & Retail Performance</h3>
        <p className="text-dark-textSecondary">
          Sales analytics • Conversion funnel • Customer lifetime value • Product performance
        </p>
      </div>

      {/* Customer Metrics KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {Object.entries(customerMetrics).map(([key, value], index) => (
          <div
            key={key}
            className="glass rounded-lg p-4 hover:glass-strong transition-all duration-300"
          >
            <div className="text-xs text-dark-textMuted mb-1">
              {key.replace(/([A-Z])/g, " $1").trim().toUpperCase()}
            </div>
            <div className="text-2xl font-bold text-neon-cyan">
              {typeof value === "number" ? (key.includes("Rate") || key === "nps" ? `${value}%` : `R$ ${value.toFixed(2)}`) : value}
            </div>
          </div>
        ))}
      </div>

      {/* Sales Performance & Conversion Funnel */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Daily Sales */}
        <div className="glass rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-bold text-neon-cyan">Daily Sales Performance (30d)</h4>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={sales.daily}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00F5FF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00F5FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2e" />
              <XAxis dataKey="day" stroke="#8b92a7" />
              <YAxis stroke="#8b92a7" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0D1117",
                  border: "1px solid #00F5FF",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#00F5FF"
                fillOpacity={1}
                fill="url(#colorSales)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Conversion Funnel */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Conversion Funnel</h4>
          <div className="space-y-3">
            {funnel.map((stage, index) => (
              <div key={stage.stage} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dark-text font-medium">{stage.stage}</span>
                  <span className="text-dark-textMuted">{stage.value.toLocaleString()} ({stage.percentage}%)</span>
                </div>
                <div className="h-12 bg-dark-bgTertiary rounded-lg overflow-hidden relative">
                  <div
                    className="h-full flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      width: `${stage.percentage}%`,
                      background: `linear-gradient(90deg, ${COLORS[index]}, ${COLORS[index]}dd)`,
                    }}
                  >
                    {stage.percentage >= 15 && `${stage.percentage}%`}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-dark-bgTertiary rounded-lg">
            <div className="text-xs text-dark-textMuted">Overall Conversion Rate</div>
            <div className="text-2xl font-bold text-data-success">3.0%</div>
            <div className="text-xs text-dark-textSecondary mt-1">Industry avg: 2.5%</div>
          </div>
        </div>
      </div>

      {/* Top Products Performance */}
      <div className="glass rounded-lg p-6">
        <h4 className="text-xl font-bold text-neon-cyan mb-6">Top Products by Revenue</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topProducts} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2e" />
            <XAxis type="number" stroke="#8b92a7" />
            <YAxis dataKey="name" type="category" stroke="#8b92a7" width={180} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0D1117",
                border: "1px solid #B76EFF",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="revenue" fill="#00F5FF" name="Revenue (R$)" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Categories Distribution & Product Details */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Categories */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Sales by Category</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categories}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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

        {/* Product Performance Cards */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Product Performance Highlights</h4>
          <div className="space-y-3">
            {topProducts.slice(0, 3).map((product, index) => (
              <div key={product.name} className="p-4 bg-dark-bgTertiary rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="font-medium text-dark-text text-sm">{product.name}</div>
                    <div className="text-xs text-dark-textMuted mt-1">
                      {product.sales} units sold • {product.margin}% margin
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-neon-cyan">
                      R$ {(product.revenue / 1000).toFixed(0)}K
                    </div>
                    <div className="flex items-center gap-1 text-xs text-data-warning mt-1">
                      ⭐ {product.rating}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Product Table */}
      <div className="glass rounded-lg p-6 overflow-x-auto">
        <h4 className="text-xl font-bold text-neon-cyan mb-6">Product Performance Details</h4>
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-border">
              <th className="text-left py-3 px-4 text-sm font-bold text-neon-cyan">Product</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Units Sold</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Revenue</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Margin %</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Rating</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product) => (
              <tr
                key={product.name}
                className="border-b border-dark-border hover:bg-dark-bgTertiary transition-colors"
              >
                <td className="py-3 px-4 font-medium text-dark-text">{product.name}</td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">{product.sales.toLocaleString()}</td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">
                  R$ {(product.revenue / 1000).toFixed(0)}K
                </td>
                <td className="text-right py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.margin >= 40
                        ? "bg-data-success/20 text-data-success"
                        : product.margin >= 30
                        ? "bg-data-warning/20 text-data-warning"
                        : "bg-data-error/20 text-data-error"
                    }`}
                  >
                    {product.margin}%
                  </span>
                </td>
                <td className="text-right py-3 px-4 text-data-warning">⭐ {product.rating}</td>
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
            <span>CAC/LTV ratio of 1:16 indicates healthy customer acquisition strategy</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>Electronics dominates with 45% share but Books shows untapped growth potential</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>72.5% retention rate exceeds industry benchmark, driving repeat purchase rate of 45.3%</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>Bluetooth Speaker Mini leads in volume (5,670 units) with strong 48% margin</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

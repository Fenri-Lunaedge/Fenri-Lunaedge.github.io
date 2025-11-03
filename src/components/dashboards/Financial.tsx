"use client";

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
  ComposedChart,
} from "recharts";
import { financialData } from "@/data/dashboards";

export default function FinancialDashboard() {
  const { performance, portfolio, riskMetrics, cashFlow } = financialData;

  const COLORS = ["#00F5FF", "#B76EFF", "#FF006E", "#FFD60A", "#06FFA5"];

  const riskLevelColors = {
    Low: "#06FFA5",
    Medium: "#FFD60A",
    High: "#FF006E",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-3xl font-bold gradient-text">Financial Services Dashboard</h3>
        <p className="text-dark-textSecondary">
          Portfolio performance • Risk analytics • Cash flow management • Financial KPIs
        </p>
      </div>

      {/* Risk Metrics KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {Object.entries(riskMetrics).map(([key, value]) => (
          <div key={key} className="glass rounded-lg p-4 hover:glass-strong transition-all">
            <div className="text-xs text-dark-textMuted mb-1">
              {key.replace(/([A-Z0-9])/g, " $1").trim().toUpperCase()}
            </div>
            <div className={`text-2xl font-bold ${
              key === "sharpeRatio" && value > 1.5 ? "text-data-success" :
              key === "volatility" && value < 20 ? "text-data-success" :
              "text-neon-cyan"
            }`}>
              {typeof value === "number"
                ? key.includes("Ratio") || key === "beta" || key === "correlation"
                  ? value.toFixed(2)
                  : value > 0
                    ? `${value}%`
                    : `${value}%`
                : value
              }
            </div>
          </div>
        ))}
      </div>

      {/* Quarterly Performance */}
      <div className="glass rounded-lg p-6">
        <h4 className="text-xl font-bold text-neon-cyan mb-6">Quarterly Financial Performance</h4>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={performance.quarterly}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2e" />
            <XAxis dataKey="quarter" stroke="#8b92a7" />
            <YAxis yAxisId="left" stroke="#8b92a7" />
            <YAxis yAxisId="right" orientation="right" stroke="#8b92a7" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0D1117",
                border: "1px solid #00F5FF",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar yAxisId="left" dataKey="revenue" fill="#00F5FF" name="Revenue (R$M)" radius={[8, 8, 0, 0]} />
            <Bar yAxisId="left" dataKey="ebitda" fill="#B76EFF" name="EBITDA (R$M)" radius={[8, 8, 0, 0]} />
            <Line yAxisId="right" type="monotone" dataKey="margin" stroke="#06FFA5" strokeWidth={3} name="Margin %" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Portfolio Allocation & Asset Performance */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Portfolio Allocation */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Portfolio Allocation</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={portfolio}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ asset, allocation }) => `${asset} ${allocation}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="allocation"
              >
                {portfolio.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
          <div className="mt-4 p-3 bg-dark-bgTertiary rounded-lg text-center">
            <div className="text-xs text-dark-textMuted">Total Portfolio Value</div>
            <div className="text-2xl font-bold text-neon-cyan">R$ 150.0M</div>
          </div>
        </div>

        {/* Asset Performance */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Asset Class Performance</h4>
          <div className="space-y-4">
            {portfolio.map((asset, index) => (
              <div key={asset.asset} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-dark-text font-medium">{asset.asset}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-dark-textMuted text-sm">
                      R$ {(asset.value / 1000000).toFixed(1)}M
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium`}
                      style={{
                        backgroundColor: `${riskLevelColors[asset.risk as keyof typeof riskLevelColors]}20`,
                        color: riskLevelColors[asset.risk as keyof typeof riskLevelColors],
                      }}
                    >
                      {asset.risk} Risk
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-dark-bgTertiary rounded-full overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        width: `${asset.allocation}%`,
                        backgroundColor: COLORS[index % COLORS.length],
                      }}
                    />
                  </div>
                  <span className="text-data-success text-sm font-medium">+{asset.return}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cash Flow Analysis */}
      <div className="glass rounded-lg p-6">
        <h4 className="text-xl font-bold text-neon-cyan mb-6">Cash Flow Statement (6 Months)</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cashFlow}>
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
            <Bar dataKey="operating" fill="#06FFA5" name="Operating" radius={[8, 8, 0, 0]} />
            <Bar dataKey="investing" fill="#FFD60A" name="Investing" radius={[8, 8, 0, 0]} />
            <Bar dataKey="financing" fill="#FF006E" name="Financing" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Portfolio Table */}
      <div className="glass rounded-lg p-6 overflow-x-auto">
        <h4 className="text-xl font-bold text-neon-cyan mb-6">Portfolio Holdings Detail</h4>
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-border">
              <th className="text-left py-3 px-4 text-sm font-bold text-neon-cyan">Asset Class</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Allocation %</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Value</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Return YTD</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Risk Level</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((asset) => (
              <tr
                key={asset.asset}
                className="border-b border-dark-border hover:bg-dark-bgTertiary transition-colors"
              >
                <td className="py-3 px-4 font-medium text-dark-text">{asset.asset}</td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">{asset.allocation}%</td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">
                  R$ {(asset.value / 1000000).toFixed(1)}M
                </td>
                <td className="text-right py-3 px-4">
                  <span className="text-data-success font-medium">+{asset.return}%</span>
                </td>
                <td className="text-right py-3 px-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${riskLevelColors[asset.risk as keyof typeof riskLevelColors]}20`,
                      color: riskLevelColors[asset.risk as keyof typeof riskLevelColors],
                    }}
                  >
                    {asset.risk}
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
            <span>Sharpe Ratio of 1.85 indicates excellent risk-adjusted returns above market average</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>Equities drive growth (18.2% return) while Fixed Income provides stability (35% allocation)</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>Operating cash flow consistently strong (R$ 8.5M-11.2M monthly), supporting strategic investments</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>Q4 2024 shows record performance: 32.2% margin on R$ 58.7M revenue</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

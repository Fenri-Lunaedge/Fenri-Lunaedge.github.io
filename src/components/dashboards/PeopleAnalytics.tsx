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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { peopleAnalyticsData } from "@/data/dashboards";

export default function PeopleAnalyticsDashboard() {
  const { headcount, turnover, diversity, performance, recruitment, engagement } = peopleAnalyticsData;

  const COLORS = ["#00F5FF", "#B76EFF", "#FF006E", "#FFD60A", "#06FFA5"];

  const performanceColors = {
    "Exceeds Expectations": "#06FFA5",
    "Meets Expectations": "#00F5FF",
    "Needs Improvement": "#FFD60A",
    "Underperforming": "#FF006E",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-3xl font-bold gradient-text">People Analytics Dashboard</h3>
        <p className="text-dark-textSecondary">
          Workforce insights • Talent management • Diversity metrics • Performance analytics • Recruitment KPIs
        </p>
      </div>

      {/* Overview KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="glass rounded-lg p-4 hover:glass-strong transition-all">
          <div className="text-xs text-dark-textMuted mb-1">TOTAL HEADCOUNT</div>
          <div className="text-2xl font-bold text-neon-cyan">{headcount.total.toLocaleString()}</div>
          <div className="text-xs text-data-success mt-1">↑ {headcount.growth}% YoY</div>
        </div>
        <div className="glass rounded-lg p-4 hover:glass-strong transition-all">
          <div className="text-xs text-dark-textMuted mb-1">TURNOVER RATE</div>
          <div className="text-2xl font-bold text-neon-cyan">{turnover.overall}%</div>
          <div className="text-xs text-dark-textSecondary mt-1">Annual rate</div>
        </div>
        <div className="glass rounded-lg p-4 hover:glass-strong transition-all">
          <div className="text-xs text-dark-textMuted mb-1">AVG TENURE</div>
          <div className="text-2xl font-bold text-neon-cyan">{headcount.avgTenure}</div>
          <div className="text-xs text-dark-textSecondary mt-1">Years</div>
        </div>
        <div className="glass rounded-lg p-4 hover:glass-strong transition-all">
          <div className="text-xs text-dark-textMuted mb-1">TIME TO HIRE</div>
          <div className="text-2xl font-bold text-neon-cyan">{recruitment.timeToHire}</div>
          <div className="text-xs text-data-success mt-1">-5 days vs target</div>
        </div>
        <div className="glass rounded-lg p-4 hover:glass-strong transition-all">
          <div className="text-xs text-dark-textMuted mb-1">ENGAGEMENT SCORE</div>
          <div className="text-2xl font-bold text-data-success">{engagement.overall}%</div>
          <div className="text-xs text-dark-textSecondary mt-1">Employee satisfaction</div>
        </div>
        <div className="glass rounded-lg p-4 hover:glass-strong transition-all">
          <div className="text-xs text-dark-textMuted mb-1">COST PER HIRE</div>
          <div className="text-2xl font-bold text-neon-cyan">R$ {recruitment.costPerHire.toLocaleString()}</div>
          <div className="text-xs text-dark-textSecondary mt-1">Average</div>
        </div>
      </div>

      {/* Headcount Growth & Department Distribution */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Headcount by Department */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Headcount by Department</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={headcount.byDepartment} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2e" />
              <XAxis type="number" stroke="#8b92a7" />
              <YAxis dataKey="department" type="category" stroke="#8b92a7" width={120} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0D1117",
                  border: "1px solid #00F5FF",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="count" fill="#00F5FF" name="Employees" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Turnover Analysis */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Turnover Breakdown</h4>
          <div className="space-y-4 mb-4">
            <div className="flex items-center justify-between p-3 bg-dark-bgTertiary rounded-lg">
              <span className="text-dark-text">Overall Turnover</span>
              <span className="text-xl font-bold text-neon-cyan">{turnover.overall}%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-dark-bgTertiary rounded-lg">
              <span className="text-dark-text">Voluntary</span>
              <span className="text-xl font-bold text-data-warning">{turnover.voluntary}%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-dark-bgTertiary rounded-lg">
              <span className="text-dark-text">Involuntary</span>
              <span className="text-xl font-bold text-data-error">{turnover.involuntary}%</span>
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-dark-textSecondary">By Tenure</h5>
            {turnover.byTenure.map((item, index) => (
              <div key={item.tenure} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dark-text">{item.tenure}</span>
                  <span className="text-dark-textMuted">{item.rate}%</span>
                </div>
                <div className="h-2 bg-dark-bgTertiary rounded-full overflow-hidden">
                  <div
                    className="h-full"
                    style={{
                      width: `${item.rate}%`,
                      backgroundColor: COLORS[index % COLORS.length],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance & Diversity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Performance Distribution */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Performance Ratings Distribution</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performance.distribution}
                cx="50%"
                cy="50%"
                labelLine
                label={({
                  cx,
                  cy,
                  midAngle,
                  outerRadius,
                  rating,
                  percentage,
                }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = outerRadius + 30;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="#fff"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                      className="text-xs font-medium"
                    >
                      {`${rating}: ${percentage}%`}
                    </text>
                  );
                }}
                outerRadius={80}
                fill="#8884d8"
                dataKey="percentage"
              >
                {performance.distribution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={performanceColors[entry.rating as keyof typeof performanceColors]}
                  />
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
            <div className="text-xs text-dark-textMuted">Average Performance Score</div>
            <div className="text-2xl font-bold text-data-success">{performance.avgScore}/5.0</div>
          </div>
        </div>

        {/* Diversity Metrics */}
        <div className="glass rounded-lg p-6">
          <h4 className="text-xl font-bold text-neon-cyan mb-6">Diversity Metrics</h4>
          <div className="space-y-4">
            {/* Gender */}
            <div>
              <h5 className="text-sm font-bold text-dark-textSecondary mb-2">Gender Distribution</h5>
              <div className="space-y-2">
                {diversity.gender.map((item, index) => (
                  <div key={item.category} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-dark-text">{item.category}</span>
                        <span className="text-dark-textMuted">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-dark-bgTertiary rounded-full overflow-hidden">
                        <div
                          className="h-full"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Groups */}
            <div>
              <h5 className="text-sm font-bold text-dark-textSecondary mb-2">Age Distribution</h5>
              <div className="space-y-2">
                {diversity.age.map((item, index) => (
                  <div key={item.range} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-dark-text">{item.range}</span>
                        <span className="text-dark-textMuted">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-dark-bgTertiary rounded-full overflow-hidden">
                        <div
                          className="h-full"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h5 className="text-sm font-bold text-dark-textSecondary mb-2">Education Level</h5>
              <div className="space-y-2">
                {diversity.education.map((item, index) => (
                  <div key={item.level} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-dark-text">{item.level}</span>
                        <span className="text-dark-textMuted">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-dark-bgTertiary rounded-full overflow-hidden">
                        <div
                          className="h-full"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment Metrics */}
      <div className="glass rounded-lg p-6">
        <h4 className="text-xl font-bold text-neon-cyan mb-6">Recruitment Sources & Effectiveness</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={recruitment.sources}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a1f2e" />
            <XAxis dataKey="source" stroke="#8b92a7" />
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
            <Bar yAxisId="left" dataKey="hires" fill="#00F5FF" name="Total Hires" radius={[8, 8, 0, 0]} />
            <Bar yAxisId="right" dataKey="quality" fill="#06FFA5" name="Quality Score" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Department Details Table */}
      <div className="glass rounded-lg p-6 overflow-x-auto">
        <h4 className="text-xl font-bold text-neon-cyan mb-6">Department Analytics</h4>
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-border">
              <th className="text-left py-3 px-4 text-sm font-bold text-neon-cyan">Department</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Headcount</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Avg Salary</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Turnover</th>
              <th className="text-right py-3 px-4 text-sm font-bold text-neon-cyan">Performance</th>
            </tr>
          </thead>
          <tbody>
            {headcount.byDepartment.map((dept, index) => (
              <tr
                key={dept.department}
                className="border-b border-dark-border hover:bg-dark-bgTertiary transition-colors"
              >
                <td className="py-3 px-4 font-medium text-dark-text">{dept.department}</td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">{dept.count}</td>
                <td className="text-right py-3 px-4 text-dark-textSecondary">
                  R$ {dept.avgSalary.toLocaleString()}
                </td>
                <td className="text-right py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      dept.turnoverRate < 10
                        ? "bg-data-success/20 text-data-success"
                        : dept.turnoverRate < 15
                        ? "bg-data-warning/20 text-data-warning"
                        : "bg-data-error/20 text-data-error"
                    }`}
                  >
                    {dept.turnoverRate}%
                  </span>
                </td>
                <td className="text-right py-3 px-4">
                  <span className="text-data-success font-medium">{dept.performanceScore}/5.0</span>
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
            <span>Engineering department shows strong performance (4.3/5.0) with competitive 8.5% turnover rate</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>82% of employees meet or exceed expectations, indicating effective talent management</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>Employee referrals deliver highest quality hires (4.7/5.0) at lowest cost per hire</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>First-year turnover (22.5%) suggests opportunity to improve onboarding and early engagement</span>
          </li>
          <li className="flex items-start">
            <span className="text-neon-cyan mr-2">•</span>
            <span>85% engagement score demonstrates strong organizational culture and employee satisfaction</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

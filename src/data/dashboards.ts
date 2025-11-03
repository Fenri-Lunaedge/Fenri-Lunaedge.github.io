// Realistic mock data for interactive dashboards

export const luxuryTourismData = {
  revenue: {
    monthly: [
      { month: "Jan", revenue: 2450000, bookings: 45, avgTicket: 54444 },
      { month: "Feb", revenue: 2680000, bookings: 52, avgTicket: 51538 },
      { month: "Mar", revenue: 3120000, bookings: 58, avgTicket: 53793 },
      { month: "Apr", revenue: 2890000, bookings: 48, avgTicket: 60208 },
      { month: "May", revenue: 3450000, bookings: 65, avgTicket: 53077 },
      { month: "Jun", revenue: 4120000, bookings: 78, avgTicket: 52821 },
      { month: "Jul", revenue: 4580000, bookings: 89, avgTicket: 51461 },
      { month: "Aug", revenue: 4320000, bookings: 82, avgTicket: 52683 },
      { month: "Sep", revenue: 3890000, bookings: 71, avgTicket: 54789 },
      { month: "Oct", revenue: 3560000, bookings: 64, avgTicket: 55625 },
      { month: "Nov", revenue: 3980000, bookings: 73, avgTicket: 54521 },
      { month: "Dec", revenue: 5120000, bookings: 95, avgTicket: 53895 },
    ],
  },
  destinations: [
    { name: "Maldives", bookings: 245, revenue: 13475000, avgStay: 7.5, satisfaction: 98 },
    { name: "Dubai", bookings: 312, revenue: 15600000, avgStay: 5.2, satisfaction: 96 },
    { name: "Paris", bookings: 189, revenue: 9450000, avgStay: 6.1, satisfaction: 94 },
    { name: "Tokyo", bookings: 156, revenue: 8580000, avgStay: 8.3, satisfaction: 97 },
    { name: "New York", bookings: 203, revenue: 10150000, avgStay: 4.8, satisfaction: 93 },
    { name: "Bora Bora", bookings: 98, revenue: 7840000, avgStay: 9.2, satisfaction: 99 },
  ],
  clientProfile: {
    ageGroups: [
      { range: "25-35", percentage: 18, avgSpend: 48000 },
      { range: "36-45", percentage: 32, avgSpend: 62000 },
      { range: "46-55", percentage: 28, avgSpend: 71000 },
      { range: "56-65", percentage: 15, avgSpend: 58000 },
      { range: "65+", percentage: 7, avgSpend: 45000 },
    ],
    segments: [
      { name: "Honeymoon", value: 35, color: "#FF006E" },
      { name: "Anniversary", value: 25, color: "#B76EFF" },
      { name: "Family Luxury", value: 20, color: "#00F5FF" },
      { name: "Corporate Retreat", value: 12, color: "#FFD60A" },
      { name: "Solo Luxury", value: 8, color: "#06FFA5" },
    ],
  },
  kpis: {
    totalRevenue: "R$ 43.16M",
    growthRate: "+23.5%",
    avgTicket: "R$ 53.4K",
    clientSatisfaction: "96.2%",
    repeatRate: "68%",
    conversionRate: "42%",
  },
};

export const socialMediaData = {
  overview: {
    totalMentions: 45680,
    sentiment: { positive: 62, neutral: 28, negative: 10 },
    reach: 12500000,
    engagement: 3.8,
    trendingTopics: 28,
  },
  platforms: [
    { name: "Instagram", mentions: 18500, engagement: 4.2, sentiment: 68, reach: 5200000 },
    { name: "Twitter", mentions: 12300, engagement: 2.9, sentiment: 58, reach: 3800000 },
    { name: "Facebook", mentions: 8900, engagement: 3.5, sentiment: 64, reach: 2100000 },
    { name: "LinkedIn", mentions: 3200, engagement: 5.1, sentiment: 72, reach: 890000 },
    { name: "TikTok", mentions: 2780, engagement: 6.8, sentiment: 75, reach: 510000 },
  ],
  timeline: [
    { date: "Mon", mentions: 6200, positive: 3844, neutral: 1736, negative: 620 },
    { date: "Tue", mentions: 6800, positive: 4216, neutral: 1904, negative: 680 },
    { date: "Wed", mentions: 7100, positive: 4402, neutral: 1988, negative: 710 },
    { date: "Thu", mentions: 6500, positive: 4030, neutral: 1820, negative: 650 },
    { date: "Fri", mentions: 5900, positive: 3658, neutral: 1652, negative: 590 },
    { date: "Sat", mentions: 6400, positive: 3968, neutral: 1792, negative: 640 },
    { date: "Sun", mentions: 6780, positive: 4204, neutral: 1898, negative: 678 },
  ],
  traditionalMedia: [
    { outlet: "Folha de S.Paulo", mentions: 23, sentiment: 85, reach: 2500000, category: "Print" },
    { outlet: "Globo", mentions: 45, sentiment: 78, reach: 8900000, category: "TV" },
    { outlet: "UOL", mentions: 67, sentiment: 72, reach: 3200000, category: "Online" },
    { outlet: "Estado de S.Paulo", mentions: 19, sentiment: 81, reach: 1800000, category: "Print" },
    { outlet: "Band News", mentions: 34, sentiment: 69, reach: 1500000, category: "TV" },
  ],
  topKeywords: [
    { word: "innovation", count: 8900, sentiment: 78 },
    { word: "quality", count: 7200, sentiment: 82 },
    { word: "technology", count: 6800, sentiment: 75 },
    { word: "price", count: 5400, sentiment: 58 },
    { word: "customer service", count: 4900, sentiment: 71 },
    { word: "design", count: 4200, sentiment: 85 },
  ],
};

export const ecommerceData = {
  sales: {
    daily: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      sales: Math.floor(Math.random() * 50000) + 150000,
      orders: Math.floor(Math.random() * 800) + 1200,
      conversion: (Math.random() * 2 + 2.5).toFixed(2),
    })),
  },
  funnel: [
    { stage: "Visits", value: 125000, percentage: 100 },
    { stage: "Product Views", value: 62500, percentage: 50 },
    { stage: "Add to Cart", value: 18750, percentage: 15 },
    { stage: "Checkout", value: 8125, percentage: 6.5 },
    { stage: "Purchase", value: 3750, percentage: 3 },
  ],
  topProducts: [
    { name: "Wireless Headphones Pro", sales: 4580, revenue: 1374000, margin: 42, rating: 4.8 },
    { name: "Smart Watch Ultra", sales: 3920, revenue: 1960000, margin: 38, rating: 4.6 },
    { name: "Laptop Air 15\"", sales: 2890, revenue: 8670000, margin: 25, rating: 4.7 },
    { name: "Camera DSLR X1", sales: 1560, revenue: 6240000, margin: 35, rating: 4.9 },
    { name: "Bluetooth Speaker Mini", sales: 5670, revenue: 850500, margin: 48, rating: 4.5 },
  ],
  customerMetrics: {
    cac: 145.80,
    ltv: 2340.50,
    churnRate: 8.2,
    retentionRate: 72.5,
    nps: 68,
    repeatPurchase: 45.3,
  },
  categories: [
    { name: "Electronics", value: 45, revenue: 15200000 },
    { name: "Fashion", value: 28, revenue: 9450000 },
    { name: "Home & Garden", value: 15, revenue: 5100000 },
    { name: "Sports", value: 8, revenue: 2700000 },
    { name: "Books", value: 4, revenue: 1350000 },
  ],
};

export const financialData = {
  performance: {
    quarterly: [
      { quarter: "Q1 2024", revenue: 45200000, ebitda: 12800000, netProfit: 8900000, margin: 28.3 },
      { quarter: "Q2 2024", revenue: 52100000, ebitda: 15600000, netProfit: 11200000, margin: 29.9 },
      { quarter: "Q3 2024", revenue: 48900000, ebitda: 14200000, netProfit: 9800000, margin: 29.0 },
      { quarter: "Q4 2024", revenue: 58700000, ebitda: 18900000, netProfit: 13500000, margin: 32.2 },
    ],
  },
  portfolio: [
    { asset: "Fixed Income", allocation: 35, value: 52500000, return: 12.5, risk: "Low" },
    { asset: "Equities", allocation: 45, value: 67500000, return: 18.2, risk: "High" },
    { asset: "Real Estate", allocation: 12, value: 18000000, return: 8.9, risk: "Medium" },
    { asset: "Commodities", allocation: 5, value: 7500000, return: 15.3, risk: "High" },
    { asset: "Cash", allocation: 3, value: 4500000, return: 5.2, risk: "Low" },
  ],
  riskMetrics: {
    var95: "R$ 2.8M",
    sharpeRatio: 1.85,
    beta: 0.92,
    volatility: 15.3,
    maxDrawdown: -8.5,
    correlation: 0.78,
  },
  cashFlow: [
    { month: "Jan", operating: 8500000, investing: -2300000, financing: -1200000 },
    { month: "Feb", operating: 9200000, investing: -1800000, financing: -1500000 },
    { month: "Mar", operating: 8900000, investing: -3200000, financing: 2000000 },
    { month: "Apr", operating: 10100000, investing: -2100000, financing: -800000 },
    { month: "May", operating: 9800000, investing: -2900000, financing: -1100000 },
    { month: "Jun", operating: 11200000, investing: -1600000, financing: -2000000 },
  ],
};

export const peopleAnalyticsData = {
  headcount: {
    total: 1247,
    growth: 12.5,
    avgTenure: "3.8",
    byDepartment: [
      { department: "Engineering", count: 425, avgSalary: 135000, turnoverRate: 8.5, performanceScore: 4.3 },
      { department: "Sales", count: 268, avgSalary: 98000, turnoverRate: 15.2, performanceScore: 4.1 },
      { department: "Marketing", count: 156, avgSalary: 92000, turnoverRate: 12.8, performanceScore: 4.2 },
      { department: "Operations", count: 189, avgSalary: 78000, turnoverRate: 11.5, performanceScore: 4.0 },
      { department: "Finance", count: 92, avgSalary: 115000, turnoverRate: 7.2, performanceScore: 4.4 },
      { department: "HR", count: 45, avgSalary: 85000, turnoverRate: 10.1, performanceScore: 4.2 },
      { department: "Product", count: 72, avgSalary: 128000, turnoverRate: 9.8, performanceScore: 4.5 },
    ],
  },
  turnover: {
    overall: 12.8,
    voluntary: 9.2,
    involuntary: 3.6,
    byTenure: [
      { tenure: "0-1 year", rate: 22.5 },
      { tenure: "1-2 years", rate: 15.8 },
      { tenure: "2-3 years", rate: 12.1 },
      { tenure: "3-5 years", rate: 8.5 },
      { tenure: "5+ years", rate: 4.2 },
    ],
  },
  diversity: {
    gender: [
      { category: "Male", percentage: 58 },
      { category: "Female", percentage: 40 },
      { category: "Non-binary", percentage: 2 },
    ],
    age: [
      { range: "18-25", percentage: 12 },
      { range: "26-35", percentage: 45 },
      { range: "36-45", percentage: 28 },
      { range: "46-55", percentage: 12 },
      { range: "56+", percentage: 3 },
    ],
    education: [
      { level: "High School", percentage: 8 },
      { level: "Bachelor's", percentage: 45 },
      { level: "Master's", percentage: 38 },
      { level: "PhD", percentage: 9 },
    ],
  },
  performance: {
    distribution: [
      { rating: "Exceeds Expectations", percentage: 25, count: 312 },
      { rating: "Meets Expectations", percentage: 57, count: 711 },
      { rating: "Needs Improvement", percentage: 15, count: 187 },
      { rating: "Underperforming", percentage: 3, count: 37 },
    ],
    avgScore: 4.1,
  },
  recruitment: {
    timeToHire: 35,
    costPerHire: 15800,
    offerAcceptance: 78,
    sources: [
      { source: "LinkedIn", hires: 145, quality: 4.2 },
      { source: "Employee Referrals", hires: 98, quality: 4.7 },
      { source: "Job Boards", hires: 67, quality: 3.8 },
      { source: "Recruitment Agencies", hires: 45, quality: 4.0 },
      { source: "University Recruiting", hires: 32, quality: 3.9 },
    ],
  },
  engagement: {
    overall: 85,
    byDepartment: [
      { department: "Engineering", score: 87 },
      { department: "Product", score: 89 },
      { department: "Marketing", score: 86 },
      { department: "Sales", score: 82 },
      { department: "Operations", score: 81 },
      { department: "Finance", score: 84 },
      { department: "HR", score: 88 },
    ],
  },
};

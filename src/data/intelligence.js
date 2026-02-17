// Intelligence Hub Data Structure

export const reportTypes = [
  {
    id: 'market-intelligence',
    icon: 'TrendingUp',
    title: 'Market Intelligence Reports',
    description: 'Demand, pricing, competition, and entry feasibility analysis.',
    dataOutputs: [
      'Market size and growth trajectory analysis',
      'Pricing spread and margin opportunity mapping',
      'Competitive saturation and entry barrier assessment'
    ],
    color: 'cyan'
  },
  {
    id: 'keyword-search',
    icon: 'Search',
    title: 'Keyword & Search Intelligence',
    description: 'Search volume clustering, metadata structure, gap mapping.',
    dataOutputs: [
      'Search volume clustering by intent and category',
      'Metadata optimization and gap analysis',
      'Keyword difficulty and opportunity scoring'
    ],
    color: 'indigo'
  },
  {
    id: 'competitive-landscape',
    icon: 'Target',
    title: 'Competitive Landscape Reports',
    description: 'Revenue modeling, positioning analysis, SWOT mapping.',
    dataOutputs: [
      'Revenue estimation and market share modeling',
      'Positioning matrix and differentiation mapping',
      'Comprehensive SWOT analysis framework'
    ],
    color: 'purple'
  },
  {
    id: 'product-supplier',
    icon: 'Package',
    title: 'Product & Supplier Intelligence',
    description: 'Margin modeling, sourcing viability, risk assessment.',
    dataOutputs: [
      'Margin structure and profitability modeling',
      'Supplier reliability and risk assessment',
      'Quality benchmarking and sourcing alternatives'
    ],
    color: 'green'
  }
];

export const analyticsFramework = [
  {
    id: 1,
    step: 'Data Collection',
    title: 'Multi-Source Data Aggregation',
    description: 'Gather quantitative and qualitative data from search platforms, marketplaces, competitor sites, and customer feedback channels.',
    icon: 'Database',
    color: 'cyan'
  },
  {
    id: 2,
    step: 'Demand & Search Analysis',
    title: 'Search Intent Mapping',
    description: 'Analyze search volume trends, keyword clustering, seasonal patterns, and buyer intent signals across multiple platforms.',
    icon: 'Search',
    color: 'indigo'
  },
  {
    id: 3,
    step: 'Competitive Pressure Index',
    title: 'Market Saturation Scoring',
    description: 'Calculate competitive density, review quality distribution, pricing spread analysis, and market positioning gaps.',
    icon: 'Target',
    color: 'purple'
  },
  {
    id: 4,
    step: 'Pricing & Margin Modeling',
    title: 'Financial Feasibility Analysis',
    description: 'Model pricing elasticity, cost structures, margin opportunities, and revenue projections based on market data.',
    icon: 'DollarSign',
    color: 'green'
  },
  {
    id: 5,
    step: 'Opportunity Scoring & Risk Mapping',
    title: 'Strategic Recommendation Framework',
    description: 'Synthesize findings into actionable opportunity scores, risk matrices, and strategic entry/expansion recommendations.',
    icon: 'Award',
    color: 'amber'
  }
];

export const toolsInfrastructure = [
  {
    name: 'Helium 10',
    category: 'Research',
    usage: 'Amazon market research, keyword tracking, and competitive analysis',
    logo: '/images/tools/helium10.svg'
  },
  {
    name: 'Similarweb',
    category: 'Analytics',
    usage: 'Traffic estimation, audience insights, and competitive benchmarking',
    logo: '/images/tools/similarweb.svg'
  },
  {
    name: 'Google Trends',
    category: 'Research',
    usage: 'Trend analysis, seasonal demand patterns, and geographic insights',
    logo: '/images/tools/google-trends.svg'
  },
  {
    name: 'Google Keyword Planner',
    category: 'Research',
    usage: 'Search volume data, keyword discovery, and bid estimation',
    logo: '/images/tools/google-ads.svg'
  },
  {
    name: 'Google Search Console',
    category: 'Analytics',
    usage: 'Organic performance tracking, click-through rates, and indexing status',
    logo: '/images/tools/google-search-console.svg'
  },
  {
    name: 'Shopify Analytics',
    category: 'Platforms',
    usage: 'E-commerce performance metrics and conversion funnel analysis',
    logo: '/images/tools/shopify.svg'
  },
  {
    name: 'Microsoft Excel',
    category: 'Data Processing',
    usage: 'Data modeling, statistical analysis, and reporting automation',
    logo: '/images/tools/excel.svg'
  },
  {
    name: 'Ahrefs',
    category: 'Research',
    usage: 'Backlink analysis, domain authority scoring, and content gap analysis',
    logo: '/images/tools/ahrefs.svg'
  }
];

export const metricsOutputs = [
  {
    metric: 'Search Volume Metrics',
    description: 'Monthly search volume, trend direction, and seasonal patterns'
  },
  {
    metric: 'Keyword Clusters & Intent Mapping',
    description: 'Grouped keywords by commercial intent and category structure'
  },
  {
    metric: 'Revenue Estimations',
    description: 'Projected revenue ranges based on market size and pricing'
  },
  {
    metric: 'Competitive Saturation Index',
    description: 'Market density score and barrier-to-entry assessment'
  },
  {
    metric: 'Review Pain-Point Mining',
    description: 'Extracted customer complaints and improvement opportunities'
  },
  {
    metric: 'Pricing Spread Analysis',
    description: 'Competitive pricing distribution and positioning strategy'
  },
  {
    metric: 'Traffic Source Overview',
    description: 'Channel mix analysis and acquisition cost benchmarks'
  },
  {
    metric: 'Market Gap Identification',
    description: 'Underserved segments and differentiation opportunities'
  },
  {
    metric: 'SWOT Snapshot',
    description: 'Strengths, weaknesses, opportunities, and threats framework'
  },
  {
    metric: 'Risk Exposure Matrix',
    description: 'Market, operational, and financial risk scoring'
  }
];

export const workflowSteps = [
  {
    id: 1,
    title: 'Define Scope',
    description: 'Initial consultation to understand your market, competitors, and research objectives.',
    icon: 'FileText',
    duration: 'Day 1'
  },
  {
    id: 2,
    title: 'Data Collection',
    description: 'Multi-platform data aggregation using our research infrastructure and tools.',
    icon: 'Database',
    duration: 'Days 2-3'
  },
  {
    id: 3,
    title: 'Structured Analysis',
    description: 'Deep-dive analysis following our 5-step analytics framework with validation.',
    icon: 'BarChart3',
    duration: 'Days 4-6'
  },
  {
    id: 4,
    title: 'PDF Delivery',
    description: 'Professional report with executive summary, data visualizations, and recommendations.',
    icon: 'FileCheck',
    duration: 'Day 7'
  }
];

export const targetAudiences = [
  {
    id: 'amazon-sellers',
    title: 'Amazon Sellers',
    icon: 'Store',
    description: 'Product validation and competitive landscape analysis for marketplace success'
  },
  {
    id: 'shopify-brands',
    title: 'Shopify Brands',
    icon: 'ShoppingBag',
    description: 'Market opportunity assessment and growth strategy intelligence'
  },
  {
    id: 'marketplace-expansion',
    title: 'Marketplace Expansion Projects',
    icon: 'Globe',
    description: 'Multi-channel feasibility studies and market entry strategies'
  },
  {
    id: 'investors',
    title: 'Investors & Validators',
    icon: 'TrendingUp',
    description: 'Due diligence reports and product idea validation with market data'
  },
  {
    id: 'agencies',
    title: 'Agencies & Consultants',
    icon: 'Users',
    description: 'White-label research services and structured intelligence for client projects'
  }
];

export const sampleReportPreview = {
  title: 'Sample Market Intelligence Report',
  subtitle: 'Fashion E-commerce Market Analysis Q4 2025',
  pages: [
    {
      id: 1,
      title: 'Executive Summary',
      image: '/images/intelligence/report-page-1.png',
      highlights: [
        'Market size: $2.4B with 18% YoY growth',
        'Top 5 competitors identified',
        'Entry opportunity score: 7.2/10'
      ]
    },
    {
      id: 2,
      title: 'Search Intelligence',
      image: '/images/intelligence/report-page-2.png',
      highlights: [
        '143 keyword clusters analyzed',
        'Avg. search volume: 89K/month',
        '23% keyword gap identified'
      ]
    },
    {
      id: 3,
      title: 'Competitive Analysis',
      image: '/images/intelligence/report-page-3.png',
      highlights: [
        'Pricing spread: $29-$149',
        'Average review count: 2,847',
        'Market concentration: Medium'
      ]
    }
  ]
};

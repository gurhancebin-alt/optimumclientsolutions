// About Page Data Structure
// Centralized content for the strategist/founder positioning page

export const founderProfile = {
  name: "Gürhan Çebin",
  title: "E-commerce Data Analyst & Strategist",
  tagline: "E-Commerce Strategy Built on Data, Not Guesswork",
  subtitle: "I operate at the intersection of analytics, marketplace intelligence, and operational execution.",
  microProof: ["E-commerce Data Analyst", "Marketplace Strategist", "Research-Driven Consultant"],
  ctas: [
    { text: "View My Methodology", link: "#framework", type: "primary" },
    { text: "Explore Intelligence Hub", link: "/intelligence", type: "secondary" }
  ]
};

export const founderStory = [
  {
    phase: "beginning",
    title: "The Beginning",
    content: "Like many entrepreneurs, I started by launching my own e-commerce business. The early days were about learning through execution — navigating sourcing, understanding marketplace dynamics, managing logistics, and learning what actually moves the needle in online retail. Every mistake was a data point. Every success revealed a pattern."
  },
  {
    phase: "shift",
    title: "The Shift",
    content: "The turning point came when I realized success wasn't about working harder — it was about working smarter with data. I shifted from 'selling products' to analyzing markets. Instead of guessing what might work, I started building systems around keyword research, competitive mapping, demand validation, and performance metrics. The data told stories that intuition couldn't."
  },
  {
    phase: "current",
    title: "Current Position",
    content: "Today, I operate my own e-commerce model while helping others navigate theirs. I've built structured frameworks that turn marketplace chaos into actionable intelligence. My focus is on delivering research-based digital reports — not generic advice, but customized analysis backed by real search volume, competition data, and margin calculations. Strategy without data is just speculation."
  }
];

export const philosophyPrinciples = [
  {
    id: 1,
    icon: "Database",
    color: "cyan",
    title: "Market Data Before Product Decisions",
    description: "No product without demand validation. Every niche I evaluate starts with search volume analysis, competitive saturation assessment, and profit margin modeling. If the data doesn't support it, we don't move forward.",
    emphasis: "Demand validation drives everything."
  },
  {
    id: 2,
    icon: "TrendingUp",
    color: "indigo",
    title: "Systems Over Tactics",
    description: "Marketing channels, sourcing strategies, and logistics must align structurally. A great product with poor channel fit fails. Strong sourcing with weak market demand wastes capital. I focus on building coherent systems, not chasing trendy tactics.",
    emphasis: "Integrated strategy beats isolated tactics."
  },
  {
    id: 3,
    icon: "Target",
    color: "purple",
    title: "Measurable Strategy",
    description: "Every decision must tie back to metrics. If we can't measure it, we can't improve it. My analysis framework centers on quantifiable data points that directly impact profitability.",
    emphasis: "Data-driven optimization is non-negotiable.",
    metrics: [
      { metric: "CTR", label: "Click-Through Rate" },
      { metric: "Conversion Rate", label: "Conversion Percentage" },
      { metric: "Keyword Volume", label: "Monthly Search Volume" },
      { metric: "AOV", label: "Average Order Value" },
      { metric: "Margin Structure", label: "Gross & Net Margins" },
      { metric: "Inventory Velocity", label: "Stock Turn Rate" }
    ]
  }
];

export const frameworkSteps = [
  {
    id: 1,
    step: "Market Research & Demand Validation",
    description: "Identify viable niches through search volume analysis, trend evaluation, and demand sustainability assessment. No guesswork — only markets with proven search demand.",
    icon: "Search",
    color: "cyan",
    details: [
      "Keyword volume analysis (monthly searches)",
      "Trend trajectory (Google Trends validation)",
      "Seasonality assessment",
      "Long-term demand sustainability",
      "Niche profitability scoring"
    ]
  },
  {
    id: 2,
    step: "Keyword & Competitive Mapping",
    description: "Deep-dive into keyword difficulty, SERP analysis, and competitive positioning. Understand who you're competing against and where gaps exist in the market.",
    icon: "BarChart3",
    color: "indigo",
    details: [
      "Keyword difficulty scores (Ahrefs/SEMrush)",
      "Top 10 SERP competitor analysis",
      "Content gap identification",
      "PPC cost benchmarking",
      "Organic vs paid opportunity matrix"
    ]
  },
  {
    id: 3,
    step: "Product & Supplier Evaluation",
    description: "Evaluate product viability through margin analysis, sourcing feasibility, and quality benchmarking. Financial modeling ensures profitability before launch.",
    icon: "Package",
    color: "purple",
    details: [
      "Landed cost calculations (product + shipping + duties)",
      "Margin structure modeling (gross/net)",
      "Supplier reliability scoring",
      "MOQ (Minimum Order Quantity) assessment",
      "Break-even analysis"
    ]
  },
  {
    id: 4,
    step: "Channel Strategy Alignment",
    description: "Match product characteristics to optimal sales channels. Amazon FBA, Shopify DTC, marketplace diversification — each requires different strategic positioning.",
    icon: "Share2",
    color: "green",
    details: [
      "Channel fit analysis (Amazon vs Shopify vs Etsy)",
      "Traffic acquisition strategy",
      "Fulfillment model optimization",
      "Platform fee structure impact",
      "Multi-channel expansion roadmap"
    ]
  },
  {
    id: 5,
    step: "Performance Reporting & Iteration",
    description: "Continuous monitoring through structured dashboards. Track KPIs, identify optimization opportunities, and adjust strategy based on real performance data.",
    icon: "FileText",
    color: "amber",
    details: [
      "Weekly/monthly KPI dashboards",
      "Conversion funnel diagnostics",
      "Ad spend efficiency (ROAS/ACOS)",
      "Inventory performance tracking",
      "A/B test result analysis"
    ]
  }
];

export const toolsStack = [
  {
    name: "Ahrefs",
    purpose: "Keyword research, competitive SEO analysis, and backlink profiling",
    icon: "Search",
    color: "cyan",
    metrics: [
      "Keyword difficulty scoring",
      "Monthly search volume data",
      "SERP position tracking",
      "Competitive content gaps"
    ],
    value: "Identifies high-opportunity keywords with manageable competition — the foundation of organic traffic strategy."
  },
  {
    name: "SEMrush",
    purpose: "Market intelligence, PPC analysis, and competitive research",
    icon: "TrendingUp",
    color: "indigo",
    metrics: [
      "Traffic estimation",
      "PPC keyword costs",
      "Competitor ad copy analysis",
      "Market trend reports"
    ],
    value: "Reveals how competitors acquire traffic and what they're spending to do it."
  },
  {
    name: "Helium 10",
    purpose: "Amazon-specific product research and listing optimization",
    icon: "Package",
    color: "purple",
    metrics: [
      "Product revenue estimation",
      "Keyword search volume (Amazon)",
      "Listing quality scoring",
      "Inventory level tracking"
    ],
    value: "Amazon's data isn't public — Helium 10 reverse-engineers sales volume and opportunity size."
  },
  {
    name: "Google Analytics",
    purpose: "Website traffic analysis and conversion funnel diagnostics",
    icon: "BarChart3",
    color: "green",
    metrics: [
      "User behavior flow",
      "Conversion rate by source",
      "Bounce rate analysis",
      "Goal completion tracking"
    ],
    value: "Shows where traffic comes from and why visitors don't convert — critical for Shopify stores."
  },
  {
    name: "Jungle Scout",
    purpose: "Amazon product research and supplier database",
    icon: "ShoppingBag",
    color: "amber",
    metrics: [
      "Product opportunity scores",
      "Sales rank history",
      "Review velocity tracking",
      "Supplier directory access"
    ],
    value: "Validates Amazon product ideas with estimated sales and historical performance data."
  },
  {
    name: "Google Trends",
    purpose: "Demand trend analysis and seasonality detection",
    icon: "TrendingUp",
    color: "cyan",
    metrics: [
      "Search interest over time",
      "Geographic demand mapping",
      "Related query discovery",
      "Year-over-year comparison"
    ],
    value: "Separates fading fads from sustainable trends — prevents investing in dying markets."
  },
  {
    name: "Shopify Analytics",
    purpose: "E-commerce store performance and sales metrics",
    icon: "Store",
    color: "indigo",
    metrics: [
      "Total sales & revenue",
      "Average order value (AOV)",
      "Customer acquisition cost",
      "Repeat purchase rate"
    ],
    value: "Core financial dashboard for DTC brands — shows what's working at the P&L level."
  },
  {
    name: "Amazon Seller Central",
    purpose: "FBA performance monitoring and inventory management",
    icon: "Package",
    color: "purple",
    metrics: [
      "Sales by ASIN",
      "IPI (Inventory Performance Index)",
      "Customer metrics (defect rate)",
      "Advertising ACOS"
    ],
    value: "The command center for Amazon operations — tracks profitability and account health."
  }
];

export const targetAudiences = [
  {
    segment: "Beginner Entrepreneurs",
    icon: "Rocket",
    color: "cyan",
    description: "You're exploring e-commerce but don't want to waste capital on unvalidated ideas.",
    needs: [
      "Market validation before product sourcing",
      "Avoiding costly product selection mistakes",
      "Understanding which channels fit your niche",
      "Building a structured learning path",
      "Confidence in data-backed decisions"
    ],
    cta: {
      text: "Start with Market Validation",
      link: "/intelligence",
      type: "primary"
    }
  },
  {
    segment: "Scaling Webshop Owners",
    icon: "TrendingUp",
    color: "indigo",
    description: "You're already selling but need data-driven insights to optimize and expand.",
    needs: [
      "Data-driven performance optimization",
      "Competitive intelligence & positioning",
      "Channel expansion strategy (Amazon, Etsy, etc.)",
      "Inventory & margin optimization",
      "Traffic acquisition diagnostics"
    ],
    cta: {
      text: "Request Competitive Analysis",
      link: "/contact",
      type: "primary"
    }
  }
];

export const testimonials = [
  {
    quote: "Gürhan doesn't give advice — he delivers structured analysis. Every recommendation is backed by actual search data and competitor metrics.",
    author: "Marcus van der Berg",
    role: "Shopify Store Owner",
    focus: "analytical"
  },
  {
    quote: "The reports are like having a data team without the overhead. I finally understand why certain products work and others don't.",
    author: "Sophie Vermeulen",
    role: "Amazon FBA Seller",
    focus: "analytical"
  },
  {
    quote: "Most consultants sell you a course. Gürhan sold me a 47-page market analysis with keyword volumes, margin calculations, and competitor breakdowns. That's what I needed.",
    author: "David Chen",
    role: "E-commerce Entrepreneur",
    focus: "analytical"
  },
  {
    quote: "I was about to launch a product in a saturated niche. His competitive analysis showed me the keyword difficulty was too high. Saved me €15,000 in inventory.",
    author: "Elena Popescu",
    role: "Product Sourcing Specialist",
    focus: "analytical"
  },
  {
    quote: "The framework is replicable. It's not magic — it's a systematic process anyone can follow if they have the tools and discipline.",
    author: "Ahmed Kaya",
    role: "Multi-Channel Seller",
    focus: "analytical"
  },
  {
    quote: "Finally, someone who speaks in CTR, conversion rates, and ACOS instead of vague growth hacking nonsense.",
    author: "Lisa Andersson",
    role: "Marketing Manager",
    focus: "analytical"
  }
];

export const aboutFAQ = [
  {
    question: "What makes your approach different from other e-commerce consultants?",
    answer: "I don't sell courses or coaching. I deliver structured PDF reports with market data, keyword analysis, competitive positioning, and margin calculations. Every recommendation is backed by quantifiable research — search volumes, keyword difficulty scores, SERP analysis, and financial modeling. It's consulting based on data, not opinions."
  },
  {
    question: "What data sources do you use for analysis?",
    answer: "I use professional SEO and marketplace research tools: Ahrefs for keyword research, SEMrush for competitive intelligence, Helium 10 and Jungle Scout for Amazon data, Google Analytics for traffic analysis, and Google Trends for demand validation. These aren't free tools — they're enterprise-grade platforms that provide reliable, actionable data."
  },
  {
    question: "Who should work with you?",
    answer: "Two groups: (1) Beginner entrepreneurs who want to validate a niche before investing in inventory, and (2) Scaling webshop owners who need data-driven optimization and competitive intelligence. If you want generic advice or motivational coaching, I'm not the right fit. If you want structured analysis and measurable strategy, we should talk."
  },
  {
    question: "What deliverables do you provide?",
    answer: "PDF intelligence reports tailored to your niche or business. Depending on the scope, this includes: market research summaries, keyword opportunity matrices, competitive SERP analysis, product/supplier evaluation, margin modeling, and channel strategy recommendations. Every report includes raw data, analysis methodology, and actionable next steps."
  },
  {
    question: "Do you only work with Amazon sellers?",
    answer: "No. I work across e-commerce channels — Amazon FBA, Shopify DTC, Etsy, Bol.com, and other marketplaces. The framework is channel-agnostic: demand validation, competitive positioning, and margin optimization apply everywhere. However, each platform has unique data sources and optimization strategies."
  },
  {
    question: "How long does a typical analysis take?",
    answer: "Market validation reports typically take 3-5 business days. Competitive intelligence deep-dives take 5-7 days. Full strategic audits (multiple products/channels) can take 7-10 days. It depends on scope. I prioritize thoroughness over speed — you're paying for research quality, not rushed guesswork."
  },
  {
    question: "Do you offer ongoing consulting or just one-time reports?",
    answer: "Both. One-time reports are ideal for product validation or competitive analysis. Ongoing consulting (monthly retainer) works for scaling businesses that need continuous performance monitoring, A/B test analysis, and strategic iteration. Most clients start with a single report to test the fit."
  },
  {
    question: "What if I'm just starting and don't have a product idea yet?",
    answer: "Perfect. That's the best time to work together. I can run niche opportunity research to identify high-demand, low-competition markets before you commit capital. Better to spend on research upfront than discover your niche is oversaturated after you've ordered inventory."
  }
];

// Helper function to get framework step by ID
export function getFrameworkStepById(id) {
  return frameworkSteps.find(step => step.id === id);
}

// Helper function to get tools by category
export function getToolsByCategory(category) {
  // Could be extended if tools are categorized (SEO, Amazon, Analytics, etc.)
  return toolsStack;
}

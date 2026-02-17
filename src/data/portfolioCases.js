export const portfolioCases = [
  {
    id: 'fashion-phrase',
    name: 'Fashion Phrase',
    tagline: 'Premium Fashion E-Commerce',
    logo: 'FP',
    logoGradient: 'from-pink-500 to-purple-600',
    backgroundImage: '/images/logo/Fhrase_FL_NB.png',
    hasBackgroundImage: true,
    backgroundGradient: 'from-indigo-900/20 to-purple-900/20',
    status: 'Active',
    statusColor: 'green',
    region: 'North America',
    industry: 'Fashion E-commerce',
    description: 'A modern e-commerce platform specializing in curated fashion collections with advanced AI-powered recommendations and seamless checkout experience.',
    usp: 'AI-Powered Shopping Experience',
    uspIcon: 'Zap',
    uspColor: 'cyan',
    
    // Detail content
    overview: {
      client: 'Fashion Phrase is a premium fashion e-commerce platform that curates the latest trends from top designers and emerging brands. With a focus on personalized shopping experiences, they serve fashion-conscious consumers across North America.',
      duration: '6 months',
      timeline: 'January 2025 - June 2025',
      challenges: [
        'High cart abandonment rates due to complex checkout process',
        'Difficulty in product discovery for customers',
        'Limited personalization capabilities',
        'Poor mobile shopping experience',
        'Slow page load times affecting conversions'
      ]
    },
    
    solution: {
      approach: 'We implemented a comprehensive e-commerce transformation focusing on user experience, performance optimization, and intelligent automation.',
      technologies: ['React', 'Node.js', 'OpenAI API', 'Shopify Plus', 'TailwindCSS', 'Redis'],
      features: [
        'AI-powered product recommendations based on browsing history and preferences',
        'One-click checkout with saved payment methods',
        'Smart search with natural language processing',
        'Personalized landing pages for returning customers',
        'Progressive Web App (PWA) for mobile users',
        'Real-time inventory sync across multiple warehouses',
        'Automated email marketing campaigns with Klaviyo',
        'Dynamic pricing optimization for promotions'
      ]
    },
    
    results: {
      metrics: [
        { label: 'Conversion Rate', value: '+42%', description: 'Increase in overall conversion rate' },
        { label: 'Cart Abandonment', value: '-38%', description: 'Reduction in cart abandonment' },
        { label: 'Page Load Time', value: '1.2s', description: 'Average page load time (formerly 4.8s)' },
        { label: 'Mobile Sales', value: '+156%', description: 'Growth in mobile transactions' },
        { label: 'AOV', value: '+28%', description: 'Increase in average order value' },
        { label: 'Customer Retention', value: '+65%', description: 'Improvement in repeat purchases' }
      ],
      testimonial: {
        quote: "The transformation exceeded our expectations. Our customers love the personalized experience, and we've seen record-breaking sales months since launch.",
        author: 'Sarah Mitchell',
        role: 'CEO, Fashion Phrase'
      }
    },
    
    // Services
    categoryServices: [
      { 
        category: 'Website Development', 
        url: '/services/website-development',
        color: 'cyan'
      },
      { 
        category: 'Market Optimization', 
        url: '/services/market-channel-optimization-services',
        color: 'pink'
      },
      { 
        category: 'E-commerce Solutions', 
        url: '/services/ecommerce-solutions',
        color: 'green'
      }
    ],
    specificServices: [
      { name: 'E-Commerce Platform', url: '/services/website-development/ecommerce-platform-development' },
      { name: 'UX/UI Design', url: '/services/website-development/design-ux' },
      { name: 'AI Automation', url: '/services/website-development/custom-development-automation' },
      { name: 'API Integration', url: '/services/website-development/custom-development-automation' },
      { name: 'Paid Advertising', url: '/services/market-channel-optimization-services/paid-advertising-optimization' },
      { name: 'Supplier Sourcing', url: '/services/ecommerce-solutions/product-supplier-intelligence' }
    ]
  },
  {
    id: 'tcg-company',
    name: 'TCG Company',
    tagline: 'Business Consulting & Strategy',
    logo: 'TCG',
    logoGradient: 'from-indigo-500 to-purple-600',
    backgroundImage: null,
    hasBackgroundImage: false,
    backgroundGradient: 'from-indigo-900/20 to-purple-900/20',
    status: 'In Development',
    statusColor: 'yellow',
    region: 'Europe',
    industry: 'Consulting Services',
    description: 'Professional consulting firm providing strategic business solutions and market intelligence for enterprise clients across multiple industries.',
    usp: 'Data-Driven Strategy',
    uspIcon: 'Target',
    uspColor: 'indigo',
    
    // Detail content
    overview: {
      client: 'TCG Company is a leading business consulting firm specializing in strategic planning and market analysis for Fortune 500 companies across Europe.',
      duration: '4 months (In Progress)',
      timeline: 'November 2025 - Present',
      challenges: [
        'Outdated website not reflecting premium brand positioning',
        'Complex service offerings difficult to navigate',
        'Need for client portal with secure document sharing',
        'Limited data visualization capabilities for reports',
        'No automated lead qualification system'
      ]
    },
    
    solution: {
      approach: 'Building a sophisticated corporate platform with integrated client management, advanced reporting, and strategic positioning to match their premium services.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'Stripe', 'AWS'],
      features: [
        'Modern, professional website design',
        'Secure client portal for project management',
        'Interactive data visualization dashboards',
        'Automated lead scoring and qualification',
        'Integrated CRM system',
        'Custom report generation tools',
        'Multi-language support (EN, DE, FR)',
        'Knowledge base with searchable resources'
      ]
    },
    
    results: {
      metrics: [
        { label: 'Project Status', value: '68%', description: 'Development progress' },
        { label: 'Modules Complete', value: '12/18', description: 'Core features delivered' },
        { label: 'Beta Users', value: '24', description: 'Internal testing participants' },
        { label: 'Expected Launch', value: 'Mar 2026', description: 'Projected completion date' }
      ],
      testimonial: {
        quote: "The development process has been smooth and collaborative. We're excited about the capabilities being built.",
        author: 'Dr. Klaus Weber',
        role: 'Managing Director, TCG Company'
      }
    },
    
    // Services
    categoryServices: [
      { 
        category: 'Website Development', 
        url: '/services/website-development',
        color: 'cyan'
      },
      { 
        category: 'E-commerce Solutions', 
        url: '/services/ecommerce-solutions',
        color: 'indigo'
      }
    ],
    specificServices: [
      { name: 'Website Development', url: '/services/website-development' },
      { name: 'Performance Analytics', url: '/services/ecommerce-solutions/reporting-performance-intelligence' }
    ]
  },
  {
    id: 'next-phase-soccer',
    name: 'Next Phase Soccer',
    tagline: 'Sports Training & Development',
    logo: 'NPS',
    logoGradient: 'from-green-500 to-cyan-600',
    backgroundImage: null,
    hasBackgroundImage: false,
    backgroundGradient: 'from-green-900/20 to-cyan-900/20',
    status: 'Planning Phase',
    statusColor: 'cyan',
    region: 'North America',
    industry: 'Sports & Training',
    description: 'Elite soccer training academy offering personalized development programs, performance tracking, and pathway to professional leagues.',
    usp: 'Personalized Training Plans',
    uspIcon: 'Users',
    uspColor: 'green',
    
    // Detail content
    overview: {
      client: 'Next Phase Soccer is an elite training academy that develops young soccer talent through personalized coaching programs and performance analytics.',
      duration: 'Planning Phase',
      timeline: 'Q2 2026 - Q4 2026 (Projected)',
      challenges: [
        'Manual player evaluation and tracking processes',
        'Limited visibility into training progress',
        'Difficulty coordinating schedules across multiple coaches',
        'No centralized platform for parents and players',
        'Inefficient recruitment and scouting workflows'
      ]
    },
    
    solution: {
      approach: 'Developing an all-in-one platform for academy management, player development tracking, and family engagement with focus on mobile-first design.',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'Stripe', 'SendGrid', 'Google Cloud'],
      features: [
        'Player performance tracking dashboard',
        'Video analysis with AI-powered insights',
        'Personalized training plan builder',
        'Parent portal with progress reports',
        'Schedule management and notifications',
        'Integrated payment processing for programs',
        'Recruitment and scouting module',
        'Mobile apps for iOS and Android',
        'Social media content automation',
        'Influencer partnership management'
      ]
    },
    
    results: {
      metrics: [
        { label: 'Project Status', value: 'Planning', description: 'Requirements gathering phase' },
        { label: 'Design Mockups', value: '32', description: 'UI screens designed' },
        { label: 'Tech Stack', value: 'Finalized', description: 'Architecture approved' },
        { label: 'Expected Launch', value: 'Q4 2026', description: 'Projected beta release' }
      ],
      testimonial: {
        quote: "We're excited to bring modern technology to youth soccer development. The vision for this platform is exactly what we need.",
        author: 'Coach Michael Rodriguez',
        role: 'Director, Next Phase Soccer Academy'
      }
    },
    
    // Services
    categoryServices: [
      { 
        category: 'Website Development', 
        url: '/services/website-development',
        color: 'green'
      },
      { 
        category: 'Market Optimization', 
        url: '/services/market-channel-optimization-services',
        color: 'cyan'
      },
      { 
        category: 'E-commerce Solutions', 
        url: '/services/ecommerce-solutions',
        color: 'blue'
      }
    ],
    specificServices: [
      { name: 'Platform Development', url: '/services/website-development' },
      { name: 'SEO & Content', url: '/services/market-channel-optimization-services/organic-channel-growth' },
      { name: 'Influencer Marketing', url: '/services/ecommerce-solutions/influencer-partnership-sourcing' }
    ]
  }
];

// Helper functions
export const getCaseById = (id) => {
  return portfolioCases.find(c => c.id === id);
};

export const getNextCase = (currentId) => {
  const currentIndex = portfolioCases.findIndex(c => c.id === currentId);
  const nextIndex = (currentIndex + 1) % portfolioCases.length;
  return portfolioCases[nextIndex];
};

export const getPrevCase = (currentId) => {
  const currentIndex = portfolioCases.findIndex(c => c.id === currentId);
  const prevIndex = currentIndex === 0 ? portfolioCases.length - 1 : currentIndex - 1;
  return portfolioCases[prevIndex];
};

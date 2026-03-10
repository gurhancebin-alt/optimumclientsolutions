export const serviceCategories = [
  {
    slug: 'webshop-development',
    name: 'Webshop Development',
    icon: 'Monitor',
    meta: {
      title: 'Webshop Development Services | Optimum Client Solutions',
      description: 'Professional webshop development services including Shopify, WooCommerce, custom web apps, and headless commerce solutions. Get your free consultation today.',
      cardDescription: 'High-performance, custom-built webshops and web applications that drive results. From headless commerce to full-stack solutions.',
    },
    services: [
      {
        slug: 'ecommerce-platform-development',
        icon: 'ShoppingBag',
        title: 'E-Commerce Platform Development | Shopify & WooCommerce Experts',
        description: 'Build powerful, scalable online stores with custom Shopify, WooCommerce, and headless commerce solutions.',
        metaDescription: 'Expert e-commerce platform development services. Custom Shopify, WooCommerce, Magento, and BigCommerce solutions with ongoing support. Start your online store today.',
        features: [
          {
            title: 'Shopify Custom Development',
            description: 'Build powerful, scalable Shopify stores tailored to your business needs'
          },
          {
            title: 'WooCommerce Solutions',
            description: 'WordPress-based e-commerce with flexible customization options'
          },
          {
            title: 'Magento Development',
            description: 'Enterprise-grade e-commerce platform for large-scale operations'
          },
          {
            title: 'BigCommerce Expertise',
            description: 'Feature-rich platform for growing businesses'
          },
          {
            title: 'Wix Development',
            description: 'User-friendly solutions for quick market entry'
          },
          {
            title: 'Ongoing Maintenance and Support',
            description: 'Continuous platform updates, security patches, and technical assistance'
          },
        ],
        process: [
          { step: 1, titleKey: 'Discovery & Strategy meeting' },
          { step: 2, titleKey: 'UX/UI Design & Strategy approval' },
          { step: 3, titleKey: 'Development & Integration' },
          { step: 4, titleKey: 'Testing and review' },
          { step: 5, titleKey: 'Launch & Optimization' },
        ],
      },
      {
        slug: 'UI-UX-design-optimization',
        icon: 'Star',
        title: 'Web Design & UX Optimization | Conversion-Focused Design',
        description: 'Create stunning, conversion-focused designs with mobile-first UX that delights customers and drives sales.',
        metaDescription: 'Professional web design and UX optimization services. Mobile-first, conversion-focused designs that increase sales and customer satisfaction. Free consultation available.',
        features: [
          { title: 'Custom Theme Configuration', description: 'Tailored theme setup matching your brand identity' },
          { title: 'Captivating Visual Designs and Animations', description: 'Engaging animations and visual effects that enhance user experience' },
          { title: 'Multi-Device Optimization', description: 'Responsive design that works perfectly on desktop, tablet, and mobile' },
          { title: 'Efficient SEO Structured Design', description: 'Design optimized for search engine visibility and rankings' },
          { title: 'Custom Section Development', description: 'Unique page sections built specifically for your needs' },
          { title: 'Brand Experience Implementation', description: 'Consistent brand messaging across all touchpoints' },
          { title: 'Checkout UX Optimization', description: 'Streamlined checkout process to reduce cart abandonment' },
        ],
        process: [
          { step: 1, titleKey: 'Discovery & Strategy' },
          { step: 2, titleKey: 'Design & Prototyping' },
          { step: 3, titleKey: 'Development & Integration'},
          { step: 4, titleKey: 'Testing & Review' },
          { step: 5, titleKey: 'Launch & Optimization' },
        ],
      },
      {
        slug: 'product-catalog-management',
        icon: 'Product',
        title: 'Product Catalog Management | Automated Inventory Systems',
        description: 'Streamline product data management with automated uploads, variant logic, and smart inventory systems.',
        metaDescription: 'Expert product catalog management services. Bulk uploads, variant configuration, inventory automation, and smart collection systems. Streamline your e-commerce operations.',
        features: [
          { title: 'Bulk Editing & Transformation Tools', description: 'Efficiently manage thousands of products with automated bulk operations' },
          { title: 'Variant Logic Setup', description: 'Configure size, color, and SKU management for complex product variations' },
          { title: 'Inventory System Configuration', description: 'Set up automated inventory tracking and low-stock alerts' },
          { title: 'Product Page Optimization', description: 'Enhance product pages for better conversion and SEO performance' },
          { title: 'Automated Stock Updates', description: 'Real-time inventory synchronization through API integration' },
          { title: 'Collection Logic Automation', description: 'Create manual, automated, and smart collections for better product organization' },
        ],
        process: [
          { step: 1, titleKey: 'Discovery & Strategy' },
          { step: 2, titleKey: 'Design & Prototyping' },
          { step: 3, titleKey: 'Development & Integration'},
          { step: 4, titleKey: 'Testing & Review' },
          { step: 5, titleKey: 'Launch & Optimization' },
        ],
      },
      {
        slug: 'seo-performance-optimization',
        icon: 'Search',
        title: 'SEO & Performance Optimization | Boost Organic Traffic',
        description: 'Boost organic traffic and search rankings with comprehensive SEO strategies and technical optimization.',
        metaDescription: 'Professional SEO and performance optimization services. Increase organic traffic, improve search rankings, and enhance site speed. Free SEO audit available.',
        features: [
          { title: 'On-Page SEO Optimization', description: 'Optimize meta tags, headers, and content structure for better rankings' },
          { title: 'Keyword Research and Targeting', description: 'Identify high-value keywords to drive qualified traffic' },
          { title: 'Technical SEO Audits', description: 'Comprehensive site analysis to identify and fix SEO issues' },
          { title: 'Content Optimization', description: 'Enhance existing content for improved search visibility' },
          { title: 'Backlink Strategy', description: 'Build quality backlinks to increase domain authority' },
          { title: 'Performance Monitoring and Reporting', description: 'Track rankings, traffic, and conversions with detailed reports' },
          { title: 'Discovery Report and Insights', description: 'In-depth analysis of opportunities and competitive landscape' },
        ],
        process: [
          { step: 1, titleKey: 'Discovery & Strategy' },
          { step: 2, titleKey: 'SEO Strategy & Planning' },
          { step: 3, titleKey: 'Development & Integration' },
          { step: 4, titleKey: 'Testing & Review' },
          { step: 5, titleKey: 'Launch & Optimization' },
        ],
      },
      {
        slug: 'store-setup-architecture',
        icon: 'Bridge2',
        title: 'E-Commerce Store Setup | Payment & Architecture Solutions',
        description: 'Launch your online store with expert configuration, payment integration, and scalable architecture.',
        metaDescription: 'Complete e-commerce store setup services. Domain configuration, payment gateway integration, shipping setup, and scalable architecture. Launch your store quickly.',
        features: [
          { title: 'Full Store Setup & Configuration', description: 'Complete platform setup from domain to launch' },
          { title: 'Up to 10 Page Setup', description: 'Essential pages including home, about, contact, and policy pages' },
          { title: 'Product Catalog Structure Setup', description: 'Upload and organize up to 1000 products with proper categorization' },
          { title: 'Collection and Category Design', description: 'Strategic organization of products for easy browsing' },
          { title: 'Webhook and API Integration Setup', description: 'Connect your store to third-party services and automation tools' },
          { title: 'Store Structure & Navigation Planning', description: 'User-friendly site architecture and intuitive navigation' },
          { title: 'Product Taxonomy Design', description: 'Logical hierarchy of collections and categories' },
          { title: 'Payment Gateway Integration', description: 'Secure payment processing setup for multiple payment methods' },
          { title: 'Shipping & Tax Configuration', description: 'Automated shipping rules and tax calculations' },
        ],
        process: [
          { step: 1, titleKey: 'Requirements Analysis' },
          { step: 2, titleKey: 'Architecture Planning' },
          { step: 3, titleKey: 'Build & Testing' },
          { step: 4, titleKey: 'Review and Optimization' },
          { step: 5, titleKey: 'Deployment & Support' },
        ],
      },
      {
        slug: 'custom-development-automation',
        icon: 'Settings',
        title: 'Custom Development & Automation | API Integration Experts',
        description: 'Automate workflows and integrate systems with custom API development and AI-powered solutions.',
        metaDescription: 'Custom development and automation services. API integrations with ERP, CRM, and marketing tools. AI-assisted workflows and scalable architecture solutions.',
        features: [
          { title: 'API Integrations', description: 'Connect ERP, CRM, logistics, and marketing tools to your store' },
          { title: 'Custom Functionality Development', description: 'Build bespoke features tailored to your unique business needs' },
          { title: 'Automation for Product Data Enrichment', description: 'Automatically enhance product information with AI assistance' },
          { title: 'Bulk Meta-Data Generation Systems', description: 'Generate SEO-optimized meta tags and descriptions at scale' },
          { title: 'AI-Assisted SEO Workflows', description: 'Leverage AI to streamline content optimization processes' },
          { title: 'Scalable Architecture', description: 'Build systems that grow with your business' },
        ],
        process: [
          { step: 1, titleKey: 'Scope Definition' },
          { step: 2, titleKey: 'Technical Design' },
          { step: 3, titleKey: 'Agile Development' },
          { step: 4, titleKey: 'Launch & Iteration' },
        ],
      },
      {
        slug: 'payments-checkout',
        icon: 'CreditCard',
        title: 'Payment & Checkout Optimization | Multi-Currency Solutions',
        description: 'Optimize checkout experience with seamless payment gateway integration and multi-currency support.',
        metaDescription: 'Payment gateway integration and checkout optimization. Multi-currency support, abandoned cart recovery, and seamless payment processing. Increase conversion rates.',
        features: [
          { title: 'Payment Gateway Integration', description: 'Secure integration with major payment providers worldwide' },
          { title: 'Multi-Currency Setup', description: 'Accept payments in multiple currencies with automatic conversion' },
          { title: 'Shipping Rule Logic', description: 'Configure complex shipping calculations based on location and weight' },
          { title: 'Abandoned Cart Setup', description: 'Recover lost sales with automated cart recovery emails' },
        ],
        process: [
          { step: 1, titleKey: 'Discovery & Strategy' },
          { step: 2, titleKey: 'Design & Prototyping' },
          { step: 3, titleKey: 'Development & Integration' },
          { step: 4, titleKey: 'Launch & Optimization' },
        ],
      },
      {
        slug: 'analytics-intelligence',
        icon: 'BarChart3',
        title: 'Analytics & Business Intelligence | Data-Driven Insights',
        description: 'Make data-driven decisions with comprehensive analytics tracking, dashboards, and performance insights.',
        metaDescription: 'Analytics and business intelligence services. Google Analytics setup, conversion tracking, custom dashboards, and performance reporting. Data-driven decision making.',
        features: [
          { title: 'Google Analytics Integration', description: 'Track user behavior, traffic sources, and conversion metrics' },
          { title: 'Google Search Console Setup', description: 'Monitor search performance and identify optimization opportunities' },
          { title: 'Conversion Tracking Implementation', description: 'Measure ROI by tracking sales, leads, and other key actions' },
          { title: 'Facebook / TikTok Pixel Setup', description: 'Track social media ad performance and retarget visitors' },
          { title: 'Data Tracking Architecture', description: 'Comprehensive event tracking for complete customer journey visibility' },
          { title: 'Performance Dashboards and Reporting', description: 'Custom dashboards with actionable insights and KPIs' },
        ],
        process: [
          { step: 1, titleKey: 'Discovery & Strategy' },
          { step: 2, titleKey: 'Design & Prototyping' },
          { step: 3, titleKey: 'Development & Integration' },
          { step: 4, titleKey: 'Launch & Optimization' },
        ],
      },
      {
        slug: 'growth-scaling',
        icon: 'TrendingUp',
        title: 'E-Commerce Growth & Scaling | Multi-Market Expansion',
        description: 'Scale globally with multi-market expansion, cross-border commerce, and conversion optimization.',
        metaDescription: 'E-commerce growth and scaling services. Multi-market expansion, cross-border commerce, conversion optimization, and international marketplace setup.',
        features: [
          { title: 'Multi-Language Store Setup', description: 'Reach global audiences with localized content and currency' },
          { title: 'Multi-Market Expansion Setup', description: 'Expand to bol.com, Amazon, eBay, and other major marketplaces' },
          { title: 'Cross-Border Commerce Configuration', description: 'Handle international shipping, customs, and compliance' },
          { title: 'Upsell & Cross-Sell Systems', description: 'Increase average order value with strategic product recommendations' },
          { title: 'Email Marketing Integration', description: 'Connect to Klaviyo, Mailchimp, and other email platforms' },
          { title: 'Conversion Optimization Testing', description: 'A/B testing to improve conversion rates continuously' },
        ],
        process: [
          { step: 1, titleKey: 'Discovery & Strategy' },
          { step: 2, titleKey: 'Design & Prototyping' },
          { step: 3, titleKey: 'Development & Integration' },
          { step: 4, titleKey: 'Launch & Optimization' },
        ],
      },
    ],
  },
  {
    slug: 'market-channel-optimization-services',
    name: 'Multi-Channel Marketing Optimization',
    icon: 'Megaphone',
    meta: {
      title: 'Multi-Channel Marketing Optimization | Optimum Client Solutions',
      description: 'Multi-channel marketing optimization services including marketplace optimization, paid advertising, organic growth, and performance analytics. Maximize your ROI.',
      cardDescription: 'Multi-channel marketing strategies powered by AI and data analytics. Reach your audience where they are.',
    },
    services: [
      {
        slug: 'marketplace-optimization',
        icon: 'Store',
        title: 'Marketplace Optimization | Amazon, eBay & Multi-Platform SEO',
        description: 'Maximize marketplace visibility and sales with SEO-optimized listings and enhanced content strategies.',
        metaDescription: 'Marketplace optimization services for Amazon, eBay, and more. SEO-optimized listings, A+ content creation, and algorithm-aligned strategies to boost sales.',
        features: [
          { title: 'Product Listing Optimization', description: 'SEO-driven titles, bullets, and descriptions for maximum visibility' },
          { title: 'Enhanced Content Creation', description: 'Design A+ content and branded storefronts that convert' },
          { title: 'Keyword Intelligence & Search Positioning', description: 'Target high-volume keywords to dominate search results' },
          { title: 'Competitive Pricing Alignment', description: 'Strategic pricing analysis to stay competitive' },
          { title: 'Listing Conversion Improvement', description: 'Optimize images, copy, and layout to increase sales' },
          { title: 'Marketplace Algorithm Alignment', description: 'Stay compliant with platform best practices and ranking factors' },
          { title: 'Structured Product Data Enhancement', description: 'Complete and accurate product attributes for better discoverability' },
          { title: 'Catalog Expansion Strategy', description: 'Scale your product portfolio strategically' },
          { title: 'Review & Reputation Positioning', description: 'Build and maintain positive seller reputation' },
          { title: 'Cross-Marketplace Consistency', description: 'Maintain brand consistency across all selling channels' },
          { title: 'Performance Audit & Gap Analysis', description: 'Identify opportunities and fix underperforming listings' },
        ],
        process: [
          { step: 1, titleKey: 'Platform Assessment' },
          { step: 2, titleKey: 'Strategy Development' },
          { step: 3, titleKey: 'Content Creation' },
          { step: 4, titleKey: 'Optimization & Scaling' },
        ],
      },
      {
        slug: 'paid-advertising-optimization',
        icon: 'Target',
        title: 'Paid Advertising Optimization | ROAS & Campaign Management',
        description: 'Drive profitable growth with data-driven ad campaigns, audience targeting, and ROAS optimization.',
        metaDescription: 'Paid advertising optimization services. Data-driven campaigns, audience segmentation, A/B testing, and ROAS optimization across Google Ads, Facebook, and more.',
        features: [
          { title: 'Campaign Structure Architecture', description: 'Build organized campaigns for better performance and scalability' },
          { title: 'Audience Segmentation Strategy', description: 'Target the right customers with precision audience definitions' },
          { title: 'Ad Copy & Creative Optimization', description: 'Compelling ads that drive clicks and conversions' },
          { title: 'Bid Strategy Development', description: 'Maximize ROI with smart bidding strategies' },
          { title: 'Conversion Tracking Setup', description: 'Accurate attribution to measure true campaign performance' },
          { title: 'Performance Monitoring & Reporting', description: 'Real-time dashboards and actionable insights' },
          { title: 'A/B Testing Frameworks', description: 'Continuous testing to improve campaign results' },
          { title: 'Cross-Channel Attribution Strategy', description: 'Understand the full customer journey across platforms' },
          { title: 'ROAS Optimization', description: 'Maximize return on ad spend with data-driven optimizations' },
        ],
        process: [
          { step: 1, titleKey: 'Campaign Planning' },
          { step: 2, titleKey: 'Flow Design' },
          { step: 3, titleKey: 'Testing & Optimization' },
          { step: 4, titleKey: 'Launch & Optimization' },
        ],
      },
      {
        slug: 'organic-channel-growth',
        icon: 'Leaf',
        title: 'Organic Channel Growth | Content & Community Strategy',
        description: 'Build authentic audience engagement through strategic content, influencer partnerships, and community growth.',
        metaDescription: 'Organic channel growth services. Strategic content creation, influencer collaboration, community building, and platform-native engagement strategies.',
        features: [
          { title: 'SEO-Aligned Product Storytelling', description: 'Craft compelling narratives that rank well and resonate with audiences' },
          { title: 'Platform-Native Engagement Alignment', description: 'Optimize content for each social platform\'s unique algorithm' },
          { title: 'Hashtag & Search Intent Research', description: 'Discover trending topics and high-impact hashtags' },
          { title: 'Structured Content Strategy', description: 'Plan consistent, valuable content that builds audience trust' },
          { title: 'Influencer Collaboration Strategy', description: 'Partner with influencers to extend your reach' },
          { title: 'Community Growth Direction', description: 'Build engaged communities around your brand' },
          { title: 'Content Performance Analysis', description: 'Track what works and optimize future content' },
          { title: 'Organic Conversion Optimization', description: 'Turn followers into customers with strategic CTAs' },
          { title: 'Cross-Channel Content Consistency', description: 'Maintain unified messaging across all platforms' },
          { title: 'Trend Alignment Strategy', description: 'Capitalize on trending topics while staying on-brand' },
        ],
        process: [
          { step: 1, titleKey: 'Content Audit' },
          { step: 2, titleKey: 'Strategy & Planning' },
          { step: 3, titleKey: 'Production' },
          { step: 4, titleKey: 'Distribution & Measurement' },
          { step: 5, titleKey: 'Optimization & Scaling' },
          { step: 6, titleKey: 'Ongoing Growth Support' },
        ],
      },
      {
        slug: 'channel-intelligence-performance-analytics',
        icon: 'Eye',
        title: 'Channel Intelligence & Performance Analytics | Data Insights',
        description: 'Uncover growth opportunities with cross-channel analytics, competitor insights, and performance benchmarking.',
        metaDescription: 'Channel intelligence and performance analytics services. Cross-channel insights, competitor analysis, KPI tracking, and data-driven growth strategies.',
        features: [
          { title: 'Data-Driven Insights', description: 'Transform raw data into actionable business intelligence' },
          { title: 'Performance Benchmarking', description: 'Compare your metrics against industry standards' },
          { title: 'Market Trend Analysis', description: 'Stay ahead with emerging market trends and opportunities' },
          { title: 'Competitor Analysis', description: 'Understand competitive landscape and positioning' },
          { title: 'KPI Tracking & Reporting', description: 'Monitor critical metrics with custom dashboards' },
          { title: 'Growth Opportunity Identification', description: 'Uncover untapped channels and audience segments' },
          { title: 'Data-Driven Scaling Recommendations', description: 'Strategic guidance based on performance data' },
        ],
        process: [
          { step: 1, titleKey: 'Data Collection' },
          { step: 2, titleKey: 'Analysis & Insights' },
          { step: 3, titleKey: 'Strategy Development' },
          { step: 4, titleKey: 'Implementation & Monitoring' },
          { step: 5, titleKey: 'Optimization & Scaling' },
          { step: 6, titleKey: 'Ongoing Performance Support' },
        ],
      },
      {
        slug: 'strategic-market-expansion',
        icon: 'Globe',
        title: 'Strategic Market Expansion | International Growth Strategy',
        description: 'Enter new markets confidently with localization strategies, international SEO, and market analysis.',
        metaDescription: 'Strategic market expansion services. Market opportunity analysis, localization strategy, cross-border commerce, and international SEO optimization.',
        features: [
          { title: 'Market Opportunity Analysis', description: 'Identify and evaluate new market opportunities globally' },
          { title: 'Localization Strategy Development', description: 'Adapt your brand for local markets and cultures' },
          { title: 'Cross-Border Commerce Setup', description: 'Handle international payments, shipping, and compliance' },
          { title: 'Multi-Language Content Strategy', description: 'Create culturally relevant content for each market' },
          { title: 'International SEO Optimization', description: 'Rank in local search engines with region-specific SEO' },
          { title: 'Global Marketplace Expansion Strategy', description: 'Enter international marketplaces strategically' },
          { title: 'Resource Allocation Modeling', description: 'Optimize budget and resources across markets' },
        ],
        process: [
          { step: 1, titleKey: 'Market Research' },
          { step: 2, titleKey: 'Strategy Development' },
          { step: 3, titleKey: 'Implementation & Monitoring' },
          { step: 4, titleKey: 'Optimization & Scaling' },
          { step: 5, titleKey: 'Ongoing Expansion Support' },
        ],
      },
    ],
  },
  {
    slug: 'ecommerce-solutions',
    name: 'E-Commerce Solutions',
    icon: 'ShoppingCart',
    meta: {
      title: 'E-Commerce Intelligence & Solutions | Optimum Client Solutions',
      description: 'E-commerce intelligence services including product research, supplier sourcing, keyword analysis, performance reporting, and strategic business intelligence.',
      cardDescription: 'End-to-end e-commerce optimization from store setup to conversion rate optimization and supply chain management.',
    },
    services: [
      {
        slug: 'product-supplier-intelligence',
        icon: 'Search',
        title: 'Product & Supplier Intelligence | Market Research Services',
        description: 'Discover profitable products and reliable suppliers with data-driven research and competitive analysis.',
        metaDescription: 'Product and supplier intelligence services. Product opportunity research, supplier sourcing and vetting, competitive landscape analysis, and margin modeling.',
        features: [
          { title: 'Structured Product Opportunity Research', description: 'Identify profitable products with data-driven market analysis' },
          { title: 'Supplier Sourcing & Vetting', description: 'Find and verify reliable suppliers worldwide' },
          { title: 'Cost Analysis & Margin Modeling', description: 'Calculate profitability and pricing strategies' },
          { title: 'Competitive Landscape Mapping', description: 'Understand market competition and positioning' },
          { title: 'Product-Market Fit Analysis', description: 'Validate product demand before investment' },
          { title: 'Sustainability & Ethical Sourcing Evaluation', description: 'Ensure suppliers meet ethical and environmental standards' },
          { title: 'Demand Validation & Market Sizing', description: 'Quantify market opportunity and demand' },
          { title: 'MOQ and Cost Structure Assessment', description: 'Evaluate minimum order quantities and total costs' },
        ],
        process: [
          { step: 1, titleKey: 'Research & Opportunity Identification' },
          { step: 2, titleKey: 'Supplier Sourcing & Vetting' },
          { step: 3, titleKey: 'Cost Analysis & Margin Modeling' },
          { step: 4, titleKey: 'Competitive Landscape Mapping' },
          { step: 5, titleKey: 'Product-Market Fit Analysis' },
          { step: 6, titleKey: 'Sustainability & Ethical Sourcing Evaluation' },
          { step: 7, titleKey: 'Demand Validation & Market Sizing' },
          { step: 8, titleKey: 'MOQ and Cost Structure Assessment' },
        ],
      },
      {
        slug: 'influencer-partnership-sourcing',
        icon: 'Users',
        title: 'Influencer Partnership Sourcing | Brand Collaboration',
        description: 'Connect with the right influencers to amplify your brand reach and drive authentic engagement.',
        metaDescription: 'Influencer partnership sourcing services. Influencer discovery and vetting, partnership strategy development, audience validation, and performance tracking.',
        features: [
          { title: 'Influencer Discovery & Vetting', description: 'Find authentic influencers aligned with your brand values' },
          { title: 'Partnership Strategy Development', description: 'Design mutually beneficial collaboration frameworks' },
          { title: 'Audience Relevance Validation', description: 'Verify influencer audiences match your target market' },
          { title: 'Collaboration Structuring', description: 'Define clear deliverables, timelines, and compensation' },
          { title: 'Performance Tracking & Optimization', description: 'Measure ROI and optimize ongoing partnerships' },
          { title: 'Outreach Structure Guidance', description: 'Best practices for professional influencer outreach' },
          { title: 'Affiliate Strategy Structure', description: 'Set up affiliate programs to scale influencer marketing' },
        ],
        process: [
          { step: 1, titleKey: 'Influencer Discovery & Vetting' },
          { step: 2, titleKey: 'Partnership Strategy Development' },
          { step: 3, titleKey: 'Audience Relevance Validation' },
          { step: 4, titleKey: 'Collaboration Structuring' },
          { step: 5, titleKey: 'Performance Tracking & Optimization' },
          { step: 6, titleKey: 'Outreach Structure Guidance' },
          { step: 7, titleKey: 'Affiliate Strategy Structure' },
        ],
      },
      {
        slug: 'keyword-search-intelligence',
        icon: 'Search',
        title: 'Keyword & Search Intelligence | SEO Research Services',
        description: 'Dominate search results with strategic keyword research, competitor analysis, and content optimization.',
        metaDescription: 'Keyword and search intelligence services. Strategic keyword research, SEO strategy development, competitor keyword analysis, and search trend monitoring.',
        features: [
          { title: 'Keyword Research & Analysis', description: 'Discover high-value keywords with commercial intent' },
          { title: 'SEO Strategy Development', description: 'Create comprehensive SEO roadmaps for organic growth' },
          { title: 'Content Optimization', description: 'Optimize existing content to rank for target keywords' },
          { title: 'Competitor Keyword Analysis', description: 'Identify keywords your competitors are ranking for' },
          { title: 'Search Trend Monitoring', description: 'Track emerging search trends and opportunities' },
          { title: 'Performance Tracking & Reporting', description: 'Monitor keyword rankings and organic traffic growth' },
        ],
        process: [
          { step: 1, titleKey: 'Keyword Research & Analysis' },
          { step: 2, titleKey: 'SEO Strategy Development' },
          { step: 3, titleKey: 'Content Optimization' },
          { step: 4, titleKey: 'Competitor Keyword Analysis' },
          { step: 5, titleKey: 'Search Trend Monitoring' },
          { step: 6, titleKey: 'Performance Tracking & Reporting' },
        ],
      },
      {
        slug: 'reporting-performance-intelligence',
        icon: 'BarChart',
        title: 'Reporting & Performance Intelligence | KPI Tracking',
        description: 'Transform data into actionable insights with comprehensive reporting and KPI tracking systems.',
        metaDescription: 'Reporting and performance intelligence services. Data-driven insights, performance benchmarking, KPI tracking, and growth opportunity identification.',
        features: [
          { title: 'Data-Driven Insights', description: 'Transform complex data into clear, actionable recommendations' },
          { title: 'Performance Benchmarking', description: 'Compare your metrics against industry leaders' },
          { title: 'Market Trend Analysis', description: 'Identify and capitalize on emerging market trends' },
          { title: 'Competitor Analysis', description: 'Track competitor strategies and market positioning' },
          { title: 'KPI Tracking & Reporting', description: 'Custom dashboards for your critical business metrics' },
          { title: 'Growth Opportunity Identification', description: 'Uncover hidden opportunities for business expansion' },
          { title: 'Data-Driven Scaling Recommendations', description: 'Strategic guidance backed by performance data' },
        ],
        process: [
          { step: 1, titleKey: 'Data-Driven Insights' },
          { step: 2, titleKey: 'Performance Benchmarking' },
          { step: 3, titleKey: 'Market Trend Analysis' },
          { step: 4, titleKey: 'Competitor Analysis' },
          { step: 5, titleKey: 'KPI Tracking & Reporting' },
          { step: 6, titleKey: 'Growth Opportunity Identification' },
          { step: 7, titleKey: 'Data-Driven Scaling Recommendations' },
        ],
      },
      {
        slug: 'strategic-analysis-business-intelligence-reports',
        icon: 'FileText',
        title: 'Strategic Analysis & Business Intelligence | Market Reports',
        description: 'Make informed decisions with comprehensive market analysis, competitive intelligence, and strategic reports.',
        metaDescription: 'Strategic analysis and business intelligence services. Competitive landscape reports, market trend analysis, SWOT analysis, and growth opportunity identification.',
        features: [
          { title: 'Competitive Landscape Reports', description: 'Comprehensive analysis of market competitors and positioning' },
          { title: 'Market Trend Analysis', description: 'Identify macro and micro trends affecting your business' },
          { title: 'SWOT Analysis', description: 'Evaluate strengths, weaknesses, opportunities, and threats' },
          { title: 'Business Intelligence Reports', description: 'Executive-level insights and strategic recommendations' },
          { title: 'Growth Opportunity Identification', description: 'Discover new revenue streams and expansion opportunities' },
          { title: 'Break-Even Analysis', description: 'Financial modeling to determine profitability thresholds' },
          { title: 'Market Expansion Feasibility Reports', description: 'Assess viability of entering new markets or categories' },
          { title: 'Pricing Strategy Modeling', description: 'Data-driven pricing recommendations to maximize margins' },
        ],
        process: [
          { step: 1, titleKey: 'Competitive Landscape Reports' },
          { step: 2, titleKey: 'Market Trend Analysis' },
          { step: 3, titleKey: 'SWOT Analysis' },
          { step: 4, titleKey: 'Business Intelligence Reports' },
          { step: 5, titleKey: 'Growth Opportunity Identification' },
          { step: 6, titleKey: 'Break-Even Analysis' },
          { step: 7, titleKey: 'Market Expansion Feasibility Reports' },
          { step: 8, titleKey: 'Pricing Strategy Modeling' },
        ],
      },
    ],
  },
  {
    slug: 'ai-solution-package',
    name: 'AI Solution Package',
    icon: 'Bot',
    meta: {
      title: 'AI Solution Package | E-Commerce Data & Automation Services',
      description: 'AI-powered e-commerce solutions including data cleaning, product enrichment, chatbot training, and workflow automation. Transform your catalog for AI-ready operations.',
      cardDescription: 'AI-powered data solutions that transform your product catalog into intelligent, machine-readable systems optimized for automation and chatbots.',
    },
    services: [
      {
        slug: 'ai-ready-inventory-sanitization',
        icon: 'labels',
        title: 'AI-Ready Inventory Sanitization | Automated Data Normalization & Cleaning',
        description: 'We transform fragmented, messy spreadsheets into structured, "machine-readable" data. By cleaning "phantom" characters and standardizing attributes, we ensure your AI tools and site filters work with 100% accuracy.',
        metaDescription: 'Clean your e-commerce data for AI. We remove "phantom" data, fix empty cells, and standardize categories for seamless platform imports.',
        features: [
          {
            title: 'Null-Value Conversion',
            description: 'Identifying and converting "invisible" empty strings to true nulls'
          },
          {
            title: 'Product Grouping Visualisation',
            description: 'Using AI to identify and visually group similar products based on attributes and descriptions'
          },
          {
            title: 'Attribute Standardization',
            description: 'Merging variations (e.g., "M," "Male," "Men") into a single AI-friendly tag'
          },
          {
            title: 'Whitespace & Character Scrubbing',
            description: 'Bulk trimming spaces and removing non-printable characters'
          },
          {
            title: 'Delimiter Splitting',
            description: 'Breaking "Franken-Category" strings into distinct Gender/Category columns'
          },
          {
            title: 'Duplicate Detection',
            description: 'Using fuzzy logic to find and merge redundant product entries'
          },
          {
            title: 'Unit Uniformity',
            description: 'Automatically converting mixed measurements (cm/in, lbs/kg) across all SKUs'
          },
        ],
        process: [
          { step: 1, titleKey: 'Data Audit & Analysis' },
          { step: 2, titleKey: 'Cleaning Strategy Development' },
          { step: 3, titleKey: 'Automated Processing & Validation' },
          { step: 4, titleKey: 'Quality Assurance & Testing' },
          { step: 5, titleKey: 'Deployment & Documentation' },
        ],
      },
      {
        slug: 'smart-category-taxonomy-mapping',
        icon: 'Network',
        title: 'Smart Category & Taxonomy Mapping | AI-Driven Product Hierarchy Design',
        description: 'Move beyond flat lists. We build intelligent category trees that allow AI chatbots to navigate your store like a human expert, helping customers find exactly what they need in seconds.',
        metaDescription: 'Organize your store with AI-driven taxonomy. Create logical product hierarchies that improve both SEO and chatbot navigation.',
        features: [
          {
            title: 'Parent-Child Mapping',
            description: 'Creating logical "Tree" structures for intuitive site navigation'
          },
          {
            title: 'Breadcrumb Optimization',
            description: 'Generating automated URL paths for better Google indexing'
          },
          {
            title: 'Chatbot Navigation Logic',
            description: 'Mapping keywords to specific category nodes for faster AI retrieval'
          },
          {
            title: 'Attribute Inheritance',
            description: 'Ensuring subcategories automatically adopt traits from parent categories'
          },
          {
            title: 'Filter Logic Setup',
            description: 'Defining which technical specs should appear as sidebar filters'
          },
          {
            title: 'Cross-Category Tagging',
            description: 'Identifying products that belong in multiple "collections" simultaneously'
          },
        ],
        process: [
          { step: 1, titleKey: 'Catalog Structure Analysis' },
          { step: 2, titleKey: 'Taxonomy Design & Modeling' },
          { step: 3, titleKey: 'Implementation & Integration' },
          { step: 4, titleKey: 'Testing & Optimization' },
          { step: 5, titleKey: 'Launch & Monitoring' },
        ],
      },
      {
        slug: 'conversational-product-enrichment',
        icon: 'MessageSquare',
        title: 'Conversational Product Enrichment | SEO & Chatbot-Optimized Product Copy',
        description: 'We rewrite dry manufacturer specs into engaging, conversational descriptions. This ensures your products are "talkable" for AI voice assistants and customer service chatbots.',
        metaDescription: 'Upgrade your product copy for AI. Conversational descriptions that rank higher on search engines and help chatbots sell more effectively.',
        features: [
          {
            title: 'Keyword Injection',
            description: 'Seamlessly adding high-intent search terms into product titles'
          },
          {
            title: 'Bullet Point Synthesis',
            description: 'Turning dense paragraphs into scannable, feature-benefit lists'
          },
          {
            title: 'Tone Matching',
            description: 'Adjusting descriptions to match your brand\'s unique "voice"'
          },
          {
            title: 'Natural Language Prep',
            description: 'Formatting data so chatbots can answer "Does this fit...?" questions'
          },
          {
            title: 'Alt-Text Generation',
            description: 'Creating descriptive text for images to boost accessibility and SEO'
          },
          {
            title: 'Meta-Tag Automation',
            description: 'Generating unique meta-titles and descriptions for every SKU'
          },
        ],
        process: [
          { step: 1, titleKey: 'Content Audit & Brand Analysis' },
          { step: 2, titleKey: 'Copywriting Strategy Development' },
          { step: 3, titleKey: 'Bulk Content Generation' },
          { step: 4, titleKey: 'SEO Optimization & Review' },
          { step: 5, titleKey: 'Implementation & Publishing' },
        ],
      },
      {
        slug: 'intelligent-asset-media-linking',
        icon: 'Image',
        title: 'Intelligent Asset & Media Linking | AI-Enhanced Digital Asset Management',
        description: 'We sync your visual media with your product data. By automating the link between images, videos, and SKUs, we ensure your AI tools always show the right image to the right customer.',
        metaDescription: 'Sync your images and videos with your product data. Automated asset management for a faster, more visual e-commerce experience.',
        features: [
          {
            title: 'SKU-to-Image Matching',
            description: 'Bulk linking file names to the correct product IDs'
          },
          {
            title: 'Background Standardization',
            description: 'Using AI to ensure all product photos have a consistent look'
          },
          {
            title: 'Video-Attribute Linking',
            description: 'Tagging demonstration videos to specific product features'
          },
          {
            title: 'Image Compression & Sizing',
            description: 'Optimizing high-res files for fast web loading speeds'
          },
          {
            title: 'Visual Search Prep',
            description: 'Tagging images with metadata to enable "Search by Image" features'
          },
          {
            title: 'Manual/PDF Integration',
            description: 'Linking technical manuals to products for AI support bots to reference'
          },
        ],
        process: [
          { step: 1, titleKey: 'Asset Inventory & Audit' },
          { step: 2, titleKey: 'Naming Convention Strategy' },
          { step: 3, titleKey: 'Automated Matching & Linking' },
          { step: 4, titleKey: 'Optimization & Processing' },
          { step: 5, titleKey: 'Deployment & Validation' },
        ],
      },
      {
        slug: 'ai-chatbot-knowledge-base-calibration',
        icon: 'Bot',
        title: 'AI Chatbot Knowledge-Base Calibration | E-commerce Bot Training & Data Integration',
        description: 'We bridge the gap between your product database and your customer service AI. We format your catalog so your chatbot can provide instant, accurate answers to complex buyer queries.',
        metaDescription: 'Train your chatbot with your own data. We format your product catalog to turn your AI into a high-performing digital salesperson.',
        features: [
          {
            title: 'FAQ Data Extraction',
            description: 'Turning product specs into a "Question & Answer" format for AI'
          },
          {
            title: 'Compatibility Mapping',
            description: 'Training the bot to know which accessories work with which main products'
          },
          {
            title: 'Stock-Status Syncing',
            description: 'Ensuring the AI only recommends items that are currently in inventory'
          },
          {
            title: 'Policy Integration',
            description: 'Feeding shipping and return data into the bot\'s knowledge base'
          },
          {
            title: 'Sentiment Alert Setup',
            description: 'Training the bot to hand off to a human when a customer is frustrated'
          },
          {
            title: 'Hyper-Personalization',
            description: 'Using product tags to suggest "Frequently Bought Together" items'
          },
        ],
        process: [
          { step: 1, titleKey: 'Chatbot Requirements Analysis' },
          { step: 2, titleKey: 'Knowledge Base Structure Design' },
          { step: 3, titleKey: 'Data Formatting & Integration' },
          { step: 4, titleKey: 'Bot Training & Testing' },
          { step: 5, titleKey: 'Launch & Continuous Learning' },
        ],
      },
      {
        slug: 'ai-workflow-automation-system-integration',
        icon: 'Workflow',
        title: 'AI Workflow Automation & System Integration | Automated E-Commerce Process Management',
        description: 'We connect your product data to your entire business ecosystem. By automating data flows between your store, ERP, CRM, and marketing tools, we eliminate manual updates and reduce human error.',
        metaDescription: 'Automate your e-commerce workflows with AI. Connect your store to ERP, CRM, and marketing platforms for seamless data synchronization.',
        features: [
          {
            title: 'Real-Time Inventory Syncing',
            description: 'Automatically updating stock levels across all sales channels'
          },
          {
            title: 'Price Rule Automation',
            description: 'Setting dynamic pricing based on competitor data or stock levels'
          },
          {
            title: 'Order Status Broadcasting',
            description: 'Pushing order updates to fulfillment systems and customer notifications'
          },
          {
            title: 'Marketing Platform Integration',
            description: 'Syncing customer segments to email and ad platforms automatically'
          },
          {
            title: 'AI-Powered Data Enrichment',
            description: 'Automatically generating missing product attributes using machine learning'
          },
          {
            title: 'Workflow Error Detection',
            description: 'Monitoring data flows and alerting teams to integration failures'
          },
        ],
        process: [
          { step: 1, titleKey: 'System Assessment & Mapping' },
          { step: 2, titleKey: 'Integration Architecture Design' },
          { step: 3, titleKey: 'Development & API Configuration' },
          { step: 4, titleKey: 'Testing & Error Handling' },
          { step: 5, titleKey: 'Deployment & Monitoring' },
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug) {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getServiceBySlug(categorySlug, serviceSlug) {
  const category = getCategoryBySlug(categorySlug);
  return category?.services.find((s) => s.slug === serviceSlug);
}

// Helper function to get human-readable names for dropdowns
export function getCategoryName(slug) {
  const nameMap = {
    'website-development': 'Website Development',
    'market-channel-optimization-services': 'Market Channel Optimization',
    'ecommerce-solutions': 'eCommerce Solutions',
    'ai-solution-package': 'AI Solution Package',
  };
  return nameMap[slug] || slug;
}

export function getServiceName(slug) {
  const nameMap = {
    // Website Development services
    'ecommerce-platform-development': 'E-Commerce Platform Development',
    'design-ux': 'Design & UX',
    'product-catalog-management': 'Product Catalog Management',
    'seo-performance-optimization': 'SEO & Performance Optimization',
    'store-setup-architecture': 'Store Setup & Architecture',
    'custom-development-automation': 'Custom Development & Automation',
    'payments-checkout': 'Payments & Checkout',
    'analytics-intelligence': 'Analytics & Intelligence',
    'growth-scaling': 'Growth & Scaling',
    // Market Channel Optimization services
    'marketplace-optimization': 'Marketplace Optimization',
    'paid-advertising-optimization': 'Paid Advertising Optimization',
    'organic-channel-growth': 'Organic Channel Growth',
    'channel-intelligence-performance-analytics': 'Channel Intelligence & Performance Analytics',
    'strategic-market-expansion': 'Strategic Market Expansion',
    // eCommerce Solutions services
    'product-supplier-intelligence': 'Product & Supplier Intelligence',
    'influencer-partnership-sourcing': 'Influencer Partnership Sourcing',
    'keyword-search-intelligence': 'Keyword & Search Intelligence',
    'reporting-performance-intelligence': 'Reporting & Performance Intelligence',
    'strategic-analysis-business-intelligence-reports': 'Strategic Analysis & Business Intelligence Reports',
    // AI Solution Package services
    'ai-ready-catalog-sanitization': 'AI-Ready Catalog Sanitization',
    'smart-category-taxonomy-mapping': 'Smart Category & Taxonomy Mapping',
    'conversational-product-enrichment': 'Conversational Product Enrichment',
    'intelligent-asset-media-linking': 'Intelligent Asset & Media Linking',
    'ai-chatbot-knowledge-base-calibration': 'AI Chatbot Knowledge-Base Calibration',
    'ai-workflow-automation-system-integration': 'AI Workflow Automation & System Integration',
  };
  return nameMap[slug] || slug;
}

export function getServicesByCategory(categorySlug) {
  const category = getCategoryBySlug(categorySlug);
  return category?.services || [];
}

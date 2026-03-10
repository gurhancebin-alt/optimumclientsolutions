# Portfolio Cases Overview

## File Structure

The portfolio system consists of two main files:

1. **`src/data/portfolioCases.js`** - Data source containing all case study information
2. **`src/pages/Portfolio.jsx`** - Main portfolio page that displays cases

## How It Works

- The Portfolio page displays a grid of case study cards
- Clicking a case opens a detailed presentation view
- URL parameter `?case={id}` allows direct linking to specific cases
- Keyboard navigation: ESC to close, → to navigate to next case

## Modifying Existing Cases

To modify an existing case study:

1. Open `src/data/portfolioCases.js`
2. Find the case object in the `portfolioCases` array
3. Update any properties (title, description, metrics, testimonial, etc.)
4. Save the file - changes will appear immediately in development mode

## Data Structure Requirements

Each case study object must include:

### 1. Basic Information
```javascript
{
  id: 'unique-url-safe-id',
  title: 'Project Name',
  client: 'Client Name',
  industry: 'Industry Type',
  date: 'Month Year',
  image: '/images/case-study-image.jpg'
}
```

### 2. Overview Section
```javascript
overview: {
  challenge: 'Description of the client\'s challenge or problem',
  objective: 'What the project aimed to achieve',
  approach: 'High-level description of the solution approach'
}
```

### 3. Solution Section
```javascript
solution: {
  description: 'Detailed explanation of the solution implemented',
  keyFeatures: [
    'Feature 1 description',
    'Feature 2 description',
    'Feature 3 description'
  ],
  technologies: [
    { name: 'Technology 1', icon: 'IconName', color: 'blue' },
    { name: 'Technology 2', icon: 'IconName', color: 'green' }
  ]
}
```

### 4. Results Section
```javascript
results: {
  summary: 'Overall impact and success summary',
  metrics: [
    { label: 'Metric Name', value: '150%', icon: 'TrendingUp', color: 'green' },
    { label: 'Another Metric', value: '2.5x', icon: 'Users', color: 'blue' }
  ],
  additionalOutcomes: [
    'Additional outcome or achievement 1',
    'Additional outcome or achievement 2'
  ]
}
```

### 5. Testimonial (Optional)
```javascript
testimonial: {
  quote: 'Client testimonial quote',
  author: 'Name',
  position: 'Job Title, Company Name'
}
```

### 6. Service References
```javascript
categoryServices: ['webshop-development', 'market-channel-optimization-services'],
specificServices: ['shopify-development', 'seo-optimization', 'social-media-marketing']
```

## Template for New Cases

```javascript
{
  id: 'project-name-slug',
  title: 'Project Title',
  client: 'Client Name',
  industry: 'Industry',
  date: 'Month Year',
  image: '/images/portfolio/project-image.jpg',
  overview: {
    challenge: 'What problem did the client face?',
    objective: 'What did they want to achieve?',
    approach: 'How did we approach the solution?'
  },
  solution: {
    description: 'Detailed description of the solution we implemented.',
    keyFeatures: [
      'Key feature or component 1',
      'Key feature or component 2',
      'Key feature or component 3',
      'Key feature or component 4'
    ],
    technologies: [
      { name: 'Technology 1', icon: 'Monitor', color: 'blue' },
      { name: 'Technology 2', icon: 'Zap', color: 'purple' },
      { name: 'Technology 3', icon: 'Database', color: 'green' }
    ]
  },
  results: {
    summary: 'Overall impact and success of the project.',
    metrics: [
      { label: 'Key Metric 1', value: '150%', icon: 'TrendingUp', color: 'green' },
      { label: 'Key Metric 2', value: '2x', icon: 'Users', color: 'blue' },
      { label: 'Key Metric 3', value: '85%', icon: 'Target', color: 'purple' }
    ],
    additionalOutcomes: [
      'Additional positive outcome 1',
      'Additional positive outcome 2',
      'Additional positive outcome 3'
    ]
  },
  testimonial: {
    quote: 'Client testimonial goes here. Keep it authentic and specific.',
    author: 'Client Name',
    position: 'Job Title, Company Name'
  },
  categoryServices: ['relevant-category-slug'],
  specificServices: ['specific-service-slug-1', 'specific-service-slug-2']
}
```

## Available Icons (from Lucide React)

Common icons used in portfolio cases:
- **General**: `Monitor`, `Smartphone`, `Tablet`, `Globe`, `Package`
- **Technology**: `Code`, `Database`, `Server`, `Cloud`, `Cpu`, `Zap`
- **Business**: `TrendingUp`, `Users`, `Target`, `DollarSign`, `ShoppingCart`
- **Communication**: `MessageSquare`, `Mail`, `Phone`, `Share2`
- **Social Media**: `Facebook`, `Twitter`, `Instagram`, `Linkedin`
- **E-commerce**: `ShoppingBag`, `CreditCard`, `Truck`, `Gift`
- **Analytics**: `BarChart`, `PieChart`, `Activity`, `Award`

Full list: https://lucide.dev/icons/

## Available Colors

Tailwind color classes used in the portfolio:
- `blue` - Primary brand color
- `green` - Success, growth metrics
- `purple` - Premium, technology
- `orange` - Energy, marketing
- `red` - Important alerts (use sparingly)
- `indigo` - Professional, corporate
- `pink` - Creative, design
- `teal` - Innovation, digital

## Checklist for Complete Cases

When creating a new case study, ensure you have:

- [ ] Unique ID (URL-safe, lowercase with hyphens)
- [ ] Client-approved title and description
- [ ] High-quality project image (recommended: 1200x800px)
- [ ] Challenge, objective, and approach written
- [ ] Solution description and 3-5 key features
- [ ] 3-5 relevant technologies with appropriate icons
- [ ] Results summary with 3-4 quantifiable metrics
- [ ] 2-3 additional outcomes
- [ ] Client testimonial (with approval)
- [ ] Correct service category slugs
- [ ] Correct specific service slugs
- [ ] All text proofread and client-approved
- [ ] Image optimized for web
- [ ] Case tested in browser (?case=your-id)
- [ ] Mobile responsiveness checked
- [ ] Links to services working correctly
- [ ] SEO metadata reviewed

## Important Notes

1. **IDs must be unique** - No two cases can have the same ID
2. **Images should be optimized** - Keep file sizes reasonable for web performance
3. **Metrics should be accurate** - Only use real, verifiable results
4. **Client approval is essential** - Get written permission for testimonials and data
5. **Service slugs must match** - Reference actual service slugs from `services.js`
6. **Keep descriptions concise** - Focus on impact and outcomes, not technical details
7. **Use consistent tone** - Professional but accessible language
8. **Test thoroughly** - Check all links, images, and layouts before publishing

## Adding a New Case

1. Open `src/data/portfolioCases.js`
2. Copy the template above
3. Fill in all required information
4. Add the new case object to the `portfolioCases` array
5. Save the file
6. Test by navigating to `/portfolio?case=your-new-id`
7. Verify all sections display correctly
8. Check mobile responsiveness
9. Validate all service links work

## Service Category Slugs

Current available categories (from `services.js`):
- `webshop-development`
- `market-channel-optimization-services`
- `ecommerce-solutions`
- `ai-solution-package`

## Common Service Slugs

Reference these when linking cases to specific services:
- `shopify-development`, `woocommerce-solutions`, `magento-store-setup`
- `seo-optimization`, `social-media-marketing`, `email-marketing`
- `payment-gateway-integration`, `inventory-management-systems`
- `ai-chatbot-development`, `predictive-analytics-tools`

For complete list, see `src/data/services.js`

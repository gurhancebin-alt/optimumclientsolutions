# Content Guide for Service Pages

This guide explains how to fill in all the placeholder content in your new multi-level service structure. All placeholders are marked with `[PLACEHOLDER_NAME]` format.

## Table of Contents
1. [Overview of Structure](#overview-of-structure)
2. [Level 1: Category Overview Page](#level-1-category-overview-page)
3. [Level 2: Service Collection Pages](#level-2-service-collection-pages)
4. [Level 3: Specific Service Detail Pages](#level-3-specific-service-detail-pages)
5. [How to Add New Pages](#how-to-add-new-pages)
6. [Icons and Images](#icons-and-images)

---

## Overview of Structure

Your service pages follow a 3-level hierarchy:

```
Level 1: services/index.html
  └─ Category Overview (Website Development, Marketing Channels, eCommerce)
      
Level 2: services/[category-name]/index.html
  └─ Service Collection (List of specific services in this category)
      
Level 3: services/[category-name]/[service-name].html
  └─ Service Detail (Complete information about one specific service)
```

### Example Navigation Flow:
1. User visits `services/index.html` → sees 3 category cards
2. Clicks "Website Development" → goes to `services/website-development/index.html`
3. Sees list of services (Shopify, WooCommerce, Custom Web Apps)
4. Clicks "Shopify" → goes to `services/website-development/shopify.html`
5. Reads complete details, pricing, FAQ about Shopify services

---

## Level 1: Category Overview Page

**File:** `services/index.html`

This is your main services landing page that shows all service categories.

### Placeholders to Fill:

#### Hero Section
- `[HERO_DESCRIPTION]` - Brief overview of all your services
  - **Example:** "We deliver comprehensive digital solutions spanning website development, multi-channel marketing strategies, and complete eCommerce implementations. Our expert team transforms your business vision into measurable results."
  - **Recommended length:** 2-3 sentences

#### Category Introduction
- `[INTRO_TEXT]` - Introduction to your service categories
  - **Example:** "Our services are organized into specialized categories, each designed to address specific business challenges and growth opportunities."
  - **Recommended length:** 1-2 sentences

#### For Each Category Card (3 provided: Website Development, Marketing Channels, eCommerce Solutions):

1. **Category Description**
   - `[CATEGORY_DESCRIPTION]`
   - **Example for Website Development:** "From custom web applications to eCommerce platforms, we build responsive, high-performance websites that drive business growth. Our development team specializes in modern frameworks and proven platforms like Shopify and WooCommerce."
   - **Recommended length:** 2-3 sentences

2. **Key Features** (3 per category)
   - `[KEY_FEATURE_1]`, `[KEY_FEATURE_2]`, `[KEY_FEATURE_3]`
   - **Example for Website Development:**
     - Feature 1: "Shopify eCommerce Solutions"
     - Feature 2: "WooCommerce Development"
     - Feature 3: "Custom Web Applications"
   - **Recommended:** Keep brief, 3-7 words each

#### Call-to-Action Section
- `[CTA_HEADING]` - Encouraging heading
  - **Example:** "Ready to Transform Your Business?"
  - **Recommended length:** 3-7 words

- `[CTA_DESCRIPTION]` - Brief call-to-action text
  - **Example:** "Let's discuss how our services can help you achieve your business goals. Contact us today for a free consultation."
  - **Recommended length:** 1-2 sentences

### How to Add More Categories:

1. Find the comment in `services/index.html` that says "Add more category cards as needed"
2. Copy one of the existing category card blocks (from `<div class="col-lg-4...>` to `</div>`)
3. Update these elements:
   - **aos-delay value:** Increment by 100 (300, 400, 500, etc.)
   - **SVG icon:** Find new icons at https://icons.getbootstrap.com/
   - **h3 heading:** Your new category name
   - **All placeholders:** Replace with your content
   - **href in button:** Match your new folder name (e.g., `href="digital-consulting/"`)
4. Create the corresponding folder: `services/your-category-name/`
5. Copy `services/website-development/index.html` to your new folder and customize

---

## Level 2: Service Collection Pages

**Template File:** `services/website-development/index.html` (use as template)

These pages show all services within a specific category.

### Placeholders to Fill:

#### Meta Tags (in `<head>`)
- `[META_DESCRIPTION]` - SEO description
  - **Example:** "Professional website development services including Shopify, WooCommerce, and custom web applications. Expert solutions for businesses of all sizes."
  - **Recommended length:** 150-160 characters
  - **Important:** Keep within character limit for Google search results

- `[KEYWORDS]` - Comma-separated keywords
  - **Example:** "website development, shopify, woocommerce, web design, ecommerce, custom websites"
  - **Recommended:** 5-10 relevant keywords

- `[CATEGORY_NAME]` - Appears in multiple places (title, breadcrumb, headings)
  - **Example:** "Website Development"
  - **Usage:** Will appear in `<title>`, breadcrumb navigation, and h1 heading

#### Breadcrumb Navigation
- `[CATEGORY_NAME]` - Same as above
  - **Appears in:** Navigation breadcrumb trail
  - **Example path:** Home > Services > Website Development

#### Hero Section
- `[CATEGORY_NAME]` - Repeat for consistency
- `[HERO_DESCRIPTION]` - Compelling category introduction
  - **Example:** "Transform your online presence with professional website development services tailored to your business needs. We specialize in eCommerce platforms, custom web applications, and responsive design that converts visitors into customers."
  - **Recommended length:** 2-3 sentences with strong value proposition

#### Overview Section
- `[OVERVIEW_HEADING]` - Section heading
  - **Example:** "Comprehensive Website Development Services"
  - **Recommended length:** 3-7 words

- `[OVERVIEW_TEXT]` - Detailed category description
  - **Example:** "Our website development approach combines cutting-edge technology with proven design principles to create digital experiences that engage users and drive conversions. We work closely with each client to understand their unique requirements, delivering custom solutions that scale with business growth. From initial concept through launch and beyond, our team provides ongoing support to ensure your website continues to perform at its best."
  - **Recommended length:** 3-4 sentences explaining approach and benefits

#### Services Introduction
- `[SERVICES_INTRO]` - Brief introduction to service list below
  - **Example:** "Choose from our range of specialized website development services designed to meet diverse business needs."
  - **Recommended length:** 1-2 sentences

#### For Each Service Card (3 provided in template):

1. **Service Name**
   - `[SERVICE_1_NAME]`, `[SERVICE_2_NAME]`, `[SERVICE_3_NAME]`
   - **Example:** "Shopify eCommerce Development"
   - **Recommended:** Clear, specific service name

2. **Service Description**
   - `[SERVICE_1_DESCRIPTION]`, `[SERVICE_2_DESCRIPTION]`, `[SERVICE_3_DESCRIPTION]`
   - **Example for Shopify:** "Launch your online store with Shopify's powerful eCommerce platform. We handle everything from theme customization and app integration to payment setup and inventory management, ensuring your store is ready to sell from day one."
   - **Recommended length:** 2-3 sentences

3. **Features List** (3 per service)
   - `[FEATURE_1]`, `[FEATURE_2]`, `[FEATURE_3]`
   - **Example for Shopify:**
     - "Custom theme design & development"
     - "Third-party app integration"
     - "Payment gateway configuration"
   - **Recommended:** Short phrases, 3-7 words

4. **Link to Detail Page**
   - `[service-1-slug].html` - Filename for the detail page
   - **Example:** `href="shopify.html"` or `href="woocommerce.html"`
   - **Important:** Must match the actual HTML filename you create

#### Why Choose Us Section

1. **Why Heading**
   - `[WHY_HEADING]`
   - **Example:** "Why Choose Us for Website Development?"
   - **Recommended:** Include category name for context

2. **Why Introduction**
   - `[WHY_INTRO]`
   - **Example:** "Our website development team brings years of experience and a proven track record of successful launches across multiple industries and platforms."
   - **Recommended length:** 2-3 sentences

3. **Advantages** (3 provided)
   - `[ADVANTAGE_1_TITLE]`, `[ADVANTAGE_1_DESCRIPTION]`
   - `[ADVANTAGE_2_TITLE]`, `[ADVANTAGE_2_DESCRIPTION]`
   - `[ADVANTAGE_3_TITLE]`, `[ADVANTAGE_3_DESCRIPTION]`
   - **Example:**
     - Title: "Expert Development Team"
     - Description: "Certified developers with deep expertise in modern web technologies"
   - **Recommended:** Short title (2-4 words), brief description (1 sentence)

4. **Statistics Box**
   - `[STATS_HEADING]` - **Example:** "Our Track Record"
   - **4 Statistics:**
     - `[STAT_1_NUMBER]` + `[STAT_1_LABEL]` - **Example:** "150+" and "Projects Completed"
     - `[STAT_2_NUMBER]` + `[STAT_2_LABEL]` - **Example:** "98%" and "Client Satisfaction"
     - `[STAT_3_NUMBER]` + `[STAT_3_LABEL]` - **Example:** "5+" and "Years Experience"
     - `[STAT_4_NUMBER]` + `[STAT_4_LABEL]` - **Example:** "24/7" and "Support Available"
   - **Recommended:** Use real data if available, keep labels concise

#### Call-to-Action Section
- `[CTA_HEADING]` - **Example:** "Ready to Get Started?"
- `[CTA_DESCRIPTION]` - **Example:** "Contact us today to discuss your website development project and receive a free consultation."
- **Recommended length:** 1-2 sentences

---

## Level 3: Specific Service Detail Pages

**Template File:** `services/website-development/shopify.html` (use as template)

These pages provide complete details about one specific service.

### Placeholders to Fill:

#### Meta Tags
- `[META_DESCRIPTION]` - SEO description for this specific service
  - **Example:** "Professional Shopify development services including theme customization, app integration, and store setup. Launch your eCommerce store with expert support."
  - **Recommended length:** 150-160 characters

- `[KEYWORDS]` - Service-specific keywords
  - **Example:** "shopify development, shopify store, ecommerce, shopify theme, shopify apps"
  - **Recommended:** 5-10 keywords

- `[SERVICE_NAME]` - Specific service name
  - **Example:** "Shopify Development"
  - **Usage:** Appears in title, breadcrumbs, and headings throughout page

- `[CATEGORY_NAME]` - Parent category
  - **Example:** "Website Development"
  - **Usage:** Appears in breadcrumb and title

#### Breadcrumb Navigation
The template has 4 breadcrumb levels:
- Home → Services → [CATEGORY_NAME] → [SERVICE_NAME]
- **Example:** Home → Services → Website Development → Shopify Development

#### Hero Section
- `[SERVICE_NAME]` - Repeat for h1 heading
- `[HERO_TAGLINE]` - One-sentence value proposition
  - **Example:** "Launch and grow your online store with professional Shopify development tailored to your brand and business goals."
  - **Recommended:** Single compelling sentence highlighting unique value

#### Service Overview Section

1. **Overview Heading**
   - `[OVERVIEW_HEADING]`
   - **Example:** "What is Shopify Development?"
   - **Recommended:** Frame as a question or statement

2. **Overview Paragraphs**
   - `[OVERVIEW_PARAGRAPH_1]` - What the service is
     - **Example:** "Shopify development encompasses the complete setup, customization, and optimization of your Shopify eCommerce store. From selecting and customizing the perfect theme to integrating essential apps and payment gateways, we handle every technical aspect of launching your online business. Our Shopify experts ensure your store not only looks professional but also provides seamless shopping experiences that convert browsers into buyers."
     - **Recommended length:** 3-4 sentences

   - `[OVERVIEW_PARAGRAPH_2]` - How you deliver it
     - **Example:** "We follow a proven development process that begins with understanding your business goals and target audience. Our team then designs and develops a custom Shopify solution that reflects your brand identity while incorporating best practices for usability, performance, and conversion optimization."
     - **Recommended length:** 2-3 sentences

3. **Image Placeholder**
   - `[IMAGE_PLACEHOLDER]` - Description of what image to add
   - **Example:** "Add Shopify development process diagram or sample store screenshot here"
   - **Recommended:** Replace the placeholder SVG with an actual image showing your work or service process

#### Key Features Section

- `[FEATURES_INTRO]` - Introduction to features
  - **Example:** "Our Shopify development service includes everything you need to launch and manage a successful online store."
  - **Recommended length:** 1-2 sentences

- **6 Features Provided** (each has title + description):
  - `[FEATURE_1_TITLE]` - **Example:** "Custom Theme Design"
  - `[FEATURE_1_DESCRIPTION]` - **Example:** "We create unique, on-brand Shopify themes that set your store apart from competitors. Every design element is optimized for user experience and conversion, ensuring visitors can easily find and purchase products."
  - **Recommended:** Concise title (2-4 words), detailed description (2-3 sentences)
  
  - **Pattern repeats for Features 2-6**
  - **Examples of other feature titles:**
    - "App Integration & Setup"
    - "Secure Payment Processing"
    - "Mobile-Responsive Design"
    - "SEO Optimization"
    - "Performance Tuning"

#### Process Section

- `[PROCESS_INTRO]` - Introduction to your workflow
  - **Example:** "We follow a structured 4-step process to ensure smooth project delivery and exceptional results."
  - **Recommended length:** 1 sentence

- **4 Steps Provided** (each has title + description):
  - `[STEP_1_TITLE]` - **Example:** "Discovery & Planning"
  - `[STEP_1_DESCRIPTION]` - **Example:** "We meet to discuss your business goals, target audience, and feature requirements. Together we create a detailed project roadmap."
  - **Recommended:** Short title (2-3 words), brief description (2 sentences)
  
  - **Example additional steps:**
    - Step 2: "Design & Development" → "Our team creates mockups and develops your custom Shopify store..."
    - Step 3: "Testing & Review" → "We thoroughly test all functionality and gather your feedback..."
    - Step 4: "Launch & Support" → "After final approval, we launch your store and provide ongoing support..."

#### Pricing/Packages Section (Optional)

- `[PACKAGES_INTRO]` - Introduction to pricing
  - **Example:** "Choose the package that best fits your business needs and budget."
  - **Recommended length:** 1 sentence

- **3 Packages Provided** (each has name, price, period, description, and includes list):
  
  **Package 1 (Basic):**
  - `[PACKAGE_1_NAME]` - **Example:** "Starter Package"
  - `[PRICE_1]` - **Example:** "$2,500"
  - `[PRICE_PERIOD_1]` - **Example:** "one-time"
  - `[PACKAGE_1_DESCRIPTION]` - **Example:** "Perfect for small businesses launching their first online store with essential features."
  - `[INCLUDE_1]` through `[INCLUDE_4]` - **Example:** "Shopify store setup", "Theme customization", "Up to 50 products", "Basic app integration"

  **Package 2 (Professional - Marked as "Most Popular"):**
  - Similar structure with 5 includes instead of 4
  - **Example price:** "$5,000"
  - **Example includes:** Everything in Starter + "Custom design elements", "Advanced app integration"

  **Package 3 (Enterprise):**
  - Similar structure with 6 includes
  - **Example price:** "Custom" or "$10,000+"
  - **Example includes:** Everything in Professional + "Dedicated account manager", "Priority support"

**Note:** If you don't want to show pricing publicly, you can delete this entire section or replace prices with "Contact Us" for all packages.

#### FAQ Section (Optional)

- `[FAQ_INTRO]` - Introduction to FAQs
  - **Example:** "Find answers to common questions about our Shopify development services."
  - **Recommended length:** 1 sentence

- **4 FAQs Provided** (each has question + answer):
  - `[FAQ_1_QUESTION]` - **Example:** "How long does it take to build a Shopify store?"
  - `[FAQ_1_ANSWER]` - **Example:** "Typically, a complete Shopify store takes 4-6 weeks from project start to launch, depending on complexity and the number of revisions. Rush projects can be accommodated with adjusted timelines and pricing."
  - **Recommended:** Clear question, detailed answer (2-3 sentences)
  
  - **Example additional questions:**
    - "Do I need to purchase a Shopify subscription separately?"
    - "Can I update products and content myself after launch?"
    - "What ongoing maintenance is required?"

**Note:** The first FAQ is set to be open by default (class="collapse show"). Others start collapsed.

#### Final Call-to-Action Section

- `[CTA_HEADING]` - **Example:** "Ready to Get Started with Shopify Development?"
- `[CTA_DESCRIPTION]` - **Example:** "Contact us today to schedule a free consultation and discover how we can help you launch a successful online store."
- **Recommended length:** 1-2 sentences with clear next step

---

## How to Add New Pages

### Adding a New Service Category:

1. **Create the folder structure:**
   ```
   services/
   └── your-new-category/
       ├── index.html
       └── (service detail pages will go here)
   ```

2. **Copy the template:**
   - Copy `services/website-development/index.html`
   - Paste to `services/your-new-category/index.html`

3. **Update the template:**
   - Replace `[CATEGORY_NAME]` throughout
   - Update all service cards with your specific services
   - Update meta tags and descriptions
   - Update SVG icons for services

4. **Add to main services page:**
   - Open `services/index.html`
   - Add a new category card (follow instructions in the HTML comments)
   - Link to your new `services/your-new-category/` folder

### Adding a New Service to Existing Category:

1. **Add service card to category page:**
   - Open `services/[category-name]/index.html`
   - Find the "Services Grid" section
   - Copy one of the existing service cards
   - Update all placeholders with your new service info
   - Update the link: `href="your-service-name.html"`

2. **Create the detail page:**
   - Copy `services/website-development/shopify.html`
   - Paste to `services/[category-name]/your-service-name.html`
   - Fill in all placeholders with your service details

3. **Test navigation:**
   - Ensure clicking the service card navigates to your new detail page
   - Verify breadcrumbs work correctly
   - Check that all "Contact Us" links point to `../../contact.html`

---

## Icons and Images

### Bootstrap Icons

All templates use Bootstrap Icons for consistency. Find icons at:
**https://icons.getbootstrap.com/**

To replace an icon:

1. Find your desired icon on Bootstrap Icons website
2. Click the icon to view its code
3. Copy the entire `<svg>` element
4. Replace the existing `<svg>` in your HTML file

**Current icons used:**
- **Laptop Code** - Website Development category
- **Megaphone** - Marketing Channels category
- **Cart Check** - eCommerce Solutions category
- **Check Circle** - Features and benefits
- **Speedometer** - Performance-related features
- **Shield Check** - Security features
- **Graph Up Arrow** - Growth and analytics
- **People Fill** - Team and collaboration
- **Lightbulb Fill** - Innovation and ideas

### Adding Images

Currently, templates use placeholder images. To add real images:

1. **Service Overview Image:**
   - Location: Level 3 detail pages, overview section
   - Replace the placeholder div with: `<img src="../../images/services/your-image.jpg" alt="Service Name" class="img-fluid rounded">`
   - Recommended size: 800x600px or 16:9 aspect ratio

2. **Create images folder:**
   ```
   images/
   └── services/
       ├── shopify-overview.jpg
       ├── marketing-dashboard.jpg
       └── (other service images)
   ```

3. **Update the `<img>` tag:**
   ```html
   <img src="../../images/services/shopify-overview.jpg" 
        alt="Shopify Development Process" 
        class="img-fluid rounded">
   ```

---

## Tips for Writing Effective Content

### 1. **Be Specific**
❌ "We offer website services"
✅ "We build custom Shopify stores with theme customization, app integration, and payment setup"

### 2. **Focus on Benefits**
❌ "Our team uses the latest technology"
✅ "Our modern tech stack ensures your website loads in under 2 seconds, improving conversion rates by up to 30%"

### 3. **Use Active Voice**
❌ "Solutions are provided by our team"
✅ "Our team delivers custom solutions"

### 4. **Include Social Proof**
- Add real statistics when available
- Mention years of experience
- Reference number of completed projects
- Include client satisfaction rates

### 5. **Clear Call-to-Actions**
- Always tell visitors what to do next
- Use action verbs: "Get Started", "Contact Us", "Schedule Consultation"
- Make it easy to take the next step

### 6. **SEO Best Practices**
- Include target keywords naturally in headings and content
- Write unique meta descriptions for each page
- Use descriptive alt text for images
- Keep URLs clean and keyword-rich

---

## Checklist Before Publishing

- [ ] All `[PLACEHOLDER]` text has been replaced
- [ ] Meta descriptions are under 160 characters
- [ ] All internal links work correctly (test breadcrumbs, buttons, navigation)
- [ ] Services navigation in main menu points to `services/index.html`
- [ ] Contact page is linked correctly from all CTA sections
- [ ] Icons are appropriate for each service
- [ ] Content is proofread for spelling and grammar
- [ ] Real statistics are used (or placeholders removed if not available)
- [ ] FAQ answers are helpful and complete
- [ ] Pricing information is accurate (or section removed if not ready)
- [ ] Mobile responsiveness has been tested

---

## Need Help?

If you encounter issues while filling in content:

1. **Broken Navigation:** Check that all href paths are correct relative to the file location
   - From Level 1: `href="website-development/"`
   - From Level 2: `href="../../contact.html"` or `href="shopify.html"`
   - From Level 3: `href="../../contact.html"` or `href="../index.html"`

2. **Missing Styles:** Ensure Bootstrap 5 CDN links are in the `<head>` section

3. **Icons Not Showing:** Verify the entire `<svg>` element is copied, including viewBox attributes

4. **Need More Services:** Simply duplicate existing service cards and update the content

---

## Example: Complete Shopify Service Page

Here's what a fully filled-out Shopify page might look like (abbreviated):

```html
<title>Shopify Development - Website Development - Optimum Client Solutions</title>
<meta name="description" content="Professional Shopify development services including theme customization, app integration, and store setup. Launch your eCommerce store with expert support.">

<h1>Shopify Development</h1>
<p>Launch and grow your online store with professional Shopify development tailored to your brand and business goals.</p>

<h2>What is Shopify Development?</h2>
<p>Shopify development encompasses the complete setup, customization, and optimization of your Shopify eCommerce store...</p>

<h3>Custom Theme Design</h3>
<p>We create unique, on-brand Shopify themes that set your store apart from competitors...</p>
```

This complete example shows natural, professional content that informs visitors and encourages them to take action.

---

**Last Updated:** January 2026
**Version:** 1.0

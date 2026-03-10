# Project Blueprint: Optimum Client Solutions
**Focus:** B2B E-commerce Consultancy for SMEs and Startups
**Aesthetic:** Minimalistic & Technical (High-performance, clean typography)
**Tech Stack:** React, Tailwind CSS, Lucide-React (icons)
**Primary Conversion:** Meeting Booking Form

---

## 1. Global Design System Rules
- **Typography:** Sans-serif (Inter, Geist, or SF Pro). 
- **Palette:** Neutral (White/Black/Slate) with a single technical accent (e.g., #0066FF).
- **Components:** Functional, bento-box layouts, and skeleton loaders for a "high-tech" feel.

---

## 2. Page Outlines & Deep Research Prompts

### Page: Home
- **Sections:** Hero (Mission-led), Social Proof (Tech Stack), Services (Overview), Portfolio (Mock Results), CTA.
- **Deep Research Prompt:** > Act as a senior React developer and UX architect. Research a 'minimalistic but technical' UI strategy for a B2B consultancy Home Page. Provide a step-by-step design breakdown focused on conversion for SMEs. Output the React component architecture using Tailwind CSS, including a high-performance Hero section and a dynamic placeholder grid for social proof.

### Page: Service
- **Categories:** 1. Webshop Development (Shopify, WooCommerce, etc.)
  2. AI & Automations (SEO, APIs, Product Import)
  3. Analysis & Research (Market, Competitor, SWOT)
- **Deep Research Prompt:** > Research the optimal way to display technical B2B service data in React. We need to showcase 3 categories with 4 items each. Suggest UI patterns like 'Bento grids' or 'Technical Accordions'. Provide React code that renders these categories dynamically from a JSON array and explain the UX logic for technical readability.

### Page: Portfolio
- **Focus:** 2-3 High-impact placeholders (Retail, Tech, Niche).
- **Deep Research Prompt:** > Research how to design a B2B portfolio for a new consultancy using placeholder data. How can we use wireframe aesthetics and mock ROI metrics to establish authority? Provide React code for a filterable grid with skeleton loading states to maintain a "technical" performance feel.

### Page: About
- **Focus:** Methodology, The Tech Stack, and Mission.
- **Deep Research Prompt:** > Research the design of a 'Mission & Methodology' page for technical B2B services. Provide a step-by-step breakdown of how to visualize a consultancy's tech stack (React, Shopify, AI APIs). Output React code for a clean 'Core Values' grid and a responsive team profile section.

### Page: Research Lab
- **Focus:** Content Hub for technical e-commerce insights.
- **Deep Research Prompt:** > Research the architecture of a technical content hub for an e-commerce consultancy. Explain the UX of a 'Lab' feel versus a 'Blog' feel. Provide React code for a fast, client-side search and category filter for technical articles, and explain how to handle SEO for content-heavy pages in React.

### Page: Contact (Meeting Focus)
- **Focus:** Qualifying form + Calendar integration.
- **Deep Research Prompt:** > Research high-converting B2B meeting-request forms. How do we qualify SME leads (URL, Revenue, Challenge) without adding friction? Provide React code using React Hook Form and Zod for validation. Explain how to integrate a scheduling API (Calendly/Cal.com) into a minimalistic React interface.

---

## 3. Legal Framework (React-Ready)
- **Privacy Policy:** Data collection (Names, Emails, IPs) for GDPR compliance.
- **Terms & Conditions:** Service agreements, B2B payment terms, and liability limits.
- **Cookie Policy:** Focus on technical/analytical cookies.
- **Refund Policy:** Specific B2B service cancellation rules (Consulting/Dev).

---

## 4. Next Steps for Developer
1. **Execute Home Page Prompt:** Paste the prompt into Gemini Deep Research to get the exact Tailwind classes and component structure.
2. **Setup JSON Data:** Create a `services.json` file based on the Service Page requirements.
3. **Route the Legal Pages:** Use the `LegalLayout` component for all four legal sub-routes.

##  example react-router setup for legal pages:
import React from 'react';

// 1. Data Structure for all Legal Content
const legalContent = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "March 10, 2026",
    sections: [
      { h: "1. Introduction", p: "Optimum Client Solutions respects your privacy. This policy explains how we collect and safeguard your information." },
      { h: "2. Data Collection", p: "We collect names, emails, IP addresses, and project requirements provided via our contact forms." },
      { h: "3. Usage", p: "Data is used solely to provide consultancy services and improve site performance." }
    ]
  },
  terms: {
    title: "Terms and Conditions",
    lastUpdated: "March 10, 2026",
    sections: [
      { h: "1. Acceptance", p: "By using our services, you agree to these legally binding terms." },
      { h: "2. Payments", p: "Invoices are due within 14 days. Late payments may incur B2B interest charges." },
      { h: "3. Liability", p: "We are not liable for indirect damages or lost profits arising from our technical recommendations." }
    ]
  },
  // Add Cookie and Refund data here similarly...
};

// 2. Reusable Legal Component
const LegalPage = ({ type }) => {
  const content = legalContent[type];

  if (!content) return <div>Page not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 font-sans text-slate-800">
      <header className="border-b border-slate-200 pb-8 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
          {content.title}
        </h1>
        <p className="text-sm text-slate-500 uppercase tracking-widest">
          Effective Date: {content.lastUpdated}
        </p>
      </header>

      <main className="space-y-12">
        {content.sections.map((section, index) => (
          <section key={index} className="group">
            <h2 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
              {section.h}
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              {section.p}
            </p>
          </section>
        ))}
      </main>

      <footer className="mt-20 pt-8 border-t border-slate-100 text-sm text-slate-400">
        <p>© 2026 Optimum Client Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LegalPage;
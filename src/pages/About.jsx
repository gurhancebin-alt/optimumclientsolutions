import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, Database, TrendingUp, Target, CheckCircle2, 
  ChevronDown, Rocket, BarChart3 
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GlassCard from '../components/ui/GlassCard';
import FrameworkAccordion from '../components/about/FrameworkAccordion';
import ToolCard from '../components/about/ToolCard';
import TestimonialCard from '../components/about/TestimonialCard';
import StoryBlock from '../components/about/StoryBlock';
import FAQAccordion from '../components/ui/FAQAccordion';
import {
  founderProfile,
  founderStory,
  philosophyPrinciples,
  frameworkSteps,
  toolsStack,
  targetAudiences,
  testimonials,
  aboutFAQ
} from '../data/about';

const philosophyIcons = {
  Database,
  TrendingUp,
  Target
};

const audienceIcons = {
  Rocket,
  TrendingUp
};

export default function About() {
  const { t } = useTranslation('about');

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta 
          name="description" 
          content={t('meta.description')} 
        />
        <meta name="keywords" content="e-commerce data analyst, marketplace intelligence, product validation research, e-commerce strategy consultant, data-driven optimization, Amazon FBA analyst, Shopify strategist" />
        <link rel="canonical" href="https://optimumclientsolutions.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="E-commerce Data Analyst & Strategist | Gürhan" />
        <meta property="og:description" content="Data-driven e-commerce strategy backed by analytics, marketplace intelligence, and structured research." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://optimumclientsolutions.com/about" />

        {/* Structured Data - Person Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": founderProfile.name,
            "jobTitle": founderProfile.title,
            "description": founderProfile.subtitle,
            "knowsAbout": ["E-commerce Analytics", "Marketplace Intelligence", "Product Research", "Data-Driven Strategy"],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "E-commerce Data Analyst",
              "occupationalCategory": "15-2041.00"
            }
          })}
        </script>

        {/* Structured Data - FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": aboutFAQ.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      {/* SECTION 1: HERO - Strategic Positioning */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <AnimatedSection>
              <div className="space-y-6">
                {/* Micro Proof Line */}
                <div className="flex flex-wrap gap-3">
                  {founderProfile.microProof.map((badge, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 glass text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/30"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {founderProfile.tagline}
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                  {founderProfile.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {founderProfile.ctas.map((cta, index) => (
                    <Link
                      key={index}
                      to={cta.link}
                      className={`inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                        cta.type === 'primary'
                          ? 'bg-cyan-600 text-white hover:bg-cyan-500 shadow-lg shadow-cyan-500/20'
                          : 'glass text-slate-200 hover:bg-white/10 border border-white/20'
                      }`}
                    >
                      <span>{cta.text}</span>
                      <ArrowRight size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Visual Element */}
            <AnimatedSection delay={200}>
              <div className="relative aspect-square rounded-2xl glass overflow-hidden">
                {/* Abstract Data Visualization */}
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full" style={{
                      backgroundImage: `
                        linear-gradient(to right, rgb(6 182 212) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(6 182 212) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px'
                    }} />
                  </div>

                  {/* Animated Data Points */}
                  <div className="relative z-10 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>

                    {/* Center Data Badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="glass px-8 py-6 rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                        <div className="text-4xl font-bold text-white text-center mb-2">
                          {founderProfile.name}
                        </div>
                        <div className="text-sm text-cyan-400 font-semibold text-center">
                          CEO/Founder
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2: ORIGIN STORY - 3 Phases */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('sections.story.title')}
              </h2>
              <p className="text-lg text-slate-300">
                {t('sections.story.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* Story Blocks */}
          <div className="space-y-24">
            {founderStory.map((story, index) => (
              <AnimatedSection key={story.phase} delay={index * 100}>
                <StoryBlock
                  phase={story.phase}
                  title={story.title}
                  content={story.content}
                  reverse={index % 2 === 1}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PHILOSOPHY - 3 Core Principles */}
      <section className="py-20 px-6 relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('sections.philosophy.title')}
              </h2>
              <p className="text-lg text-slate-300">
                {t('sections.philosophy.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* Philosophy Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPrinciples.map((principle, index) => {
              const Icon = philosophyIcons[principle.icon];
              return (
                <AnimatedSection key={principle.icon} delay={index * 100}>
                  <GlassCard className="h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center mb-6">
                      <Icon size={32} className="text-cyan-400" />
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {principle.principle}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 mb-6">
                      {principle.description}
                    </p>

                    {/* Metrics (only on #3) */}
                    {principle.metrics && (
                      <div className="pt-6 border-t border-white/10 space-y-3">
                        {principle.metrics.map((m, mIndex) => (
                          <div key={mIndex} className="flex items-center space-x-2">
                            <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0" />
                            <span className="text-sm text-slate-300">
                              <span className="font-semibold text-white">{m.metric}</span> — {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: FRAMEWORK - 5-Step Process */}
      <section id="framework" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('sections.framework.title')}
              </h2>
              <p className="text-lg text-slate-300">
                {t('sections.framework.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <FrameworkAccordion steps={frameworkSteps} />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: TOOLS STACK - 8 Key Tools */}
      <section id="tools" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('sections.tools.title')}
              </h2>
              <p className="text-lg text-slate-300">
                {t('sections.tools.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsStack.map((tool, index) => (
              <AnimatedSection key={tool.name} delay={index * 50}>
                <ToolCard tool={tool} />
              </AnimatedSection>
            ))}
          </div>

          {/* Note */}
          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <p className="text-slate-400 text-sm">
                {t('sections.tools.note')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6: WHO I HELP - Target Audiences */}
      <section className="py-20 px-6 relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('sections.audience.title')}
              </h2>
              <p className="text-lg text-slate-300">
                {t('sections.audience.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* Audience Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => {
              const Icon = audienceIcons[audience.icon];
              return (
                <AnimatedSection key={audience.segment} delay={index * 100}>
                  <GlassCard className="h-full">
                    {/* Icon & Headline */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center">
                        <Icon size={28} className="text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {audience.segment}
                        </h3>
                        <p className="text-cyan-400 text-sm font-semibold">
                          {audience.description}
                        </p>
                      </div>
                    </div>

                    {/* Needs */}
                    <div className="space-y-3 mb-6">
                      {audience.needs.map((need, nIndex) => (
                        <div key={nIndex} className="flex items-start space-x-3">
                          <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{need}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to={audience.cta.link}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold mt-4 transition-colors"
                    >
                      <span>{audience.cta.text}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS - Analytical Focus */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('sections.testimonials.title')}
              </h2>
              <p className="text-lg text-slate-300">
                {t('sections.testimonials.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <TestimonialCard testimonial={testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA - Positioning Statement */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-indigo-600/20 to-purple-600/20" />
              <div className="absolute inset-0 glass" />

              {/* Content */}
              <div className="relative z-10 p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t('sections.cta.title')} <br />
                  <span className="text-cyan-400">{t('sections.cta.highlight')}</span>
                </h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  {t('sections.cta.description')}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/intelligence"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <span>{t('sections.cta.primary')}</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 glass text-slate-200 hover:bg-white/10 border border-white/20 rounded-xl font-semibold transition-all"
                  >
                    <span>{t('sections.cta.secondary')}</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 9: FAQ - Using FAQAccordion Component */}
      <FAQAccordion
        faqs={aboutFAQ}
        title={t('sections.faq.title')}
        subtitle={t('sections.faq.subtitle')}
        sectionId="faq"
      />
    </>
  );
}

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  Terminal, Cpu, BarChart3, ShoppingBag, ArrowRight,
  CheckCircle2, Globe, Zap, Layers, Search,
  Code, TrendingUp, Grid, ShoppingCart, Palette,
  Plug, Share2, Target, Mail, Users, Store,
  PackageSearch, Lightbulb, RefreshCw, AlertCircle,
  TrendingDown, Play
} from 'lucide-react';
import GradientText from '../components/ui/GradientText';
import ArticleCard from '../components/blog/ArticleCard';
import FAQAccordion from '../components/ui/FAQAccordion';
import { getFeaturedArticles } from '../data/blog';
import { homeFAQ } from '../data/faq';

export default function Home() {
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Optimum Client Solutions | AI Automation & B2B Lead Gen</title>
        <meta name="description" content="Cut manual work by 70%, reduce operational costs by 30-50%, and reach 50%+ profit margins with intelligent AI automations – without hiring more staff." />
      </Helmet>
    
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-mono text-cyan-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>{t('badge')}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            {t('hero.line1')}<br />
            {t('hero.line2')} <GradientText>{t('hero.highlight')}</GradientText>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-12">{t('hero.subtitle')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2">
              <span>{t('hero.primaryCta')}</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
              {t('hero.secondaryCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Trusted by Industry Leaders</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
            {/* Current logos */}
            <img src="/images/logo/Google_Logo_0.svg" alt="Google" className="h-6 md:h-8 lg:h-9 filter brightness-0 invert" />
            <img src="/images/logo/OpenAI-white-wordmark.svg" alt="OpenAI" className="h-6 md:h-8 lg:h-9" />
            <img src="/images/logo/shopify_logo_darkbg.svg" alt="Shopify" className="h-6 md:h-8 lg:h-9" />
            <img src="/images/logo/squarespace-logo-horizontal-white.svg" alt="Squarespace" className="h-6 md:h-8 lg:h-9" />
            <img src="/images/logo/Klaviyo_idRlQDy2Ux_0.svg" alt="Klaviyo" className="h-6 md:h-8 lg:h-9 filter brightness-0 invert" />
            <img src="/images/logo/TIKTOK_PRIMARY_LOGO_WHITE.svg" alt="TikTok" className="h-6 md:h-8 lg:h-9" />
            <img src="/images/logo/Woo_logo_color.svg" alt="WooCommerce" className="h-6 md:h-8 lg:h-9" />
            
            {/* Placeholder for new logos - add these files to /images/logo/ directory */}
            {/* <img src="/images/logo/meta-business-suite.svg" alt="Meta Business Suite" className="h-6 md:h-8 lg:h-9" /> */}
            {/* <img src="/images/logo/facebook.svg" alt="Facebook" className="h-6 md:h-8 lg:h-9" /> */}
            {/* <img src="/images/logo/instagram.svg" alt="Instagram" className="h-6 md:h-8 lg:h-9" /> */}
            {/* <img src="/images/logo/helium10.svg" alt="Helium10" className="h-6 md:h-8 lg:h-9" /> */}
            {/* <img src="/images/logo/trustpilot.svg" alt="Trustpilot" className="h-6 md:h-8 lg:h-9" /> */}
            {/* <img src="/images/logo/google-ads.svg" alt="Google Ads" className="h-6 md:h-8 lg:h-9" /> */}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('value.heading')}<br />
            <GradientText>{t('value.subheading')}</GradientText>
          </h2>
          <p className="text-slate-400 mb-16">{t('value.description')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {t('value.profitBoost')}%
              </div>
              <div className="text-slate-400 mb-2">{t('value.profitLabel')}</div>
            </div>
            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {t('value.timeSaved')}<span className="text-3xl">{t('value.timeUnit')}</span>
              </div>
              <div className="text-slate-400 mb-2">{t('value.timeLabel')}</div>
              <div className="text-slate-500 text-sm">{t('value.timeUnitLabel')}</div>
            </div>
            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <div className="text-2xl font-bold text-white mb-2">{t('value.growth')}</div>
              <div className="text-slate-400">{t('value.growthDesc')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('services.heading')}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{t('services.description')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {t('services.items', { returnObjects: true }).map((service, idx) => {
              const IconComponent = {
                Zap,
                Layers,
                BarChart3,
                Cpu,
                Target
              }[service.icon] || Zap;
              
              return (
                <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all group">
                  <IconComponent className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link 
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>{t('services.viewAll')}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('process.heading')}</h2>
            <p className="text-cyan-400 text-lg">{t('process.subheading')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t('process.steps', { returnObjects: true }).map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full">
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pains */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">{t('problems.heading')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t('problems.subheading')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t('problems.items', { returnObjects: true }).map((problem, idx) => {
              const IconComponent = {
                Users,
                TrendingDown,
                RefreshCw,
                AlertCircle
              }[problem.icon] || AlertCircle;
              
              return (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
                    <IconComponent className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
                  <p className="text-slate-400 text-sm">{problem.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {t('stats.items', { returnObjects: true }).map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-xl text-white mb-8">{t('stats.heading')}</p>
            <Link 
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>{t('stats.cta')}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">E-Commerce Intelligence Insights</h2>
              <p className="text-slate-400">Data-driven analysis for Amazon, marketplaces & Shopify sellers</p>
            </div>
            <Link to="/blog" className="text-cyan-400 text-sm font-bold flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          {/* Featured Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFeaturedArticles(6).map((article) => (
              <ArticleCard key={article.slug} article={article} layout="grid" />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-12 text-center">
            <Link 
              to="/blog"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>View All Intelligence Articles</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion
        faqs={homeFAQ}
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        sectionId="faq"
        className="bg-slate-900/30"
      />

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('contact.heading')}</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto">{t('contact.description')}</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-2 px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>{t('contact.cta')}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

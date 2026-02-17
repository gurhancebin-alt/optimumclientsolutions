import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  Terminal, Cpu, BarChart3, ShoppingBag, ArrowRight,
  CheckCircle2, Globe, Zap, Layers, Search,
  Code, TrendingUp, Grid, ShoppingCart, Palette,
  Plug, Share2, Target, Mail, Users, Store,
  PackageSearch, Lightbulb
} from 'lucide-react';
import GradientText from '../components/ui/GradientText';
import ArticleCard from '../components/blog/ArticleCard';
import FAQAccordion from '../components/ui/FAQAccordion';
import { getFeaturedArticles } from '../data/blog';
import { homeFAQ } from '../data/faq';

export default function Home() {
  const [activeService, setActiveService] = useState('automate');
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Optimum Client Solutions - E-Commerce Intelligence</title>
        <meta name="description" content="Next-gen e-commerce intelligence. AI automation and deep market intelligence for the modern entrepreneur." />
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
            <Link to="/blog" className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2">
              <span>Explore Our Blog</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
              {t('cta.viewPortfolio', { ns: 'common' })}
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

      {/* Services Dashboard */}
      <section id="services" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-white mb-6">{t('services.heading')}</h2>
              <p className="text-slate-400 mb-8">{t('services.description')}</p>
              <div className="space-y-4">
                {[
                  { id: 'build', icon: <Code />, label: t('services.build.label'), sub: t('services.build.sub') },
                  { id: 'automate', icon: <TrendingUp />, label: t('services.automate.label'), sub: t('services.automate.sub') },
                  { id: 'research', icon: <Search />, label: t('services.research.label'), sub: t('services.research.sub') },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveService(s.id);
                    }}
                    className={`w-full flex items-start space-x-4 p-5 rounded-2xl transition-all border ${
                      activeService === s.id
                        ? 'bg-slate-800 border-cyan-500/50 shadow-xl'
                        : 'border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <div className={activeService === s.id ? 'text-cyan-400' : 'text-slate-500'}>{s.icon}</div>
                    <div className="text-left">
                      <div className="font-bold text-white">{s.label}</div>
                      <div className="text-xs text-slate-500">{s.sub}</div>
                    </div>
                  </button>
                ))}
                <Link 
                  to="/services"
                  className="w-full flex items-center justify-center space-x-3 p-5 rounded-2xl border border-cyan-500/30 bg-slate-800/30 hover:bg-slate-800 hover:border-cyan-500/50 transition-all group"
                >
                  <Grid className="text-cyan-400 group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-bold text-white">{t('services.viewAll')}</span>
                </Link>
              </div>
            </div>
            <div className="lg:w-2/3 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Terminal size={120} />
              </div>
              
              {/* Build Section */}
              {activeService === 'build' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t('services.build.heading')}</h3>
                  <p className="text-slate-400 mb-6 text-lg">{t('services.build.description')}</p>
                  <Link to="/services/website-development" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold mb-8 transition-colors">
                    <span>{t('services.moreInfo')}</span>
                    <ArrowRight size={16} />
                  </Link>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Link to="/services/website-development/ecommerce-platform-development" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <ShoppingCart className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.build.services.ecommerce.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.build.services.ecommerce.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/website-development/design-ux" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <Palette className="text-indigo-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.build.services.design.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.build.services.design.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/website-development/custom-development-automation" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <Code className="text-green-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.build.services.custom.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.build.services.custom.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/website-development/seo-performance-optimization" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <Zap className="text-yellow-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.build.services.seo.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.build.services.seo.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
              
              {/* Automate Section */}
              {activeService === 'automate' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t('services.automate.heading')}</h3>
                  <p className="text-slate-400 mb-6 text-lg">{t('services.automate.description')}</p>
                  <Link to="/services/market-channel-optimization-services" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold mb-8 transition-colors">
                    <span>{t('services.moreInfo')}</span>
                    <ArrowRight size={16} />
                  </Link>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Link to="/services/market-channel-optimization-services/marketplace-optimization" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <Store className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.automate.services.marketplace.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.automate.services.marketplace.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/market-channel-optimization-services/paid-advertising-optimization" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <Target className="text-red-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.automate.services.advertising.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.automate.services.advertising.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/market-channel-optimization-services/organic-channel-growth" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <TrendingUp className="text-green-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.automate.services.organic.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.automate.services.organic.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/market-channel-optimization-services/channel-intelligence" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <BarChart3 className="text-indigo-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.automate.services.intelligence.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.automate.services.intelligence.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/market-channel-optimization-services/strategic-market-expansion" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <Globe className="text-purple-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.automate.services.expansion.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.automate.services.expansion.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/market-channel-optimization-services/email-sms-automation" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <Mail className="text-blue-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.automate.services.email.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.automate.services.email.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
              
              {/* Research Section */}
              {activeService === 'research' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t('services.research.heading')}</h3>
                  <p className="text-slate-400 mb-6 text-lg">{t('services.research.description')}</p>
                  <Link to="/services/ecommerce-solutions" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold mb-8 transition-colors">
                    <span>{t('services.moreInfo')}</span>
                    <ArrowRight size={16} />
                  </Link>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Link to="/services/ecommerce-solutions/product-supplier-intelligence" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <PackageSearch className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.research.services.product.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.research.services.product.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/ecommerce-solutions/influencer-partnership-sourcing" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <Users className="text-pink-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.research.services.influencer.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.research.services.influencer.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/ecommerce-solutions/keyword-search-intelligence" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <Search className="text-yellow-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.research.services.keyword.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.research.services.keyword.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/ecommerce-solutions/reporting-performance-intelligence" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <BarChart3 className="text-indigo-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.research.services.reporting.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.research.services.reporting.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                    <Link to="/services/ecommerce-solutions/strategic-analysis" className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                      <Lightbulb className="text-orange-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <div className="font-bold text-white mb-2">{t('services.research.services.strategic.title')}</div>
                      <div className="text-xs text-slate-500 space-x-2">
                        {t('services.research.services.strategic.keywords', { returnObjects: true }).map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-slate-700/50 rounded">{keyword}</span>
                        ))}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{t('portfolio.heading')}</h2>
              <p className="text-slate-400">{t('portfolio.description')}</p>
            </div>
            <Link to="/portfolio" className="text-cyan-400 text-sm font-bold flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <span>{t('portfolio.viewAll')}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fashion Phrase - Real Project */}
            <Link 
              to="/portfolio?case=fashion-phrase"
              className="group relative overflow-hidden rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Background Image with White Layer */}
              <div 
                className="absolute inset-0 bg-white"
                style={{
                  backgroundImage: 'url(/images/logo/Fhrase_FL_NB.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/95 group-hover:from-slate-900/90 group-hover:via-slate-900/85 group-hover:to-slate-800/90 transition-all duration-300" />
              
              {/* Status Badge - Top Right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1.5 bg-green-500/20 border border-green-400/30 text-green-400 rounded-full text-xs font-semibold">
                  Active
                </span>
              </div>
              
              {/* Content */}
              <div className="relative p-6 flex flex-col min-h-[500px]">
                {/* Logo */}
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    FP
                  </div>
                </div>
                
                {/* Company Info */}
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Fashion Phrase</h3>
                    <p className="text-slate-400 text-sm">Premium Fashion E-Commerce</p>
                  </div>
                  
                  {/* Region & Industry */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-lg flex items-center space-x-1.5">
                      <Globe size={12} />
                      <span>North America</span>
                    </span>
                    <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-lg">
                      Fashion E-commerce
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    A modern e-commerce platform specializing in curated fashion collections with advanced AI-powered recommendations and seamless checkout experience.
                  </p>
                  
                  {/* USP */}
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                    <Zap size={14} className="text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-semibold">AI-Powered Shopping Experience</span>
                  </div>
                  
                  {/* Services Used */}
                  <div className="space-y-2">
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Services Delivered</p>
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                      <Link 
                        to="/services/website-development"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs rounded-lg hover:bg-cyan-500/20 transition-colors font-semibold"
                      >
                        Website Development
                      </Link>
                      <Link 
                        to="/services/market-channel-optimization-services"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs rounded-lg hover:bg-pink-500/20 transition-colors font-semibold"
                      >
                        Market Optimization
                      </Link>
                      <Link 
                        to="/services/ecommerce-solutions"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded-lg hover:bg-green-500/20 transition-colors font-semibold"
                      >
                        E-commerce Solutions
                      </Link>
                    </div>
                    {/* Specific Services */}
                    <div className="flex flex-wrap gap-2">
                      <Link 
                        to="/services/website-development/ecommerce-platform-development"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        E-Commerce Platform
                      </Link>
                      <Link 
                        to="/services/website-development/design-ux"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        UX/UI Design
                      </Link>
                      <Link 
                        to="/services/website-development/custom-development-automation"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        AI Automation
                      </Link>
                      <Link 
                        to="/services/website-development/custom-development-automation"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        API Integration
                      </Link>
                      <Link 
                        to="/services/market-channel-optimization-services/paid-advertising-optimization"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        Paid Advertising
                      </Link>
                      <Link 
                        to="/services/ecommerce-solutions/product-supplier-intelligence"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        Supplier Sourcing
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Hover CTA */}
                <div className="mt-6 pt-4 border-t border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs">View Full Case Study</span>
                    <ArrowRight size={16} className="text-cyan-400" />
                  </div>
                </div>
              </div>
            </Link>

            {/* TGC Company - Placeholder */}
            <Link 
              to="/portfolio?case=tcg-company"
              className="group relative overflow-hidden rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/95 group-hover:from-slate-900/90 group-hover:via-slate-900/85 group-hover:to-slate-800/90 transition-all duration-300" />
              
              {/* Status Badge - Top Right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1.5 bg-yellow-500/20 border border-yellow-400/30 text-yellow-400 rounded-full text-xs font-semibold">
                  In Development
                </span>
              </div>
              
              {/* Content */}
              <div className="relative p-6 flex flex-col min-h-[500px]">
                {/* Logo */}
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    TCG
                  </div>
                </div>
                
                {/* Company Info */}
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">TCG Company</h3>
                    <p className="text-slate-400 text-sm">Business Consulting & Strategy</p>
                  </div>
                  
                  {/* Region & Industry */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-lg flex items-center space-x-1.5">
                      <Globe size={12} />
                      <span>Europe</span>
                    </span>
                    <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-lg">
                      Consulting Services
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Professional consulting firm providing strategic business solutions and market intelligence for enterprise clients across multiple industries.
                  </p>
                  
                  {/* USP */}
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
                    <Target size={14} className="text-indigo-400" />
                    <span className="text-indigo-400 text-xs font-semibold">Data-Driven Strategy</span>
                  </div>
                  
                  {/* Services Used */}
                  <div className="space-y-2">
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Services Delivered</p>
                    <div className="flex flex-wrap gap-2">
                      <Link 
                        to="/services/website-development"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs rounded-lg hover:bg-cyan-500/20 transition-colors"
                      >
                        Website Development
                      </Link>
                      <Link 
                        to="/services/ecommerce-solutions/reporting-performance-intelligence"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs rounded-lg hover:bg-indigo-500/20 transition-colors"
                      >
                        Performance Analytics
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Hover CTA */}
                <div className="mt-6 pt-4 border-t border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs">View Full Case Study</span>
                    <ArrowRight size={16} className="text-cyan-400" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Next Phase Soccer - Placeholder */}
            <Link 
              to="/portfolio?case=next-phase-soccer"
              className="group relative overflow-hidden rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 bg-gradient-to-br from-green-900/20 to-cyan-900/20"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/95 group-hover:from-slate-900/90 group-hover:via-slate-900/85 group-hover:to-slate-800/90 transition-all duration-300" />
              
              {/* Status Badge - Top Right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1.5 bg-cyan-500/20 border border-cyan-400/30 text-cyan-400 rounded-full text-xs font-semibold">
                  Planning Phase
                </span>
              </div>
              
              {/* Content */}
              <div className="relative p-6 flex flex-col min-h-[500px]">
                {/* Logo */}
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                    NPS
                  </div>
                </div>
                
                {/* Company Info */}
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Next Phase Soccer</h3>
                    <p className="text-slate-400 text-sm">Sports Training & Development</p>
                  </div>
                  
                  {/* Region & Industry */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-lg flex items-center space-x-1.5">
                      <Globe size={12} />
                      <span>North America</span>
                    </span>
                    <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-lg">
                      Sports & Training
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Elite soccer training academy offering personalized development programs, performance tracking, and pathway to professional leagues.
                  </p>
                  
                  {/* USP */}
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <Users size={14} className="text-green-400" />
                    <span className="text-green-400 text-xs font-semibold">Personalized Training Plans</span>
                  </div>
                  
                  {/* Services Used */}
                  <div className="space-y-2">
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Planned Services</p>
                    <div className="flex flex-wrap gap-2">
                      <Link 
                        to="/services/website-development"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded-lg hover:bg-green-500/20 transition-colors"
                      >
                        Platform Development
                      </Link>
                      <Link 
                        to="/services/market-channel-optimization-services/organic-channel-growth"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs rounded-lg hover:bg-cyan-500/20 transition-colors"
                      >
                        SEO & Content
                      </Link>
                      <Link 
                        to="/services/ecommerce-solutions/influencer-partnership-sourcing"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs rounded-lg hover:bg-blue-500/20 transition-colors"
                      >
                        Influencer Marketing
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Hover CTA */}
                <div className="mt-6 pt-4 border-t border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs">View Full Case Study</span>
                    <ArrowRight size={16} className="text-cyan-400" />
                  </div>
                </div>
              </div>
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

      {/* Intelligence Hub Preview */}
      <section id="intelligence" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Strategic Intelligence Hub</h2>
              <p className="text-slate-400 max-w-2xl">
                Data-backed market analysis delivered in professional PDF reports. We don't deliver advice — we deliver structured intelligence.
              </p>
            </div>
            <Link
              to="/intelligence"
              className="hidden md:inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 border border-slate-800 text-white rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all"
            >
              <span>Explore Intelligence Hub</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Market Intelligence Card */}
            <Link
              to="/intelligence"
              className="group p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/30 hover:border-cyan-500/50 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Market Intelligence</h3>
              <p className="text-slate-400 text-sm mb-4">
                Demand analysis, pricing spread, and entry feasibility assessment with competitive saturation metrics.
              </p>
              <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold">
                <span>View Sample Report</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Keyword & Search Intelligence Card */}
            <Link
              to="/intelligence"
              className="group p-6 bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 border border-indigo-500/30 hover:border-indigo-500/50 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-indigo-400 mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Search Intelligence</h3>
              <p className="text-slate-400 text-sm mb-4">
                Search volume clustering, metadata optimization, and keyword gap analysis with intent mapping.
              </p>
              <div className="flex items-center space-x-2 text-indigo-400 text-sm font-semibold">
                <span>Explore Framework</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Competitive Landscape Card */}
            <Link
              to="/intelligence"
              className="group p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 hover:border-purple-500/50 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-purple-400 mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Competitive Analysis</h3>
              <p className="text-slate-400 text-sm mb-4">
                Revenue modeling, positioning matrix, and comprehensive SWOT mapping with market share insights.
              </p>
              <div className="flex items-center space-x-2 text-purple-400 text-sm font-semibold">
                <span>See Data Outputs</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden text-center">
            <Link
              to="/intelligence"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 border border-slate-800 text-white rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all"
            >
              <span>Explore Intelligence Hub</span>
              <ArrowRight size={16} />
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

      {/* Blog CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border border-cyan-500/20 rounded-[2rem] p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated with Industry Insights</h2>
          <p className="text-slate-400 mb-10">Discover the latest trends, tips, and strategies in e-commerce and digital solutions through our expert blog content.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog" className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all">
              Explore Blog Posts
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

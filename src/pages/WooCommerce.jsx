import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  ShoppingCart,
  Code2,
  Shield,
  Zap,
  DollarSign,
  Boxes,
  TrendingUp,
  Puzzle,
  ArrowRight,
  CheckCircle2,
  Building2,
  RefreshCw,
  Store,
  Download
} from 'lucide-react';
import GradientText from '../components/ui/GradientText';
import FAQAccordion from '../components/ui/FAQAccordion';
import {
  wooCommerceCapabilities,
  wooCommerceBenefits,
  technicalFeatures,
  wooCommerceStats,
  useCases,
  wooCommerceFAQ
} from '../data/woocommerce';

const iconMap = {
  Code2,
  Shield,
  Zap,
  DollarSign,
  Boxes,
  TrendingUp,
  Puzzle,
  Building2,
  RefreshCw,
  Store,
  Download
};

export default function WooCommerce() {
  const { t } = useTranslation('woocommerce');
  const [activeTab, setActiveTab] = useState('development');

  const activeCapability = wooCommerceCapabilities.find(cap => cap.id === activeTab);

  return (
    <>
      <Helmet>
        <title>WooCommerce Development & Optimization | Optimum Client Solutions</title>
        <meta 
          name="description" 
          content="Expert WooCommerce consultancy for custom e-commerce solutions. WordPress development, performance optimization, security hardening, and enterprise integrations."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-slate-200">
        <main className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          
          {/* HERO SECTION */}
          <section className="mb-32">
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full mb-8">
              <ShoppingCart className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400 font-mono">
                WooCommerce Specialist
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 max-w-4xl leading-tight">
              Custom WooCommerce <GradientText>Solutions</GradientText> Built for Scale.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-12">
              We build high-performance WooCommerce stores that combine unlimited flexibility with 
              enterprise-grade security and scalability. From startup to enterprise, we deliver 
              cost-effective e-commerce without compromise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-400 transition-all shadow-lg shadow-purple-500/20 group"
              >
                <span>Request Store Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-slate-700 text-white font-bold rounded-xl hover:border-purple-500 hover:text-purple-400 transition-all"
              >
                View Capabilities
              </button>
            </div>
          </section>

          {/* CAPABILITIES GRID - Bento Style */}
          <section id="capabilities" className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400 mb-4 font-mono">
                  Core Capabilities
                </h2>
                <p className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Complete e-commerce control.
                </p>
              </div>
              <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl">
                {wooCommerceCapabilities.map((cap) => (
                  <button
                    key={cap.id}
                    onClick={() => setActiveTab(cap.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === cap.id 
                        ? 'bg-slate-800 text-white shadow-sm' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {cap.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Active Capability Detail */}
              <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12">
                {activeCapability && (
                  <div key={activeCapability.id} className="animate-in fade-in duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border-2 border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-400 mb-8">
                      {iconMap[activeCapability.icon] && 
                        (() => {
                          const Icon = iconMap[activeCapability.icon];
                          return <Icon className="w-8 h-8" />;
                        })()
                      }
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-6">{activeCapability.title}</h3>
                    <p className="text-lg text-slate-400 mb-10 leading-relaxed italic">
                      {activeCapability.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {activeCapability.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technical Stats Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-8">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 text-white flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Performance Metrics</h4>
                    <p className="text-slate-400 text-sm mb-8">
                      Enterprise-grade optimization
                    </p>
                  </div>
                  <div className="space-y-6">
                    {wooCommerceStats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-slate-400">{stat.label}</div>
                          <div className="text-xs text-slate-500">{stat.description}</div>
                        </div>
                        <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-8">
                  <Boxes className="w-8 h-8 text-purple-400 mb-6" />
                  <h4 className="text-xl font-bold mb-2 text-white">Unlimited Flexibility</h4>
                  <p className="text-slate-400 text-sm">
                    Open-source foundation means complete control over functionality, design, and 
                    integrations without platform limitations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* USE CASES SECTION */}
          <section className="py-24 border-t border-slate-900">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Built for Your <GradientText>Business Model</GradientText>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                WooCommerce adapts to any e-commerce scenario
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, idx) => {
                const Icon = iconMap[useCase.icon] || Store;
                return (
                  <div 
                    key={idx}
                    className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                      <Icon className="w-7 h-7 text-purple-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{useCase.title}</h4>
                    <p className="text-slate-400">{useCase.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* TECHNICAL FEATURES */}
          <section className="py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technical Stack
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Modern tools and technologies for optimal performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technicalFeatures.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-8 bg-slate-900 border border-slate-800 rounded-2xl"
                >
                  <h4 className="text-lg font-bold text-white mb-6 pb-4 border-b border-slate-800">
                    {feature.category}
                  </h4>
                  <ul className="space-y-3">
                    {feature.tools.map((tool, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-400 text-sm">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* BENEFITS GRID */}
          <section className="py-24 border-t border-slate-900">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose WooCommerce
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                The benefits of open-source e-commerce
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wooCommerceBenefits.map((benefit, idx) => {
                const Icon = iconMap[benefit.icon] || Puzzle;
                return (
                  <div 
                    key={idx}
                    className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-sm text-slate-400">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* FAQ SECTION */}
          <FAQAccordion
            faqs={wooCommerceFAQ}
            title="WooCommerce Development FAQ"
            subtitle="Common questions about our WooCommerce services"
            sectionId="woocommerce-faq"
            className="bg-slate-900/30"
          />

          {/* FINAL CTA */}
          <section className="py-24">
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                  Ready to Build Your <br />WooCommerce Store?
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
                  Get complete control over your e-commerce without platform limitations.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-10 py-5 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-400 transition-all shadow-lg shadow-purple-500/20"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              {/* Abstract Tech Background */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-400 rounded-full"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

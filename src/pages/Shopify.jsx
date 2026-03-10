import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  ShoppingBag,
  Zap,
  Globe,
  Search,
  Code2,
  Settings,
  BarChart3,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import GradientText from '../components/ui/GradientText';
import FAQAccordion from '../components/ui/FAQAccordion';
import {
  shopifyCapabilities,
  seoChecklist,
  technicalStats,
  shopifyBenefits,
  shopifyFAQ
} from '../data/shopify';

const iconMap = {
  Code2,
  Zap,
  Globe,
  Settings,
  BarChart3
};

export default function Shopify() {
  const { t } = useTranslation('shopify');
  const [activeTab, setActiveTab] = useState('development');

  const activeCapability = shopifyCapabilities.find(cap => cap.id === activeTab);

  return (
    <>
      <Helmet>
        <title>Shopify Development & Optimization | Optimum Client Solutions</title>
        <meta 
          name="description" 
          content="Expert Shopify consultancy focusing on low-code solutions, SEO, and global scaling for SMEs. Custom development with Liquid, API integrations, and performance optimization."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-slate-200">
        <main className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          
          {/* HERO SECTION */}
          <section className="mb-32">
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full mb-8">
              <ShoppingBag className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400 font-mono">
                Shopify Specialist
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 max-w-4xl leading-tight">
              Tailor-made Shopify <GradientText>Architectures</GradientText> for Scaling Brands.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-12">
              We bridge the gap between complex Shopify development and operational simplicity. By leveraging 
              the Shopify dev environment with low-code efficiency, we deliver premium, SEO-optimized stores 
              without the technical debt.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 group"
              >
                <span>Book a Shopify Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-slate-700 text-white font-bold rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all"
              >
                View Capabilities
              </button>
            </div>
          </section>

          {/* CAPABILITIES GRID - Bento Style */}
          <section id="capabilities" className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4 font-mono">
                  Core Capabilities
                </h2>
                <p className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Everything your store needs to grow.
                </p>
              </div>
              <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl">
                {shopifyCapabilities.map((cap) => (
                  <button
                    key={cap.id}
                    onClick={() => setActiveTab(cap.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === cap.id 
                        ? 'bg-slate-800 text-white shadow-sm' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {cap.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Active Capability Detail */}
              <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12">
                {activeCapability && (
                  <div key={activeCapability.id} className="animate-in fade-in duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border-2 border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 mb-8">
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
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
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
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                      <Settings className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Technical Excellence</h4>
                    <p className="text-slate-400 text-sm mb-8">
                      Built on Shopify best practices
                    </p>
                  </div>
                  <div className="space-y-6">
                    {technicalStats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-slate-400">{stat.label}</div>
                          <div className="text-xs text-slate-500">{stat.description}</div>
                        </div>
                        <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-8">
                  <BarChart3 className="w-8 h-8 text-cyan-400 mb-6" />
                  <h4 className="text-xl font-bold mb-2 text-white">Conversion Driven</h4>
                  <p className="text-slate-400 text-sm">
                    Every element is optimized for performance, user experience, and measurable business results. 
                    No bloat, just intelligent design.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SEO CHECKLIST SECTION */}
          <section className="py-24 border-t border-slate-900">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
                  The 5-Step Technical <GradientText>SEO Strategy</GradientText>
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Following the highest standards for indexability and discoverability. Your Shopify store 
                  will be built for humans and understood by machines.
                </p>
                <div className="space-y-6">
                  {seoChecklist.map((step, i) => (
                    <div key={i} className="flex items-start space-x-4 group">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                        <span className="text-sm font-bold text-cyan-400">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{step.title}</h4>
                        <p className="text-sm text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex items-center justify-center">
                  <div className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border-2 border-cyan-500/30 mb-6">
                      <Search className="w-12 h-12 text-cyan-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">SEO-First</h4>
                    <p className="text-slate-400 text-sm">
                      Every page engineered for maximum search visibility and performance
                    </p>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 shadow-2xl p-6 rounded-2xl max-w-[280px]">
                  <div className="flex items-center space-x-3 mb-2">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-bold text-white">Global Ready</span>
                  </div>
                  <p className="text-sm text-slate-400">
                    "GEO-targeting increased client reach by 45% within 3 months."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BENEFITS GRID */}
          <section className="py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Shopify Expertise
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Combining technical excellence with business understanding
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shopifyBenefits.map((benefit, idx) => {
                const Icon = iconMap[benefit.icon] || Settings;
                return (
                  <div 
                    key={idx}
                    className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
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
            faqs={shopifyFAQ}
            title="Shopify Development FAQ"
            subtitle="Common questions about our Shopify services"
            sectionId="shopify-faq"
            className="bg-slate-900/30"
          />

          {/* FINAL CTA */}
          <section className="py-24">
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                  Ready to Optimize Your <br />Shopify Architecture?
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
                  Stop fighting with your theme. Let's build a technical foundation that supports your growth.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-10 py-5 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                >
                  <span>Schedule My Strategy Call</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              {/* Abstract Tech Background */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-400 rounded-full"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

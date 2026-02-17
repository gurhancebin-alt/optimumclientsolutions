import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  FileText, ArrowRight, CheckCircle2, Store, ShoppingBag,
  Globe, TrendingUp, Users, BarChart3, FileCheck, Clock
} from 'lucide-react';
import ReportPreviewCard from '../components/intelligence/ReportPreviewCard';
import FrameworkStep from '../components/intelligence/FrameworkStep';
import ToolCard from '../components/intelligence/ToolCard';
import GradientText from '../components/ui/GradientText';
import FAQAccordion from '../components/ui/FAQAccordion';
import {
  reportTypes,
  analyticsFramework,
  toolsInfrastructure,
  metricsOutputs,
  workflowSteps,
  targetAudiences
} from '../data/intelligence';
import { intelligenceFAQ } from '../data/faq';

const audienceIconMap = {
  Store,
  ShoppingBag,
  Globe,
  TrendingUp,
  Users
};

export default function Intelligence() {
  const [activeFrameworkStep, setActiveFrameworkStep] = useState(1);
  const { t } = useTranslation('intelligence');

  return (
    <>
      <Helmet>
        <title>Strategic Intelligence Hub - Data-Driven Market Reports | Optimum Client Solutions</title>
        <meta 
          name="description" 
          content="Professional e-commerce intelligence reports with structured market analysis, competitive mapping, and opportunity scoring. We deliver intelligence, not advice." 
        />
      </Helmet>

      <div className="min-h-screen pt-20 bg-slate-950">
        {/* SECTION 1: HERO - Two Column */}
        <section className="relative py-20 px-6 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-mono text-cyan-400 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  <span>Strategic Intelligence</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <GradientText>Structured</GradientText> E-commerce<br />Intelligence Reports
                </h1>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Data-backed market analysis delivered in professional PDF reports — including metadata, 
                  search intelligence, competitive mapping, and opportunity scoring.
                </p>

                <p className="text-xl font-semibold text-cyan-400 mb-8 italic">
                  "We don't deliver advice. We deliver structured intelligence."
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services/ecommerce-solutions"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                  >
                    <span>Check our research services</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-slate-700 text-white font-bold rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all"
                  >
                    <span>Check our portfolio</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Right Column - Visual Mockup */}
              <div className="relative">
                {/* Dashboard Visual */}
                <div className="relative p-8 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-sm">
                  {/* Mock Report Preview */}
                  <div className="space-y-4">
                    {/* Header Bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div className="flex items-center space-x-2">
                        <FileText size={20} className="text-cyan-400" />
                        <span className="font-semibold text-white">Intelligence Report</span>
                      </div>
                      <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-md text-xs font-semibold">
                        Premium
                      </div>
                    </div>

                    {/* Mock Chart 1 */}
                    <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                      <div className="text-xs text-slate-500 mb-2">Market Demand Trend</div>
                      <div className="flex items-end space-x-2 h-24">
                        {[40, 65, 52, 78, 85, 92, 88].map((height, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-indigo-500 rounded-t opacity-70 hover:opacity-100 transition-opacity" style={{ height: `${height}%` }}></div>
                        ))}
                      </div>
                    </div>

                    {/* Mock Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                        <div className="text-xs text-slate-500">Search Vol.</div>
                        <div className="text-lg font-bold text-white">147K</div>
                      </div>
                      <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                        <div className="text-xs text-slate-500">Competition</div>
                        <div className="text-lg font-bold text-amber-400">Medium</div>
                      </div>
                      <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                        <div className="text-xs text-slate-500">Opp. Score</div>
                        <div className="text-lg font-bold text-green-400">8.4/10</div>
                      </div>
                    </div>

                    {/* Mock Heatmap */}
                    <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                      <div className="text-xs text-slate-500 mb-3">Competitive Heatmap</div>
                      <div className="grid grid-cols-5 gap-2">
                        {Array.from({ length: 15 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`aspect-square rounded ${
                              i % 3 === 0 ? 'bg-green-500/30' : i % 2 === 0 ? 'bg-amber-500/30' : 'bg-red-500/30'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg shadow-lg">
                    <div className="text-xs text-white font-semibold">PDF Deliverable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT THIS HUB DELIVERS */}
        <section className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What This Hub Delivers
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Digital intelligence products designed for data-driven decision making
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reportTypes.map((report) => (
                <ReportPreviewCard key={report.id} reportType={report} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: YOUR ANALYTICS FRAMEWORK */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Intelligence Framework
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                A structured 5-step methodology for comprehensive market analysis
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {analyticsFramework.map((step, index) => (
                <FrameworkStep
                  key={step.id}
                  step={step}
                  isActive={activeFrameworkStep === step.id}
                  isLast={index === analyticsFramework.length - 1}
                  onToggle={() => setActiveFrameworkStep(step.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: TOOLS & DATA INFRASTRUCTURE */}
        <section className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Research Infrastructure & Data Platforms
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Professional-grade tools and platforms powering our intelligence reports
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {toolsInfrastructure.map((tool, index) => (
                <ToolCard key={index} tool={tool} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: METRICS & DATA OUTPUTS */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Reports Contain
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Comprehensive data points and analytical outputs in every deliverable
              </p>
            </div>

            <div className="max-w-5xl mx-auto p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {metricsOutputs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.metric}</h4>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CUSTOM REPORT WORKFLOW */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Custom Report Workflow
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Simple, transparent process from scope definition to delivery
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {workflowSteps.map((step, index) => {
                const Icon = [FileText, BarChart3, TrendingUp, FileCheck][index] || FileText;
                return (
                  <div key={step.id} className="relative">
                    {/* Connecting Arrow */}
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-full w-8 -ml-4 z-0">
                        <ArrowRight size={32} className="text-slate-700" />
                      </div>
                    )}

                    {/* Step Card */}
                    <div className="relative z-10 text-center">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border-2 border-cyan-500/30 mb-4">
                        <div className="text-3xl font-bold text-cyan-400">{step.id}</div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-400 mb-3">{step.description}</p>
                      <div className="inline-flex items-center space-x-1 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full">
                        <Clock size={12} className="text-slate-500" />
                        <span className="text-xs text-slate-500">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timeline Note */}
            <div className="text-center p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
              <p className="text-cyan-400 font-semibold">
                <Clock size={16} className="inline mr-2" />
                Typical delivery timeframe: 5-7 business days
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: WHO THIS IS FOR */}
        <section className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Who This Is For
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Intelligence reports designed for various e-commerce stakeholders
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {targetAudiences.map((audience) => {
                const Icon = audienceIconMap[audience.icon] || Users;
                return (
                  <div 
                    key={audience.id}
                    className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                      <Icon size={28} className="text-cyan-400" />
                    </div>
                    <h4 className="text-white font-bold mb-2">{audience.title}</h4>
                    <p className="text-sm text-slate-400">{audience.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordion
          faqs={intelligenceFAQ}
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
          sectionId="faq"
          className="bg-slate-900/30"
        />

        {/* SECTION 9: FINAL CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 bg-gradient-to-br from-indigo-900/40 to-cyan-900/40 border border-cyan-500/20 rounded-[2rem] text-center overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)',
                }}></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Make Decisions Based on Data,<br />Not Assumptions.
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                  Get structured intelligence that cuts through the noise and delivers actionable market insights.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg"
                  >
                    <FileText size={18} />
                    <span>Request Custom Intelligence Report</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-slate-300 text-white font-bold rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all"
                  >
                    <span>Schedule Discovery Call</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

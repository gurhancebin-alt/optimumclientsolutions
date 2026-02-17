import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Globe, BarChart3, Search, TrendingUp, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import ResearchChart from '../components/charts/ResearchChart';
import { researchData } from '../data/charts';

const serviceIcons = [BarChart3, Search, Truck, TrendingUp];

export default function Research() {
  const [activeTab, setActiveTab] = useState('market');
  const { t } = useTranslation('research');

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <HeroSection title={t('hero.title')} subtitle={t('hero.subtitle')} />

      {/* Charts Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-8">
              <div className="flex space-x-4 mb-8">
                {['market', 'swot', 'supply'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                      activeTab === tab ? 'bg-cyan-500 text-white' : 'bg-slate-900 text-slate-500'
                    }`}
                  >
                    {t(`tabs.${tab}`)}
                  </button>
                ))}
              </div>
              <ResearchChart config={researchData[activeTab]} />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
                <h4 className="text-white font-bold mb-2 flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  <span>{t(`${activeTab}.title`)}</span>
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">{t(`${activeTab}.description`)}</p>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
                <h4 className="text-white font-bold mb-2 flex items-center space-x-2">
                  <Globe size={16} className="text-indigo-400" />
                  <span>{t('sourcing.title')}</span>
                </h4>
                <p className="text-sm text-slate-400">{t('sourcing.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('services.heading')}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t('services.items', { returnObjects: true }).map((item, index) => {
              const Icon = serviceIcons[index];
              return (
                <AnimatedSection key={index} delay={index * 100}>
                  <GlassCard hover className="h-full">
                    <Icon size={24} className="text-cyan-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border border-cyan-500/20 rounded-[2rem] p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t('cta.heading')}</h2>
          <p className="text-slate-400 mb-10">{t('cta.description')}</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all"
          >
            {t('cta.requestReport', { ns: 'common' })}
          </Link>
        </div>
      </section>
    </>
  );
}

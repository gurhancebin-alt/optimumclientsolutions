import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import * as Icons from 'lucide-react';
import { getCategoryBySlug, getServiceBySlug } from '../data/services';
import Breadcrumb from '../components/ui/Breadcrumb';
import HeroSection from '../components/ui/HeroSection';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import FAQAccordion from '../components/ui/FAQAccordion';
import { getFAQByPage } from '../data/faq';

const categoryKeys = {
  'website-development': 'webdev',
  'marketing-channels': 'marketing',
  'ecommerce-solutions': 'ecommerce',
};

export default function ServiceItem() {
  const { category, service: serviceSlug } = useParams();
  const { t } = useTranslation('services');
  const [openFaq, setOpenFaq] = useState(null);

  const categoryData = getCategoryBySlug(category);
  const serviceData = getServiceBySlug(category, serviceSlug);

  if (!categoryData || !serviceData) return <Navigate to="/services" replace />;

  const key = categoryKeys[category];
  const serviceTitle = serviceSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const breadcrumbs = [
    { label: t('nav.home', { ns: 'common' }), to: '/' },
    { label: t('hero.title'), to: '/services' },
    { label: t(`categories.${key}.title`), to: `/services/${category}` },
    { label: serviceTitle },
  ];

  return (
    <>
      <Helmet>
        <title>{serviceTitle} - Optimum Client Solutions</title>
      </Helmet>

      <Breadcrumb items={breadcrumbs} />

      <HeroSection title={serviceTitle}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            {t('serviceDetail.getStarted')}
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-slate-900 border border-slate-800 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            {t('serviceDetail.contactUs')}
          </Link>
        </div>
      </HeroSection>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('serviceDetail.features')}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GlassCard hover className="h-full">
                  <CheckCircle2 size={24} className="text-cyan-400 mb-3" />
                  <h4 className="text-white font-bold mb-2">{feature}</h4>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('serviceDetail.process')}</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {serviceData.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold font-mono">{step.step}</span>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-white">{step.titleKey}</h4>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {getFAQByPage(serviceSlug).length > 0 && (
        <FAQAccordion
          faqs={getFAQByPage(serviceSlug)}
          title={t('serviceDetail.faq')}
          subtitle={`Common questions about ${serviceTitle}`}
          sectionId="faq"
        />
      )}

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border border-cyan-500/20 rounded-[2rem] p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t('cta.heading')}</h2>
          <p className="text-slate-400 mb-10">{t('cta.description')}</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all"
          >
            {t('serviceDetail.getStarted')}
          </Link>
        </div>
      </section>
    </>
  );
}

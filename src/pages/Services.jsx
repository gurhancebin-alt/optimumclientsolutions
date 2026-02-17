import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Monitor, Megaphone, ShoppingCart } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import ServiceCard from '../components/ui/ServiceCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import CTASection from '../components/ui/CTASection';
import FAQAccordion from '../components/ui/FAQAccordion';
import { servicesFAQ } from '../data/faq';

const categoryIcons = { webdev: Monitor, marketing: Megaphone, ecommerce: ShoppingCart };
const categorySlugs = { webdev: 'website-development', marketing: 'market-channel-optimization-services', ecommerce: 'ecommerce-solutions' };

export default function Services() {
  const { t } = useTranslation('services');

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <HeroSection title={t('hero.title')} subtitle={t('hero.subtitle')} />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(categoryIcons).map(([key, Icon], index) => (
              <AnimatedSection key={key} delay={index * 100}>
                <ServiceCard
                  icon={Icon}
                  title={t(`categories.${key}.title`)}
                  description={t(`categories.${key}.description`)}
                  features={t(`categories.${key}.features`, { returnObjects: true })}
                  link={`/services/${categorySlugs[key]}`}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={servicesFAQ}
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        sectionId="faq"
        className="bg-slate-900/30"
      />

      <CTASection
        headingKey="cta.heading"
        descriptionKey="cta.description"
        buttonKey="cta.getInTouch"
        ns="services"
      />
    </>
  );
}

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Monitor, Megaphone, ShoppingCart, Bot } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import ServiceCard from '../components/ui/ServiceCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import CTASection from '../components/ui/CTASection';
import FAQAccordion from '../components/ui/FAQAccordion';
import { servicesFAQ } from '../data/faq';
import { serviceCategories } from '../data/services';

// Icon mapping - add new icons here as needed
const iconMap = {
  Monitor,
  Megaphone,
  ShoppingCart,
  Bot,
};

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => {
              const IconComponent = iconMap[category.icon] || Monitor;
              return (
                <AnimatedSection key={category.slug} delay={index * 100}>
                  <ServiceCard
                    icon={IconComponent}
                    title={category.name}
                    description={category.meta?.cardDescription}
                    features={category.services.map(s => s.title).slice(0, 3)}
                    link={`/services/${category.slug}`}
                  />
                </AnimatedSection>
              );
            })}
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
        descriptionKey="not sure what you are looking for? Contact us today to discuss how we can help you achieve your business goals with our expert services."
        buttonKey="Get In Touch"
        ns="services"
      />
    </>
  );
}

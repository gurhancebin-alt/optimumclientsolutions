import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import * as Icons from 'lucide-react';
import { getCategoryBySlug } from '../data/services';
import HeroSection from '../components/ui/HeroSection';
import ServiceCard from '../components/ui/ServiceCard';
import Breadcrumb from '../components/ui/Breadcrumb';
import AnimatedSection from '../components/ui/AnimatedSection';
import CTASection from '../components/ui/CTASection';
import FAQAccordion from '../components/ui/FAQAccordion';
import { websiteDevelopmentFAQ, marketOptimizationFAQ, ecommerceSolutionsFAQ } from '../data/faq';

const categoryKeys = {
  'website-development': 'webdev',
  'market-channel-optimization-services': 'marketing',
  'ecommerce-solutions': 'ecommerce',
};

const categoryFAQs = {
  'website-development': websiteDevelopmentFAQ,
  'market-channel-optimization-services': marketOptimizationFAQ,
  'ecommerce-solutions': ecommerceSolutionsFAQ,
};

const categoryFAQKeys = {
  'website-development': 'websiteDevelopment',
  'market-channel-optimization-services': 'marketOptimization',
  'ecommerce-solutions': 'ecommerceSolutions',
};

export default function ServiceCategory() {
  const { category } = useParams();
  const { t } = useTranslation('services');
  const categoryData = getCategoryBySlug(category);

  // Debug logging
  console.log('ServiceCategory - category param:', category);
  console.log('ServiceCategory - categoryData:', categoryData);

  if (!categoryData) {
    console.log('No category data found, redirecting to /services');
    return <Navigate to="/services" replace />;
  }

  const key = categoryKeys[category];
  console.log('ServiceCategory - key:', key);

  const breadcrumbs = [
    { label: t('nav.home', { ns: 'common' }), to: '/' },
    { label: t('hero.title'), to: '/services' },
    { label: t(`categories.${key}.title`) },
  ];

  return (
    <>
      <Helmet>
        <title>{t(`categories.${key}.title`)} - Optimum Client Solutions</title>
      </Helmet>

      <Breadcrumb items={breadcrumbs} />
      <HeroSection
        title={t(`categories.${key}.title`)}
        subtitle={t(`categories.${key}.description`)}
      />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryData.services.map((service, index) => {
              const Icon = Icons[service.icon] || Icons.Circle;
              const serviceTitle = service.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
              return (
                <AnimatedSection key={service.slug} delay={index * 100}>
                  <ServiceCard
                    icon={Icon}
                    title={serviceTitle}
                    description={`Professional ${serviceTitle.toLowerCase()} services tailored to your business needs.`}
                    features={service.features.slice(0, 3)}
                    link={`/services/${category}/${service.slug}`}
                  />
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={categoryFAQs[category]}
        title={t(`faq.${categoryFAQKeys[category]}.title`)}
        subtitle={t(`faq.${categoryFAQKeys[category]}.subtitle`)}
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

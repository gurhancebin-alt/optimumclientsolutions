import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Mail, Clock, MessageSquare, CheckCircle2, AlertCircle, ExternalLink, MessageCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import HeroSection from '../components/ui/HeroSection';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import FAQAccordion from '../components/ui/FAQAccordion';
import { trackEvent } from '../utils/analytics';
import { CONTACT_EMAIL } from '../utils/constants';
import { contactFAQ } from '../data/faq';
import { serviceCategories, getCategoryName, getServiceName } from '../data/services';
import { getFormId, buildFormUrl } from '../data/forms';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const { t, i18n } = useTranslation('contact');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', serviceCategory: '', serviceChild: '', message: '', newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'serviceCategory') {
      setFormData((prev) => ({ ...prev, [name]: value, serviceChild: '' }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.serviceCategory) {
      setError(true);
      return;
    }

    const currentLanguage = i18n.language?.split('-')[0] || 'en';
    const formId = getFormId(formData.serviceCategory, currentLanguage);
    
    if (!formId) {
      setError(true);
      return;
    }

    setLoading(true);

    // Build Google Form URL
    const googleFormUrl = buildFormUrl(formId, {
      name: formData.name,
      email: formData.email,
      company: formData.company,
    });

    // Get service category display name
    const categoryName = getCategoryName(formData.serviceCategory);

    // Template data for admin email
    const adminEmailData = {
      to_email: 'gurhan.cebin@optimumclientsolutions.com',
      user_name: formData.name,
      user_email: formData.email,
      user_company: formData.company || 'Not provided',
      service_category: categoryName,
      user_message: formData.message,
      submission_date: new Date().toLocaleString(),
    };

    // Template data for user email
    const userEmailData = {
      to_email: formData.email,
      user_name: formData.name,
      user_email: formData.email,
      service_category: categoryName,
      google_form_link: encodeURI(googleFormUrl),
    };

    try {
      // Send admin notification email
      await emailjs.send('service_vg198sf', 'template_tyenzrj', adminEmailData);
      
      // Send user confirmation email
      await emailjs.send('service_vg198sf', 'template_3swnlsc', userEmailData);

      setLoading(false);
      setSubmitted(true);
      trackEvent('Contact', 'form_submitted', formData.serviceCategory);
    } catch (err) {
      console.error('Email error:', err);
      setLoading(false);
      setError(true);
    }
  };

  const inputClasses = "w-full bg-slate-950 border border-slate-800 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-600";

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <HeroSection title={t('hero.title')} subtitle={t('hero.subtitle')} />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{t('intro.heading')}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{t('intro.description')}</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <AnimatedSection>
                  <GlassCard className="text-center py-12">
                    <CheckCircle2 size={48} className="text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{t('success.heading')}</h3>
                    <p className="text-slate-400 mb-4">{t('success.text')}</p>
                    <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
                      <ExternalLink size={14} />
                      {t('success.redirect')}
                    </p>
                  </GlassCard>
                </AnimatedSection>
              ) : error ? (
                <AnimatedSection>
                  <GlassCard className="text-center py-12">
                    <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{t('error.heading')}</h3>
                    <p className="text-slate-400">
                      {t('error.text')}{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-400">{CONTACT_EMAIL}</a>
                    </p>
                  </GlassCard>
                </AnimatedSection>
              ) : (
                <AnimatedSection>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">{t('form.name')} *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={t('form.namePlaceholder')} className={inputClasses} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">{t('form.email')} *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t('form.emailPlaceholder')} className={inputClasses} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t('form.company')}</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder={t('form.companyPlaceholder')} className={inputClasses} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t('form.serviceCategory')} *</label>
                      <select name="serviceCategory" required value={formData.serviceCategory} onChange={handleChange} className={inputClasses}>
                        <option value="">{t('form.categoryPlaceholder')}</option>
                        {serviceCategories.map((category) => (
                          <option key={category.slug} value={category.slug}>
                            {getCategoryName(category.slug)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t('form.serviceChild')}</label>
                      <select name="serviceChild" value={formData.serviceChild} onChange={handleChange} disabled={!formData.serviceCategory} className={`${inputClasses} ${!formData.serviceCategory ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <option value="">{t('form.childPlaceholder')}</option>
                        {formData.serviceCategory && serviceCategories
                          .find((c) => c.slug === formData.serviceCategory)
                          ?.services.map((service) => (
                            <option key={service.slug} value={service.slug}>
                              {getServiceName(service.slug)}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t('form.message')} *</label>
                      <textarea name="message" required rows="6" value={formData.message} onChange={handleChange} placeholder={t('form.messagePlaceholder')} className={inputClasses} />
                    </div>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500" />
                      <span className="text-sm text-slate-400">{t('form.newsletter')}</span>
                    </label>
                    <button type="submit" disabled={loading} className="w-full py-4 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          {t('form.sending')}
                        </>
                      ) : (
                        t('form.submit')
                      )}
                    </button>
                    <p className="text-xs text-slate-500">* {t('form.required')}</p>
                  </form>
                </AnimatedSection>
              )}
            </div>

            <div className="space-y-6">
              <AnimatedSection delay={100}>
                <GlassCard>
                  <h3 className="text-lg font-bold text-white mb-6">{t('info.heading')}</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium">{t('info.email')}</h4>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-cyan-400 hover:text-cyan-300">{CONTACT_EMAIL}</a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium">{t('info.responseTime')}</h4>
                        <p className="text-sm text-slate-400">{t('info.responseValue')}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MessageSquare size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium">{t('info.consultation')}</h4>
                        <p className="text-sm text-slate-400">{t('info.consultationValue')}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MessageCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium">{t('info.whatsapp')}</h4>
                        <a href="https://wa.me/31644791958" target="_blank" rel="noopener noreferrer" className="text-sm text-green-400 hover:text-green-300">0644791958</a>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <GlassCard>
                  <h3 className="text-lg font-bold text-white mb-2">{t('social.heading')}</h3>
                  <p className="text-sm text-slate-400">{t('social.description')}</p>
                </GlassCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion
        faqs={contactFAQ}
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        sectionId="faq"
        className="bg-slate-900/30"
      />
    </>
  );
}

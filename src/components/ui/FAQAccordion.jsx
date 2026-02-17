import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

/**
 * Reusable FAQ Accordion component with JSON-LD schema support
 * @param {Object} props
 * @param {Array} props.faqs - Array of {question, answer} objects
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {string} props.sectionId - Optional section ID for navigation
 * @param {boolean} props.includeSchema - Whether to include JSON-LD schema (default: true)
 * @param {string} props.className - Additional container classes
 */
export default function FAQAccordion({ 
  faqs, 
  title, 
  subtitle, 
  sectionId = 'faq',
  includeSchema = true,
  className = ''
}) {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section id={sectionId} className={`py-24 px-6 ${className}`}>
      {/* JSON-LD Schema for FAQ */}
      {includeSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-slate-300">
                {subtitle}
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <div className="glass rounded-xl overflow-hidden border border-white/10">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-cyan-400 flex-shrink-0 transition-transform ${
                      activeFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFAQ === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 py-4 border-t border-white/10 text-slate-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

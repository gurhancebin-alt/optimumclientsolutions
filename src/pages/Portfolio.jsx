import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Target, TrendingUp, Users } from 'lucide-react';
import { portfolioCases, getCaseById, getNextCase } from '../data/portfolioCases';
import CasePresentation from '../components/portfolio/CasePresentation';
import CaseGrid from '../components/portfolio/CaseGrid';
import FAQAccordion from '../components/ui/FAQAccordion';
import { portfolioFAQ } from '../data/faq';

export default function Portfolio() {
  const { t } = useTranslation('portfolio');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const caseId = searchParams.get('case');
  const [selectedCase, setSelectedCase] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (caseId) {
      const caseData = getCaseById(caseId);
      if (caseData) {
        setSelectedCase(caseData);
      } else {
        // Invalid case ID, redirect to grid
        setSearchParams({});
        setSelectedCase(null);
      }
    } else {
      setSelectedCase(null);
    }
  }, [caseId, setSearchParams]);

  const handleCaseSelect = (caseData) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSearchParams({ case: caseData.id });
      setIsTransitioning(false);
    }, 300);
  };

  const handleCloseCase = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSearchParams({});
      setIsTransitioning(false);
    }, 300);
  };

  const handleNextCase = () => {
    if (selectedCase) {
      const next = getNextCase(selectedCase.id);
      setIsTransitioning(true);
      setTimeout(() => {
        setSearchParams({ case: next.id });
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedCase) {
        if (e.key === 'Escape') {
          handleCloseCase();
        } else if (e.key === 'ArrowRight') {
          handleNextCase();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedCase]);

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <div className="min-h-screen pt-20 bg-slate-950">
        {/* Header */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('hero.title')}</h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            {selectedCase ? (
              /* Layout when case is selected: Grid on left, Presentation on right */
              <div className="flex gap-6">
                {/* Left Side: Vertical Case Grid */}
                <div className="hidden md:block w-80 flex-shrink-0">
                  <CaseGrid
                    cases={portfolioCases}
                    selectedCase={selectedCase}
                    onSelectCase={handleCaseSelect}
                  />
                </div>
                
                {/* Right Side: Case Presentation */}
                <div className="flex-grow">
                  <CasePresentation
                    caseData={selectedCase}
                    onClose={handleCloseCase}
                    onNext={handleNextCase}
                    isTransitioning={isTransitioning}
                  />
                  
                  {/* Mobile: Show case grid below */}
                  <div className="md:hidden mt-8">
                    <CaseGrid
                      cases={portfolioCases}
                      selectedCase={selectedCase}
                      onSelectCase={handleCaseSelect}
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Default Grid Layout */
              <CaseGrid
                cases={portfolioCases}
                selectedCase={selectedCase}
                onSelectCase={handleCaseSelect}
              />
            )}
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('valueProposition.heading')}
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                {t('valueProposition.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                  <Target className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('valueProposition.strategic.title')}</h3>
                <p className="text-slate-400">
                  {t('valueProposition.strategic.description')}
                </p>
              </div>

              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                  <TrendingUp className="text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('valueProposition.growth.title')}</h3>
                <p className="text-slate-400">
                  {t('valueProposition.growth.description')}
                </p>
              </div>

              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-green-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                  <Users className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('valueProposition.partnership.title')}</h3>
                <p className="text-slate-400">
                  {t('valueProposition.partnership.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordion
          faqs={portfolioFAQ}
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
          sectionId="faq"
          className="bg-slate-900/30"
        />

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border border-cyan-500/20 rounded-[2rem] p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">{t('cta.heading')}</h2>
            <p className="text-slate-400 mb-10">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all"
              >
                {t('cta.scheduleAudit')}
              </Link>
              <Link
                to="/services"
                className="inline-block px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all"
              >
                {t('cta.viewServices')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

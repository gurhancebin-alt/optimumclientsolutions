import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { legalContent } from '../data/legal';

export default function LegalPage() {
  const { type } = useParams();
  const content = legalContent[type];

  if (!content) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{content.title} | Optimum Client Solutions</title>
        <meta name="description" content={`${content.title} for Optimum Client Solutions - B2B E-commerce Consultancy`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-slate-950 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="border-b border-slate-800 pb-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {content.title}
            </h1>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-mono">
              Last Updated: {content.lastUpdated}
            </p>
          </header>

          {/* Content Sections */}
          <main className="space-y-12">
            {content.sections.map((section, index) => (
              <section key={index} className="group">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {section.heading}
                </h2>
                <div className="text-base md:text-lg leading-relaxed text-slate-400 whitespace-pre-line">
                  {section.content}
                </div>
              </section>
            ))}
          </main>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-500 text-center">
              © {new Date().getFullYear()} Optimum Client Solutions. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

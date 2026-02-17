import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CTASection({ headingKey, descriptionKey, buttonKey, buttonTo = '/contact', ns = 'common' }) {
  const { t } = useTranslation(ns);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border border-cyan-500/20 rounded-[2rem] p-8 md:p-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">{t(headingKey)}</h2>
        <p className="text-slate-400 mb-10">{t(descriptionKey)}</p>
        <Link
          to={buttonTo}
          className="inline-block px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all"
        >
          {t(buttonKey || 'cta.getInTouch')}
        </Link>
      </div>
    </section>
  );
}

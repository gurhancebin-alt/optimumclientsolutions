import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Zap } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { socialLinks } from '../../data/socialLinks';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap size={16} className="text-cyan-400" />
              <span className="text-sm font-bold tracking-tight text-white font-mono">
                OPTIMUM CLIENT SOLUTIONS
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-slate-500 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.connect')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="text-slate-500 hover:text-cyan-400 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 py-8 text-center">
        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Optimum Client Solutions &middot; {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}

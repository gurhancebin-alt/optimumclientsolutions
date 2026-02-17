import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { navItems } from '../../data/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="block">
          <div className="rounded-[50px] overflow-hidden">
            <img src="/images/logo/OCScolorlogotrans.svg" alt="Optimum Client Solutions" className="h-12 w-auto" />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition-colors ${
                isActive(item.to) ? 'text-cyan-400' : 'hover:text-cyan-400'
              }`}
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <LanguageToggle />
          <Link
            to="/contact"
            className="bg-white text-slate-950 px-5 py-2.5 rounded-full hover:bg-cyan-400 transition-all font-bold"
          >
            {t('nav.freeAudit')}
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={`block py-2 transition-colors ${
                isActive(item.to) ? 'text-cyan-400' : 'hover:text-cyan-400'
              }`}
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pt-2">
            <LanguageToggle />
          </div>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-white text-slate-950 px-5 py-2.5 rounded-full hover:bg-cyan-400 transition-all font-bold"
          >
            {t('nav.freeAudit')}
          </Link>
        </div>
      )}
    </nav>
  );
}

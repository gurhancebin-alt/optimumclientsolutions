import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enServices from './locales/en/services.json';
import enContact from './locales/en/contact.json';
import enPortfolio from './locales/en/portfolio.json';
import enResearch from './locales/en/research.json';
import enIntelligence from './locales/en/intelligence.json';
import enBlog from './locales/en/blog.json';

import nlCommon from './locales/nl/common.json';
import nlHome from './locales/nl/home.json';
import nlAbout from './locales/nl/about.json';
import nlServices from './locales/nl/services.json';
import nlContact from './locales/nl/contact.json';
import nlPortfolio from './locales/nl/portfolio.json';
import nlResearch from './locales/nl/research.json';
import nlIntelligence from './locales/nl/intelligence.json';
import nlBlog from './locales/nl/blog.json';

import trCommon from './locales/tr/common.json';
import trHome from './locales/tr/home.json';
import trAbout from './locales/tr/about.json';
import trServices from './locales/tr/services.json';
import trContact from './locales/tr/contact.json';
import trPortfolio from './locales/tr/portfolio.json';
import trResearch from './locales/tr/research.json';
import trIntelligence from './locales/tr/intelligence.json';
import trBlog from './locales/tr/blog.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, home: enHome, about: enAbout, services: enServices, contact: enContact, portfolio: enPortfolio, research: enResearch, intelligence: enIntelligence, blog: enBlog },
      nl: { common: nlCommon, home: nlHome, about: nlAbout, services: nlServices, contact: nlContact, portfolio: nlPortfolio, research: nlResearch, intelligence: nlIntelligence, blog: nlBlog },
      tr: { common: trCommon, home: trHome, about: trAbout, services: trServices, contact: trContact, portfolio: trPortfolio, research: trResearch, intelligence: trIntelligence, blog: trBlog },
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

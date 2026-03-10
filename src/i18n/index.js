import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enServices from './locales/en/services.json';
import enContact from './locales/en/contact.json';
import enShopify from './locales/en/shopify.json';
import enWooCommerce from './locales/en/woocommerce.json';
import enResearch from './locales/en/research.json';
import enBlog from './locales/en/blog.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, home: enHome, about: enAbout, services: enServices, contact: enContact, shopify: enShopify, woocommerce: enWooCommerce, research: enResearch, blog: enBlog },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: { escapeValue: false },
  });

export default i18n;

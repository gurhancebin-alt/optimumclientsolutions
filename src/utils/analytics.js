import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;

export function initGA() {
  try {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  } catch (e) {
    console.warn('GA4 initialization failed:', e);
  }
}

export function trackPageView(path) {
  try {
    ReactGA.send({ hitType: 'pageview', page: path });
  } catch (e) {
    // silently fail in dev
  }
}

export function trackEvent(category, action, label) {
  try {
    ReactGA.event({ category, action, label });
  } catch (e) {
    // silently fail in dev
  }
}

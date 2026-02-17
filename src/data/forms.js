/**
 * GOOGLE FORMS MAPPING
 * Maps website service categories and languages to specific Google Form IDs
 * Pre-fills forms with user data from the contact form
 */

export const FORM_MAPPING = {
  // Website Development
  'website-development': {
    en: '1FAIpQLSf8kCdbP0ywq7z3W-YasVTy4JaM1-ZZpdxSSAony2ts9bP2NA',
    nl: '1FAIpQLSf8kCdbP0ywq7z3W-YasVTy4JaM1-ZZpdxSSAony2ts9bP2NA',
    tr: '1FAIpQLSdDyhbBN5JOcsSlMFfNZSKL-v3udMryLyBUaoJf8QB-yd99yg',
  },
  // Market Channel Optimization
  'market-channel-optimization-services': {
    en: '1FAIpQLScyr__tRo9YbzeM-FrtxRmn1Abqn45Gbjt5Aj1g7ugJqmNUlQ',
    nl: '1FAIpQLSfIbxEiJi4IiT3pz3l-klQKo4XN3-KvonWt82zHzJoAXH4V3g',
    tr: '1FAIpQLScyaM15uk8kTPYk5fDWtHN0AshqI6gWJh3kbKb1_e-e1uy38g',
  },
  // eCommerce Solutions (Intelligence & Research)
  'ecommerce-solutions': {
    en: '1FAIpQLSdt6MbhLq_hGBGEzSNwzhFX_UemcK3sD8SBd7sAaJsStaJe8g',
    nl: '1FAIpQLSfa7wPnxl1d0eEpi8YmDQjHfrp4cfSCtdkYSYIS0_Bg58kgrg',
    tr: '1FAIpQLScyjJB51rNiKPBxty9ij_p79SIJu14zI7oZrqQAEjzIv4uNsQ',
  },
};

/**
 * ENTRY IDs mapping
 * These are the field identifiers within each Google Form
 * 
 * Verified from URL:
 * entry.1110489352=gurhan&entry.1390106829=phone&entry.2128678610=company&entry.386488100=extra
 */
export const ENTRY_IDS = {
  name: 'entry.1110489352',
  company: 'entry.2128678610',
};

/**
 * Gets the Google Form ID for a given service category and language
 * @param {string} categorySlug - Service category slug (e.g., 'website-development')
 * @param {string} language - Language code (e.g., 'en', 'nl', 'tr')
 * @returns {string|null} - Google Form ID or null if not found
 */
export function getFormId(categorySlug, language) {
  // Handle language variants (e.g., 'en-US' -> 'en')
  const baseLang = language?.split('-')[0] || 'en';
  return FORM_MAPPING[categorySlug]?.[baseLang] || FORM_MAPPING[categorySlug]?.['en'] || null;
}

/**
 * Builds a Google Forms pre-filled URL with user data
 * @param {string} formId - Google Form ID
 * @param {object} userData - User data object with name, company
 * @returns {string} - Complete URL with pre-filled parameters
 */
export function buildFormUrl(formId, userData) {
  if (!formId) {
    console.error('Form ID is required to build Google Forms URL');
    return null;
  }

  const baseUrl = `https://docs.google.com/forms/d/e/${formId}/viewform`;
  const params = new URLSearchParams();

  // Pre-fill available fields (name and company only)
  if (userData.name) params.append(ENTRY_IDS.name, userData.name);
  if (userData.company) params.append(ENTRY_IDS.company, userData.company);

  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

/**
 * Validates that a service category has forms for the given language
 * @param {string} categorySlug - Service category slug
 * @param {string} language - Language code
 * @returns {boolean} - True if form exists for this category/language combination
 */
export function hasForm(categorySlug, language) {
  const baseLang = language?.split('-')[0] || 'en';
  return !!FORM_MAPPING[categorySlug]?.[baseLang];
}

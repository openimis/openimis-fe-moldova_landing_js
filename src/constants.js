export const MODULE_NAME = 'moldovaLanding';

export const ROUTES = {
  LANDING: '/',
  FAQ: '/faq',
  LEGAL_FRAMEWORK: '/legal-framework',
  HOW_TO_USE: '/how-to-use',
  LOGIN: '/login',
};

export const LINKS = [
  { name: 'Route.homePage', path: ROUTES.LANDING },
  { name: 'Route.FAQ', path: ROUTES.FAQ },
  { name: 'Route.legalFramework', path: ROUTES.LEGAL_FRAMEWORK },
  { name: 'Route.howToUse', path: ROUTES.HOW_TO_USE },
];

export const PRIVACY_AND_TERMS_LINKS = [
  { name: 'Route.privacyPolicy', path: '/privacy-policy' },
  { name: 'Route.termsOfUse', path: '/terms-of-use' },
];

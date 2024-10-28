import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const MODULE_NAME = 'moldovaLanding';

export const ROUTES = {
  LANDING: '/',
  TERMS_AND_CONDITIONS: '/terms-and-conditions',
  LOGIN: '/login',
};

export const REDIRECT = {
  CHECK_THE_VOUCHER: 'check-the-voucher',
  ABOUT_THE_PLATFORM: 'about-the-platform',
  ABOUT_THE_PROGRAM: 'about-the-program',
  FAQ: 'frequently-asked-questions',
};

export const LINKS = [
  { name: 'Route.checkTheVoucher', path: REDIRECT.CHECK_THE_VOUCHER },
  { name: 'Route.aboutThePlatform', path: REDIRECT.ABOUT_THE_PLATFORM },
  { name: 'Route.aboutTheProgram', path: REDIRECT.ABOUT_THE_PROGRAM },
  { name: 'Route.FAQ', path: REDIRECT.FAQ },
];

export const FOOTER_LINKS = [
  { name: 'Route.aboutThePlatform', path: REDIRECT.ABOUT_THE_PLATFORM },
  { name: 'Route.FAQ', path: REDIRECT.FAQ },
  { name: 'Route.termsAndConditions', path: ROUTES.TERMS_AND_CONDITIONS, external: true },
];

export const CONTACT_EMAIL = 'secretariat@social.gov.md';

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: FacebookIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: LinkedInIcon,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: YouTubeIcon,
  },
];

// If you want to use additional languages, you can add them to the array.
// They are not fetched from the API, so you need to add them manually.
export const AVAILABLE_LANGUAGES = [
  { name: 'English', code: 'en' },
  { name: 'Română', code: 'ro' },
  { name: 'Русский', code: 'ru' },
];

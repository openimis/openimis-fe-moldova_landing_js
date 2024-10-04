/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */

import LandingPage from './pages/LandingPage';
import messages_en from './translations/en.json';

const DEFAULT_CONFIG = {
  translations: [{ key: 'en', messages: messages_en }],
  'core.PublicPage': LandingPage,
};

export const MoldovaLandingModule = (cfg) => ({ ...DEFAULT_CONFIG, ...cfg });

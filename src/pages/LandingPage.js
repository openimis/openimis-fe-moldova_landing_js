import React from 'react';

import { Button } from '@material-ui/core';

import {
  Helmet,
  useHistory,
  useModulesManager,
  useTranslations,
} from '@openimis/fe-core';
import { MODULE_NAME, ROUTES } from '../constants';

function LandingPage() {
  const modulesManager = useModulesManager();
  const history = useHistory();
  const { formatMessage } = useTranslations(MODULE_NAME, modulesManager);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Helmet title="Landing Page" />
      <h1> There will be a Landing Page soon...</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push(ROUTES.LOGIN)}
      >
        {formatMessage('LoginButtonLabel')}
      </Button>
    </div>
  );
}

export default LandingPage;

import React from 'react';

import { AppBar, Typography } from '@material-ui/core';

import { useModulesManager, useTranslations } from '@openimis/fe-core';
import { MODULE_NAME } from '../constants';
import SiteContainer from './SiteContainer';

function SiteBanner() {
  const modulesManager = useModulesManager();
  const { formatMessage } = useTranslations(MODULE_NAME, modulesManager);

  return (
    <AppBar position="static" style={{ boxShadow: 'none', height: '35px' }}>
      <SiteContainer style={{ height: '100%' }}>
        <Typography variant="subtitle1" color="inherit">
          {formatMessage('SiteBanner')}
        </Typography>
      </SiteContainer>
    </AppBar>
  );
}

export default SiteBanner;

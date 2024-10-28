/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { AppBar, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import {
  useHistory,
  useModulesManager,
  useTranslations,
} from '@openimis/fe-core';
import group from '../assets/group.png';
import login from '../assets/login.png';
import { MODULE_NAME, ROUTES } from '../constants';
import SiteContainer from './SiteContainer';
import PublicPageLangSwitch from './PublicPageLangSwitch';

const useStyles = makeStyles((theme) => ({
  backgroundColor: {
    backgroundColor: theme.landing.palette.primary,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: '32px',
  },
  logo: {
    height: '24px',
  },
  title: {
    fontSize: '14px',
  },
  loginLink: {
    display: 'flex',
    flexDirection: 'row',
    gap: '6px',
    color: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginIcon: {
    height: '16px',
    width: '16px',
  },
  loginText: {
    fontWeight: 600,
    fontSize: '14px',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    gap: '24px',
  },
}));

function SiteBanner() {
  const classes = useStyles();
  const history = useHistory();
  const modulesManager = useModulesManager();
  const { formatMessage } = useTranslations(MODULE_NAME, modulesManager);

  return (
    <AppBar position="static" className={classes.backgroundColor}>
      <SiteContainer>
        <div className={classes.container}>
          <img
            src={group}
            alt="Government of Moldova"
            className={classes.logo}
          />
          <Typography
            variant="subtitle2"
            color="inherit"
            className={classes.title}
          >
            {formatMessage('SiteBanner')}
          </Typography>
        </div>
        <div className={classes.actions}>
          <PublicPageLangSwitch />
          <Link
            component="button"
            variant="body2"
            onClick={() => history.push(ROUTES.LOGIN)}
            className={classes.loginLink}
          >
            <img src={login} alt="Login Icon" className={classes.loginIcon} />
            <span className={classes.loginText}>
              {formatMessage('LoginButtonLabel')}
            </span>
          </Link>
        </div>
      </SiteContainer>
    </AppBar>
  );
}

export default SiteBanner;

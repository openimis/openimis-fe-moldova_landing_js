/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

import {
  AppBar, Button, Link, Typography,
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { makeStyles } from '@material-ui/styles';

import {
  useHistory,
  useModulesManager,
  useTranslations,
} from '@openimis/fe-core';
import { LINKS, MODULE_NAME, ROUTES } from '../constants';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles(() => ({
  bold: {
    fontWeight: 'bold',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
}));

function Navbar({ logo }) {
  const classes = useStyles();
  const history = useHistory();
  const modulesManager = useModulesManager();
  const { formatMessage } = useTranslations(MODULE_NAME, modulesManager);
  const currentPath = history.location.pathname;

  return (
    <AppBar
      position="static"
      color="transparent"
      style={{
        boxShadow: 'none',
        height: '90px',
        borderBottom: '1px solid #E0E0E0',
      }}
    >
      <SiteContainer>
        <img
          src={logo}
          alt="Logo of Ministry"
          style={{ width: '170px', height: '90px' }}
        />
        <div style={{ display: 'flex', gap: '32px' }}>
          {LINKS.map((link) => (
            <Link
              key={link.name}
              component="button"
              variant="subtitle1"
              className={`
                ${currentPath === link.path ? classes.bold : ''}
                ${classes.uppercase}
              `}
              onClick={() => history.push(link.path)}
            >
              {formatMessage(link.name)}
            </Link>
          ))}
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push(ROUTES.LOGIN)}
          style={{ padding: '8px 16px', borderRadius: '30px' }}
          startIcon={<VpnKeyIcon />}
        >
          <Typography variant="body2" className={classes.uppercase}>
            {formatMessage('LoginButtonLabel')}
          </Typography>
        </Button>
      </SiteContainer>
    </AppBar>
  );
}

export default Navbar;

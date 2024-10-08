/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

import { IconButton, Link, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/styles';

import {
  useHistory,
  useModulesManager,
  useTranslations,
} from '@openimis/fe-core';
import { LINKS, MODULE_NAME, PRIVACY_AND_TERMS_LINKS } from '../constants';
import SecondaryBackground from './SecondaryBackground';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles((theme) => ({
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: theme.spacing(4),
    width: '100%',
    zIndex: 1,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    maxWidth: '50%',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(8),
    padding: theme.spacing(2),
  },
  columnLinks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    gap: theme.spacing(2),
  },
  socials: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2),
  },
}));

function Footer({ logo }) {
  const classes = useStyles();
  const history = useHistory();
  const modulesManager = useModulesManager();
  const { formatMessage } = useTranslations(MODULE_NAME, modulesManager);

  return (
    <SecondaryBackground>
      <SiteContainer>
        <div className={classes.section}>
          <div className={classes.main}>
            <img
              src={logo}
              alt="Logo of Ministry"
              style={{ width: '170px', height: '90px' }}
            />
            <div className={classes.socials}>
              <IconButton color="primary" aria-label="Navigate to Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Navigate to Youtube">
                <YouTubeIcon />
              </IconButton>
            </div>
            <Typography
              variant="caption"
              color="primary"
              style={{ padding: '8px 0' }}
            >
              {formatMessage('moldovaLanding.Footer.amendment')}
            </Typography>
          </div>
          <div className={classes.links}>
            <div className={classes.columnLinks}>
              {LINKS.map((link) => (
                <Link
                  key={link.name}
                  component="button"
                  variant="body2"
                  onClick={() => history.push(link.path)}
                >
                  {formatMessage(link.name)}
                </Link>
              ))}
            </div>
            <div className={classes.columnLinks}>
              {PRIVACY_AND_TERMS_LINKS.map((link) => (
                <Link
                  key={link.name}
                  component="button"
                  variant="body2"
                  onClick={() => history.push(link.path)}
                >
                  {formatMessage(link.name)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SiteContainer>
    </SecondaryBackground>
  );
}

export default Footer;

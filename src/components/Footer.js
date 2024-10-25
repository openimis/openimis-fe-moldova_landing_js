/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import {
  useHistory,
  useModulesManager,
  useTranslations,
} from '@openimis/fe-core';
import logo from '../assets/logo.png';
import ministry1 from '../assets/ministry1.png';
import ministry2 from '../assets/ministry2.png';
import { FOOTER_LINKS, MODULE_NAME, SOCIAL_LINKS } from '../constants';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles((theme) => ({
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    padding: theme.spacing(4),
    width: '100%',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing(4),
  },
  rowLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'start',
    gap: theme.spacing(2),
  },
  link: {
    color: '#898989',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 500,
    cursor: 'pointer',
  },
  socialsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(6),
  },
  ministryLogos: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  socialButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2),
  },
  socialButton: {
    color: '#898989',
    width: '24px',
    height: '24px',
  },
  footer: {
    borderTop: '1px solid #E0E0E0',
  },
  logo: {
    width: '126px',
    height: '49px',
  },
  ministryLogo: {
    width: '118px',
    height: '35px',
  },
}));

function Footer() {
  const classes = useStyles();
  const history = useHistory();
  const modulesManager = useModulesManager();
  const { formatMessage } = useTranslations(MODULE_NAME, modulesManager);

  return (
    <div className={classes.footer}>
      <SiteContainer>
        <div className={classes.section}>
          <div style={{ width: '100%' }}>
            <img src={logo} alt="Logo of Ministry" className={classes.logo} />
          </div>
          <div className={classes.main}>
            <div className={classes.links}>
              <div className={classes.rowLinks}>
                {FOOTER_LINKS.map((link) => (link.external ? (
                  <Link
                    key={link.name}
                    component="button"
                    className={classes.link}
                    variant="body2"
                    onClick={() => history.push(link.path)}
                  >
                    {formatMessage(link.name)}
                  </Link>
                ) : (
                  <LinkScroll
                    key={link.name}
                    to={link.path}
                    smooth
                    duration={500}
                    className={classes.link}
                  >
                    {formatMessage(link.name)}
                  </LinkScroll>
                )))}
              </div>
            </div>
            <div className={classes.socialsContainer}>
              <div className={classes.ministryLogos}>
                <img
                  src={ministry1}
                  alt="Logo of Ministry 1"
                  className={classes.ministryLogo}
                />
                <img
                  src={ministry2}
                  alt="Logo of Ministry 2"
                  className={classes.ministryLogo}
                />
              </div>
              <div className={classes.socialButtonContainer}>
                {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
                  <Link
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className={classes.socialButton} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </div>
  );
}

export default Footer;

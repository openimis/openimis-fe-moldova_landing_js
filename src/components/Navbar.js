/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-scroll';

import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useModulesManager, useTranslations } from '@openimis/fe-core';
import logo from '../assets/logo.png';
import { LINKS, MODULE_NAME } from '../constants';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    height: '88px',
    borderBottom: '1px solid #E0E0E0',
  },
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: '126px',
    height: '49px',
  },
  linksContainer: {
    display: 'flex',
    gap: '24px',
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    color: theme.landing.palette.primary,
    fontSize: '16px',
    lineHeight: '24px',
    cursor: 'pointer',
  },
}));

function Navbar() {
  const classes = useStyles();
  const modulesManager = useModulesManager();
  const { formatMessage } = useTranslations(MODULE_NAME, modulesManager);

  return (
    <AppBar position="static" color="transparent" className={classes.appBar}>
      <SiteContainer className={classes.container}>
        <img src={logo} alt="Logo of Ministry" className={classes.logo} />
        <div className={classes.linksContainer}>
          {LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              smooth
              duration={500}
              className={`${classes.link} ${classes.bold}`}
            >
              {formatMessage(link.name)}
            </Link>
          ))}
        </div>
      </SiteContainer>
    </AppBar>
  );
}

export default Navbar;

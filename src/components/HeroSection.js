import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useTranslations } from '@openimis/fe-core';
import { MODULE_NAME } from '../constants';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles((theme) => ({
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(10, 0),
  },
  leftSection: {
    flex: 1,
    paddingRight: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    gap: theme.spacing(4),
  },
  buttonGroup: {
    display: 'flex',
    gap: theme.spacing(2),
    margin: 0,
  },
  button: {
    padding: theme.spacing(1, 4),
    borderRadius: '30px',
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
  },
  heroImage: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '8px',
  },
  partnerImage: {
    width: '100%',
    maxWidth: '140px',
    borderRadius: '8px',
  },
  partnerImagesContainer: {
    display: 'flex',
    gap: theme.spacing(2),
    flexDirection: 'row',
  },
  title: {
    margin: 0,
    fontWeight: 'bold',
  },
}));

function HeroSection() {
  const classes = useStyles();
  const { formatMessage } = useTranslations(MODULE_NAME);

  return (
    <SiteContainer>
      <div className={classes.hero}>
        <div className={classes.leftSection}>
          <Typography variant="h2" className={classes.title}>
            {formatMessage('moldovaLanding.HeroSection.title')}
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            {formatMessage('moldovaLanding.HeroSection.description')}
          </Typography>
          <div className={classes.buttonGroup}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
            >
              {formatMessage('moldovaLanding.HeroSection.loginButtonLabel')}
            </Button>
            <Button variant="text" size="large" className={classes.button}>
              {formatMessage('moldovaLanding.HeroSection.learnMoreButtonLabel')}
            </Button>
          </div>
          <div className={classes.partnerImagesContainer}>
            <img
              src="https://via.placeholder.com/140x70"
              alt="Partner 1 Logo"
              className={classes.partnerImage}
            />
            <img
              src="https://via.placeholder.com/140x70"
              alt="Partner 2 Logo"
              className={classes.partnerImage}
            />
            <img
              src="https://via.placeholder.com/140x70"
              alt="Partner 3 Logo"
              className={classes.partnerImage}
            />
          </div>
        </div>

        <div className={classes.rightSection}>
          <img
            src="https://via.placeholder.com/500"
            alt="Hero Section"
            className={classes.heroImage}
          />
        </div>
      </div>
    </SiteContainer>
  );
}

export default HeroSection;

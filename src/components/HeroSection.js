import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useTranslations, useHistory } from '@openimis/fe-core';
import bar from '../assets/bar.png';
import hero from '../assets/hero.png';
import {
  CONTACT_EMAIL, DOWNLOAD_GUIDE_FILE_NAME, MODULE_NAME, ROUTES,
} from '../constants';
import SiteContainer from './SiteContainer';
import guide from '../assets/guide.pdf';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
    padding: theme.spacing(8, 0),
  },
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '40px',
    minWidth: '400px',
  },
  button: {
    padding: '12px 23px',
    fontWeight: 600,
    borderRadius: '8px',
    backgroundColor: theme.landing.palette.primary,
    '&:hover': {
      backgroundColor: theme.landing.palette.primary,
    },
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '529px',
    height: '348px',
    borderRadius: '16px',
  },
  title: {
    margin: 0,
    color: theme.landing.palette.text,
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '60px',
  },
  leftText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  description: {
    color: theme.landing.palette.text,
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '26px',
  },
  bar: {
    width: '100%',
    backgroundColor: theme.landing.palette.mutedPrimary,
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  barText: {
    color: theme.landing.palette.text,
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '24px',
    marginLeft: '40px',
  },
  boldBarText: {
    color: theme.landing.palette.primary,
  },
  barImage: {
    width: 'auto',
    height: 'auto',
  },
}));

function HeroSection() {
  const classes = useStyles();
  const history = useHistory();
  const { formatMessage, formatMessageWithValues } = useTranslations(MODULE_NAME);

  return (
    <SiteContainer>
      <div className={classes.container}>
        <div className={classes.hero}>
          <div className={classes.leftSection}>
            <div className={classes.leftText}>
              <Typography variant="h2" className={classes.title}>
                {formatMessage('moldovaLanding.HeroSection.title')}
              </Typography>
              <Typography variant="subtitle1" className={classes.description}>
                {formatMessage('moldovaLanding.HeroSection.description1')}
              </Typography>
              <Typography variant="subtitle1" className={classes.description}>
                {formatMessage('moldovaLanding.HeroSection.description2')}
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                  history.push(ROUTES.LOGIN);
                }}
              >
                {formatMessage('moldovaLanding.HeroSection.loginButtonLabel')}
              </Button>
            </div>
          </div>

          <div className={classes.rightSection}>
            <img src={hero} alt="Hero Section" className={classes.heroImage} />
          </div>
        </div>

        <div className={classes.bar}>
          <Typography variant="subtitle1" className={classes.barText}>
            {formatMessageWithValues('moldovaLanding.HeroSection.barText', {
              boldText: (
                <a className={classes.boldBarText} href={guide} download={DOWNLOAD_GUIDE_FILE_NAME}>
                  {formatMessage('moldovaLanding.HeroSection.boldText')}
                </a>
              ),
              email: CONTACT_EMAIL,
            })}
          </Typography>
          <img src={bar} alt="Man with a loop" className={classes.barImage} />
        </div>
      </div>
    </SiteContainer>
  );
}

export default HeroSection;

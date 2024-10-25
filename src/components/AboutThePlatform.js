import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useTranslations, useHistory } from '@openimis/fe-core';
import { MODULE_NAME, REDIRECT, ROUTES } from '../constants';
import SecondaryBackground from './SecondaryBackground';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    color: theme.landing.palette.text,
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    width: '100%',
  },
  title: {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '48px',
    textAlign: 'center',
  },
  description: {
    fontSize: '18px',
    lineHeight: '26px',
    textAlign: 'center',
    maxWidth: '800px',
    display: 'flex',
    gap: '25px',
    flexDirection: 'column',
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
}));

function AboutThePlatform() {
  const classes = useStyles();
  const history = useHistory();
  const { formatMessage } = useTranslations(MODULE_NAME);

  return (
    <SecondaryBackground>
      <SiteContainer>
        <div className={classes.wrapper} id={REDIRECT.ABOUT_THE_PLATFORM}>
          <Typography className={classes.title}>
            {formatMessage('moldovaLanding.AboutThePlatform.title')}
          </Typography>
          <div className={classes.description}>
            <p>
              {formatMessage('moldovaLanding.AboutThePlatform.description')}
            </p>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                  history.push(ROUTES.LOGIN);
                }}
              >
                {formatMessage('moldovaLanding.AboutThePlatform.buttonCta')}
              </Button>
            </div>
          </div>
        </div>
      </SiteContainer>
    </SecondaryBackground>
  );
}

export default AboutThePlatform;

import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useTranslations } from '@openimis/fe-core';
import { MODULE_NAME } from '../constants';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(8, 0),
    width: '100%',
    gap: '24px',
  },
  title: {
    fontSize: '40px',
    lineHeight: '48px',
    fontWeight: 700,
    color: theme.landing.palette.text,
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  step: {
    height: '190px',
    borderRadius: '16px',
    border: `1px solid ${theme.landing.palette.primary}`,
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
    height: '100%',
    padding: theme.spacing(4),
  },
  counter: {
    fontSize: '36px',
    lineHeight: '46px',
    fontWeight: 300,
    color: theme.landing.palette.tertiary,
  },
  stepTitle: {
    fontSize: '28px',
    lineHeight: '30px',
    fontWeight: 700,
    color: theme.landing.palette.primary,
  },
}));

const STEPS = [
  'moldovaLanding.HowToPurchase.step1',
  'moldovaLanding.HowToPurchase.step2',
  'moldovaLanding.HowToPurchase.step3',
  'moldovaLanding.HowToPurchase.step4',
];

function HowToPurchase() {
  const classes = useStyles();
  const { formatMessage } = useTranslations(MODULE_NAME);

  return (
    <SiteContainer>
      <div className={classes.wrapper}>
        <Typography className={classes.title}>
          {formatMessage('moldovaLanding.HowToPurchase.title')}
        </Typography>
        <div className={classes.steps}>
          {STEPS.map((step, index) => (
            <div key={step} className={classes.step}>
              <div className={classes.stepContainer}>
                <div className={classes.counter}>{`0${index + 1}`}</div>
                <div className={classes.stepTitle}>{formatMessage(step)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SiteContainer>
  );
}

export default HowToPurchase;

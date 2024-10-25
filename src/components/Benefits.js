import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useTranslations } from '@openimis/fe-core';
import { MODULE_NAME, REDIRECT } from '../constants';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(8, 0),
    width: '100%',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(4),
    zIndex: 1,
  },
  primarySquare: {
    flex: 1,
    backgroundColor: theme.landing.palette.primary,
    color: theme.landing.palette.white,
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(6),
  },
  secondarySquare: {
    flex: 1,
    backgroundColor: theme.landing.palette.secondary,
    color: theme.landing.palette.text,
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(6),
    position: 'relative',
  },
  secondaryBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    opacity: 0.08,
    zIndex: 0,
    borderRadius: '16px',
  },
  squareContent: {
    zIndex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    margin: 0,
    fontWeight: 'bold',
  },
  description: {
    margin: theme.spacing(2, 0),
    textAlign: 'left',
    flex: 1,
  },
  sectionTitle: {
    textAlign: 'start',
    color: theme.landing.palette.text,
    zIndex: 1,
    marginBottom: theme.spacing(4),
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '40px',
  },
}));

const PRIMARY_POINTS = [
  'moldovaLanding.HowToApplySection.primarySquarePoint1',
  'moldovaLanding.HowToApplySection.primarySquarePoint2',
  'moldovaLanding.HowToApplySection.primarySquarePoint3',
  'moldovaLanding.HowToApplySection.primarySquarePoint4',
];

const SECONDARY_POINTS = [
  'moldovaLanding.HowToApplySection.secondarySquarePoint1',
  'moldovaLanding.HowToApplySection.secondarySquarePoint2',
  'moldovaLanding.HowToApplySection.secondarySquarePoint3',
  'moldovaLanding.HowToApplySection.secondarySquarePoint4',
];

function Benefits() {
  const classes = useStyles();
  const { formatMessage } = useTranslations(MODULE_NAME);

  return (
    <SiteContainer>
      <div className={classes.wrapper} id={REDIRECT.CHECK_THE_VOUCHER}>
        <Typography className={classes.sectionTitle}>
          {formatMessage('moldovaLanding.HowToApplySection.title')}
        </Typography>
        <div className={classes.section}>
          <div className={classes.primarySquare}>
            <Typography variant="h5" className={classes.title}>
              {formatMessage(
                'moldovaLanding.HowToApplySection.primarySquareTitle',
              )}
            </Typography>
            <ul>
              {PRIMARY_POINTS.map((point, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <Typography variant="body1" className={classes.description}>
                    {formatMessage(point)}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          <div className={classes.secondarySquare}>
            <div className={classes.secondaryBackground} />
            <div className={classes.squareContent}>
              <Typography variant="h5" className={classes.title}>
                {formatMessage(
                  'moldovaLanding.HowToApplySection.secondarySquareTitle',
                )}
              </Typography>
              <ul>
                {SECONDARY_POINTS.map((point, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index}>
                    <Typography variant="body1" className={classes.description}>
                      {formatMessage(point)}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SiteContainer>
  );
}

export default Benefits;

import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useTranslations } from '@openimis/fe-core';
import { MODULE_NAME } from '../constants';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(5, 0),
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
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(4),
  },
  secondarySquare: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(4),
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
    borderRadius: '8px',
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
  image: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '16px',
    marginBottom: theme.spacing(2),
    alignSelf: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
    width: '100%',
    color: theme.palette.primary.main,
    padding: theme.spacing(1.25),
  },
  sectionTitle: {
    textAlign: 'start',
    zIndex: 1,
    marginBottom: theme.spacing(4),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

function HowToApplySection() {
  const classes = useStyles();
  const { formatMessage } = useTranslations(MODULE_NAME);

  return (
    <SiteContainer>
      <div className={classes.wrapper}>
        <Typography variant="h4" className={classes.sectionTitle}>
          {formatMessage('moldovaLanding.HowToApplySection.title')}
        </Typography>
        <div className={classes.section}>
          <div className={classes.primarySquare}>
            <img
              src="https://via.placeholder.com/300"
              alt="Application Process"
              className={classes.image}
            />
            <Typography variant="h5" className={classes.title}>
              {formatMessage(
                'moldovaLanding.HowToApplySection.primarySquareTitle',
              )}
            </Typography>
            <Typography variant="subtitle1" className={classes.description}>
              {formatMessage(
                'moldovaLanding.HowToApplySection.primarySquareDescription',
              )}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              {formatMessage(
                'moldovaLanding.HowToApplySection.primarySquareButtonLabel',
              )}
            </Button>
          </div>

          <div className={classes.secondarySquare}>
            <div className={classes.secondaryBackground} />
            <div className={classes.squareContent}>
              <img
                src="https://via.placeholder.com/300"
                alt="Tips for Application"
                className={classes.image}
              />
              <Typography variant="h5" className={classes.title}>
                {formatMessage(
                  'moldovaLanding.HowToApplySection.secondarySquareTitle',
                )}
              </Typography>
              <Typography variant="subtitle1" className={classes.description}>
                {formatMessage(
                  'moldovaLanding.HowToApplySection.secondarySquareDescription',
                )}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{ color: 'white' }}
              >
                {formatMessage(
                  'moldovaLanding.HowToApplySection.secondarySquareButtonLabel',
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SiteContainer>
  );
}

export default HowToApplySection;

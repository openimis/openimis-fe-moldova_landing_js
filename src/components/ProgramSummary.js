import React from 'react';

import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useTranslations } from '@openimis/fe-core';
import { MODULE_NAME } from '../constants';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    padding: theme.spacing(8, 0),
    width: '100%',
  },
  secondaryCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
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
  cardContent: {
    zIndex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  cardContentText: {
    flex: 1,
    padding: theme.spacing(2),
    flexDirection: 'column',
    display: 'flex',
    gap: theme.spacing(2),
  },
  primaryCard: {
    flex: 1,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '8px',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '300px',
    flex: 1,
    borderRadius: '0 8px 8px 0',
  },
  primaryCardButton: {
    color: theme.palette.primary.main,
  },
}));

function ProgramSummary() {
  const classes = useStyles();
  const { formatMessage } = useTranslations(MODULE_NAME);

  return (
    <SiteContainer>
      <div className={classes.wrapper}>
        <div className={classes.secondaryCard}>
          <div className={classes.secondaryBackground} />
          <div className={classes.cardContent}>
            <div className={classes.cardContentText}>
              <Typography variant="h5">
                {formatMessage(
                  'moldovaLanding.ProgramSummary.secondaryCardTitle',
                )}
              </Typography>
              <Typography variant="body1" style={{ flex: 1 }}>
                {formatMessage(
                  'moldovaLanding.ProgramSummary.secondaryCardDescription',
                )}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ color: 'white' }}
              >
                {formatMessage(
                  'moldovaLanding.ProgramSummary.secondaryCardButton',
                )}
              </Button>
            </div>
            <img
              src="https://via.placeholder.com/300"
              alt="Tips for Application"
              className={classes.image}
            />
          </div>
        </div>
        <div className={classes.primaryCard}>
          <div className={classes.cardContent}>
            <div className={classes.cardContentText}>
              <Typography variant="h5">
                {formatMessage(
                  'moldovaLanding.ProgramSummary.primaryCardTitle',
                )}
              </Typography>
              <Typography variant="body1" style={{ flex: 1 }}>
                {formatMessage(
                  'moldovaLanding.ProgramSummary.primaryCardDescription',
                )}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                className={classes.primaryCardButton}
              >
                {formatMessage(
                  'moldovaLanding.ProgramSummary.primaryCardButton',
                )}
              </Button>
            </div>
            <img
              src="https://via.placeholder.com/300"
              alt="Tips for Application"
              className={classes.image}
            />
          </div>
        </div>
      </div>
    </SiteContainer>
  );
}

export default ProgramSummary;

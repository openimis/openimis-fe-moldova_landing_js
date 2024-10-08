import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useTranslations } from '@openimis/fe-core';
import { MODULE_NAME } from '../constants';
import SecondaryBackground from './SecondaryBackground';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(5, 0),
    width: '100%',
  },
  sectionTitle: {
    textAlign: 'start',
    zIndex: 1,
    marginBottom: theme.spacing(4),
    fontWeight: theme.typography.fontWeightBold,
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(4),
    zIndex: 1,
  },
  description: {
    margin: theme.spacing(2, 0),
    textAlign: 'left',
    flex: 1,
  },
  video: {
    width: '100%',
    maxWidth: '650px',
    borderRadius: '16px',
    marginBottom: theme.spacing(2),
    alignSelf: 'center',
  },
}));

function AboutTheProgram() {
  const classes = useStyles();
  const { formatMessage } = useTranslations(MODULE_NAME);

  return (
    <SecondaryBackground>
      <SiteContainer>
        <div className={classes.wrapper}>
          <div className={classes.section}>
            <img
              src="https://via.placeholder.com/600x300"
              alt="About the program video"
              className={classes.video}
            />
            <div>
              <Typography variant="h4" className={classes.sectionTitle}>
                {formatMessage('moldovaLanding.AboutTheProgram.title')}
              </Typography>
              <Typography variant="subtitle1" className={classes.description}>
                {formatMessage('moldovaLanding.AboutTheProgram.description')}
              </Typography>
            </div>
          </div>
        </div>
      </SiteContainer>
    </SecondaryBackground>
  );
}

export default AboutTheProgram;

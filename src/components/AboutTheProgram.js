import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useTranslations } from '@openimis/fe-core';
import video from '../assets/video.png';
import { MODULE_NAME, REDIRECT } from '../constants';
import SecondaryBackground from './SecondaryBackground';
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
    gap: '126px',
    zIndex: 1,
  },
  sectionWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  sectionTitle: {
    textAlign: 'start',
    zIndex: 1,
    marginBottom: theme.spacing(4),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.landing.palette.text,
  },
  description: {
    textAlign: 'left',
  },
  video: {
    borderRadius: '16px',
    alignSelf: 'center',
    width: '588px',
    height: '330px',
  },
  aboutList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    color: theme.landing.palette.primary,
    fontSize: '18px',
    fontWeight: 600,
    margin: 0,
    paddingLeft: '20px',
  },
  aboutListDescription: {
    color: theme.landing.palette.text,
    margin: 0,
    fontWeight: 500,
  },
}));

const ABOUT_LIST = [
  {
    title: 'moldovaLanding.AboutTheProgram.article1.title',
    description: 'moldovaLanding.AboutTheProgram.article1.description',
  },
  {
    title: 'moldovaLanding.AboutTheProgram.article2.title',
    description: 'moldovaLanding.AboutTheProgram.article2.description',
  },
  {
    title: 'moldovaLanding.AboutTheProgram.article3.title',
    description: 'moldovaLanding.AboutTheProgram.article3.description',
  },
];

function AboutTheProgram() {
  const classes = useStyles();
  const { formatMessage } = useTranslations(MODULE_NAME);

  return (
    <SecondaryBackground>
      <SiteContainer>
        <div className={classes.wrapper} id={REDIRECT.ABOUT_THE_PROGRAM}>
          <div className={classes.section}>
            <div className={classes.sectionWrapper}>
              <img
                src={video}
                alt="About the program video"
                className={classes.video}
              />
            </div>
            <div className={classes.sectionWrapper}>
              <Typography variant="h4" className={classes.sectionTitle}>
                {formatMessage('moldovaLanding.AboutTheProgram.title')}
              </Typography>
              <ol className={classes.aboutList}>
                {ABOUT_LIST.map((item) => (
                  <li key={item.title}>
                    <span className={classes.aboutListTitle}>
                      {formatMessage(item.title)}
                    </span>
                    <p className={classes.aboutListDescription}>
                      {formatMessage(item.description)}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </SiteContainer>
    </SecondaryBackground>
  );
}

export default AboutTheProgram;

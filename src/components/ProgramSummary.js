import React from 'react';

import { Button, Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/styles';

import { useTranslations } from '@openimis/fe-core';
import call from '../assets/call.png';
import map from '../assets/map.png';
import { CONTACT_EMAIL, DOWNLOAD_GUIDE_FILE_NAME, MODULE_NAME } from '../constants';
import SiteContainer from './SiteContainer';
import guide from '../assets/guide.pdf';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '24px',
    padding: theme.spacing(8, 0),
    width: '100%',
  },
  primaryCard: {
    backgroundColor: theme.landing.palette.mutedPrimary,
    borderRadius: '16px',
    width: '100%',
    height: '317px',
  },
  secondaryCard: {
    backgroundColor: theme.landing.palette.secondary,
    borderRadius: '16px',
    height: '317px',
    width: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
  },
  cardContentText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(6),
    color: theme.landing.palette.text,
  },
  contentTitle: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '32px',
  },
  ctaButton: {
    backgroundColor: theme.landing.palette.primary,
    color: theme.landing.palette.white,
    borderRadius: '8px',
    fontWeight: 600,
    padding: '10px 24px',
    '&:hover': {
      backgroundColor: theme.landing.palette.primary,
    },
  },
  cardContentImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconColor: {
    color: theme.landing.palette.primary,
    height: '16px',
    width: '16px',
  },
  emailWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'start',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '32px',
    width: '32px',
    borderRadius: '100px',
    padding: '8px',
    backgroundColor: theme.landing.palette.white,
  },
  email: {
    color: theme.landing.palette.text,
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '24px',
  },
}));

function ProgramSummary() {
  const classes = useStyles();
  const { formatMessage } = useTranslations(MODULE_NAME);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = guide;
    link.download = DOWNLOAD_GUIDE_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SiteContainer>
      <div className={classes.wrapper}>
        <div className={classes.primaryCard}>
          <div className={classes.cardContent}>
            <div className={classes.cardContentText}>
              <Typography className={classes.contentTitle}>
                {formatMessage('moldovaLanding.ProgramSummary.downloadGuide')}
              </Typography>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleDownload}
                  className={classes.ctaButton}
                >
                  {formatMessage('moldovaLanding.ProgramSummary.buttonCta')}
                </Button>
              </div>
            </div>
            <div className={classes.cardContentImage}>
              <img src={map} alt="The person with a map" />
            </div>
          </div>
        </div>
        <div className={classes.secondaryCard}>
          <div className={classes.cardContent}>
            <div className={classes.cardContentText}>
              <Typography className={classes.contentTitle}>
                {formatMessage('moldovaLanding.ProgramSummary.contactUs')}
              </Typography>
              <div className={classes.emailWrapper}>
                <div className={classes.iconWrapper}>
                  <MailIcon className={classes.iconColor} />
                </div>
                <Typography className={classes.email}>
                  {CONTACT_EMAIL}
                </Typography>
              </div>
            </div>
            <div className={classes.cardContentImage}>
              <img src={call} alt="The person calling" />
            </div>
          </div>
        </div>
      </div>
    </SiteContainer>
  );
}

export default ProgramSummary;

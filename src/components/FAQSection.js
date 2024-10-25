import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';

import { useTranslations } from '@openimis/fe-core';
import { MODULE_NAME, REDIRECT } from '../constants';
import SiteContainer from './SiteContainer';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: theme.spacing(8, 0),
    width: '100%',
  },
  accordion: {
    width: '100%',
    borderRadius: '16px',
    '&.MuiAccordion-root:before': {
      display: 'none',
    },
    '&.MuiAccordion-rounded:last-child': {
      borderRadius: '0 0 8px 8px',
    },
  },
  summary: {
    backgroundColor: theme.landing.palette.mutedSecondary,
    color: theme.landing.palette.text,
    borderRadius: '8px',
    '&.Mui-expanded': {
      borderRadius: '8px 8px 0 0',
      backgroundColor: theme.landing.palette.mutedPrimary,
    },
  },
  heading: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '24px',
  },
  details: {
    backgroundColor: theme.landing.palette.mutedPrimary,
    padding: theme.spacing(2),
    borderRadius: '0 0 8px 8px',
    fontSize: '18px',
    color: theme.landing.palette.text,
  },
  title: {
    textAlign: 'start',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.landing.palette.text,
    fontSize: '40px',
  },
  expandIcon: {
    color: theme.landing.palette.text,
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
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function FAQSection() {
  const classes = useStyles();
  const { formatMessage } = useTranslations(MODULE_NAME);

  const FAQS = [
    {
      question: formatMessage('moldovaLanding.FAQSection.Q1'),
      answer: formatMessage('moldovaLanding.FAQSection.A1'),
    },
    {
      question: formatMessage('moldovaLanding.FAQSection.Q2'),
      answer: formatMessage('moldovaLanding.FAQSection.A2'),
    },
    {
      question: formatMessage('moldovaLanding.FAQSection.Q3'),
      answer: formatMessage('moldovaLanding.FAQSection.A3'),
    },
    {
      question: formatMessage('moldovaLanding.FAQSection.Q4'),
      answer: formatMessage('moldovaLanding.FAQSection.A4'),
    },
    {
      question: formatMessage('moldovaLanding.FAQSection.Q5'),
      answer: formatMessage('moldovaLanding.FAQSection.A5'),
    },
  ];

  return (
    <SiteContainer>
      <div className={classes.wrapper} id={REDIRECT.FAQ}>
        <Typography variant="h4" className={classes.title}>
          {formatMessage('moldovaLanding.FAQSection.title')}
        </Typography>

        <div>
          {FAQS.map((faq, index) => (
            <Accordion key={faq.question} className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
                className={classes.summary}
              >
                <Typography className={classes.heading}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <div className={classes.buttonWrapper}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {formatMessage('moldovaLanding.FAQSection.buttonCta')}
          </Button>
        </div>
      </div>
    </SiteContainer>
  );
}

export default FAQSection;

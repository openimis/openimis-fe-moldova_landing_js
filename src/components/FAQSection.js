import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';

import { useTranslations } from '@openimis/fe-core';
import { MODULE_NAME } from '../constants';
import SiteContainer from './SiteContainer';
import SecondaryBackground from './SecondaryBackground';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(5, 0),
    width: '100%',
    zIndex: 1,
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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: '8px',
    '&.Mui-expanded': {
      borderRadius: '8px 8px 0 0',
    },
  },
  heading: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  },
  details: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
    borderRadius: '0 0 8px 8px',
  },
  title: {
    textAlign: 'start',
    marginBottom: theme.spacing(4),
    fontWeight: theme.typography.fontWeightBold,
  },
  expandIcon: {
    color: 'white',
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
  ];

  return (
    <SecondaryBackground>
      <SiteContainer>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.title}>
            {formatMessage('moldovaLanding.FAQSection.title')}
          </Typography>

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
      </SiteContainer>
    </SecondaryBackground>
  );
}

export default FAQSection;

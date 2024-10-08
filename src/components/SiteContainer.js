import React from 'react';
import clsx from 'clsx';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1300px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
  },
}));

function SiteContainer({ children, className, style }) {
  const classes = useStyles();

  return (
    <Container
      maxWidth="xl"
      className={clsx(classes.container, className)}
      style={style}
    >
      {children}
    </Container>
  );
}

export default SiteContainer;

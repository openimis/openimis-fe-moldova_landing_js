import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    position: 'relative',
    padding: theme.spacing(8, 0),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    opacity: 0.04,
    zIndex: 0,
  },
}));

function SecondaryBackground({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.overlay} />
      {children}
    </div>
  );
}

export default SecondaryBackground;

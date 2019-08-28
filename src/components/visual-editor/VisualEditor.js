import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  message: {
    margin: 20,
    color: 'white'
  }
}));

export default function VisualEditor() {
  const classes = useStyles();

  return (
    <Typography component="p" className={classes.message}>
      The visual editor is still not ready. Please use the code editor.
    </Typography>
  );
}

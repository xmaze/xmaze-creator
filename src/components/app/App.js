import React from 'react';
import Home from '../home/Home';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import theme from '../../theme';

const useStyles = makeStyles(theme => ({
  app: {
    height: '100%',
    overflow: 'hidden'
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box xs={false} className={classes.app} bgcolor="primary.dark">
        <Home />
      </Box>
    </ThemeProvider>
  );
}

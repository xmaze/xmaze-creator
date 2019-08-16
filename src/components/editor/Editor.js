import React from 'react';
import { history } from '../../store/configureStore';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  item: {
    width: '100%'
  },
  toolbar: {
    justifyContent: 'flex-end',
    borderTop: '1px solid rgba(255, 255, 255, .1)'
  }
}));

export default function Editor() {
  const classes = useStyles();

  return (
    <Grid container alignItems="stretch" direction="column">
      <Grid item className={classes.item}>
        <AppBar position="relative">
          <Tabs value="visual">
            <Tab value="visual" label="Visual editor" />
            <Tab value="code" label="Code" />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs className={classes.item}>
        <button onClick={() => history.push('/')}>{'<-'}</button>
      </Grid>
      <Grid item className={classes.item}>
        <Toolbar className={classes.toolbar}>
          <Button variant="contained" color="secondary">
            Publish
          </Button>
        </Toolbar>
      </Grid>
    </Grid>
  );
}

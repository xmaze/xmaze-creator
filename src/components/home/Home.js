import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { history } from '../../store/configureStore';

const useStyles = makeStyles(theme => ({
  home: {
    padding: 20
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.home}
    >
      <Grid item>
        <Grid container justify="center" spacing={5}>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="button"
              onClick={() => history.push('/editor')}
            >
              Create new maze
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="button"
              onClick={() => history.push('/editor')}
            >
              Open existing
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

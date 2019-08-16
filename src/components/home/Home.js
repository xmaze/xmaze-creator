import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { history } from '../../store/configureStore';

export default function Home() {
  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid item>
        <Grid container justify="center" spacing="5">
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

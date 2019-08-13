import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Home.css';

const Home = () => (
  <Grid
    container
    alignItems="center"
    justify="center"
    className="Home"
    spacing="2"
  >
    <Grid item>
      <Button variant="contained" color="primary">
        Create new maze
      </Button>
    </Grid>
    <Grid item>
      <Button variant="contained" color="primary">
        Open existing
      </Button>
    </Grid>
  </Grid>
);

export default Home;

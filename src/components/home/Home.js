import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  home: {
    height: '100%'
  },
  buttons: {
    height: '100%'
  }
}));

export default function Hom() {
  const classes = useStyles();

  return (
    <Container className={classes.home}>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.buttons}
        spacing="5"
      >
        <Grid item>
          <Button variant="contained" size="large" color="primary">
            Create new maze
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" size="large" color="primary">
            Open existing
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

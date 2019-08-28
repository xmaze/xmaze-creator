import React from 'react';
import { Route, Switch } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import VisualEditor from '../visual-editor/VisualEditor';
import CodeEditor from '../code-editor/CodeEditor';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  item: {
    width: '100%'
  },
  editor: {
    position: 'relative',
    overflow: 'hidden'
  },
  toolbar: {
    justifyContent: 'flex-end',
    borderTop: '1px solid rgba(255, 255, 255, .1)'
  },
  save: {
    marginRight: theme.spacing(2)
  },
  comeback: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1
  }
}));

export default function Editor(props) {
  const classes = useStyles();

  let mode = '';
  const modeRoutes = {
    visual: '/editor/visual',
    code: '/editor/code'
  };
  const { history } = props;
  Object.keys(modeRoutes).forEach(key => {
    if (modeRoutes[key] == history.location.pathname) {
      mode = key;
    }
  });

  if (!mode) {
    history.push(modeRoutes['visual']);
  }

  return (
    <Grid container alignItems="stretch" direction="column">
      <Grid item className={classes.item}>
        <AppBar position="relative">
          <Tabs
            value={mode}
            onChange={(e, value) => history.push(`/editor/${value}`)}
          >
            <Tab value="visual" label="Visual editor" />
            <Tab value="code" label="Code" />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs className={classNames(classes.item, classes.editor)}>
        <Button
          variant="contained"
          className={classes.comeback}
          onClick={() => history.push('/')}
        >
          {'<-'}
        </Button>
        <Switch>
          <Route path={modeRoutes['visual']} component={VisualEditor} />
          <Route path={modeRoutes['code']} component={CodeEditor} />
        </Switch>
      </Grid>
      <Grid item className={classes.item}>
        <Toolbar className={classes.toolbar}>
          <Button variant="contained" color="primary" className={classes.save}>
            Save
          </Button>
          <Button variant="contained" color="secondary">
            Publish
          </Button>
        </Toolbar>
      </Grid>
    </Grid>
  );
}

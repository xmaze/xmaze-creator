import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import configureStore, { history } from '../../store/configureStore';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import theme from '../../theme';
import Home from '../home/Home';
import Editor from '../editor/Editor';

const store = configureStore();

const useStyles = makeStyles(theme => ({
  app: {
    height: '100%',
    overflow: 'hidden'
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Box xs={false} className={classes.app} bgcolor="primary.dark">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/editor" component={Editor} />
            </Switch>
          </Box>
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
}

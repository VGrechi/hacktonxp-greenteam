import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue';

import Home from './components/home/Home';
import Trail from './components/trail/Trail';
import Login from './components/login/Login';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: blue
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/trail/:id" component={Trail}/>
            <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;

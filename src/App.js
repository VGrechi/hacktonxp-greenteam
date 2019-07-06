import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';

import Home from './components/home/Home';
import Trail from './components/trail/Trail';
import Login from './components/login/Login';
import Course from './components/course/Course';
import Quiz from './components/quiz/Quiz';

const theme = createMuiTheme({
  palette: {
    primary:  green,
    secondary: blueGrey
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={{ width: '100%', backgroundColor: blueGrey[100] }}>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/trail/:id" component={Trail}/>
              <Route exact path="/trail/:trailId/course/:id" component={Course}/>
              <Route path="/trail/:trailId/course/:id/quiz" component={Quiz}/>
              <Route path="/login" component={Login}/>
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;

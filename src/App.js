import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

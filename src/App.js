import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './components/Index';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

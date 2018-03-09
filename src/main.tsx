import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Lists } from './listview';
import { Accordion } from './accordion';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={Lists} />
      <Route path="/accordion" component={Accordion} />
    </Switch>
  </HashRouter>
  , document.getElementById('root')
);

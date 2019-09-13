import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/Home/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutPage from '../About/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

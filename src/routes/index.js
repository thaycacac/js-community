import React from 'react';
import {Route} from 'react-router';
import { HomePage} from './routes';

export default (
    <Route>
      <Route path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
    </Route>
  );
import React from 'react';
import {Route} from 'react-router';
import {HomePage,Profile,Post,Blog,Question,Textbook} from './routes';

export default (
    <Route>
      <Route path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path='/profile' component={Profile}/>
      <Route path='/post' component={Post}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/question' component={Question}/>
      <Route path='/textbook' component={Textbook}/>
    </Route>
  );
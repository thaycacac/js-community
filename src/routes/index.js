import React from 'react';
import {Route} from 'react-router';
import {HomePage,Profile,Post,Blog,Question,Textbook,WritePost,Event} from './routes';

export default (
    <Route>
      <Route path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path='/profile' component={Profile}/>
      <Route path='/post/:postId' component={Post}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/question' component={Question}/>
      <Route path='/textbook' component={Textbook}/>
      <Route path='/writepost' component={WritePost}/>
      <Route path='/event' component={Event}/>
    </Route>
  );
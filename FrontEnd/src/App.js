import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Home } from './route/Home';
import { SignupPage } from './route/SignupPage';
import { SigninPage } from './route/SigninPage';
import { WritePage } from './route/WritePage';


function App() {
  return (
    <BrowserRouter>
      <Route exact path = "/" component = {Home}/>
      <Route path = "/signup" component = {SignupPage}/>
      <Route path = "/signin" component = {SigninPage}/>
      <Route path = "/write" component = {WritePage}/>
    </BrowserRouter>
  );
}

export default App;

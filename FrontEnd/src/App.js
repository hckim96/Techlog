import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Home } from './route/Home';
import { SignupPage } from './route/SignupPage';


function App() {
  return (
    <BrowserRouter>
      <Route exact path = "/" component = {Home}/>
      <Route path = "/signup" component = {SignupPage}/>
    </BrowserRouter>
  );
}

export default App;

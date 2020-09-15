import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Home } from './component/Home';
import { signupPage } from './component/signupPage';


function App() {
  return (
    <BrowserRouter>
      <Route exact path = "/" component = {Home}/>
      <Route path = "/signup" component = {signupPage}/>
    </BrowserRouter>
  );
}

export default App;

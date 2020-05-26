import React from 'react'
import './App.css'

import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/login/Login'
import Search from './pages/search/Search'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  );
}

export default App;

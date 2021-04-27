import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Login from './pages/login/login'
import Search from './pages/search/search'
import AuthRequired from './components/auth-required/auth-required'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/search" render={() => (
            <AuthRequired orRender={<Search />} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

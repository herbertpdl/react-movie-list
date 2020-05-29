import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Login from './pages/login/Login'
import Search from './pages/search/Search'
import AuthRequired from './components/auth-required/AuthRequired'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/search" component={Search} />
        {/*<Route exact path="/search" render={() => (
            <AuthRequired orRender={} />
          )}
        /> */}
      </Switch>
    </div>
  );
}

export default App;

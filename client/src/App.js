import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

import { Switch, Route } from 'react-router-dom'

import Login from './pages/login'
import Search from './pages/search'
import AuthRequired from './components/auth-required/auth-required'

import './App.css'

const App = () => {
  // Create a client
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/search" render={() => (
              <AuthRequired orRender={<Search />} />
            )}
          />
        </Switch>
      </QueryClientProvider>
    </div>
  );
}

export default App;

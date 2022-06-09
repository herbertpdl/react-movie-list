import React, { Suspense, lazy } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

import { Switch, Route } from 'react-router-dom'
import './App.css'

const Login = lazy(() => import('./pages/login'))
const AuthRequired = lazy(() => import('./components/auth-required/auth-required'))
const Search = lazy(() => import('./pages/search'))

const App = () => {
  // Create a client
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/search/:movieTitle?" render={() => (
                <AuthRequired orRender={<Search />} />
              )}
            />
          </Switch>
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;

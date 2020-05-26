import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className="login--wrapper"
      >
        <Grid
          item
          xs={10}
          md={4}
        >
          <div className="login--card">
            <p>Login</p>
            <TextField
              fullWidth
              label="e-mail"
              type="email"
              margin="normal"
            />

            <TextField
              fullWidth
              label="senha"
              type="password"
              margin="normal"
            />

            <Button color="primary" size="large">
              Entrar
            </Button>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default Login

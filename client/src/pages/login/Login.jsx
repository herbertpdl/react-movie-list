import React, { Component, useState } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import { setUserToken, setUserData } from '../../redux/user/user.actions'

import { logIn, getUserData } from '../../services'

import './login.scss';

const Login = ({setUserToken, setUserData, history}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log(email, password)
    logIn({email, password})
      .then((resp) => {
        setUserToken(resp)

        // json-server-authentication middleware does not return data, just a token
        // that's why we're using another endpoint to retrieve it
        getUserData(1)
          .then(resp => {
            setUserData(resp);
          });

        history.push("/search")
      });
  }

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
            onChange={e => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="senha"
            type="password"
            margin="normal"
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => handleLogin()}
          >
            Entrar
          </Button>
        </div>
      </Grid>
    </Grid>
  ) 
}

export default connect(null, { setUserToken, setUserData })(Login)

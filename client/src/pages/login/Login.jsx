import React, { useState } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import { setUserToken, setUserData } from '../../redux/user/user.actions'

import { logIn, getUserData } from '../../services'

import { LoginCard, LoginWrapper} from './login-styles.js';

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
    <LoginWrapper
      container
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        xs={10}
        md={4}
      >
        <LoginCard>
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
        </LoginCard>
      </Grid>
    </LoginWrapper>
  ) 
}

export default connect(null, { setUserToken, setUserData })(Login)

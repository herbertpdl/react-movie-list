import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import { setUserToken } from '../../redux/user/user.actions'

import { LoginCard, LoginWrapper} from './login-styles.js';

import { logIn } from '../../services'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()

  const { mutate, isLoading } = useMutation(logIn, {
    onSuccess: ({ data: { accessToken } }) => {
      dispatch(setUserToken(accessToken))
      history.push('/search')
    }
  })

  const handleLogin = () => {
    mutate({
      email,
      password
    })
  }

  return isLoading ? <div>Loading...</div> : (
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
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </LoginCard>
      </Grid>
    </LoginWrapper>
  ) 
}

export default Login

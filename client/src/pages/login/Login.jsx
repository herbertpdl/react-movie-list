import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import { setUserToken } from '../../redux/user/user.actions'

import { logIn } from '../../services'

import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleData = (prop) => (event) => {
    this.setState({
      [prop]: event.target.value
    })
  }

  logIn = () => {
    logIn(this.state)
      .then((resp) => {
        const {setUserToken} = this.props

        setUserToken(resp)

        let { history } = this.props

        history.push("/search")
      });
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
              onChange={this.handleData('email')}
            />

            <TextField
              fullWidth
              label="senha"
              type="password"
              margin="normal"
              onChange={this.handleData('password')}
            />

            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => this.logIn()}
            >
              Entrar
            </Button>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default connect(null, { setUserToken })(Login)

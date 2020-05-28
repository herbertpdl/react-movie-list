import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { createStructuredSelector } from 'reselect'
import { selectUserToken } from '../../redux/user/user.selector'

export class AuthRequired extends Component {

  render () {
    return (
      this.props.token ? (
        this.props.orRender
      ) :
      (
        <Redirect to="/" />
      )
    )
  }
}

const mapStateToProps = createStructuredSelector ({
  token: selectUserToken,
})

export default connect (mapStateToProps)(AuthRequired)

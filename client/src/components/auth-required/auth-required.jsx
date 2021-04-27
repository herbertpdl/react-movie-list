import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { createStructuredSelector } from 'reselect'
import { selectUserToken } from '../../redux/user/user.selector'

const AuthRequired = ({token, orRender}) => {
  return (
    token ? ( orRender ) :
    (
      <Redirect to="/" />
    )
  )
}

const mapStateToProps = createStructuredSelector ({
  token: selectUserToken,
})

export default connect (mapStateToProps)(AuthRequired)

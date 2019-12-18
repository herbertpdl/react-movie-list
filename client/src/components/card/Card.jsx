import React from 'react'

import './Card.scss'

export const Card = props => (
  <div className={`card card--${props.type} card--${props.color}`}>
    {props.children}
  </div>
)
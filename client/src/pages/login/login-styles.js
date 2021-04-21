import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'

export const LoginWrapper = styled(Grid)`
  height: 100%;
  padding-top: 80px;
`

export const LoginCard = styled.div`
  padding: 32px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.90);
  text-align: left;
  p {
    margin: 0;
    font-size: 1.5rem;
  }

  button {
    display: block;
    width: 80%;
    margin: 32px auto 0 auto;
  }
`

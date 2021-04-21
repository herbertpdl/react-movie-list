import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const SearchTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 20px;
  padding-left: 20px;
`

export const SearchTitle = styled(Typography)`
  color: #191919;
  font-weight: 500; 
`

export const SearchSubtitle = styled.span`
  margin-left: 8px;
  background: linear-gradient(90deg,#96f,#3c4ca0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
`

import styled from 'styled-components'

import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'

export const SearchInputWrapper = styled.div`
  width: 60%;
  margin: 10px 0 20px 20px;
`

export const SearchInputLabel = styled(InputLabel)`
  display: block;
  width: fit-content;
  color: #191919!important;
`

export const CustomSearchInput = styled(OutlinedInput)`
  width: 100%;
  height: 50px;
  margin-top: 10px;
`

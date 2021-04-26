import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'

import Icon from '@material-ui/core/Icon'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

import { fetchMovies } from '../../redux/movies/movies.actions'

import { SearchInputWrapper, SearchInputLabel, CustomSearchInput } from './search-input.styles'

const SearchInput = ({ fetchMovies }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    handleSearch()
  }, [inputValue])

  const handleSearch = () => {
    if (inputValue && inputValue.length > 2) {
      fetchMovies({
        title: inputValue,
      });
    }
  }

  return (
    <SearchInputWrapper>
      <SearchInputLabel htmlFor="search-input">
        Digite o nome do filme ou série.
      </SearchInputLabel>
      <CustomSearchInput
        id="search-input"
        onChange={e => setInputValue(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <Icon
              aria-label="search movies"
            >
              <SearchIcon />
            </Icon>
          </InputAdornment>
        }
      />
    </SearchInputWrapper>
  )
}

export default connect(null, { fetchMovies })((SearchInput))

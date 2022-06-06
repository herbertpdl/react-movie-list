import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Icon from '@material-ui/core/Icon'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

import { SearchInputWrapper, SearchInputLabel, CustomSearchInput } from './search-input.styles'

const SearchInput = ({ onSearch, initialValue }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(initialValue)
  }, [initialValue])

  const handleSearch = ({ target: { value } }) => {
    setInputValue(value)

    if (value && value.length > 2) {
      onSearch({
        title: value,
      })
    }
  }

  return (
    <SearchInputWrapper>
      <SearchInputLabel htmlFor="search-input">
        Digite o nome do filme ou série.
      </SearchInputLabel>
      <CustomSearchInput
        id="search-input"
        onChange={handleSearch}
        value={inputValue}
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

export default SearchInput

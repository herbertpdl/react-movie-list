import React from 'react'

import SearchInput from '../../components/search-input/search-input'
import CardList from '../../components/card-list/card-list'

import {
  SearchTitle,
  SearchWrapper,
  SearchSubtitle,
  SearchTitleContainer,
} from './search.styles.js'

const Search = () => {
  return (
    <SearchWrapper>
      <SearchTitleContainer>
        <SearchTitle
          variant="h3"
          component="h1"
        >
          OMDb

          <SearchSubtitle>
            API
          </SearchSubtitle>
        </SearchTitle>
      </SearchTitleContainer>
      <SearchInput />
      <CardList />
    </SearchWrapper>
  )
}

export default Search

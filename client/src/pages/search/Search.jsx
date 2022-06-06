import React, { useState, useEffect } from 'react'
import { useParams, useHistory} from 'react-router-dom'
import { useQuery } from 'react-query'

import SearchInput from '../../components/search-input/search-input'
import CardList from '../../components/card-list/card-list'

import { getMoviesByKeyword } from '../../services'

import {
  SearchTitle,
  SearchWrapper,
  SearchSubtitle,
  SearchTitleContainer,
} from './search.styles.js'

import { debounce } from 'lodash'

const Search = () => {
  const history = useHistory()
  const { movieTitle } = useParams()

  const { data, isLoading } = useQuery(['getMovies', movieTitle], () => getMoviesByKeyword(movieTitle))
  
  const onSearch = debounce(({ title }) => {
    history.push(title)
  }, 300)

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
      <SearchInput onSearch={onSearch} initialValue={movieTitle} />
      {
        isLoading ? <div>Loading...</div> : <CardList movies={data?.Search} />
      }
    </SearchWrapper>
  )
}

export default Search

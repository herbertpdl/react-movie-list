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
  const [searchPage, setSearchPage] = useState(1)

  const { data, isLoading } = useQuery(
    ['getMovies', movieTitle, searchPage],
    () => getMoviesByKeyword(movieTitle, searchPage),
    {
      enabled: movieTitle?.length > 3,
      keepPreviousData: true,
    }
  )

  const changePage = (newPage) => {
    setSearchPage(newPage)
  }
  
  const onSearch = debounce(({ title }) => {
    history.push(`/search/${title}`)
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
      <CardList
        movies={data?.Search}
        totalResults={data?.totalResults}
        loadingMovies={isLoading}
        currentPage={searchPage}
        onPageChange={changePage}
      />
    </SearchWrapper>
  )
}

export default Search

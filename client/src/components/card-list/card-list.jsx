import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

import {
  FavIcon,
  MovieCard,
  SearchResult,
  FavIconActive,
  LoaderWrapper,
  MovieCardMedia,
  MovieCardTitle,
  CustomPagination,
  SearcResultWrapper,
} from './card-list.styles.js'

const CardList = ({ movies = [], loadingMovies, totalResults, onPageChange, currentPage }) => {
  const handleSearch = (event, value = 1) => {
    onPageChange(value)
  }

  const totalPages = Math.ceil( totalResults/10)

  return (
    <SearcResultWrapper>
      { loadingMovies &&
        (
          <LoaderWrapper>
            <CircularProgress />
          </LoaderWrapper>
        )
      }

      <SearchResult>
        {movies.map((movie, index) => (
          <MovieCard key={index}>
            <MovieCardMedia
              image={movie.Poster}
            />

            <MovieCardTitle noWrap>
              { movie.Title }
            </MovieCardTitle>

          </MovieCard>
        ))}
      </SearchResult>

      {/* Pagination is shown only if has more than 10 results */}
      {
       (!!totalResults && !loadingMovies) && (
          <CustomPagination
            color="primary"
            count={totalPages}
            page={currentPage}
            onChange={handleSearch}
          />
       )
      }

    </SearcResultWrapper>
  )
}

export default CardList

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectMoviesList, selectLoadingMovies } from '../../redux/movies/movies.selector'
import { selectUserData } from '../../redux/user/user.selector'

import { fetchMovies, handleFavoriteMovie } from '../../redux/movies/movies.actions'

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

const CardList = ({ movies = [], loadingMovies, userData, fetchMovies, handleFavoriteMovie }) => {
  const [page, setPage] = useState(1)

  const handleSearch = (event, value = 1) => {
    const pageNumber = value

    setPage(pageNumber)

    fetchMovies({
      title: movies.currentSearch,
      page: pageNumber,
      fromPagination: true,
    })
  }

  const renderPagination = () => {
    if (!movies.totalResults || loadingMovies) {
      return null
    }

    return (
      <CustomPagination
        color="primary"
        count={movies.totalPages}
        page={page}
        onChange={handleSearch}
      />
    )
  }

  // const renderFavoriteIcon = (id) => {
  //   if (userData.favoritesMovies.includes(id)) {
  //     return (
  //       <FavIconActive onClick={() => handleFavoriteMovie(id)} />
  //     )
  //   }

  //   return (
  //     <FavIcon onClick={() => handleFavoriteMovie(id)} />
  //   )
  // }

  return (
    <SearcResultWrapper>
      { loadingMovies ?
        (
          <LoaderWrapper>
            <CircularProgress />
          </LoaderWrapper>
        )
        : null
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

            {/* { renderFavoriteIcon(movie.imdbID) } */}

          </MovieCard>
        ))}
      </SearchResult>

      {/* Pagination is shown only if has more than 10 results */}
      { renderPagination() }

    </SearcResultWrapper>
  )
}

const mapStateToProps = createStructuredSelector ({
  movies: selectMoviesList,
  loadingMovies: selectLoadingMovies,
  userData: selectUserData,
})

export default CardList

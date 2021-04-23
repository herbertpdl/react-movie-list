import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectMoviesList, selectLoadingMovies } from '../../redux/movies/movies.selector'
import { selectUserData } from '../../redux/user/user.selector'

import { fetchMovies } from '../../redux/movies/movies.actions'
import { setUserData } from '../../redux/user/user.actions'

import { updateFavoriteMovies } from '../../services'

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

const CardList = ({ movies, loadingMovies, userData, dispatch }) => {
  const [page, setPage] = useState(1)

  const handleSearch = (event, value = 1) => {
    const pageNumber = value

    setPage(pageNumber)

    dispatch(fetchMovies({
      title: movies.currentSearch,
      page: pageNumber,
      fromPagination: true,
    }))
  }

  const handleFavoriteMovies = (id) => {
    const data = userData

    if (data.favoritesMovies.includes(id)) {
      // Find movie id index
      const index = data.favoritesMovies.indexOf(id)

      // Remove movie id from list
      data.favoritesMovies.splice(index, 1)

      updateMovies(data)
    } else {
      // Push movie id to movies list
      data.favoritesMovies.push(id)

      updateMovies(data)
    }
  }

  const updateMovies = (data) => {
    // Update in database
    /* We are sending password again, because
       json-server-auth will encrypt the encrypted passord again */
    updateFavoriteMovies({ ...data, password: '1234'})
      .then(resp => {
        dispatch(setUserData(resp));
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

  const renderFavoriteIcon = (id) => {
    if (userData.favoritesMovies.includes(id)) {
      return (
        <FavIconActive onClick={() => handleFavoriteMovies(id)} />
      )
    }

    return (
      <FavIcon onClick={() => handleFavoriteMovies(id)} />
    )
  }

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
        {movies.moviesList.map((movie, index) => (
          <MovieCard key={index}>
            <MovieCardMedia
              image={movie.Poster}
            />

            <MovieCardTitle noWrap>
              { movie.Title }
            </MovieCardTitle>

            { renderFavoriteIcon(movie.imdbID) }

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

export default connect(mapStateToProps)(CardList)

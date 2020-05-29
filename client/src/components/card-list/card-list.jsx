import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectMoviesList, selectLoadingMovies } from '../../redux/movies/movies.selector'
import { selectUserData } from '../../redux/user/user.selector'

import { fetchMovies } from '../../redux/movies/movies.actions'
import { setUserData } from '../../redux/user/user.actions'

import { updateFavoriteMovies } from '../../services'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CircularProgress from '@material-ui/core/CircularProgress'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Typography from '@material-ui/core/Typography'
import Pagination from '@material-ui/lab/Pagination'

import useStyles from './card-list.styles.js'

const CardList = ({ movies, loadingMovies, userData, dispatch }) => {
  const classes = useStyles()

  const [page, setPage] = useState(1)

  const handleSearch = (event, value = 1) => {
    const pageNumber = value

    setPage(pageNumber)

    dispatch(fetchMovies(movies.currentSearch, pageNumber))
  }

  const handleFavoriteMovies = (id) => {
    const data = userData

    if (data.favoritesMovies.includes(id)) {
      // Find movie id index
      const index = data.favoritesMovies.indexOf(id)

      // Remove movie id from list
      data.favoritesMovies.splice(index, 1)

      // Update in database
      /* We are sending password again, because
      json-server-auth will encrypt the encrypted passord again */
      updateFavoriteMovies({ ...data, password: '1234'})
        .then(resp => {
          dispatch(setUserData(resp));
        })
    } else {
      // Push movie id to movies list
      data.favoritesMovies.push(id)

      // Update in database
      /* We are sending password again, because
      json-server-auth will encrypt the encrypted passord again */
      updateFavoriteMovies({ ...data, password: '1234'})
        .then(resp => {
          dispatch(setUserData(resp));
        })
    }
  }

  const renderPagination = () => {
    if (!movies.totalResults || loadingMovies) {
      return null
    }

    return (
      <Pagination
        className={classes.pagination}
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
        <FavoriteIcon className={classes.favIconActive} onClick={() => handleFavoriteMovies(id)} />
      )
    }

    return (
      <FavoriteBorderIcon className={classes.favIcon} onClick={() => handleFavoriteMovies(id)} />
    )
  }

  return (
    <div className={classes.root}>
      { loadingMovies ?
        (
          <div className={classes.loaderWrapper}>
            <CircularProgress />
          </div>
        )
        : null
      }

      <div className={classes.searchResult}>

        {movies.moviesList.map((movie, index) => (
          <Card className={classes.card} key={index}>
            <CardMedia
              className={classes.media}
              image={movie.Poster}
            />

            <Typography className={classes.title} noWrap >
              { movie.Title }
            </Typography>

            { renderFavoriteIcon(movie.imdbID) }

          </Card>
        ))}
      </div>

      {/* Pagination is shown only if has more than 10 results */}
      { renderPagination() }

    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  movies: selectMoviesList,
  loadingMovies: selectLoadingMovies,
  userData: selectUserData,
})

export default connect(mapStateToProps)(CardList)

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectMoviesList, selectLoadingMovies } from '../../redux/movies/movies.selector'

import { fetchMovies } from '../../redux/movies/movies.actions'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CircularProgress from '@material-ui/core/CircularProgress'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Typography from '@material-ui/core/Typography'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 24,
  },
  loaderWrapper: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexGrow: 1,
  },
  searchResult: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 225px)',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(auto-fill, 150px)',
    },
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    padding: '0 20px',
    boxSizing: 'border-box'
  },
  card: {
    maxWidth: 180,
    marginBottom: '16px',
    paddingBottom: 8,
    [theme.breakpoints.down('md')]: {
      maxWidth: 150,
    },
  },
  media: {
    width: 180,
    height: 266,
    marginBottom: 8,
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      width: 150,
    },
  },
  title: {
    display: 'block',
    marginLeft: 4,
    marginBottom: 8,
    textAlign: 'left',
    fontSize: 14,
  },
  favIcon: {
    display: 'block',
    marginLeft: 4,
    cursor: 'pointer',

    '&.isFav': {
      color: 'red',
    }
  },
  pagination: {
    width: 'fit-content',
    margin: '0 auto',
  },
}))

const CardList = ({ movies, loadingMovies, dispatch }) => {
  const classes = useStyles()

  const [page, setPage] = useState(1)

  const handleSearch = (event, value) => {
    const pageNumber = value

    setPage(pageNumber)

    dispatch(fetchMovies(movies.currentSearch, pageNumber))
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

            <FavoriteBorderIcon className={classes.favIcon} />
          </Card>
        ))}
      </div>

      {/* Pagination is shown only if has more than 10 results */}
      {
        movies.totalResults > 10 ?
        (
          <Pagination
            className={classes.pagination}
            color="primary"
            count={movies.totalPages}
            page={page}
            onChange={handleSearch}
          />
        )
        : null
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  movies: selectMoviesList,
  loadingMovies: selectLoadingMovies,
})

export default connect(mapStateToProps)(CardList)

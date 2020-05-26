import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectMoviesList, selectLoadingMovies } from '../../redux/movies/movies.selector'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CircularProgress from '@material-ui/core/CircularProgress'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Typography from '@material-ui/core/Typography'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
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

    '&.isFav': {
      color: 'red',
    }
  }
}))

const CardList = ({ moviesList, loadingMovies }) => {
  const classes = useStyles()

  return (
    <div>
      { loadingMovies ?
        (
          <div className={classes.loaderWrapper}>
            <CircularProgress />
          </div>
        )
        : null
      }

      <div className={classes.searchResult}>

        {moviesList.map((movie, index) => (
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={movie.Poster}
            />

            <Typography className={classes.title} noWrap >
              { movie.Title }
            </Typography>

            <FavoriteIcon className={classes.favIcon} />
          </Card>
        ))}
      </div>

      <Pagination count={10} color="primary" />
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  moviesList: selectMoviesList,
  loadingMovies: selectLoadingMovies,
})

export default connect(mapStateToProps)(CardList)

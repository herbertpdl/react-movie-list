import React from 'react'

import Typography from '@material-ui/core/Typography';
import SearchInput from '../../components/search-input/search-input'
import CardList from '../../components/card-list/card-list'

import useStyles from './search.styles'

const Search = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography
          className={classes.title}
          variant="h3"
          component="h1"
        >
          OMDb

          <span className={classes.subtitle}>
            API
          </span>
        </Typography>
      </div>
      <SearchInput />
      <CardList />
    </div>
  )
}

export default Search

import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import SearchInput from '../../components/search-input/search-input'
import CardList from '../../components/card-list/card-list'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}))

const Search = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SearchInput className={classes.searchInput} />
      <CardList />
    </div>
  )
}

export default Search

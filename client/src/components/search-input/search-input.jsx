import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import _ from 'lodash'

import { withStyles } from '@material-ui/styles';
import Icon from '@material-ui/core/Icon'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

import { fetchMovies } from '../../redux/movies/movies.actions'

import styles from './search-input.styles'

const SearchInput = ({ classes, fetchMovies }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    handleSearch()
  }, [inputValue])

  const handleSearch = () => {
    if (inputValue && inputValue.length > 2) {
      fetchMovies({
        title: inputValue,
      });
    }
  }

  return (
    <div className={classes.searchInputWrapper}>
      <InputLabel htmlFor="search-input" className={classes.searchInputLabel}>
        Digite o nome do filme ou série.
      </InputLabel>
      <OutlinedInput
        id="search-input"
        className={classes.searchInput}
        onChange={e => setInputValue(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <Icon
              aria-label="search movies"
            >
              <SearchIcon />
            </Icon>
          </InputAdornment>
        }
      />
    </div>
  )
}

SearchInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, { fetchMovies })(withStyles(styles)(SearchInput))

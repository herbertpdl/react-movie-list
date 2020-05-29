import React, { Component } from 'react'
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

class SearchInput extends Component {
  handleSearch = () => (event) => {
    /* signal to React not to nullify the event object */
    event.persist();

    if (!event.target.value || event.target.value.length < 3) return

    if (!this.debouncedFn) {
      this.debouncedFn = _.debounce(() => {
        let string = event.target.value

        const { fetchMovies } = this.props

        fetchMovies(string);

      }, 300)
    }

    this.debouncedFn();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.searchInputWrapper}>
        <InputLabel htmlFor="search-input" className={classes.searchInputLabel}>
          Digite o nome do filme ou série.
        </InputLabel>
        <OutlinedInput
          id="search-input"
          className={classes.searchInput}
          onChange={this.handleSearch()}
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
}

SearchInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, { fetchMovies })(withStyles(styles)(SearchInput))

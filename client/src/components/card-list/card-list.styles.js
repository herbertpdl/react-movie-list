import { makeStyles } from '@material-ui/core/styles'

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

export default useStyles

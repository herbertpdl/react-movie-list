import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingTop: 20,
    paddingLeft: 20,
  },
  title: {
    color: '#191919',
    fontWeight: 500,
  },
  subtitle: {
    marginLeft: 8,
    background: '-webkit-linear-gradient(90deg,#96f,#3c4ca0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '1.5rem',
  }
}))

export default useStyles

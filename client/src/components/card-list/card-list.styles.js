import styled from 'styled-components';

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Pagination from '@material-ui/lab/Pagination'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

export const SearcResultWrapper = styled.div`
  padding: 0 20px 20px 20px;
`

export const CustomPagination = styled(Pagination) `
  width: fit-content;
  margin: 0 auto;
`

export const FavIconActive = styled(FavoriteIcon) `
  color: #ff2c2b;
  display: block;
  margin-left: 4px;
  cursor: pointer;
`
export const FavIcon = styled(FavoriteBorderIcon) `
  display: block;
  margin-left: 4px;
  cursor: pointer;
`

export const LoaderWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`

export const SearchResult = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 225px);
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box

  @media(max-width: 1280px) {
    grid-template-columns: repeat(auto-fill, 150px);
  }
`
export const MovieCard = styled(Card)`
  max-width: 180px;
  margin-bottom: 16px;
  padding-bottom: 8px;

  @media(max-width: 1280px) {
    max-width: 150px;
  }
`

export const MovieCardMedia = styled(CardMedia)`
  width: 180px;
  height: 266px;
  margin-bottom: 8px;
  background-size: 'cover';

  @media(max-width: 1280px) {
    max-width: 150px;
  }
`
export const MovieCardTitle = styled(Typography)`
  display: block;
  margin-left: 4px;
  margin-bottom: 8px;
  text-align: left;
  font-size: 14px;
`

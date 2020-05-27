import { HTTP } from './http'

export function getMoviesByKeyword(title, page) {
  return HTTP.get(`http://www.omdbapi.com/?apikey=9f4b1efd&s=${title}&page=${page}`)
    .then(resp => resp.data);
}

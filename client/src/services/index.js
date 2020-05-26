import { HTTP } from './http'

export function getMoviesByKeyword(title) {
  return HTTP.get(`http://www.omdbapi.com/?apikey=9f4b1efd&s=${title}`)
    .then(resp => resp.data);
}

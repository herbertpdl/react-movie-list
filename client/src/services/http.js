import axios from 'axios'

export const HTTP = axios.create({
  timeOut: 2000,
})

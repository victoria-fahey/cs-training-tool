import request from 'superagent'

const coralURL = '/cs-training/'

export function getCorals () {
  return request
    .get(coralURL)
    .then(response => response.body)
}

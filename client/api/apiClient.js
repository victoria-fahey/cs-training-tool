import request from 'superagent'

const coralURL = '/cs-training/'
const fishURL = '/cs-training/fish-id/'
const bleachURL = '/cs-training/coral-bleaching/'

export function getCorals() {
  return request
    .get(coralURL)
    .then(response => response.body)
}

export function getFish() {
  return request
    .get(fishURL)
    .then(response => response.body)
}

export function getBleach() {
  return request
    .get(bleachURL)
    .then(response => response.body)
}

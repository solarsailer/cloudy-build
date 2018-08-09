const {Buffer} = require('buffer')
const {URL} = require('url')
const axios = require('axios')

const API_HOST = 'https://build-api.cloud.unity3d.com'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

function toBasicAuth(username, password = '') {
  const value = toBase64(`${username}:${password}`)

  return `Basic ${value}`
}

function toBase64(val) {
  return Buffer.from(val).toString('base64')
}

function toUrl(endpoint) {
  return new URL(endpoint, API_HOST).toString()
}

async function get(endpoint, key, params = {}) {
  const url = toUrl(endpoint)

  const options = {
    headers: {
      Authorization: toBasicAuth(key)
    },
    params
  }

  return axios.get(url, options)
}

async function post(endpoint, key, data = {}) {
  const url = toUrl(endpoint)

  const options = {
    headers: {
      Authorization: toBasicAuth(key)
    }
  }

  return axios.post(url, data, options)
}

module.exports = {
  get,
  post
}

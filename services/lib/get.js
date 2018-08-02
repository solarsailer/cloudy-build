const {Buffer} = require('buffer')
const {URL} = require('url')
const axios = require('axios')

const API_HOST = 'https://build-api.cloud.unity3d.com'

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

module.exports = async (endpoint, key, params = {}) => {
  const url = toUrl(endpoint)
  const options = {
    headers: {
      Authorization: toBasicAuth(key)
    },
    params
  }

  return axios.get(url, options)
}

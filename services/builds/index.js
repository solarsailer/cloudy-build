const querystring = require('querystring')
const url = require('url')

const getBuilds = require('./src/builds')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

function parseRequest(request) {
  return querystring.parse(url.parse(request.url).query)
}

module.exports = async request => {
  const {key, org, project} = parseRequest(request)

  if (!key) {
    return {code: 401, message: 'Unauthorized: no API Key provided.'}
  }

  if (!org) {
    return {code: 401, message: 'Unauthorized: no organization provided.'}
  }

  try {
    const builds = await getBuilds(key, org, project)
    return builds
  } catch (e) {
    return {message: e.message}
  }
}

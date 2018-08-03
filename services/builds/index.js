const parseRequest = require('../lib/params')
const getBuilds = require('./src/builds')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

module.exports = async (request, response) => {
  const {key, org, project} = parseRequest(request)

  if (!key) {
    return {code: 401, message: 'Unauthorized: no API Key provided.'}
  }

  if (!org) {
    return {code: 401, message: 'Unauthorized: no organization provided.'}
  }

  response.setHeader('Access-Control-Allow-Origin', '*')

  try {
    const builds = await getBuilds(key, org, project)
    return builds
  } catch (e) {
    return {message: e.message}
  }
}

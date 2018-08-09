const {wrapSuccess, wrapError} = require('../lib/response-wrapper')
const parseRequest = require('../lib/params')
const getBuilds = require('./src/builds')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

const error = (code, message) => wrapError(code, message, [])

module.exports = async (request, response) => {
  // Make CORS.
  response.setHeader('Access-Control-Allow-Origin', '*')

  // Find params.
  const {key, org, project} = parseRequest(request)

  if (!key) {
    return error(401, 'No API Key provided.')
  }

  if (!org) {
    return error(401, 'No organization provided.')
  }

  try {
    const builds = await getBuilds(key, org, project)

    return wrapSuccess(builds)
  } catch (e) {
    return error(404, e.message)
  }
}

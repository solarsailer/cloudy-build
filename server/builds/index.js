const {wrapSuccess, wrapError} = require('../lib/response-wrapper')
const getBuilds = require('./builds')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

const error = (code, message) => wrapError(code, message, [])

module.exports = async ({key, org, project}) => {
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

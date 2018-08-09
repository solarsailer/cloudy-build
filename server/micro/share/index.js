const parseRequest = require('../lib/params')
const {wrapSuccess, wrapError} = require('../lib/response-wrapper')
const getShareId = require('./src/share')

const SHARE_URL = 'https://developer.cloud.unity3d.com/share/'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

const error = (code, message) => wrapError(code, message, [])

module.exports = async (request, response) => {
  // Make CORS.
  response.setHeader('Access-Control-Allow-Origin', '*')

  // Parse params.
  const {key, link} = parseRequest(request)

  if (!key) {
    return error(401, 'No API Key provided.')
  }

  if (!link) {
    return error(401, 'No share link provided.')
  }

  try {
    const shareId = await getShareId(key, link)
    const shareLink = SHARE_URL + shareId

    return wrapSuccess(shareLink)
  } catch (e) {
    return error(404, e.message)
  }
}

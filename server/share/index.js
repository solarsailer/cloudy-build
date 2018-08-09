const {wrapSuccess, wrapError} = require('../lib/response-wrapper')
const getShareId = require('./share')

const SHARE_URL = 'https://developer.cloud.unity3d.com/share/'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

const error = (code, message) => wrapError(code, message, [])

module.exports = async ({key, link}) => {
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

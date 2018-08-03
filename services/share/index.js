const parseRequest = require('../lib/params')
const getShareId = require('./src/share')

const SHARE_URL = 'https://developer.cloud.unity3d.com/share/'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

module.exports = async (request, response) => {
  const {key, link} = parseRequest(request)

  if (!key) {
    return {code: 401, message: 'Unauthorized: no API Key provided.'}
  }

  if (!link) {
    return {code: 401, message: 'Unauthorized: no share link provided.'}
  }

  response.setHeader('Access-Control-Allow-Origin', '*')

  try {
    const shareId = await getShareId(key, link)
    const shareLink = SHARE_URL + shareId
    return {link: shareLink}
  } catch (e) {
    return {message: e.message}
  }
}

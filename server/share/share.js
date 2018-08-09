const {post} = require('../lib/request')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

module.exports = async (key, shareEndpoint) => {
  return post(shareEndpoint, key)
    .then(res => res.data)
    .then(res => res.shareid)
}

const querystring = require('querystring')
const url = require('url')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

module.exports = request => {
  return querystring.parse(url.parse(request.url).query)
}

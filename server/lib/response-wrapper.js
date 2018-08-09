// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

const wrapSuccess = data => {
  return {
    code: 200,
    message: 'OK',
    data
  }
}

const wrapError = (code, message, data) => {
  return {
    code,
    message,
    data
  }
}

module.exports = {wrapSuccess, wrapError}

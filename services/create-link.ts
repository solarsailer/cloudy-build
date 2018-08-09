import axios from 'axios'

// -------------------------------------------------------------
// Functions.
// -------------------------------------------------------------

export async function createLink(key, shareLink) {
  const result = await axios
    .get('/api/share/', {
      params: {
        key,
        link: shareLink
      }
    })
    .then(res => res.data)

  if (result.code && result.code !== 200) {
    return {data: '', hasError: true, message: result.message}
  }

  return {data: result.data, hasError: false}
}

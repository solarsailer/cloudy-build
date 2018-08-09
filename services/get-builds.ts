import axios from 'axios'

// -------------------------------------------------------------
// Functions.
// -------------------------------------------------------------

export interface BuildResponse {
  data: Array<any>
  hasError: boolean
  message?: string
}

export async function getBuilds({key, org, project}): Promise<BuildResponse> {
  const result = await axios
    .get(`/api/builds/${org}/`, {
      params: {
        key,
        project
      }
    })
    .then(res => res.data)

  if (result.code && result.code !== 200) {
    return {data: [], hasError: true, message: result.message}
  }

  return {data: result.data, hasError: false}
}

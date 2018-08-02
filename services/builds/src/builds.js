const {get: _get} = require('lodash')

const get = require('./get')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

function getBuildsEndpoint({org, project, target}) {
  return `/api/v1/orgs/${org}/projects/${project}/buildtargets/${target}/builds`
}

function findBuildForTarget(org, project, target, key) {
  const endpoint = getBuildsEndpoint({org, project, target})

  return (
    get(endpoint, key, {per_page: 1, buildStatus: 'success'})
      .then(res => res.data)

      // And get the actual data with the download link.
      .then(res => ({
        id: res.build,
        org: res.orgId,
        project: res.project,
        target: res.buildtargetid,
        link: _get(res, ['links', 'download_primary', 'href'])
      }))
  )
}

module.exports = async (data, key) => {
  const promises = data.map(item => {
    const targets = item.targets
    const builds = targets.map(x =>
      findBuildForTarget(item.org, item.project, x, key)
    )

    return Promise.all(builds)
  }, [])

  return Promise.all(promises)
}

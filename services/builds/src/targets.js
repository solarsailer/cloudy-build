const get = require('./get')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

function getTargetsEndpoint({org, project}) {
  return `/api/v1/orgs/${org}/projects/${project}/buildtargets`
}

function findTargetsForProject(project, key) {
  return (
    get(getTargetsEndpoint(project), key)
      .then(res => res.data)

      // We just want the target ids.
      .then(res => res.map(x => x.buildtargetid))

      // Merge the project object with the list of targets.
      .then(res => ({...project, targets: res}))
  )
}

module.exports = async (projects, key) => {
  const result = projects.map(project => findTargetsForProject(project, key))

  return Promise.all(result)
}

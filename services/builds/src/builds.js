const get = require('./get')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

const getOrgBuildsEnpoint = org => `/api/v1/orgs/${org}/builds`

const getProjectBuildsEnpoint = (org, project) =>
  `/api/v1/orgs/${org}/projects/${project}/buildtargets/_all/builds`

function mapBuild(item) {
  return {
    buildNumber: item.build,
    buildTypeName: item.buildTargetName,
    buildTypeId: item.buildtargetid,
    buildTime: item.finished,
    platform: item.platform,
    projectName: item.projectName,
    projectId: item.projectId,
    org: item.orgId,
    icon: item.links.icon.href,
    share: item.links.create_share.href,
    commit: item.lastBuiltRevision
  }
}

module.exports = async (key, org, project) => {
  const endpoint = project
    ? getProjectBuildsEnpoint(org, project)
    : getOrgBuildsEnpoint(org)

  return get(endpoint, key, {
    buildStatus: 'success',
    per_page: 50
  })
    .then(res => res.data)
    .then(res => res.map(mapBuild))
}

const get = require('./get')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

const getProjectsEndpoint = () => '/api/v1/projects'

function mapProject(item) {
  return {
    project: item.projectid,
    org: item.orgid
  }
}

module.exports = async key => {
  return get(getProjectsEndpoint(), key)
    .then(res => res.data)
    .then(res => res.map(mapProject))
}

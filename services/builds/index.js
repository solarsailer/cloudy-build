const getProjects = require('./src/projects')
const getTargets = require('./src/targets')
const getBuilds = require('./src/builds')

const API_KEY = '3cc734e8e7c41a080149a3fead5e0363'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

module.exports = async () => {
  try {
    const projects = await getProjects(API_KEY)
    const targets = await getTargets(projects, API_KEY)
    const builds = await getBuilds(targets, API_KEY)
    return builds
  } catch (e) {
    return {message: e.message}
  }
}

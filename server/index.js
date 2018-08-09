const express = require('express')
const {parse} = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

const getBuilds = require('./builds/index')
const getShare = require('./share/index')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

const query = req => Object.assign({}, req.query, req.params)

app.prepare().then(() => {
  const server = express()

  // Custom routes.
  server.get('/api/builds/:org/', async (req, res) => {
    const result = await getBuilds(query(req))
    res.json(result)
  })

  server.get('/api/share/', async (req, res) => {
    const result = await getShare(query(req))
    res.json(result)
  })

  // Default next.js route.
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const port = process.env.PORT || 3000

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

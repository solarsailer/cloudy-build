const compression = require('compression')
const express = require('express')
const {parse} = require('url')
const next = require('next')

const isDev = process.env.NODE_ENV !== 'production'
const isProd = !isDev
const app = next({isDev})
const handle = app.getRequestHandler()

const getBuilds = require('./builds/index')
const getShare = require('./share/index')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

const query = req => Object.assign({}, req.query, req.params)

app.prepare().then(() => {
  const server = express()

  if (isProd) {
    server.use(compression())
  }

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

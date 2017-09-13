const express = require('express')
const app = express()
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const StaticRouter = require('react-router').StaticRouter
const Router = require('./router.jsx')

app.use(express.static('dist'))

app.get('*', (req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Router/>
    </StaticRouter>
  )
  res.send(`
      <!doctype html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway:300" rel="stylesheet">
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div id="content">${html}</div>
          </div> <!-- .container-->
        </div> <!-- .wrapper-->
        <footer>
          <small><a href="https://opensource.org/licenses/MIT">MIT</a></small>
        </footer>
        <script src="/js/bundle.js"></script>
      </body>
      </html>
    `)
})

app.listen(3030, () => {
  console.log('listening on port 3030')
})

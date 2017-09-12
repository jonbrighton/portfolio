const ReactDOM = require('react-dom')
const React = require('react')
const BrowserRouter = require('react-router-dom').BrowserRouter

const Router = require('./router.jsx')

ReactDOM.render(
//need / for self closing elements
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('content')
)

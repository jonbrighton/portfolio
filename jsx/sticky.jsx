const React = require('react')

const BrowserRouter = require('react-router-dom').BrowserRouter
const Router = require('./router.jsx')
const Link = require('react-router-dom').Link
const Drawer = require('./drawer.jsx')

class Sticky extends React.Component {
  render(){
    return (
      <Drawer />
    )
  }
}
module.exports = Sticky

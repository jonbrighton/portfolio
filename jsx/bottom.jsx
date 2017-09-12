const React = require('react')

const BrowserRouter = require('react-router-dom').BrowserRouter
const Router = require('./router.jsx')
const Link = require('react-router-dom').Link
const Maps = require('./maps.jsx')

class Bottom extends React.Component {
  render(){
    return(
    <div className="bottom-home">
      <div className="contact">

      <div className="map-location">
        <Maps />
        </div>{/* map-location */}
      <div className="information">
        <h2>Contact Me</h2>
      <h3>Phone number</h3>
      <p>0277788931</p>
      </div>
        </div>{/* .contact */}

      </div>

    )
  }
}

module.exports = Bottom

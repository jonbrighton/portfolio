const ReactDOM = require('react-dom')
const React = require('react')
const Route = require('react-router-dom').Route
const Link = require('react-router-dom').Link

const About = require('./about.jsx')
const Home = require('./home.jsx')
const Restaurant = require('./restaurant.jsx')
const Cause = require('./cause.jsx')
const Ecommerce = require('./ecommerce.jsx')
const Branding = require('./branding.jsx')
const Sticky = require('./sticky.jsx')
const Maps = require('./maps.jsx')
const Bottom = require('./bottom.jsx')
const Bottom2 = require('./bottom.jsx')
const Footer = require('./footer.jsx')
// const HelloWorld = require('./hello-world.jsx')
class Router extends React.Component {
  render() {
    return (
    <div>
      {/* <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/restaurant">Restaurant</Link>
    </li>
    <li>
      <Link to="/tutorial">Tutorial</Link>
    </li>
    <li>
      <Link to="/ecommerce">Ecommerce</Link>
    </li>
    <li>
      <Link to="/branding">Branding</Link>
    </li>
  </ul> */}
  <Route exact path = "/" component = {Home} />
    <Route path = "/maps" component={Maps} />
    <Route path = "/about" component={About} />
    <Route path = "/restaurant" component = {Restaurant} />
    <Route path = "/cause" component={Cause}/>
    <Route path = "/ecommerce" component = {Ecommerce} />
    <Route path ="/branding" component={Branding}/>
    <Route path ="/sticky" component={Sticky}/>
    <Route path ="/bottom" component={Bottom}/>
    <Route path ="/bottom2" component={Bottom2}/>
    <Route path ="/footer" component={Footer}/>
    < /div>
  )
}
}
module.exports = Router

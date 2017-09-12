const React = require('react')

const BrowserRouter = require('react-router-dom').BrowserRouter
const Router = require('./router.jsx')
const Link = require('react-router-dom').Link

class Sticky extends React.Component {
  render(){
    return (
      <div className="sticky">
        <ul className="sticky-right">
          <h3 className="show-title">Showcase</h3>
          <Link to="/"><img className="small-logo" src="/img/small-logo.png" alt="/img/small-logo.png"/></Link>
          <li className="a"><Link to="/">Portfolio</Link></li>
          <li className="d"><Link to="/branding">Branding</Link></li>
          <li className="b"><Link to="/restaurant">Restaurant</Link></li>
          <li className="c"><Link to="/ecommerce">Ecommerce</Link></li>
          <li className="e"><Link to="/cause">Non Profit</Link></li>
        </ul>
      </div>
    )
  }
}
module.exports = Sticky

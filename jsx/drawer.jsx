const React = require('react')
const Link = require('react-router-dom').Link

class Drawer extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
    this.openDrawer = this.openDrawer.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)
  }
  openDrawer(e) {
    e.preventDefault()
    this.setState({clicked: true});
  }
  closeDrawer(e) {
    e.preventDefault()
    this.setState({clicked: false});
  }
  render() {
    return (
      <div>
        <a href="" className="open" onClick={this.openDrawer}><span>Open</span></a>
        <div className={this.state.clicked ? 'open-drawer' : 'close-drawer'}>
          <a href="" className="close" onClick={this.closeDrawer}><span>Close</span></a>
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
      </div>
    )
  }
}

module.exports = Drawer

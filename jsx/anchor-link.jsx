const React = require('react')

class AnchorLink extends React.Component {
  constructor(props) {
    super(props)
    this.smoothScroll = this.smoothScroll.bind(this)
  }
  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }
  smoothScroll(e) {
    e.preventDefault()
    const id = e.target.getAttribute('href').slice(1)
    window.scroll({
      top: document.getElementById(`${id}`).offsetTop,
      behavior: 'smooth'
    })
  }
  render() {
    return (
      <a href={this.props.href} className="img" onClick={this.smoothScroll}>{this.props.children}</a>
    )
  }
}

module.exports = AnchorLink

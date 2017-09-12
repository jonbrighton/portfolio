const React = require('react')
const Sticky = require('./sticky.jsx')

class Ecommerce extends React.Component {
  render () {
    return(
      <div className="push">

        <div className="push-over">
        <Sticky />
        <div className="branding-background">
        <img src="/img/mockup-ecommerce.png" alt="mockup"/>
        </div>
        <h2 className="premier-header"> Ecommerce</h2>
        <div className="brief">
          <h3>The Brief</h3>
          <p>To create a ecommerce website, in which we were to do the following: </p>
          <ul>
            <li>Choose a client to create your ecommerce solution for</li>
            <li>Design and build a device responsive shopping cart</li>
            <li>Populate the shopping cart</li>
          </ul>
          <h3>The Objectives</h3>
            <ul>
              <li>Ecommerce website with the potential to become a live website</li>
              <li>Mobile first device responsive design</li>
              <li>Demonstrate knowledge of the templating syntax inherent to the chosen ecommerce CMS through building a bespoke website design</li>
              <li>Align any design work to print media or signage for the business</li>
              <li>Demonstrate innovation in visual design</li>

            </ul>
          </div>
          <div className="brief2">
          <h3>Design Choices</h3>
          <p>this is where I describe the design choices </p>
          </div>

        <div className="branding-box">
          <h3>Skills used in Brief</h3>
        </div>
        <div className="brief-link">
          <h3>Check out the site</h3>
        </div>
        </div>
      </div>
    )
  }
}

module.exports = Ecommerce

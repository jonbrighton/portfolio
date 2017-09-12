const React = require('react')

const BrowserRouter = require('react-router-dom').BrowserRouter
const Router = require('./router.jsx')
const Link = require('react-router-dom').Link
const Sticky = require('./sticky.jsx')


class Branding extends React.Component {
  render(){
    return(

      <div className="push">
        <Sticky />

        <div className="push-over">

        <div className="branding-background">
        <img src="/img/mockup-branding.png" alt="mockup"/>
        </div>
        <h2 className="premier-header">ITU Branding Guidelines</h2>
        <div className="brief">
          <h3>The Brief check</h3>
          <p>To create a website for a company's brand guidelines, The purpose of this website is for third parties to have a clear set of guidelines as to how the brand works. These guidelines may include the brand's history, vision, personality, mission statement colour palett type style, image style, photography or logo use. A successful website is considered to have the following: </p>
          <ul>
            <li>Define or establish a brand</li>
            <li>Source or create brand guidelines</li>
            <li>Build a device responsive website</li>
            <li>Use a Javascript plugin</li>
            <li>Host the website to Github</li>
          </ul>
          <h3>The Objectives</h3>
            <ul>
              <li>Define and adhere to brand guidelines</li>
              <li>A device responsive website</li>
              <li>Enhance website with Javascript plugins</li>


            </ul>
          </div>
          <div className="brief2">
          <h2>Design Choices</h2>
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

module.exports = Branding

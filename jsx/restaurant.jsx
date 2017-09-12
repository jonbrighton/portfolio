const React = require('react')
const Sticky = require('./sticky.jsx')

class Restaurant extends React.Component {
  render() {
    return (
      <div className="push">

        <div className="push-over">
        <Sticky />
        <div className="branding-background">
        <img src="/img/mockup-restaurante.png" alt="mockup"/>
        </div>
        <h2 className="premier-header">Cuisine Website </h2>
        <div className="brief">
          <h3>The Brief</h3>
          <p>To create a cuisine website, in which the website further enhances their brand with a contemporary design. To be successful, one must do the following: </p>
          <ul>
            <li>Define a cuisine company or brand</li>
            <li>Create a Hi-Fi mockup of the site design</li>
            <li>Build a device responsive website</li>
            <li>Use Javascript to enhance the website</li>
            <li>Host your website on Github</li>
          </ul>
          <h3>The Objectives</h3>
            <ul>
              <li>Investigate cusine sites</li>
              <li>Research site mockups</li>
              <li>Incoporate a site mockup in the design process</li>
              <li>A device responsive website</li>
              <li> Explore and integrate Javascript</li>

            </ul>
          </div>
          <div className="brief2">
          <h3>Design Choices</h3>
          <p>For this cuisine site I chose to rebrand and redesign a local restaurant in Birkenhead. I have enjoyed their cuisine several times, but their website was outdated and needed a bit of a modern upgrade. The design I choose was to mesh the old with the new, while still maintaining some of the treasured features that makes their restaurant successful. An old Italian Charm which enjoyes wine, food and company. </p>
          <h4>typography choices</h4>
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
module.exports = Restaurant

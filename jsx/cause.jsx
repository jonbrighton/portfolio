const React = require('react')
const Sticky = require('./sticky.jsx')

class Cause extends React.Component {
  render() {
    return (
      <div className="push">
        <div className="push-over">
        <Sticky />
        <div className="branding-background">
        <img src="/img/mockup-non-profit.png" alt="mockup"/>
        </div>
        <h2 className="premier-header">Buona Sera Restaurante </h2>
        <div className="brief">
          <h3>The Brief</h3>
          <p>Create a landing page for a NGO for their new campaign. The webpage will function as defining the issue linking to further information on their webpage. Primarily this webpage is a call to action.  To be successful, the website must do the following: </p>
          <ul>
            <li>Define a campaign</li>
            <li>Design or source assets for the campaign</li>
            <li>Build a device responsive landing page</li>
            <li>Implement effective design strategy to direct users to your give call to action</li>
            <li>Use Sass</li>
            <li>Host your website on Github</li>
          </ul>
          <h3>The Objectives</h3>
            <ul>
              <li>Trigger emotino through the design</li>
              <li>A device responsive landing page</li>
              <li>Effective design that engages the viewer</li>
              <li>Generate assets to accompany your website build i.e. graphics logo, icons, textures, etc...</li>
              <li> Use a CSS proprocessing language (Sass) to improve workflow</li>

            </ul>
          </div>
          <div className="brief2">
          <h3>Design Choices</h3>
          <p>For this cuisine site I chose to rebrand and redesign a local restaurant in Birkenhead. I have enjoyed their cuisine several times, but their website was outdated and needed a bit of a modern upgrade. The design I choose was to mesh the old with the new, while still maintaining some of the treasured features that makes their restaurant successful. An old Italian Charm which enjoyes wine, food and company. </p>
          <h4>typography choices</h4>
          </div>

        <div className="branding-box">
          <h2>Skills used in Brief</h2>
        </div>
        <div className="brief-link">
          <h2>Check out the site</h2>
        </div>
        </div>
      </div>

    )
  }
}
module.exports = Cause

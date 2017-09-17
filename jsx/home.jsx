const React = require('react')
const Branding = require('./branding.jsx')
const Link = require('react-router-dom').Link
const Maps = require('./maps.jsx')
const Footer = require('./footer.jsx')
const Bottom = require('./bottom.jsx')
const AnchorLink = require('./anchor-link.jsx')

class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="opening">
          <div className="box">
            <h2 className="move">
              <Link to="/branding">Design</Link>
            </h2>
            <h2 className="move2">
              <Link to="/branding">Develop</Link>
            </h2>
            <div className="logo"></div>

            <h2 className="move3">
              <Link to="/branding">UX</Link>
            </h2>
            <h2 className="move4">
              <Link to="/branding">Showcase</Link>
            </h2>
            {/* <a href='#section1'> tex</a> */}
            <AnchorLink href="#down"></AnchorLink>

          </div>

          {/* <img src={"/img/downward-arrow.png"} alt="arrow down"/> */}
        </div>
        {/* <section className='indigo' ref={(section) => {
          this.Indigo = section;
        }}></section> */}
        <section id="down"></section>
        <div className="showcase-title">
          <h2>Showcase</h2>
        </div>
        <div className="showcase">
          {/* <Link to="/restaurant"></Link> */}
          <div className="restaurant">
            <span></span>
          </div>

          <Link className='stuff' to="/ecommerce">
            <div className="ecommerce">
              <span></span>
            </div>
          </Link>
          {/* <div className="ecommerce"></div> */}
          <Link to="/branding"></Link>
          <div className="branding">
            <span></span>
          </div>

          {/* <Link to="/cause"></Link> */}
          <div className="non-profit">
            <span></span>
          </div>

        </div>

        <div className="myself">
          <div className="picture"></div>
          <div className="description">
            <h2>About Jon Brighton</h2>
            <p>I am a front-end developer who is excited about design and ux. I am particularly passionate about great design and front end development being well designed and constructed. User experience and site optimization is very important. After all better designed and optimized sites.</p>
            <h2>Previous work</h2>
            <p>I was in the Telecommunications infrastructure and entry level network instrastructure industry for 8 year during my time in the military. Durring that time I gained experience in the folowing:</p>
            <ul>
              <li>Project Management</li>
              <li>Supervision and Team Leadership</li>
              <li>Traning Management</li>
            </ul>
            <h2>Eduction Hightlights</h2>
            <ul>
              <li>UX Intensive-1 Week introduction to UX design- UX GYM</li>
              <li>Front-end Development Bootcamp-Yoobee School of Design</li>
              <li>Masters in Leadership- Denver Seminary</li>
              <li>Associates Degree in Applied Science Technology</li>

            </ul>
            <h2>Hobbies</h2>

            <p>Soccer, watch rugby, play basketball, participate in triathlongs and make stained glass windeows</p>
          </div>
          <div className="contact"></div>

        </div>

        <div className="skills-box">
          <h2>Skills</h2>
          <div className="skills">

            <div className="base-coding">
              <h3>Basic code</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>Jquery</p>
              <p>Javascript</p>
            </div>

            <div className="next-level">
              <h3>Next Level Coding</h3>
              <p>Command Line</p>
              <p>SASS</p>
              <p>Node.js</p>
              <p>Express</p>
              <p>React.js</p>
              <p>JSON</p>
              <p>Server Side for front-end</p>
              <p>github</p>
            </div>

            <div className="Design">
              <h3>Design</h3>
              <p>Illustrator</p>
              <p>Photoshop</p>
              <p>CSS Animation</p>
              <p>Basic D3</p>
              <p>SVG</p>
            </div>
          </div>{/* .skills */}
        </div>{/* .skills-box */}

        <Bottom/>
      </div>

    )
  }
}

module.exports = Home

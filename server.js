/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(0);

const BrowserRouter = __webpack_require__(1).BrowserRouter;
const Router = __webpack_require__(3);
const Link = __webpack_require__(1).Link;

class Sticky extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'sticky' },
      React.createElement(
        'ul',
        { className: 'sticky-right' },
        React.createElement(
          'h3',
          { className: 'show-title' },
          'Showcase'
        ),
        React.createElement(
          Link,
          { to: '/' },
          React.createElement('img', { className: 'small-logo', src: '/img/small-logo.png', alt: '/img/small-logo.png' })
        ),
        React.createElement(
          'li',
          { className: 'a' },
          React.createElement(
            Link,
            { to: '/' },
            'Portfolio'
          )
        ),
        React.createElement(
          'li',
          { className: 'd' },
          React.createElement(
            Link,
            { to: '/branding' },
            'Branding'
          )
        ),
        React.createElement(
          'li',
          { className: 'b' },
          React.createElement(
            Link,
            { to: '/restaurant' },
            'Restaurant'
          )
        ),
        React.createElement(
          'li',
          { className: 'c' },
          React.createElement(
            Link,
            { to: '/ecommerce' },
            'Ecommerce'
          )
        ),
        React.createElement(
          'li',
          { className: 'e' },
          React.createElement(
            Link,
            { to: '/cause' },
            'Non Profit'
          )
        )
      )
    );
  }
}
module.exports = Sticky;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const ReactDOM = __webpack_require__(12);
const React = __webpack_require__(0);
const Route = __webpack_require__(1).Route;
const Link = __webpack_require__(1).Link;

const About = __webpack_require__(13);
const Home = __webpack_require__(14);
const Restaurant = __webpack_require__(17);
const Cause = __webpack_require__(18);
const Ecommerce = __webpack_require__(19);
const Branding = __webpack_require__(6);
const Sticky = __webpack_require__(2);
const Maps = __webpack_require__(4);
const Bottom = __webpack_require__(5);
const Bottom2 = __webpack_require__(5);
const Footer = __webpack_require__(7);
// const HelloWorld = require('./hello-world.jsx')
class Router extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Route, { exact: true, path: '/', component: Home }),
      React.createElement(Route, { path: '/maps', component: Maps }),
      React.createElement(Route, { path: '/about', component: About }),
      React.createElement(Route, { path: '/restaurant', component: Restaurant }),
      React.createElement(Route, { path: '/cause', component: Cause }),
      React.createElement(Route, { path: '/ecommerce', component: Ecommerce }),
      React.createElement(Route, { path: '/branding', component: Branding }),
      React.createElement(Route, { path: '/sticky', component: Sticky }),
      React.createElement(Route, { path: '/bottom', component: Bottom }),
      React.createElement(Route, { path: '/bottom2', component: Bottom2 }),
      React.createElement(Route, { path: '/footer', component: Footer })
    );
  }
}
module.exports = Router;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(0);

class Maps extends React.Component {
  componentDidMount() {
    var GoogleMapsLoader = __webpack_require__(15);

    // Google Map
    GoogleMapsLoader.KEY = 'AIzaSyDyezyszgFlrLOJ7_dmT76ezQngH3mCotk';
    const el = this.map;
    GoogleMapsLoader.load(google => {

      var map = new google.maps.Map(el, {
        center: {
          lat: -36.8027,
          lng: 174.7442
        },
        zoom: 11,
        disableDefaultUI: true,
        styles: [{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] }, { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] }, { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] }, {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        }, {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        }, {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#263c3f' }]
        }, {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#6b9a76' }]
        }, {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }]
        }, {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }]
        }, {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }]
        }, {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }]
        }, {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }]
        }, {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }]
        }, {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#2f3948' }]
        }, {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        }, {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }]
        }, {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#515c6d' }]
        }, {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#17263c' }]
        }]
      });

      new google.maps.Marker({
        position: {
          lat: -36.8027,
          lng: 174.7442
        },

        map: map,
        icon: '../../img/jb-logo2.png'
      });
    });
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('div', { style: { height: '400px' }, ref: el => {
          this.map = el;
        } })
    );
  }
}

module.exports = Maps;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(0);

const BrowserRouter = __webpack_require__(1).BrowserRouter;
const Router = __webpack_require__(3);
const Link = __webpack_require__(1).Link;
const Maps = __webpack_require__(4);

class Bottom extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'bottom-home' },
      React.createElement(
        'div',
        { className: 'contact' },
        React.createElement(
          'div',
          { className: 'map-location' },
          React.createElement(Maps, null)
        ),
        React.createElement(
          'div',
          { className: 'information' },
          React.createElement(
            'h2',
            null,
            'Contact Me'
          ),
          React.createElement(
            'h3',
            null,
            'Phone number'
          ),
          React.createElement(
            'p',
            null,
            '0277788931'
          )
        )
      )
    );
  }
}

module.exports = Bottom;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(0);

const BrowserRouter = __webpack_require__(1).BrowserRouter;
const Router = __webpack_require__(3);
const Link = __webpack_require__(1).Link;
const Sticky = __webpack_require__(2);

class Branding extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'push' },
      React.createElement(Sticky, null),
      React.createElement(
        'div',
        { className: 'push-over' },
        React.createElement(
          'div',
          { className: 'branding-background' },
          React.createElement('img', { src: '/img/mockup-branding.png', alt: 'mockup' })
        ),
        React.createElement(
          'h2',
          { className: 'premier-header' },
          'ITU Branding Guidelines'
        ),
        React.createElement(
          'div',
          { className: 'brief' },
          React.createElement(
            'h3',
            null,
            'The Brief check'
          ),
          React.createElement(
            'p',
            null,
            'To create a website for a company\'s brand guidelines, The purpose of this website is for third parties to have a clear set of guidelines as to how the brand works. These guidelines may include the brand\'s history, vision, personality, mission statement colour palett type style, image style, photography or logo use. A successful website is considered to have the following: '
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Define or establish a brand'
            ),
            React.createElement(
              'li',
              null,
              'Source or create brand guidelines'
            ),
            React.createElement(
              'li',
              null,
              'Build a device responsive website'
            ),
            React.createElement(
              'li',
              null,
              'Use a Javascript plugin'
            ),
            React.createElement(
              'li',
              null,
              'Host the website to Github'
            )
          ),
          React.createElement(
            'h3',
            null,
            'The Objectives'
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Define and adhere to brand guidelines'
            ),
            React.createElement(
              'li',
              null,
              'A device responsive website'
            ),
            React.createElement(
              'li',
              null,
              'Enhance website with Javascript plugins'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'brief2' },
          React.createElement(
            'h2',
            null,
            'Design Choices'
          ),
          React.createElement(
            'p',
            null,
            'this is where I describe the design choices '
          )
        ),
        React.createElement(
          'div',
          { className: 'branding-box' },
          React.createElement(
            'h3',
            null,
            'Skills used in Brief'
          )
        ),
        React.createElement(
          'div',
          { className: 'brief-link' },
          React.createElement(
            'h3',
            null,
            'Check out the site'
          )
        )
      )
    );
  }
}

module.exports = Branding;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(0);

class Footer extends React.Component {
  render() {
    return React.createElement('div', null);
  }
}

module.exports = Footer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(9);
const app = express();
const React = __webpack_require__(0);
const ReactDOMServer = __webpack_require__(10);
const StaticRouter = __webpack_require__(11).StaticRouter;
const Router = __webpack_require__(3);

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const context = {};

  const html = ReactDOMServer.renderToString(React.createElement(
    StaticRouter,
    { location: req.url, context: context },
    React.createElement(Router, null)
  ));
  res.send(`
      <!doctype html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway:300" rel="stylesheet">
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div id="content">${html}</div>
          </div> <!-- .container-->
        </div> <!-- .wrapper-->
        <footer>
          <small><a href="https://opensource.org/licenses/MIT">MIT</a></small>
        </footer>
        <script src="/js/bundle.js"></script>
      </body>
      </html>
    `);
});

app.listen(3030, () => {
  console.log('listening on port 3030');
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(0);

class About extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'About us'
    );
  }
}

module.exports = About;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(0);
const Branding = __webpack_require__(6);
const Link = __webpack_require__(1).Link;
const Maps = __webpack_require__(4);
const Footer = __webpack_require__(7);
const Bottom = __webpack_require__(5);

// const ScrollableAnchor = require('react-scrollable-anchor');


class Home extends React.Component {

  componentDidMount() {
    const scrollToComponent = __webpack_require__(16);
    scrollToComponent(this.Blue, {
      offset: 0,
      align: 'middle',
      duration: 1000,
      ease: 'inCirc'
    });
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'opening' },
        React.createElement(
          'div',
          { className: 'box' },
          React.createElement(
            'h2',
            { className: 'move' },
            React.createElement(
              Link,
              { to: '/branding' },
              'Design'
            )
          ),
          React.createElement(
            'h2',
            { className: 'move2' },
            React.createElement(
              Link,
              { to: '/branding' },
              'Develop'
            )
          ),
          React.createElement('div', { className: 'logo' }),
          React.createElement(
            'h2',
            { className: 'move3' },
            React.createElement(
              Link,
              { to: '/branding' },
              'UX'
            )
          ),
          React.createElement(
            'h2',
            { className: 'move4' },
            React.createElement(
              Link,
              { to: '/branding' },
              'Showcase'
            )
          ),
          React.createElement('div', { className: 'img', onClick: () => scrollToComponent(this.Indigo, {
              offset: 0,
              align: 'top',
              duration: 1500,
              ease: 'inExpo'
            }) })
        )
      ),
      React.createElement('section', { className: 'indigo', ref: section => {
          this.Indigo = section;
        } }),
      React.createElement(
        'div',
        { className: 'showcase-title' },
        React.createElement(
          'h2',
          null,
          'Showcase'
        )
      ),
      React.createElement(
        'div',
        { className: 'showcase' },
        React.createElement(
          'div',
          { className: 'restaurant' },
          React.createElement('span', null)
        ),
        React.createElement(
          Link,
          { className: 'stuff', to: '/ecommerce' },
          React.createElement(
            'div',
            { className: 'ecommerce' },
            React.createElement('span', null)
          )
        ),
        React.createElement(Link, { to: '/branding' }),
        React.createElement(
          'div',
          { className: 'branding' },
          React.createElement('span', null)
        ),
        React.createElement(
          'div',
          { className: 'non-profit' },
          React.createElement('span', null)
        )
      ),
      React.createElement(
        'div',
        { className: 'myself' },
        React.createElement('div', { className: 'picture' }),
        React.createElement(
          'div',
          { className: 'description' },
          React.createElement(
            'h2',
            null,
            'About Jon Brighton'
          ),
          React.createElement(
            'p',
            null,
            'I am a front-end developer who is excited about design and ux. I am particularly passionate about great design and front end development being well designed and constructed. User experience and site optimization is very important. After all better designed and optimized sites.'
          ),
          React.createElement(
            'h2',
            null,
            'Previous work'
          ),
          React.createElement(
            'p',
            null,
            'I was in the Telecommunications infrastructure and entry level network instrastructure industry for 8 year during my time in the military. Durring that time I gained experience in the folowing:'
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Project Management'
            ),
            React.createElement(
              'li',
              null,
              'Supervision and Team Leadership'
            ),
            React.createElement(
              'li',
              null,
              'Traning Management'
            )
          ),
          React.createElement(
            'h2',
            null,
            'Eduction Hightlights'
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'UX Intensive-1 Week introduction to UX design- UX GYM'
            ),
            React.createElement(
              'li',
              null,
              'Front-end Development Bootcamp-Yoobee School of Design'
            ),
            React.createElement(
              'li',
              null,
              'Masters in Leadership- Denver Seminary'
            ),
            React.createElement(
              'li',
              null,
              'Associates Degree in Applied Science Technology'
            )
          ),
          React.createElement(
            'h2',
            null,
            'Hobbies'
          ),
          React.createElement(
            'p',
            null,
            'Soccer, watch rugby, play basketball, participate in triathlongs and make stained glass windeows'
          )
        ),
        React.createElement('div', { className: 'contact' })
      ),
      React.createElement(
        'div',
        { className: 'skills-box' },
        React.createElement(
          'h2',
          null,
          'Skills'
        ),
        React.createElement(
          'div',
          { className: 'skills' },
          React.createElement(
            'div',
            { className: 'base-coding' },
            React.createElement(
              'h3',
              null,
              'Basic code'
            ),
            React.createElement(
              'p',
              null,
              'HTML'
            ),
            React.createElement(
              'p',
              null,
              'CSS'
            ),
            React.createElement(
              'p',
              null,
              'Jquery'
            ),
            React.createElement(
              'p',
              null,
              'Javascript'
            )
          ),
          React.createElement(
            'div',
            { className: 'next-level' },
            React.createElement(
              'h3',
              null,
              'Next Level Coding'
            ),
            React.createElement(
              'p',
              null,
              'Command Line'
            ),
            React.createElement(
              'p',
              null,
              'SASS'
            ),
            React.createElement(
              'p',
              null,
              'Node.js'
            ),
            React.createElement(
              'p',
              null,
              'Express'
            ),
            React.createElement(
              'p',
              null,
              'React.js'
            ),
            React.createElement(
              'p',
              null,
              'JSON'
            ),
            React.createElement(
              'p',
              null,
              'Server Side for front-end'
            ),
            React.createElement(
              'p',
              null,
              'github'
            )
          ),
          React.createElement(
            'div',
            { className: 'Design' },
            React.createElement(
              'h3',
              null,
              'Design'
            ),
            React.createElement(
              'p',
              null,
              'Illustrator'
            ),
            React.createElement(
              'p',
              null,
              'Photoshop'
            ),
            React.createElement(
              'p',
              null,
              'CSS Animation'
            ),
            React.createElement(
              'p',
              null,
              'Basic D3'
            ),
            React.createElement(
              'p',
              null,
              'SVG'
            )
          )
        )
      ),
      React.createElement(Bottom, null)
    );
  }
}

module.exports = Home;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("google-maps");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-to-component");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(0);
const Sticky = __webpack_require__(2);

class Restaurant extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'push' },
      React.createElement(
        'div',
        { className: 'push-over' },
        React.createElement(Sticky, null),
        React.createElement(
          'div',
          { className: 'branding-background' },
          React.createElement('img', { src: '/img/mockup-restaurante.png', alt: 'mockup' })
        ),
        React.createElement(
          'h2',
          { className: 'premier-header' },
          'Cuisine Website '
        ),
        React.createElement(
          'div',
          { className: 'brief' },
          React.createElement(
            'h3',
            null,
            'The Brief'
          ),
          React.createElement(
            'p',
            null,
            'To create a cuisine website, in which the website further enhances their brand with a contemporary design. To be successful, one must do the following: '
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Define a cuisine company or brand'
            ),
            React.createElement(
              'li',
              null,
              'Create a Hi-Fi mockup of the site design'
            ),
            React.createElement(
              'li',
              null,
              'Build a device responsive website'
            ),
            React.createElement(
              'li',
              null,
              'Use Javascript to enhance the website'
            ),
            React.createElement(
              'li',
              null,
              'Host your website on Github'
            )
          ),
          React.createElement(
            'h3',
            null,
            'The Objectives'
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Investigate cusine sites'
            ),
            React.createElement(
              'li',
              null,
              'Research site mockups'
            ),
            React.createElement(
              'li',
              null,
              'Incoporate a site mockup in the design process'
            ),
            React.createElement(
              'li',
              null,
              'A device responsive website'
            ),
            React.createElement(
              'li',
              null,
              ' Explore and integrate Javascript'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'brief2' },
          React.createElement(
            'h3',
            null,
            'Design Choices'
          ),
          React.createElement(
            'p',
            null,
            'For this cuisine site I chose to rebrand and redesign a local restaurant in Birkenhead. I have enjoyed their cuisine several times, but their website was outdated and needed a bit of a modern upgrade. The design I choose was to mesh the old with the new, while still maintaining some of the treasured features that makes their restaurant successful. An old Italian Charm which enjoyes wine, food and company. '
          ),
          React.createElement(
            'h4',
            null,
            'typography choices'
          )
        ),
        React.createElement(
          'div',
          { className: 'branding-box' },
          React.createElement(
            'h3',
            null,
            'Skills used in Brief'
          )
        ),
        React.createElement(
          'div',
          { className: 'brief-link' },
          React.createElement(
            'h3',
            null,
            'Check out the site'
          )
        )
      )
    );
  }
}
module.exports = Restaurant;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(0);
const Sticky = __webpack_require__(2);

class Cause extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'push' },
      React.createElement(
        'div',
        { className: 'push-over' },
        React.createElement(Sticky, null),
        React.createElement(
          'div',
          { className: 'branding-background' },
          React.createElement('img', { src: '/img/mockup-non-profit.png', alt: 'mockup' })
        ),
        React.createElement(
          'h2',
          { className: 'premier-header' },
          'Buona Sera Restaurante '
        ),
        React.createElement(
          'div',
          { className: 'brief' },
          React.createElement(
            'h3',
            null,
            'The Brief'
          ),
          React.createElement(
            'p',
            null,
            'Create a landing page for a NGO for their new campaign. The webpage will function as defining the issue linking to further information on their webpage. Primarily this webpage is a call to action.  To be successful, the website must do the following: '
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Define a campaign'
            ),
            React.createElement(
              'li',
              null,
              'Design or source assets for the campaign'
            ),
            React.createElement(
              'li',
              null,
              'Build a device responsive landing page'
            ),
            React.createElement(
              'li',
              null,
              'Implement effective design strategy to direct users to your give call to action'
            ),
            React.createElement(
              'li',
              null,
              'Use Sass'
            ),
            React.createElement(
              'li',
              null,
              'Host your website on Github'
            )
          ),
          React.createElement(
            'h3',
            null,
            'The Objectives'
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Trigger emotino through the design'
            ),
            React.createElement(
              'li',
              null,
              'A device responsive landing page'
            ),
            React.createElement(
              'li',
              null,
              'Effective design that engages the viewer'
            ),
            React.createElement(
              'li',
              null,
              'Generate assets to accompany your website build i.e. graphics logo, icons, textures, etc...'
            ),
            React.createElement(
              'li',
              null,
              ' Use a CSS proprocessing language (Sass) to improve workflow'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'brief2' },
          React.createElement(
            'h3',
            null,
            'Design Choices'
          ),
          React.createElement(
            'p',
            null,
            'For this cuisine site I chose to rebrand and redesign a local restaurant in Birkenhead. I have enjoyed their cuisine several times, but their website was outdated and needed a bit of a modern upgrade. The design I choose was to mesh the old with the new, while still maintaining some of the treasured features that makes their restaurant successful. An old Italian Charm which enjoyes wine, food and company. '
          ),
          React.createElement(
            'h4',
            null,
            'typography choices'
          )
        ),
        React.createElement(
          'div',
          { className: 'branding-box' },
          React.createElement(
            'h2',
            null,
            'Skills used in Brief'
          )
        ),
        React.createElement(
          'div',
          { className: 'brief-link' },
          React.createElement(
            'h2',
            null,
            'Check out the site'
          )
        )
      )
    );
  }
}
module.exports = Cause;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(0);
const Sticky = __webpack_require__(2);

class Ecommerce extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'push' },
      React.createElement(
        'div',
        { className: 'push-over' },
        React.createElement(Sticky, null),
        React.createElement(
          'div',
          { className: 'branding-background' },
          React.createElement('img', { src: '/img/mockup-ecommerce.png', alt: 'mockup' })
        ),
        React.createElement(
          'h2',
          { className: 'premier-header' },
          ' Ecommerce'
        ),
        React.createElement(
          'div',
          { className: 'brief' },
          React.createElement(
            'h3',
            null,
            'The Brief'
          ),
          React.createElement(
            'p',
            null,
            'To create a ecommerce website, in which we were to do the following: '
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Choose a client to create your ecommerce solution for'
            ),
            React.createElement(
              'li',
              null,
              'Design and build a device responsive shopping cart'
            ),
            React.createElement(
              'li',
              null,
              'Populate the shopping cart'
            )
          ),
          React.createElement(
            'h3',
            null,
            'The Objectives'
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Ecommerce website with the potential to become a live website'
            ),
            React.createElement(
              'li',
              null,
              'Mobile first device responsive design'
            ),
            React.createElement(
              'li',
              null,
              'Demonstrate knowledge of the templating syntax inherent to the chosen ecommerce CMS through building a bespoke website design'
            ),
            React.createElement(
              'li',
              null,
              'Align any design work to print media or signage for the business'
            ),
            React.createElement(
              'li',
              null,
              'Demonstrate innovation in visual design'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'brief2' },
          React.createElement(
            'h3',
            null,
            'Design Choices'
          ),
          React.createElement(
            'p',
            null,
            'this is where I describe the design choices '
          )
        ),
        React.createElement(
          'div',
          { className: 'branding-box' },
          React.createElement(
            'h3',
            null,
            'Skills used in Brief'
          )
        ),
        React.createElement(
          'div',
          { className: 'brief-link' },
          React.createElement(
            'h3',
            null,
            'Check out the site'
          )
        )
      )
    );
  }
}

module.exports = Ecommerce;

/***/ })
/******/ ]);
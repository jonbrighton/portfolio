webpackHotUpdate(0,{

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(3);
const Branding = __webpack_require__(246);
const Link = __webpack_require__(16).Link;
const Maps = __webpack_require__(107);
const Footer = __webpack_require__(248);
const Bottom = __webpack_require__(108);

// const ScrollableAnchor = require('react-scrollable-anchor');


class Home extends React.Component {

  componentDidMount() {
    const scrollToComponent = __webpack_require__(250);
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

/***/ 249:
/***/ (function(module, exports) {

/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val)

  return typeof val;
};


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var ReactDOM = __webpack_require__(66);
var scroll = __webpack_require__(251);

function calculateScrollOffset(element, offset, alignment) {
  var body = document.body,
      html = document.documentElement;
  var elementRect = element.getBoundingClientRect();
  var clientHeight = html.clientHeight;
  var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                                 html.clientHeight, html.scrollHeight, html.offsetHeight );
  offset = offset || 0; // additional offset to top
  var scrollPosition;
  switch(alignment) {
      case 'top': scrollPosition = elementRect.top; break;
      case 'middle': scrollPosition = elementRect.bottom - clientHeight / 2 - elementRect.height / 2; break;
      case 'bottom': scrollPosition = elementRect.bottom - clientHeight; break;
      default: scrollPosition = elementRect.bottom - clientHeight / 2 - elementRect.height / 2; break; //defaul to middle
    }
  var maxScrollPosition = documentHeight - clientHeight;
  return Math.min(scrollPosition + offset + window.pageYOffset,
                  maxScrollPosition);
}

module.exports = function (ref, options) {
  options = options || {
    offset: 0,
    align: 'middle'
  };
  var element = ReactDOM.findDOMNode(ref);
  if (element === null) return 0;
  return scroll(0, calculateScrollOffset(element, options.offset, options.align), options);
};

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Tween = __webpack_require__(252);
var raf = __webpack_require__(256);

/**
 * Expose `scrollTo`.
 */

module.exports = scrollTo;

/**
 * Scroll to `(x, y)`.
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

function scrollTo(x, y, options) {
  options = options || {};

  // start position
  var start = scroll();

  // setup tween
  var tween = Tween(start)
    .ease(options.ease || 'out-circ')
    .to({ top: y, left: x })
    .duration(options.duration || 1000);

  // scroll
  tween.update(function(o){
    window.scrollTo(o.left | 0, o.top | 0);
  });

  // handle end
  tween.on('end', function(){
    animate = function(){};
  });

  // animate
  function animate() {
    raf(animate);
    tween.update();
  }

  animate();
  
  return tween;
}

/**
 * Return scroll position.
 *
 * @return {Object}
 * @api private
 */

function scroll() {
  var y = window.pageYOffset || document.documentElement.scrollTop;
  var x = window.pageXOffset || document.documentElement.scrollLeft;
  return { top: y, left: x };
}


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var Emitter = __webpack_require__(253);
var clone = __webpack_require__(254);
var type = __webpack_require__(249);
var ease = __webpack_require__(255);

/**
 * Expose `Tween`.
 */

module.exports = Tween;

/**
 * Initialize a new `Tween` with `obj`.
 *
 * @param {Object|Array} obj
 * @api public
 */

function Tween(obj) {
  if (!(this instanceof Tween)) return new Tween(obj);
  this._from = obj;
  this.ease('linear');
  this.duration(500);
}

/**
 * Mixin emitter.
 */

Emitter(Tween.prototype);

/**
 * Reset the tween.
 *
 * @api public
 */

Tween.prototype.reset = function(){
  this.isArray = 'array' === type(this._from);
  this._curr = clone(this._from);
  this._done = false;
  this._start = Date.now();
  return this;
};

/**
 * Tween to `obj` and reset internal state.
 *
 *    tween.to({ x: 50, y: 100 })
 *
 * @param {Object|Array} obj
 * @return {Tween} self
 * @api public
 */

Tween.prototype.to = function(obj){
  this.reset();
  this._to = obj;
  return this;
};

/**
 * Set duration to `ms` [500].
 *
 * @param {Number} ms
 * @return {Tween} self
 * @api public
 */

Tween.prototype.duration = function(ms){
  this._duration = ms;
  return this;
};

/**
 * Set easing function to `fn`.
 *
 *    tween.ease('in-out-sine')
 *
 * @param {String|Function} fn
 * @return {Tween}
 * @api public
 */

Tween.prototype.ease = function(fn){
  fn = 'function' == typeof fn ? fn : ease[fn];
  if (!fn) throw new TypeError('invalid easing function');
  this._ease = fn;
  return this;
};

/**
 * Stop the tween and immediately emit "stop" and "end".
 *
 * @return {Tween}
 * @api public
 */

Tween.prototype.stop = function(){
  this.stopped = true;
  this._done = true;
  this.emit('stop');
  this.emit('end');
  return this;
};

/**
 * Perform a step.
 *
 * @return {Tween} self
 * @api private
 */

Tween.prototype.step = function(){
  if (this._done) return;

  // duration
  var duration = this._duration;
  var now = Date.now();
  var delta = now - this._start;
  var done = delta >= duration;

  // complete
  if (done) {
    this._from = this._to;
    this._update(this._to);
    this._done = true;
    this.emit('end');
    return this;
  }

  // tween
  var from = this._from;
  var to = this._to;
  var curr = this._curr;
  var fn = this._ease;
  var p = (now - this._start) / duration;
  var n = fn(p);

  // array
  if (this.isArray) {
    for (var i = 0; i < from.length; ++i) {
      curr[i] = from[i] + (to[i] - from[i]) * n;
    }

    this._update(curr);
    return this;
  }

  // objech
  for (var k in from) {
    curr[k] = from[k] + (to[k] - from[k]) * n;
  }

  this._update(curr);
  return this;
};

/**
 * Set update function to `fn` or
 * when no argument is given this performs
 * a "step".
 *
 * @param {Function} fn
 * @return {Tween} self
 * @api public
 */

Tween.prototype.update = function(fn){
  if (0 == arguments.length) return this.step();
  this._update = fn;
  return this;
};

/***/ }),

/***/ 253:
/***/ (function(module, exports) {


/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var type;
try {
  type = __webpack_require__(249);
} catch (_) {
  type = __webpack_require__(249);
}

/**
 * Module exports.
 */

module.exports = clone;

/**
 * Clones objects.
 *
 * @param {Mixed} any object
 * @api public
 */

function clone(obj){
  switch (type(obj)) {
    case 'object':
      var copy = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = clone(obj[key]);
        }
      }
      return copy;

    case 'array':
      var copy = new Array(obj.length);
      for (var i = 0, l = obj.length; i < l; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy;

    case 'regexp':
      // from millermedeiros/amd-utils - MIT
      var flags = '';
      flags += obj.multiline ? 'm' : '';
      flags += obj.global ? 'g' : '';
      flags += obj.ignoreCase ? 'i' : '';
      return new RegExp(obj.source, flags);

    case 'date':
      return new Date(obj.getTime());

    default: // string, number, boolean, …
      return obj;
  }
}


/***/ }),

/***/ 255:
/***/ (function(module, exports) {


// easing functions from "Tween.js"

exports.linear = function(n){
  return n;
};

exports.inQuad = function(n){
  return n * n;
};

exports.outQuad = function(n){
  return n * (2 - n);
};

exports.inOutQuad = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n;
  return - 0.5 * (--n * (n - 2) - 1);
};

exports.inCube = function(n){
  return n * n * n;
};

exports.outCube = function(n){
  return --n * n * n + 1;
};

exports.inOutCube = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n * n;
  return 0.5 * ((n -= 2 ) * n * n + 2);
};

exports.inQuart = function(n){
  return n * n * n * n;
};

exports.outQuart = function(n){
  return 1 - (--n * n * n * n);
};

exports.inOutQuart = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n;
  return -0.5 * ((n -= 2) * n * n * n - 2);
};

exports.inQuint = function(n){
  return n * n * n * n * n;
}

exports.outQuint = function(n){
  return --n * n * n * n * n + 1;
}

exports.inOutQuint = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n * n;
  return 0.5 * ((n -= 2) * n * n * n * n + 2);
};

exports.inSine = function(n){
  return 1 - Math.cos(n * Math.PI / 2 );
};

exports.outSine = function(n){
  return Math.sin(n * Math.PI / 2);
};

exports.inOutSine = function(n){
  return .5 * (1 - Math.cos(Math.PI * n));
};

exports.inExpo = function(n){
  return 0 == n ? 0 : Math.pow(1024, n - 1);
};

exports.outExpo = function(n){
  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
};

exports.inOutExpo = function(n){
  if (0 == n) return 0;
  if (1 == n) return 1;
  if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
  return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
};

exports.inCirc = function(n){
  return 1 - Math.sqrt(1 - n * n);
};

exports.outCirc = function(n){
  return Math.sqrt(1 - (--n * n));
};

exports.inOutCirc = function(n){
  n *= 2
  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
};

exports.inBack = function(n){
  var s = 1.70158;
  return n * n * (( s + 1 ) * n - s);
};

exports.outBack = function(n){
  var s = 1.70158;
  return --n * n * ((s + 1) * n + s) + 1;
};

exports.inOutBack = function(n){
  var s = 1.70158 * 1.525;
  if ( ( n *= 2 ) < 1 ) return 0.5 * ( n * n * ( ( s + 1 ) * n - s ) );
  return 0.5 * ( ( n -= 2 ) * n * ( ( s + 1 ) * n + s ) + 2 );
};

exports.inBounce = function(n){
  return 1 - exports.outBounce(1 - n);
};

exports.outBounce = function(n){
  if ( n < ( 1 / 2.75 ) ) {
    return 7.5625 * n * n;
  } else if ( n < ( 2 / 2.75 ) ) {
    return 7.5625 * ( n -= ( 1.5 / 2.75 ) ) * n + 0.75;
  } else if ( n < ( 2.5 / 2.75 ) ) {
    return 7.5625 * ( n -= ( 2.25 / 2.75 ) ) * n + 0.9375;
  } else {
    return 7.5625 * ( n -= ( 2.625 / 2.75 ) ) * n + 0.984375;
  }
};

exports.inOutBounce = function(n){
  if (n < .5) return exports.inBounce(n * 2) * .5;
  return exports.outBounce(n * 2 - 1) * .5 + .5;
};

// aliases

exports['in-quad'] = exports.inQuad;
exports['out-quad'] = exports.outQuad;
exports['in-out-quad'] = exports.inOutQuad;
exports['in-cube'] = exports.inCube;
exports['out-cube'] = exports.outCube;
exports['in-out-cube'] = exports.inOutCube;
exports['in-quart'] = exports.inQuart;
exports['out-quart'] = exports.outQuart;
exports['in-out-quart'] = exports.inOutQuart;
exports['in-quint'] = exports.inQuint;
exports['out-quint'] = exports.outQuint;
exports['in-out-quint'] = exports.inOutQuint;
exports['in-sine'] = exports.inSine;
exports['out-sine'] = exports.outSine;
exports['in-out-sine'] = exports.inOutSine;
exports['in-expo'] = exports.inExpo;
exports['out-expo'] = exports.outExpo;
exports['in-out-expo'] = exports.inOutExpo;
exports['in-circ'] = exports.inCirc;
exports['out-circ'] = exports.outCirc;
exports['in-out-circ'] = exports.inOutCirc;
exports['in-back'] = exports.inBack;
exports['out-back'] = exports.outBack;
exports['in-out-back'] = exports.inOutBack;
exports['in-bounce'] = exports.inBounce;
exports['out-bounce'] = exports.outBounce;
exports['in-out-bounce'] = exports.inOutBounce;


/***/ }),

/***/ 256:
/***/ (function(module, exports) {

/**
 * Expose `requestAnimationFrame()`.
 */

exports = module.exports = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || fallback;

/**
 * Fallback implementation.
 */

var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

/**
 * Cancel.
 */

var cancel = window.cancelAnimationFrame
  || window.webkitCancelAnimationFrame
  || window.mozCancelAnimationFrame
  || window.clearTimeout;

exports.cancel = function(id){
  cancel.call(window, id);
};


/***/ })

})
//# sourceMappingURL=0.0785b28b37f2ec5663fe.hot-update.js.map
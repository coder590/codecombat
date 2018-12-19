if (!window.Promise) {
  window.Promise = require('promise-polyfill')
}
require('bower_components/fetch/fetch.js')
global.$ = window.$ = global.jQuery = window.jQuery = require('jquery');
window._ = require('lodash');
window.Backbone = require('backbone');
window.Backbone.$ = window.jQuery; //wat
window.tv4 = require('tv4');
window.lscache = require('lscache');
window._.string = require('underscore.string');
require('jquery.browser');
window.marked = require('marked');
require('bower_components/validated-backbone-mediator/backbone-mediator.js');
window.TreemaUtils = require('exports-loader?TreemaUtils!bower_components/treema/treema-utils.js'); // TODO webpack: Try to extract this
import 'bower_components/treema/treema.css'
window.moment = require('bower_components/moment/min/moment-with-locales.min.js');
window.moment.timezone = require('moment-timezone');
window.$.i18n = window.i18n = require('bower_components/i18next/i18next.js');
require('bower_components/cookieconsent/build/cookieconsent.min.js')// TODO webpack: Try to extract this
import 'bower_components/cookieconsent/build/cookieconsent.min.css'// TODO webpack: Try to extract this
require('vendor/scripts/idle.js').createjs;
window.key = require('../vendor/scripts/keymaster.js');
require('vendor/scripts/jquery.noty.packaged.min.js');
require('nanoscroller');// TODO webpack: Try to extract this
require('nanoscroller/bin/css/nanoscroller.css');// TODO webpack: Try to extract this
require('vendor/scripts/hsl-to-rgb.js');
require('imports-loader?this=>window!../vendor/scripts/fancy_select.js');// TODO webpack: Try to extract this
import 'vendor/styles/fancy_select.css'// TODO webpack: Try to extract this
window.Spade = require('exports-loader?Spade!../vendor/scripts/spade.js');// TODO webpack: Try to extract this
require('vendor/scripts/fuzzaldrin')// TODO webpack: Try to extract this

require('imports-loader?this=>window!npm-modernizr');

window.Vue = require('vue/dist/vue.common.js') // TODO: Update to using just the runtime (need to precompile templates!)
window.Vuex = require('vuex').default

window.algoliasearch = require('algoliasearch')

// polyfill to support IE11
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

function loadScript (url) {
  var script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
}
try {
  //Detect very modern javascript support.
  (0,eval("'use strict'; let test = WeakMap && (class Test { *gen(a=7) { yield yield * () => true ; } });"));
  console.log("Modern javascript detected, aw yeah!");
  loadScript(window.javascriptsPath + 'esper.modern.js')
  
} catch (e) {
  console.log("Legacy javascript detected, falling back...", e.message);
  loadScript(window.javascriptsPath + 'esper.js');
}
/**
 * Currently loading Aether directly from `.coffee` causes large bugs.
 *  - Lodash is silently upgraded to 4 and lots of other code breaks.
 *  - esper.plugin is undefined.
 */
require('bower_components/aether/build/aether.js')

// All the rest of Vendor...
require('vendor/scripts/css.js')
require('vendor/scripts/flying-focus.js')
require('vendor/scripts/jquery.mobile-events.js')
require('vendor/scripts/lz-string-1.3.3-min.js')

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"pikachucss.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.nose {\n    border: 10px solid;\n    border-color: black transparent transparent;\n    width: 0;\n    height: 0;\n    position: relative;\n    left: 50%;\n    top: 200px;\n    margin-left: -10px;\n}\n\n.noseCircle {\n    background-color: black;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    margin-left: -10px;\n    margin-top: -16px;\n    border-radius: 10px 10px 0 0;\n}\n\n.eye {\n    border: 2px black solid;\n    background-color: #2e2e2e;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    top: 165px;\n    left: 50%;\n    margin-left: -32px;\n    border-radius: 50%;\n}\n.eye.left {\n    transform: translateX(-120px);\n}\n\n.eye.right {\n    transform: translateX(120px);\n}\n\n.eye::before {\n    content: '';\n    display: block;\n    border: 3px #000 solid;\n    background-color: white;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    position: relative;\n    left: 7px;\n    top: 2px;\n}\n\n.mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: 230px;\n    left: 50%;\n    margin-left: -100px;\n}\n\n.mouth .upperMouth .lip {\n    border: 3px solid black;\n    background: #ffe600;\n    width: 100px;\n    height: 25px;\n    border-top: transparent;\n    position: absolute;\n    z-index: 1;\n}\n\n.mouth .upperMouth .lip.left {\n    border-radius: 0 0 0 50px;\n    border-right: transparent;\n    transform: rotate(-15deg);\n\n}\n.mouth .upperMouth .lip.left:before {\n    left: 90px;\n}\n\n.mouth .upperMouth .lip.right {\n    border-radius: 0 0 50px 0;\n    border-left: transparent;\n    transform: rotate(15deg);\n    margin-left: 100px;\n}\n\n.mouth .upperMouth .lip::before {\n    content: '';\n    background-color: #ffe600;\n    width: 7px;\n    height: 25px;\n    position: absolute;\n    bottom: 0;\n}\n\n.mouth .upperMouth .lip.right:before {\n    right: 90px;\n}\n\n.mouth .lowerMouth {\n    /*border: 1px blue solid;*/\n    width: 100%;\n    height: 190px;\n    position: absolute;\n    top: 10px;\n    overflow: hidden;\n}\n\n.mouth .lowerMouth .mouthInside {\n    border: 3px black solid;\n    width: 180px;\n    height: 1000px;\n    background-color: #9b000a;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -45%;\n    border-radius: 90px/400px;\n    overflow: hidden;\n}\n\n.mouth .lowerMouth .mouthInside .tongue {\n    width: 200px;\n    height: 300px;\n    background: #ff485f;\n    position: absolute;\n    left: 50%;\n    bottom: -140px;\n    margin-left: -100px;\n    border-radius: 100px;\n}\n\n.cheek {\n    border: 3px black solid;\n    width: 86px;\n    height: 86px;\n    position: absolute;\n    background-color: red;\n    border-radius: 50%;\n    top: 280px;\n    left: 50%;\n    margin-left: -43px;\n    z-index: 2;\n}\n\n.cheek.left {\n    transform: translateX(-180px);\n}\n\n.cheek.right {\n    transform: translateX(180px);\n}";
var _default = string;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _pikachucss = _interopRequireDefault(require("./pikachucss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pikachuCssShow = document.querySelector('#pikachuCssShow');
var pikachuInnerHtml = document.querySelector('#pikachuInnerHtml'); // 播放器对象

var player = {
  id: undefined,
  speed: 100,
  ui: {
    pikachuCssShow: document.querySelector('#pikachuCssShow'),
    pikachuInnerHtml: document.querySelector('#pikachuInnerHtml')
  },
  n: 1,
  init: function init() {
    player.ui.pikachuCssShow.innerText = _pikachucss.default.substring(0, player.n);
    player.ui.pikachuInnerHtml.innerHTML = _pikachucss.default.substring(0, player.n);
    player.id = player.play();
    player.bindEvents();
  },
  events: {
    '#btnPlay': 'play',
    '#btnPause': 'pause',
    '#btnSlow': 'slow',
    '#btnFast': 'fast',
    '#btnNormal': 'normal'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  timer: function timer() {
    player.n += 1;

    if (player.n > _pikachucss.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.pikachuCssShow.innerText = _pikachucss.default.substring(0, player.n);
    player.ui.pikachuInnerHtml.innerHTML = _pikachucss.default.substring(0, player.n);
    player.ui.pikachuCssShow.scrollTop = player.ui.pikachuCssShow.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.timer, player.speed);
    return player.id;
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.speed = 500;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.speed = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.speed = 0;
    player.play();
  }
}; // 初始化播放器

player.init();
},{"./pikachucss":"pikachucss.js"}],"D:/node.js/node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58332" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["D:/node.js/node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map
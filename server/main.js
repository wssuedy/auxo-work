require('source-map-support/register')
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(1);
var router = express.Router();

router.get("/topics", function (req, res) {
  req.dbs.Topic.find({}, function (err, topics) {
    res.send(topics);
  });
});

module.exports = router;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Router = __webpack_require__(1).Router;

var router = Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  req.dbs.User.find({}, function (err, users) {
    res.send(users);
  });
});

/* GET user by ID. */
router.get('/:id', function (req, res, next) {
  req.dbs.User.findOne({ id: req.params.id }, function (err, user) {
    res.send(user);
  });
});

module.exports = router;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var express = __webpack_require__(1);

var _require = __webpack_require__(4),
    Nuxt = _require.Nuxt,
    Builder = _require.Builder;

var ExpressCqrs = __webpack_require__(5).default;
var session = __webpack_require__(6);

var path = __webpack_require__(7);
var favicon = __webpack_require__(8);
var logger = __webpack_require__(9);
var cookieParser = __webpack_require__(10);
var bodyParser = __webpack_require__(11);

var index = __webpack_require__(0);

var app = express();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 200000
  }
}));
app.use(express.static(path.join(__dirname, 'public')));

var actorPath = path.resolve("./actors");
var domain = ExpressCqrs({
  app: app,
  actorPath: actorPath
});

var _require2 = __webpack_require__(12),
    readdirSync = _require2.readdirSync;

var actorNames = readdirSync(actorPath).filter(function (filename) {
  return (/\.js$/.test(filename)
  );
}).map(function (filename) {
  return filename.substring(0, filename.length - 3);
});
var dbs = __webpack_require__(13)(domain, actorNames);

app.use(function (req, res, next) {
  req.dbs = dbs;
  next();
});

// Import API Routes
var routersPath = path.join(__dirname, "routes");
app.use('/', index);

readdirSync(routersPath).filter(function (r) {
  return r !== 'index.js' && /\.js$/.test(r);
}).map(function (r) {
  return r.substring(0, r.length - 3);
}).forEach(function (r) {
  return app.use('/' + r, __webpack_require__(14)("./" + r));
});

// Import and Set Nuxt.js options
var config = __webpack_require__(15);
config.dev = !("production" === 'production');

// Init Nuxt.js
var nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
  var builder = new Builder(nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express-cqrs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("cqrs-nedb-query");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 0,
	"./index": 0,
	"./index.js": 0,
	"./users": 2,
	"./users.js": 2
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 14;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map